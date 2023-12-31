"use client";
import { saveMindmap } from "@/services/mindmapServices";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

const Board_share = ({ data, setShow, id }) => {
  const [isPublic, setIsPublic] = useState(true);
  const [form, setForm] = useState({
    title: data.title,
    desc: data.desc,
    img_seo: data.img_seo,
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    let updateData = {};
    if (isPublic) {
      updateData = {
        ...data,
        ...form,
        isPublic: true,
      };
    } else {
      updateData = {
        ...data,
        isPublic: false,
      };
    }
    try {
      const res = await saveMindmap(updateData, id);
    } catch (error) {
      console.log(error);
    }
    setShow(false);
    toast.success("Lưu thành công");
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 !z-[199] w-full overflow-y-auto text-black"
        id="modal"
      >
        <div className="flex items-center justify-center px-4 pt-4 pb-20 text-center min-h-[100vh] sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div
              className="absolute inset-0 opacity-75"
              style={{ background: "rgb(17 24 39)" }}
              onClick={() => setShow(false)}
            ></div>
            <div
              className="inline-block overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl align-center sm:align-middle sm:max-w-lg sm:w-full fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex items-center justify-center gap-4 px-4 pt-5 mode">
                <div className="flex items-center mr-4">
                  <input id="radio1" type="radio" name="radio" />
                  <label
                    htmlFor="radio1"
                    className="flex items-center cursor-pointer"
                    onClick={() => setIsPublic(false)}
                  >
                    {/* <span className="inline-block w-4 h-4 mr-1 border rounded-full border-grey"></span> */}
                    Riêng tư
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input id="radio2" type="radio" name="radio" defaultChecked />
                  <label
                    htmlFor="radio2"
                    className="flex items-center cursor-pointer"
                    onClick={() => setIsPublic(true)}
                  >
                    {/* <span className="inline-block w-4 h-4 mr-1 border rounded-full border-grey"></span> */}
                    Công khai
                  </label>
                </div>
              </div>
              <div
                className={`${
                  isPublic ? "block" : "hidden"
                } px-4 pt-2 pb-2 bg-white`}
              >
                <div className="flex items-center justify-between">
                  <label className="font-medium text-[0.875rem] text-[#6B7280]">
                    Liên kết chia sẻ
                  </label>
                </div>
                <input
                  defaultValue={window?.location?.href}
                  type="text"
                  readOnly
                  className="w-full p-2 mt-1 mb-3 rounded outline-none bg-[#f5f8fa] font-normal transition-all focus:outline-2 focus:outline-blue"
                />
                <label className="font-medium text-[0.875rem] text-[#6B7280]">
                  Tiêu đề
                </label>
                <input
                  defaultValue={
                    data?.seo?.title ? data?.seo?.title : data?.title
                  }
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="w-full p-2 mt-1 mb-3 rounded font-normal  outline-none bg-[#f5f8fa] transition-all focus:outline-2 focus:outline-blue"
                />
                <label className="font-medium text-[0.875rem] text-[#6B7280]">
                  Mô tả
                </label>
                <textarea
                  name="desc"
                  id=""
                  rows="3"
                  onChange={handleChange}
                  defaultValue={
                    data?.seo?.desdescription
                      ? data?.seo?.desdescription
                      : data?.desc
                  }
                  className="w-full p-1 mt-1 mb-1 rounded font-normal  outline-none bg-[#f5f8fa] transition-all focus:outline-2 focus:outline-blue"
                ></textarea>
                <label className="font-medium text-[0.875rem] text-[#6B7280]">
                  Ảnh chia sẻ
                </label>
                <input
                  name="img_seo"
                  defaultValue={data?.img_seo}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-2 mt-1 font-normal  mb-3 rounded outline-none bg-[#f5f8fa] transition-all focus:outline-2 focus:outline-blue"
                />
              </div>
              <div
                className={`${
                  isPublic ? "hidden" : "block"
                } px-4 pt-2 pb-2 bg-white`}
              >
                <p className="font-normal">
                  Nếu chọn riêng tư, chỉ có bạn mới được quyền xem Mindmap này
                </p>
              </div>
              <div className="flex justify-end px-4 py-3 text-right bg-blue1">
                <button
                  type="button"
                  className="flex items-center px-4 py-2 mr-2 text-white rounded bg-[#535d7e] hover:bg-[#3a4157]"
                  onClick={() => setShow(false)}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleSave();
                  }}
                  type="button"
                  className="btn-primary !rounded flex items-center gap-1 px-4 py-2 mr-2 text-white bg-indigo-500 hover:bg-indigo-600 "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board_share;
