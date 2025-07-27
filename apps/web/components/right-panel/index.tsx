import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import TextDisplay from "./text-display.js";

export type RightPanelProps = {
  regexExpressionId: string | undefined;
};

export default async function RightSidebar({
  regexExpressionId,
}: RightPanelProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Text Content</CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-auto h-full">
        <TextDisplay regexExpressionId={regexExpressionId} />
      </CardContent>
    </Card>
  );
}
