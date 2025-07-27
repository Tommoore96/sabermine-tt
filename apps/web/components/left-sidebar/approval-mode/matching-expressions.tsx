import { useRegexStore } from "@/hooks/use-counter-store";
import { Card } from "@workspace/ui/components/card";

export default function MatchingExpressions({
  defaultRegexExpressionId,
}: {
  defaultRegexExpressionId: string;
}) {
  const originalText = useRegexStore((state) => state.originalText);

  const currentRegexExpression = useRegexStore((state) =>
    state.expressions.find((regex) => regex.id === defaultRegexExpressionId)
  );

  if (!currentRegexExpression) {
    throw new Error("Regex expression not found");
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
        <Card className="small-card" key={index}>
          {match[0]}
        </Card>
      ))}
    </div>
  );
}
