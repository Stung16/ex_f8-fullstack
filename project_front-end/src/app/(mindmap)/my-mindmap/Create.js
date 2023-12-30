"use client";
import {
  makeid,
  getTime,
  PostData,
  getListData,
} from "@/services/mindmapServices";
import { useRouter } from "next/navigation";

import React from "react";

const Create = ({ subid }) => {
  const router = useRouter();
  let listMyMindMap = {};
  let idMindMaplocal = makeid(30);
  const createMindmap = async () => {
    listMyMindMap = {
      id:idMindMaplocal,
      userId: subid,
      create: getTime(),
      title: `${process.env.NEXT_PUBLIC_TITLE_DEFAULT}`,
      desc: `${process.env.NEXT_PUBLIC_DESC_DEFAULT}`,
      nodes: [],
      edges: [],
      seo: {},
      img_seo:
        "https://static.vecteezy.com/ti/gratis-vector/p1/3343411-mindmap-flow-concept-vector.jpg",
      isPublic: false,
    };
    PostData(listMyMindMap);
    router.push(`/my-mindmap/${idMindMaplocal}`);
    router.refresh();
  };
  return (
    <button
      onClick={createMindmap}
      className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
    >
      Thêm mới
    </button>
  );
};

export default Create;
