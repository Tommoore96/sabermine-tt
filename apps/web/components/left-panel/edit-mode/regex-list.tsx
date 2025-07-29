"use client";

import { useRegexStore } from "@/hooks/use-regex-store";
import RegexCard from "./regex-card";

export default function RegexList() {
  const expressions = useRegexStore((state) => state.expressions);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">Regular Expressions</h2>
      <dl className="flex flex-col gap-2">
        {expressions.length ? (
          expressions.map((expression) => (
            <RegexCard key={expression.id} expression={expression} />
          ))
        ) : (
          <p>No regex expressions found.</p>
        )}
      </dl>
    </div>
  );
}
