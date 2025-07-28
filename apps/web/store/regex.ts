import { createStore } from "zustand/vanilla";
import { RegexExpression } from "@workspace/types";
import { persist, createJSONStorage } from "zustand/middleware";

export type RegexState = {
  expressions: RegexExpression[];
  originalText: string;
};

export type RegexActions = {
  addExpression: (expression: RegexExpression) => void;
  updateExpression: (expression: RegexExpression) => void;
  setText: (text: string) => void;
  clearAllApprovals: () => void;
  deleteExpression: (id: string) => void;
};

export type RegexStore = RegexState & RegexActions;

export const defaultInitState: RegexState = {
  expressions: [],
  originalText: "",
};

export const createRegexStore = (initState: RegexState = defaultInitState) => {
  return createStore<RegexStore>()(
    persist(
      (set) => ({
        ...initState,
        addExpression: (expression: RegexExpression) =>
          set((state) => ({ expressions: [...state.expressions, expression] })),
        updateExpression: (expression: RegexExpression) =>
          set((state) => ({
            expressions: state.expressions.map((e) =>
              e.id === expression.id ? expression : e
            ),
          })),
        setText: (text: string) =>
          set((state) => ({
            originalText: text,
            expressions: state.expressions.map((expr) => ({
              ...expr,
              isApproved: false,
            })),
          })),
        clearAllApprovals: () =>
          set((state) => ({
            expressions: state.expressions.map((expr) => ({
              ...expr,
              isApproved: false,
            })),
          })),
        deleteExpression: (id: string) =>
          set((state) => ({
            expressions: state.expressions.filter((e) => e.id !== id),
          })),
      }),
      {
        name: "regex-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
