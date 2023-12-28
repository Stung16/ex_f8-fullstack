import React from "react";
import "reactflow/dist/style.css";
import Mindmap from "./Mindmap";
import { GetMindMapp } from "@/services/mindmapServices";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const data = await GetMindMapp(id);
  console.log(data);
  if (data) {
    return {
      title:  data[0]?.seo?.title ? data[0]?.seo?.title : data[0]?.title,
      description: data[0]?.seo?.desdescription ? data[0]?.seo?.title : data[0]?.desc,
    };
  }
};

const page = async () => {
  return <Mindmap />;
};

export default page;
