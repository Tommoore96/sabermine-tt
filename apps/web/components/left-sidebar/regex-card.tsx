"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { RegexExpression } from "@workspace/types";
import { useState } from "react";
import RegexForm from "./edit-mode/regex-form";
import { MoreHorizontalIcon, MoreVerticalIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { useRegexStore } from "@/hooks/use-counter-store";

export default function RegexCard({
  expression,
}: {
  expression: RegexExpression;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const deleteExpression = useRegexStore((state) => state.deleteExpression);
  return (
    <Card key={expression.id} className="small-card">
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
