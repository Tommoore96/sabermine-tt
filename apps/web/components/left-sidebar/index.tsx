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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";

export default function Modes() {
  return (
    <Card className="w-full h-full">
      <CardContent className="flex flex-col gap-4 overflow-y-auto">
        <Tabs defaultValue="edit">
          <TabsList>
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="approval">Approval</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="flex flex-col gap-4">
            <CardTitle>Edit your regex patterns</CardTitle>
            <EditMode />
          </TabsContent>
          <TabsContent value="approval" className="flex flex-col gap-4">
            <CardTitle>Check and approve your regex patterns</CardTitle>
            <ApprovalMode />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
