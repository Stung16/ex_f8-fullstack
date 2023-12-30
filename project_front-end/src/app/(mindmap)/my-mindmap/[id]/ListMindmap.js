import React from "react";
import Create from "../Create";
import { getListData } from "@/services/mindmapServices";
import Delete from "../Delete";
const ListMindmap = async ({sub}) => {
  const data = await getListData(sub);
  return (
    <div className="container px-28 mx-auto">
      <h1 className="text-3xl md:text-4xl font-medium my-2">Mindmap của tôi</h1>
      <div className="py-4">
        <Create subid={sub} />
      </div>
      <div className="py-4">
        <div className="flex items-center py-2 shadow-sm">
          <span className="w-1/6 text-center">
            <input type="checkbox" />
          </span>
          <span className="w-1/2">
            <span className="text-xs uppercase text-gray-600 font-bold">
              Tên
            </span>
          </span>
          <span className="w-1/4">
            <span className="text-xs uppercase text-gray-600 font-bold">
              Tạo lúc
            </span>
          </span>
          <span className="w-1/4">
            <span className="text-xs uppercase text-gray-600 font-bold">
              Hành động
            </span>
          </span>
        </div>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div
                key={item?.id}
                className="flex items-center py-2 shadow rounded-sm hover:bg-slate-300"
              >
                <span className="w-1/6 text-center">
                  <input type="checkbox" />
                </span>
                <a href={`/my-mindmap/${item?.id}`} className="w-1/2">
                  <span className="text-base text-gray-600  block">
                    {item?.seo?.title ? item?.seo?.title : item?.title}
                  </span>
                  <span className="text-xs text-gray-600  block">
                    {item?.seo?.desdescription
                      ? item?.seo?.desdescription
                      : item?.desc}
                  </span>
                </a>
                <span className="w-1/4">
                  <span className="text-xs uppercase text-gray-600 font-bold">
                    {item?.create}
                  </span>
                </span>
                <span className="w-1/4">
                  <span className="text-xs uppercase text-gray-600 font-bold flex justify-start gap-2 items-center">
                    <a
                      href={`/my-mindmap/${item?.id}`}
                      className="text-base cursor-pointer fa-regular fa-pen-to-square hover:bg-gray-500 block p-1 rounded-md hover:text-white"
                    ></a>
                    <Delete data={item?.id} />
                  </span>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListMindmap;
