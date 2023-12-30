"use client";
import { ReactFlowProvider } from "reactflow";
import Mindmap from "./Mindmap";

function Flow({idmap,subid}) {
  return (
    <ReactFlowProvider>
      <Mindmap idmap={idmap} sub={subid} />
    </ReactFlowProvider>
  );
}

export default Flow;
