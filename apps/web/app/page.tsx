import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";

interface PageProps {
  searchParams: Promise<{ regexExpressionId?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { regexExpressionId } = await searchParams;

  return (
    <div className="flex items-center h-svh p-4">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={40}>
          <LeftPanel />
        </ResizablePanel>
        <ResizableHandle withHandle className="m-4" />
        <ResizablePanel defaultSize={60}>
          <RightPanel regexExpressionId={regexExpressionId} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
