import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Mode } from "@/types";
import SelectMode from "./select-mode-form";
import EditMode from "./edit-mode";
import ApprovalMode from "./approval-mode";

export const MODES = {
  edit: {
    mode: "edit",
    title: "Edit Mode",
  },
  approval: {
    mode: "approval",
    title: "Approval Mode",
  },
} as const;

export default function Modes({ currentMode }: { currentMode: Mode }) {
  const modeConfig = MODES[currentMode];

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>{modeConfig.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 overflow-y-auto">
        <SelectMode defaultMode={currentMode} />
        {currentMode === "edit" && <EditMode />}
        {currentMode === "approval" && <ApprovalMode />}
      </CardContent>
    </Card>
  );
}
