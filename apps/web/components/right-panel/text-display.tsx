"use client";

import { useRegexStore } from "@/hooks/use-regex-store";
import { Textarea } from "@workspace/ui/components/textarea";
import { loremIpsum } from "lorem-ipsum";
import { useEffect } from "react";

const lorem = loremIpsum({
  count: 3,
  units: "paragraphs",
  format: "plain",
});

export default function TextDisplay({
  regexExpressionId,
}: {
  regexExpressionId: string | undefined;
}) {
  const regexExpression = useRegexStore((state) =>
    state.expressions.find((expression) => expression.id === regexExpressionId)
  );

  const originalText = useRegexStore((state) => state.originalText);
  const setText = useRegexStore((state) => state.setText);

  useEffect(() => {
    setText(lorem);
  }, []);

  return (
    <Textarea
      className="w-full min-h-full"
      value={originalText}
      onChange={(e) => setText(e.target.value)}
      spellCheck={false}
    />
  );
}
