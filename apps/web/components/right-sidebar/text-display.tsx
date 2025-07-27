"use client";

import { useRegexStore } from "@/hooks/use-counter-store";
import { useEffect, useRef, useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import { Textarea } from "@workspace/ui/components/textarea";

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
  const setOriginalText = useRegexStore((state) => state.setOriginalText);

  useEffect(() => {
    setOriginalText(lorem);
  }, []);

  if (!regexExpression && !!regexExpressionId) {
    return <div>No regex expression found</div>;
  }

  return (
    <Textarea
      className="w-full min-h-full"
      value={originalText}
      onChange={(e) => setOriginalText(e.target.value)}
    />
  );
}
