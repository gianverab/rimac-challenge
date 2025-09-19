import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { User } from "../services/types";
import { API } from "../services/api";
import { useApi } from "../hooks/useApi";

type State = {
  user: User | null;
  loading: boolean;
  error?: string | null;
  age?: number | null;
};

type Action =
  | { type: "SET_USER"; payload: User }
  | { type: "SET_ERROR"; payload: string };

const initial: State = { user: null, loading: true, error: null, age: null };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_USER": {
      const user = action.payload;
      return { ...state, user, loading: false, error: null };
    }
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

const UserContext = createContext<{
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
  }, [data, error]);

  // compute age from birthDay once user exists
  const age = useMemo(() => {
    if (!state.user?.birthDay) return null;
    const [dd, mm, yyyy] = state.user.birthDay.split("-").map(Number);
    const birth = new Date(yyyy, mm - 1, dd);
    const today = new Date();
    let a = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) a--;
    return a;
  }, [state.user?.birthDay]);

  const value = { state: { ...state, loading }, dispatch };

  return (
    <UserContext.Provider value={value}>
      {/* attach computed age to context via state (not via dispatch) */}
      {/* consumer can recompute or we can expose getAge via hook */}
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUserContext must be used within UserProvider");
  return ctx;
}
