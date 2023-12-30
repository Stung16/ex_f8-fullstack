import React from "react";
import "reactflow/dist/style.css";
import { GetMindMap } from "@/services/mindmapServices";
import Flow from "./Flow";
import { getSession } from "@auth0/nextjs-auth0";
import NotFound from "@/app/not-found";

const getDataSeo = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${id}`
  );
  return await response.json();
};

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const data = await getDataSeo(id);
  return {
    title: data?.seo?.title ? data?.seo?.title : data?.title,
    description: data?.seo?.desdescription
      ? data?.seo?.desdescription
      : data?.desc,
    openGraph: {
      title: data?.seo?.title || "title mindmap",
      description: data?.seo?.desdescription || "description mindmap",
      images: [data?.img_seo] || "image",
    },
  };
  // };
  // }
};

const page = async ({ params: { id } }) => {
  const { user } = await getSession();
  const data = await GetMindMap(user?.sub,id)
  let idmapCheck
  if (data) {
     idmapCheck = data[0]?.id 
     if(id !== idmapCheck){
      return <NotFound />
     }
  }
  return <Flow idmap={id} subid={user?.sub} />;
};

export default page;
