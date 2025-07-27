import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { Mode } from "@/types";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";

interface PageProps {
  searchParams: { mode?: Mode };
}

export default function Page({ searchParams }: PageProps) {
  const currentMode = searchParams.mode ?? "edit";

  return (
    <div className="flex items-center h-svh p-4">
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel className="pr-4" defaultSize={40}>
          <LeftSidebar currentMode={currentMode} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="pl-4" defaultSize={60}>
          <RightSidebar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
