'use client';
import { ReactFlowProvider } from 'reactflow';
import Mindmap from "./Mindmap";


function Flow() {
  return (
    <ReactFlowProvider>
      <Mindmap />
    </ReactFlowProvider>
  );
}

export default Flow;
