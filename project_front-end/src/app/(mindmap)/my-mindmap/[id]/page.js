import React from "react";
import "reactflow/dist/style.css";
import Mindmap from "./Mindmap";
import { GetMindMapp } from "@/services/mindmapServices";
import Flow from "./Flow";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const data = await GetMindMapp(id);
  if (data) {
    return {
      title:  data[0]?.seo?.title ? data[0]?.seo?.title : data[0]?.title,
      description: data[0]?.seo?.desdescription ? data[0]?.seo?.title : data[0]?.desc,
    };
  }
};

const page = async () => {
  return <Flow />;
};

export default page;
