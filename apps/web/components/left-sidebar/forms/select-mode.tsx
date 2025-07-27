"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from "@workspace/ui/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Mode } from "@/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  mode: z.enum(["edit", "approval"]),
});

export default function SelectMode({ defaultMode }: { defaultMode: Mode }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mode: defaultMode,
    },
  });

  const handleModeChange = (value: Mode) => {
    form.setValue("mode", value);
    router.push(`/?mode=${value}`);
  };

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="mode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mode</FormLabel>
            <Select onValueChange={handleModeChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue>
                  {field.value === "edit" ? "Edit" : "Approval"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="edit">Edit</SelectItem>
                <SelectItem value="approval">Approval</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </Form>
  );
}
