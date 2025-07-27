import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import ApprovalMode from "./approval-mode/index.js";
import EditMode from "./edit-mode/index.js";

export default function LeftPanel() {
  return (
    <Card className="w-full h-full">
      <CardContent className="flex flex-col gap-4 overflow-y-auto">
        <Tabs defaultValue="edit">
          <TabsList>
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="approval">Approval</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Edit your regex patterns</h2>
            <EditMode />
          </TabsContent>
          <TabsContent value="approval" className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">
              Check and approve your regex patterns
            </h2>
            <ApprovalMode />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
