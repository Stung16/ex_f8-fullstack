"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
  useReactFlow,
  Panel,
} from "reactflow";
// import "reactflow/dist/style.css";
import { useDataMindmap } from "../../../context/DataProvider.js";
import TextUpdaterNode from "./TextUpdaterNode.js";
import useSWR from "swr";
import Loading from "@/components/Loading/Loading.js";

const nodeTypes = { textUpdater: TextUpdaterNode };
const initialNodes = [
  {
    id: "0",
    type: "textUpdater",
    data: { label: "My mindmap" },
    position: { x: 0, y: 0 },
    style: {
      backgroundColor: "#607274",
      color: "white",
      // outline: "none",
    },
  },
];
// const checkDfNode = (arr) => {
//   arr.forEach((item) => {
//     if (item?.id === 0) {
//       return true;
//     }
//     return false;
//   });
// };
const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
};

const AddNodeOnEdgeDrop = ({ id }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: mindmap, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${id}`,
    fetcher
  );

  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [selectedIdNode, setSelectedIdNode] = useState(null);
  const [selectedIdEdge, setSelectedIdEdge] = useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    mindmap?.nodes || initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(mindmap?.edges || []);
  const { setDataMindmap } = useDataMindmap();
  const getId = useCallback(() => `${nodes.length++}`, [nodes]);
  // const getIdDf = useCallback(() => `${nodes.length++}`, [nodes]);

  const { screenToFlowPosition } = useReactFlow();
  function nodeColor(node) {
    switch (node.type) {
      case "input":
        return "#607274";
      case "output":
        return "#6865A5";
      default:
        return "#8bc34a";
    }
  }
  useEffect(() => {
    setNodes(mindmap?.nodes || initialNodes);
    setEdges(mindmap?.edges || []);
  }, [mindmap, setNodes, setEdges]);
  useEffect(() => {
    setDataMindmap({
      nodes,
      edges,
    });
  }, [nodes, edges, setDataMindmap]);

  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type: "input",
        position,
        data: { label: `${type} node` },
        style: {
          backgroundColor: "#607274",
          color: "white",
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
          type: "textUpdater",
        };
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id,
            source: connectingNodeId.current,
            target: id,
          })
        );
      }
    },
    [screenToFlowPosition, getId, setEdges, setNodes]
  );

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Delete" && selectedIdNode && selectedIdNode !== "0") {
        setNodes((nodes) => nodes.filter((node) => node.id !== selectedIdNode));
      }
      if (e.key === "Delete" && selectedIdEdge) {
        setEdges((edges) => edges.filter((edge) => edge.id !== selectedIdEdge));
      }
    });
  }, [selectedIdNode, setNodes, selectedIdEdge, setEdges]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <Loading />
      </div>
    );
  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeTypes={nodeTypes}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeClick={(_, node) => {
          setSelectedIdNode(node.id);
        }}
        onEdgeClick={(_, edge) => {
          setSelectedIdEdge(edge.id);
        }}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      >
        <Panel>
          {nodes?.length ? (
            <span className="bg-[#607274] p-3 rounded-md text-white  select-none opacity-70 cursor-not-allowed">
              Thêm Node Mặc định
            </span>
          ) : (
            <span
              className="bg-[#607274] p-3 rounded-md text-white cursor-pointer select-none dndnode "
              onDragStart={(event) => onDragStart(event, "default")}
              draggable
            >
              Thêm Node Mặc định
            </span>
          )}
        </Panel>
        <Background color="red" gap={25} variant="dots" />
        <MiniMap
          nodeColor={nodeColor}
          nodeStrokeWidth={3}
          zoomable
          pannable
          className="cursor-grab"
        />
        <Controls />
      </ReactFlow>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default AddNodeOnEdgeDrop;
