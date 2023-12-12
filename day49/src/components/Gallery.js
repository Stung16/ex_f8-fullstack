import { DATA_API, DATA_IMG } from "@/Utils/config";
import Link from "next/link";
import React from "react";

const getImge = async () => {
  const data = await fetch(`${DATA_API}/pages`);
  const response = await data.json();
  return response;
};

const Gallery = async () => {
  const data = await getImge();

  return (
    <section className="px-28 w-full mx-auto" id="gallery">
      <h1 className="text-center text-4xl pt-20 pb-5">
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">T</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">H</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ư</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">V</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">I</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ệ</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">N</span>{" "}
      </h1>
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-5 mt-10 mb-5">
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              href={"/gallery"}
              className="w-full h-60  bg-white shadow-md rounded-xl overflow-hidden  hover:shadow-xl relative group"
            >
              <img
                className="bg-cover  duration-500"
                src={`${DATA_IMG}${item.galleryBox[1].src}`}
                alt=""
              />
              <div className="absolute bg-slate-500 inset-0 opacity-60 z-10 hidden group-hover:block cursor-pointer">
                <span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 bg-slate-700 w-full text-center py-2 text-xl">
                  view more
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
