"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getListData } from "@/services/mindmapServices";
import { PostData } from "@/services/mindmapServices";
import { getTime } from "@/services/mindmapServices";
import { makeid } from "@/services/mindmapServices";
import { GetMindMap } from "@/services/mindmapServices";

import React from "react";

const Create = () => {
  const { user } = useUser();
  let listMyMindMap = {};
  let idMindMaplocal = makeid(30);
  return (
    <a
      href={`/my-mindmap/${idMindMaplocal}`}
      // href="#"
      onClick={async () => {
        let data = await getListData(user?.sub);
        if (data.length <= 0) {
          listMyMindMap.userId = user?.sub;
          listMyMindMap.create = getTime();
          listMyMindMap.title = `${process.env.NEXT_PUBLIC_TITLE_DEFAULT}`;
          listMyMindMap.desc = `${process.env.NEXT_PUBLIC_DESC_DEFAULT}`;
          listMyMindMap.idMindMap = idMindMaplocal;
          listMyMindMap.nodes = [];
          listMyMindMap.edges = [];
          listMyMindMap.seo = {}
          PostData(listMyMindMap);
        } else {
          listMyMindMap.userId = user?.sub;
          listMyMindMap.create = getTime();
          listMyMindMap.title = `${process.env.NEXT_PUBLIC_TITLE_DEFAULT}`;
          listMyMindMap.desc = `${process.env.NEXT_PUBLIC_DESC_DEFAULT}`;
          listMyMindMap.idMindMap = idMindMaplocal;
          listMyMindMap.nodes = [];
          listMyMindMap.edges = [];
          listMyMindMap.seo = {}

          PostData(listMyMindMap);
        }
      }}
      className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
    >
      Thêm mới
    </a>
  );
};

export default Create;
