"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Flow from "../items/Flow";
import Board_share from "@/components/Board_share";
import useSWR from "swr";
import Loading from "@/components/Loading/Loading";
import { saveMindmap } from "@/services/mindmapServices";
import { useDataMindmap } from "../../../context/DataProvider.js";
import { useUser } from "@auth0/nextjs-auth0/client";
const MindMapDetail = ({ idmap }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${idmap}`,
    fetcher
  );
  const { user } = useUser();
  const checkAuthorize = () => {
    if (data?.userId === user?.sub) {
      return true;
    }
    return false;
  };
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  const { dataMindmap } = useDataMindmap();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(data?.seo?.title || data?.title);
  const [desc, setDesc] = useState(data?.seo?.desdescription || data?.desc);
  useEffect(() => {
    setTitle(data?.seo?.title || data?.title);
    setDesc(data?.seo?.desdescription || data?.desc);
  }, [data]);
  const handleChangeTitle = (evt) => {
    if (evt.target.value) {
      document.title = evt.target.value;
      setTitle(evt.target.value);
    } else {
      document.title = "Không có tiêu đề mindmap";
    }
  };
  const handleChangeDesc = (evt) => {
    if (evt.target.value) {
      setDesc(evt.target.value);
    }
  };
  const handleSetShow = () => {
    setShow(true);
  };
  return (
    <div>
      {!user || (user && !checkAuthorize()) ? (
        <div className="">
          <input
            className="text-3xl md:text-4xl font-medium my-2 w-max block"
            type="text"
            readOnly={true}
            defaultValue={title}
          />
          <input
            className="block w-max"
            type="text"
            readOnly={ true}
            defaultValue={desc}
          />
        </div>
      ) : (
        <div className="text-start px-28 flex justify-between py-4 shadow h-[112px]">
          <div className="">
            <input
              className="text-3xl md:text-4xl font-medium my-2 w-max block"
              type="text"
              onChange={handleChangeTitle}
              readOnly={check ? false : true}
              defaultValue={title}
              // value={}
              onDoubleClick={() => {
                setCheck(true);
              }}
              onBlur={() => {
                setCheck(false);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  setCheck(false);
                }
              }}
            />
            <input
              className="block w-max"
              type="text"
              onChange={handleChangeDesc}
              readOnly={check ? false : true}
              defaultValue={desc}
              onDoubleClick={() => {
                setCheck(true);
              }}
              onBlur={() => {
                setCheck(false);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  setCheck(false);
                }
              }}
            />
          </div>
          <div className="">
            <div className="flex justify-end items-center">
              <button
                className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700"
                target="_blank"
                rel="noopener"
              >
                <i className="fa-solid fa-save"></i>
                <span
                  onClick={async () => {
                    try {
                      setLoading(true);
                      const res = await saveMindmap(
                        {
                          nodes: dataMindmap?.nodes,
                          edges: dataMindmap?.edges,
                          seo: {
                            title: title,
                            desdescription: desc,
                          },
                        },
                        idmap
                      );
                      // if (res?.response?.ok) {
                      toast.success("Update success!");
                      // } else {
                      //   toast.error(errorText);
                      // }
                    } catch (error) {
                      console.log(error);
                    } finally {
                      setLoading(false);
                    }
                  }}
                  className="ml-2"
                >
                  Lưu thay đổi
                </span>
              </button>
              {loading && <Loading />}
              <button
                className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=&amp;summary=&amp;source="
                aria-label="Share on Linkedin"
                onClick={handleSetShow}
              >
                <i className="fa-solid fa-share"></i>
                <span className="ml-2">Chia sẻ</span>
              </button>
              {show && (
                <Board_share
                  data={data}
                  setShow={setShow}
                  id={idmap}
                  setLoading={setLoading}
                  settitle={setTitle}
                  setdesc={setDesc}
                  titledf={title}
                  descdf={desc}
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="h-[calc(100vh-112px-60px)]">
        <Flow id={idmap} />
      </div>
    </div>
  );
};

export default MindMapDetail;
