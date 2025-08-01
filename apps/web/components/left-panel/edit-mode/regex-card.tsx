"use client";

import { useRegexStore } from "@/hooks/use-regex-store";
import { RegexExpression } from "@workspace/types";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import { useState } from "react";
import RegexForm from "./regex-form";
import { useRouter, useSearchParams } from "next/navigation";

export type RegexCardProps = {
  expression: RegexExpression;
};

export default function RegexCard({ expression }: RegexCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const deleteExpression = useRegexStore((state) => state.deleteExpression);
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentRegexExpressionId =
    searchParams.get("regexExpressionId") ?? undefined;

  return (
    <Card key={expression.id} className="small">
      {isEditing ? (
        <CardContent>
          <RegexForm
            id={expression.id}
            defaultValues={{ name: expression.name, regex: expression.pattern }}
            onCancel={() => setIsEditing(false)}
            onSubmit={() => setIsEditing(false)}
          />
        </CardContent>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <CardContent className="flex flex-col gap-2">
              <CardTitle>{expression.name}</CardTitle>
              <p>{expression.pattern}</p>
            </CardContent>
            <CardAction>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVerticalIcon size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Button
                      variant="ghost"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      Edit
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        deleteExpression(expression.id);
                        if (currentRegexExpressionId === expression.id) {
                          router.push(`/`);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardAction>
          </div>
        </>
      )}
    </Card>
  );
}
