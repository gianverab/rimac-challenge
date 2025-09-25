import React, { createContext, useContext, useEffect, useReducer } from "react";
import type { PlansResponse, Plan } from "../services/types";
import { API } from "../services/api";
import { useApi } from "../hooks/useApi";

type State = {
  plans: Plan[];
  loading: boolean;
  error?: string | null;
  selectedPlan: Plan | null;
  forSomeoneElse: boolean;
  otherAge?: number | null;
};

type Action =
  | { type: "SET_PLANS"; payload: Plan[] }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SELECT_PLAN"; payload: Plan }
  | { type: "SET_FOR_SOMEONE_ELSE"; payload: boolean }
  | { type: "SET_OTHER_AGE"; payload: number | null };

const initial: State = {
  plans: [],
  loading: true,
  error: null,
  selectedPlan: null,
  forSomeoneElse: false,
  otherAge: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PLANS":
      return { ...state, plans: action.payload, loading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SELECT_PLAN":
      return { ...state, selectedPlan: action.payload };
    case "SET_FOR_SOMEONE_ELSE":
      return { ...state, forSomeoneElse: action.payload };
    case "SET_OTHER_AGE":
      return { ...state, otherAge: action.payload };
    default:
      return state;
  }
}

export const PlansContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const PlansProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, error } = useApi<PlansResponse>(API.plans);
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    if (data?.list) dispatch({ type: "SET_PLANS", payload: data.list });
    if (error) dispatch({ type: "SET_ERROR", payload: error });
  }, [data, error]);

  return (
    <PlansContext.Provider value={{ state, dispatch }}>
      {children}
    </PlansContext.Provider>
  );
};

export function usePlansContext() {
  const ctx = useContext(PlansContext);
  if (!ctx)
    throw new Error("usePlansContext must be used within PlansProvider");
  return ctx;
}
