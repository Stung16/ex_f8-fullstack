"use client";
import Loading from "@/components/Loading/Loading";
import {
  makeid,
  getTime,
  PostData,
  getListData,
} from "@/services/mindmapServices";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Create = ({ subid }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  let listMyMindMap = {};
  let idMindMaplocal = makeid(30);
  const createMindmap = async () => {
    listMyMindMap = {
      id: idMindMaplocal,
      userId: subid,
      create: getTime(),
      title: `${process.env.NEXT_PUBLIC_TITLE_DEFAULT}`,
      desc: `${process.env.NEXT_PUBLIC_DESC_DEFAULT}`,
      nodes: [
        {
          id: "0",
          type: "textUpdater",
          position: { x: 0, y: 0 },
          data: { label: `My mindmap` },
          origin: [0.5, 0.0],
          style: {
            backgroundColor: "#607274",
            color: "white",
            // outline: "none",
            // border: "none",
          },
        },
      ],
      edges: [],
      seo: {},
      img_seo:
        "https://static.vecteezy.com/ti/gratis-vector/p1/3343411-mindmap-flow-concept-vector.jpg",
      isPublic: false,
    };
    setLoading(true)
    PostData(listMyMindMap);
    router.push(`/my-mindmap/${idMindMaplocal}`);
    router.refresh();
  };
  return (
    <>
      <button
        onClick={createMindmap}
        className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
      >
        Thêm mới
      </button>
      {loading && <Loading />}
    </>
  );
};

export default Create;
