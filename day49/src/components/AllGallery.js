import React from "react";
import { DATA_IMG, DATA_API } from "@/Utils/config";



const getInfor = async () => {
  const data = await fetch(`${DATA_API}/pages`);
  const response = await data.json();
  return response;
};

const AllGallery = async () => {
  const data = await getInfor();

  return (
    <section>
      <h1 className="text-center text-4xl pt-20 pb-5">
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">T</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ổ</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">N</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">G</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">H</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ợ</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">P</span>{" "}
      </h1>
      {data.map((item, index) => {
        const ambuls = item.galleryBox;
        return (
          <div key={index} className="px-28 my-2 mx-auto flex flex-col">
            <h1 className="text-center text-4xl mt-10 text-amber-500 ">
              {item.home.name.toUpperCase()}
            </h1>
            <div className="w-full bg-white shadow-md rounded-xl  flex flex-wrap justify-evenly gap-y-6  hover:shadow-xl relative py-10 ">
              {ambuls.map((img, index) => {
                return (
                  <img
                    key={index}
                    className="bg-cover h-80 w-96 duration-500 block"
                    src={`${DATA_IMG}${img.src}`}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AllGallery;
