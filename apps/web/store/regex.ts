import { createStore } from "zustand/vanilla";
import type { RegexExpression } from "@workspace/types";
import { persist, createJSONStorage } from "zustand/middleware";

export type RegexState = {
  expressions: RegexExpression[];
  originalText: string;
};

export type RegexActions = {
  addExpression: (expression: RegexExpression) => void;
  removeExpression: (expression: RegexExpression) => void;
  updateExpression: (expression: RegexExpression) => void;
  setOriginalText: (text: string) => void;
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
        removeExpression: (expression: RegexExpression) =>
          set((state) => ({
            expressions: state.expressions.filter(
              (e) => e.id !== expression.id
            ),
          })),
        updateExpression: (expression: RegexExpression) =>
          set((state) => ({
            expressions: state.expressions.map((e) =>
              e.id === expression.id ? expression : e
            ),
          })),
        setOriginalText: (text: string) => set({ originalText: text }),
      }),
      {
        name: "regex-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
