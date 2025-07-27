"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { RegexExpression } from "@workspace/types";
import { useState } from "react";
import RegexForm from "./edit-mode/regex-form";

export default function RegexCard({
  expression,
}: {
  expression: RegexExpression;
}) {
  const [isEditing, setIsEditing] = useState(false);

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
          <CardHeader>
            <CardTitle>{expression.name}</CardTitle>
            <CardAction>
              <Button variant="ghost" onClick={() => setIsEditing(!isEditing)}>
                Edit
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>{expression.pattern}</p>
          </CardContent>
        </>
      )}
    </Card>
  );
}
