"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { GetMindMap, saveMindmap } from "@/services/mindmapServices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

import TextUpdaterNode from "../items/TextUpdaterNode";

import "../items/textUpdater.css";
import Loading from "@/components/Loading/Loading";
import NotFound from "@/app/not-found";
import Board_share from "../items/Board_share";

const initialNodes = [];
const nodeTypes = { textUpdater: TextUpdaterNode };

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Mindmap = ({ idmap, sub }) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [selectedId, setSelectedId] = useState(false);
  const [title, setTitle] = useState("MindMap chưa có tên");
  const [desc, setDesc] = useState("Chưa có mô tả");
  const router = useRouter();
  const handleChangeTitle = (evt) => {
    if (evt.target.value) {
      document.title = evt.target.value;
      setTitle(evt.target.value);
    } else {
      document.title = "Không có tiêu đề mindmap";
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
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${idmap}`,
    fetcher
  );
  if (data) {
    if (data?.id !== idmap) {
      console.log(data?.id);
      console.log(idmap);
      router.push("/not-found");
      // return <NotFound />;
    }
  }
  let id = 0;
  if (nodes?.length) {
    const ids = nodes.map((a) => a.id);
    id = Math.max(...ids) + 1;
  }
  const handleSetShow = () => {
    setShow(true);
  };

  const getId = () => `${id++}`;

  // const addNode = () => {
  //   setNodes((e) =>
  //     e.concat({
  //       id: (e.length + 1).toString(),
  //       data: { label: `${name}` },
  //       position: {
  //         x: Math.random() * 200,
  //         y: Math.random() * 200,
  //       },
  //       style: { border: "10px solid #9999" },
  //     })
  //   );
  // };
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

  const loadMap = async () => {
    const data = await GetMindMap(sub, idmap);
    if (data[0]?.nodes?.length > 0) {
      setLoading(true);
      setNodes(() => data[0]?.nodes);
      setEdges(() => data[0]?.edges);
      if (data[0]?.seo?.desdescription) {
        setDesc(() => data[0]?.seo?.desdescription);
      }
      if (data[0]?.seo?.title) {
        setTitle(() => data[0]?.seo?.title);
      }
      // document.title = titleData;
      setLoading(false);
    } else {
      setLoading(true);
      setNodes(() => [
        {
          id: "0",
          position: { x: 100, y: 50 },
          data: { label: `My mindmap` },
          origin: [0.5, 0.0],
          type: "textUpdater",
        },
      ]);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    loadMap();
  }, [data]);

  return (
    <div>
      <div className="text-start px-28 flex justify-between py-4 shadow">
        <div className="">
          {/* {console.log(descData,titleData)} */}
          <input
            className="text-3xl md:text-4xl font-medium my-2 w-max block"
            type="text"
            onChange={handleChangeTitle}
            readOnly={check ? false : true}
            defaultValue={title}
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
            defaultValue={desc}
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
                onClick={() => {
                  saveMindmap(
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
              onClick={handleSetShow}
            >
              <i className="fa-solid fa-share"></i>
              <span className="ml-2">Chia sẻ</span>
            </button>
            {show && <Board_share data={data} setShow={setShow} id={idmap} />}
          </div>
        </div>
      </div>
      {loading && <Loading />}
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
