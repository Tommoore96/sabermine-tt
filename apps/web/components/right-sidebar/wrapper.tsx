import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export type RightSidebarProps = {
  children: React.ReactNode;
};

export default async function RightSidebar({ children }: RightSidebarProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Text Content</CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-auto h-full">{children}</CardContent>
    </Card>
  );
}
