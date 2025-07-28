"use client";

import { createRegexStore } from "@/store/regex";
import { createContext, useRef } from "react";

export type RegexStoreApi = ReturnType<typeof createRegexStore>;

export const RegexContext = createContext<RegexStoreApi | undefined>(undefined);

export type RegexStoreProviderProps = {
  children: React.ReactNode;
};

export function ZustandProvider({ children }: RegexStoreProviderProps) {
  const storeRef = useRef<RegexStoreApi | null>(null);

  if (!storeRef.current) {
    storeRef.current = createRegexStore();
  }

  return (
    <RegexContext.Provider value={storeRef.current}>
      {children}
    </RegexContext.Provider>
  );
}
