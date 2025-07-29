import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import TextDisplay from "./text-display";

export default async function RightPanel() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Text Content</CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-auto h-full">
        <TextDisplay />
      </CardContent>
    </Card>
  );
}
