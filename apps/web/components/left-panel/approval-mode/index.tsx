"use client";

import { useRegexStore } from "@/hooks/use-regex-store";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { BadgeCheckIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import MatchingExpressions from "./matching-expressions";

export default function ApprovalMode() {
  const regexExpressions = useRegexStore((state) => state.expressions);
  const updateExpression = useRegexStore((state) => state.updateExpression);
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentRegexExpressionId =
    searchParams.get("regexExpressionId") ?? undefined;

  const currentExpression = regexExpressions.find(
    (expr) => expr.id === currentRegexExpressionId
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
    router.push(`/?regexExpressionId=${value}`);
  };

  return (
    <div className="flex flex-col gap-2">
      {regexExpressions.length ? (
        <>
          <Label htmlFor="regexExpression">Regex Expression</Label>
          <Select
            onValueChange={handleRegexExpressionChange}
            defaultValue={currentExpression?.id}
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
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <p>No regex expressions found.</p>
          <p>Please create a regex expression in Edit tab.</p>
        </div>
      )}

      {currentExpression && (
        <div className="flex flex-col gap-2">
          <MatchingExpressions regexExpressionId={currentExpression.id} />

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
