import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { Mode } from "@/types";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebarWrapper from "@/components/right-sidebar/wrapper";
import TextDisplay from "@/components/right-sidebar/text-display";

interface PageProps {
  searchParams: Promise<{ mode?: Mode; regexExpressionId?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { mode, regexExpressionId } = await searchParams;
  const currentMode = mode ?? "edit";

  return (
    <div className="flex items-center h-svh p-4">
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel className="pr-4" defaultSize={40}>
          <LeftSidebar currentMode={currentMode} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="pl-4" defaultSize={60}>
          <RightSidebarWrapper>
            <TextDisplay regexExpressionId={regexExpressionId} />
          </RightSidebarWrapper>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
