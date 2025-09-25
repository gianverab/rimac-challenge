import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import type { User } from "../services/types";
import { API } from "../services/api";
import { useApi } from "../hooks/useApi";

type FormData = {
  documentType: string;
  documentNumber: string;
  phone: string;
  acceptedPolicies: boolean;
  acceptedComms: boolean;
};

type State = {
  user: User | null;
  loading: boolean;
  error?: string | null;
  age?: number | null;
  form: FormData;
};

type Action =
  | { type: "SET_USER"; payload: User }
  | { type: "SET_ERROR"; payload: string }
  | { type: "UPDATE_FORM"; payload: Partial<FormData> }
  | { type: "RESET_FORM" };

const initial: State = {
  user: null,
  loading: true,
  error: null,
  age: null,
  form: {
    documentType: "DNI",
    documentNumber: "",
    phone: "",
    acceptedPolicies: false,
    acceptedComms: false,
  },
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_USER": {
      const user = action.payload;
      return { ...state, user, loading: false, error: null };
    }
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "UPDATE_FORM":
      return { ...state, form: { ...state.form, ...action.payload } };
    case "RESET_FORM":
      return { ...state, form: initial.form };
    default:
      return state;
  }
}

export const UserContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useApi<User>(API.user);
  const [state, dispatch] = useReducer(reducer, { ...initial, loading });

  useEffect(() => {
    if (data) dispatch({ type: "SET_USER", payload: data });
    if (error) dispatch({ type: "SET_ERROR", payload: error });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  // compute age from birthDay once user exists
  const age = useMemo(() => {
    const birthStr = state.user?.birthDay;
    if (!birthStr) return null;
    // birthDay format "dd-mm-yyyy"
    const [dd, mm, yyyy] = birthStr.split("-").map(Number);
    const birth = new Date(yyyy, mm - 1, dd);
    const today = new Date();
    let a = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) a--;
    return a;
  }, [state.user?.birthDay]);

  // create a state object that includes computed age
  const stateWithAge: State = { ...state, age, loading: state.loading };

  const value = { state: stateWithAge, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUserContext() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUserContext must be used within UserProvider");
  return ctx;
}
