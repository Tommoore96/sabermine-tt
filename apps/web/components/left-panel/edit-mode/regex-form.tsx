"use client";

import { useRegexStore } from "@/hooks/use-regex-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1),
  regex: z.string().min(1),
});

export type RegexFormProps = {
  id?: string;
  className?: string;
  defaultValues?: z.infer<typeof formSchema>;
  onCancel?: () => void;
  onSubmit?: (data: z.infer<typeof formSchema>) => void;
};

export default function RegexForm({
  id,
  className,
  defaultValues,
  onCancel,
  onSubmit,
}: RegexFormProps) {
  const isEditing = !!id;
  console.log("🚀 ~ RegexForm ~ isEditing:", isEditing);
  const formId = `regex-form-${id ?? "new"}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const addRegex = useRegexStore((state) => state.addExpression);
  const updateRegex = useRegexStore((state) => state.updateExpression);

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    if (isEditing) {
      updateRegex({
        id,
        name: data.name,
        pattern: data.regex,
        isApproved: false,
      });
      onSubmit?.(data);
      form.reset();
    } else {
      addRegex({
        id: id ?? crypto.randomUUID(),
        name: data.name,
        pattern: data.regex,
        isApproved: false,
      });
      onSubmit?.(data);
      form.reset();
    }
  };

  return (
    <div className={cn("flex flex-col gap-4", className)} key={id ?? "new"}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4"
          id={formId}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="regex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Regex</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex justify-end gap-2">
        {isEditing ? (
          <Button
            type="button"
            variant="outline"
            form={formId}
            onClick={onCancel}
          >
            Cancel
          </Button>
        ) : null}
        <Button type="submit" form={formId}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </div>
    </div>
  );
}
