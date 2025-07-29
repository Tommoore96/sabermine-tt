import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";

export default async function Page() {
  return (
    <div className="flex items-center h-svh p-4">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={40} minSize={25} collapsible>
          <LeftPanel />
        </ResizablePanel>
        <ResizableHandle withHandle className="my-4 md:mx-4" />
        <ResizablePanel defaultSize={60} minSize={25} collapsible>
          <RightPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
