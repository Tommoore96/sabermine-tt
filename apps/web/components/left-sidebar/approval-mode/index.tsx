"use client";

import { useRegexStore } from "@/hooks/use-counter-store";
import { Label } from "@workspace/ui/components/label";
import { Button } from "@workspace/ui/components/button";
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
import { Badge } from "@workspace/ui/components/badge";
import { BadgeCheckIcon } from "lucide-react";

const formSchema = z.object({
  regexExpressionId: z.string(),
});

export default function ApprovalMode() {
  const regexExpressions = useRegexStore((state) => state.expressions);
  const updateExpression = useRegexStore((state) => state.updateExpression);
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultRegexExpressionId =
    searchParams.get("regexExpressionId") ?? undefined;

  const currentExpression = regexExpressions.find(
    (expr) => expr.id === defaultRegexExpressionId
  );

  const handleApprove = () => {
    if (currentExpression) {
      updateExpression({
        ...currentExpression,
        isApproved: true,
      });
    }
  };

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
              {regex.name} {regex.isApproved ? "✅" : ""}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {defaultRegexExpressionId && (
        <div className="flex flex-col gap-2">
          <MatchingExpressions
            defaultRegexExpressionId={defaultRegexExpressionId}
          />

          {currentExpression && !currentExpression.isApproved && (
            <Button onClick={handleApprove} className="mt-2">
              Approve
            </Button>
          )}

          {currentExpression?.isApproved && (
            <Badge
              variant="secondary"
              className="mt-2 bg-green-600 flex items-center gap-1 p-1"
            >
              <BadgeCheckIcon size={12} /> Approved
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
