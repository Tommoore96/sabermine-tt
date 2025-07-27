"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Mode } from "@/types";
import { useRouter } from "next/navigation";
import { Label } from "@workspace/ui/components/label";

export default function SelectMode({ defaultMode }: { defaultMode: Mode }) {
  const router = useRouter();

  const handleModeChange = (value: Mode) => {
    router.push(`/?mode=${value}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-medium">Mode</Label>
      <Select onValueChange={handleModeChange} value={defaultMode}>
        <SelectTrigger className="w-full">
          <SelectValue>
            {defaultMode === "edit" ? "Edit" : "Approval"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="edit">Edit</SelectItem>
          <SelectItem value="approval">Approval</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
