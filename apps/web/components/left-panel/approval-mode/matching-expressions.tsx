"use client";

import { useRegexStore } from "@/hooks/use-regex-store";
import { Card } from "@workspace/ui/components/card";

export type MatchingExpressionsProps = {
  regexExpressionId: string;
};

export default function MatchingExpressions({
  regexExpressionId,
}: MatchingExpressionsProps) {
  const originalText = useRegexStore((state) => state.originalText);

  const currentRegexExpression = useRegexStore((state) =>
    state.expressions.find((regex) => regex.id === regexExpressionId)
  );

  if (!currentRegexExpression) {
    return <div>No regex expression found</div>;
  }

  const matches = Array.from(
    originalText.matchAll(new RegExp(currentRegexExpression.pattern, "g"))
  );

  if (matches.length === 0) {
    return <div>No matches found</div>;
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {matches.map((match, index) => (
        <Card className="small" key={index}>
          {match[0]}
        </Card>
      ))}
    </div>
  );
}
