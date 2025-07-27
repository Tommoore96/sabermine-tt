"use client";

import { useRegexStore } from "@/hooks/use-counter-store";
import RegexCard from "./regex-card";

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
