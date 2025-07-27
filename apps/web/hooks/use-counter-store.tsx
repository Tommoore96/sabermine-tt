import { useContext } from "react";
import { useStore } from "zustand";
import { RegexContext } from "@/providers/zustand";
import { type RegexStore } from "@/store/regex";

export const useRegexStore = <T,>(selector: (store: RegexStore) => T): T => {
  const regexStoreContext = useContext(RegexContext);

  if (!regexStoreContext) {
    throw new Error(`useRegexStore must be used within RegexStoreProvider`);
  }

  return useStore(regexStoreContext, selector);
};
