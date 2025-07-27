"use client";

import { useRegexStore } from "@/hooks/use-counter-store";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import MatchingExpressions from "./matching-expressions";

const formSchema = z.object({
  regexExpressionId: z.string(),
});

export default function ApprovalMode() {
  const regexExpressions = useRegexStore((state) => state.expressions);
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultRegexExpressionId =
    searchParams.get("regexExpressionId") ?? undefined;

  const handleRegexExpressionChange = (value: string) => {
    router.push(`/?mode=approval&regexExpressionId=${value}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="regexExpression">Regex Expression</Label>
      <Select
        onValueChange={handleRegexExpressionChange}
        defaultValue={defaultRegexExpressionId}
      >
        <SelectTrigger className="w-full" id="regexExpression">
          <SelectValue placeholder="Select a regex expression" />
        </SelectTrigger>
        <SelectContent>
          {regexExpressions.map((regex) => (
            <SelectItem key={regex.id} value={regex.id}>
              {regex.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {defaultRegexExpressionId && (
        <MatchingExpressions
          defaultRegexExpressionId={defaultRegexExpressionId}
        />
      )}
    </div>
  );
}
