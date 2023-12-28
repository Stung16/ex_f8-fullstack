'use client';
import { ReactFlowProvider } from 'reactflow';
import Mindmap from "./Mindmap";


function Flow({ id }) {
  return (
    <ReactFlowProvider>
      <Mindmap />
    </ReactFlowProvider>
  );
}

export default Flow;
