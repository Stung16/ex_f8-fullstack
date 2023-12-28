"use client";
import { getSession } from "@auth0/nextjs-auth0/edge";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  GetMindMap,
  getidMindmap,
  saveMindmap,
} from "@/services/mindmapServices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";

// import "./index.css";

import TextUpdaterNode from "../items/TextUpdaterNode";

import "../items/textUpdater.css";

const initialNodes = [];
let idmap = getidMindmap();
const nodeTypes = { textUpdater: TextUpdaterNode };

const Mindmap = () => {
  // console.log(userId);
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [check, setCheck] = useState(false);
  // const [selectedId, setSelectedId] = useState(false);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const handleChangeTitle = (evt) => {
    if (evt.target.value) {
      setTitle(evt.target.value);
    }
  };
  const handleChangeDesc = (evt) => {
    if (evt.target.value) {
      setDesc(evt.target.value);
    }
  };

  function nodeColor(node) {
    switch (node.type) {
      case "input":
        return "#6366f1";
      case "output":
        return "#6865A5";
      default:
        return "#ff0072";
    }
  }

  let id = 0;
  if (nodes?.length) {
    const ids = nodes.map((a) => a.id);
    id = Math.max(...ids) + 1;
  }
  // let idd = 1;

  const getId = () => `${id++}`;

  const addNode = () => {
    setNodes((e) =>
      e.concat({
        id: (e.length + 1).toString(),
        data: { label: `${name}` },
        position: {
          x: Math.random() * 200,
          y: Math.random() * 200,
        },
        style: { border: "10px solid #9999" },
      })
    );
  };
  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);
  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

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
  const { user } = useUser();
  const [titleData, setTitleData] = useState("MindMap chưa có tên");
  const [descData, setDescData] = useState("Chưa có mô tả");
  const loadMap = async (sub = user?.sub) => {
    const data = await GetMindMap(sub, idmap);
    if (data[0]?.nodes?.length > 0) {
      setNodes(() => data[0]?.nodes);
      setEdges(() => data[0]?.edges);
      setDescData(() => data[0]?.seo?.desdescription);
      setTitleData(() => data[0]?.seo?.title);
    } else {
      setNodes(() => [
        {
          id: "0",
          position: { x: 100, y: 50 },
          data: { label: `My mindmap` },
          origin: [0.5, 0.0],
          type: "textUpdater",
        },
      ]);
    }
  };
  useEffect(() => {
    loadMap();
  }, [user]);

  return (
    <div>
      <div className="text-start px-28 flex justify-between py-4 shadow">
        <div className="">
          <input
            className="text-3xl md:text-4xl font-medium my-2 w-max block"
            type="text"
            onChange={handleChangeTitle}
            readOnly={check ? false : true}
            defaultValue={titleData}
            // value={}
            onDoubleClick={() => {
              setCheck(true);
            }}
            onBlur={() => {
              setCheck(false);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setCheck(false);
              }
            }}
          />
          <input
            className="block w-max"
            type="text"
            onChange={handleChangeDesc}
            readOnly={check ? false : true}
            defaultValue={descData}
            onDoubleClick={() => {
              setCheck(true);
            }}
            onBlur={() => {
              setCheck(false);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setCheck(false);
              }
            }}
          />
        </div>
        <div className="">
          <div className="flex justify-end items-center">
            <button
              className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-solid fa-save"></i>
              <span
                onClick={async () => {
                  saveMindmap(
                    user?.sub,
                    {
                      nodes: nodes,
                      edges: edges,
                      seo: {
                        title: title,
                        desdescription: desc,
                      },
                    },
                    idmap
                  );
                }}
                className="ml-2"
              >
                Lưu thay đổi
              </span>
            </button>
            <button
              className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=&amp;summary=&amp;source="
              aria-label="Share on Linkedin"
            >
              <i className="fa-solid fa-share"></i>
              <span className="ml-2">Chia sẻ</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="wrapper"
        style={{ width: "100%", height: "520px" }}
        ref={reactFlowWrapper}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onConnectStart={onConnectStart}
          onConnectEnd={onConnectEnd}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 2 }}
          nodeOrigin={[0.5, 0]}
        >
          <Background />
          <MiniMap nodeColor={nodeColor} />
          <Controls />
          {/* <Panel position="top-left">top-left</Panel> */}
        </ReactFlow>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Mindmap;
