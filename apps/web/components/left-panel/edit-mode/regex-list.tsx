"use client";

import { useRegexStore } from "@/hooks/use-regex-store";
import RegexCard from "./regex-card.js";

export default function RegexList() {
  const expressions = useRegexStore((state) => state.expressions);

  return (
    <div>
      <dl className="flex flex-col gap-2">
        {expressions.map((expression) => (
          <RegexCard key={expression.id} expression={expression} />
        ))}
      </dl>
    </div>
  );
}
