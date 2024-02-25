"use client";
import { useCallback, useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import { useUser } from "@auth0/nextjs-auth0/client";
import "./textUpdater.css";

function TextUpdaterNode({ data, isConnectable, ...rest }) {
  const { user } = useUser();
  // let idMap = window.location.pathname.slice(-30)
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState();

  const onChange = useCallback(
    (evt) => {
      if (evt.target.value) {
        data.label = evt.target.value;
      }
    },
    [value]
  );
  // useEffect(() => {
  //   const item = document.getElementsByClassName('innitital_node')
  //   const nodeDEtail = item[0]
  //   nodeDEtail.addEventListener(oncl)
  // }, []);
  return (
    <div
      className={` flex justify-center items-center ${
        rest.id === "0" ? "innitital_node" : "text-updater-node"
      } `}
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
    >
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
      <div>
        {check ? <input
          type="text"
          id="text"
          defaultValue={data.label}
          name="text"
          onChange={onChange}
          className={`${
            check ? "nodrag" :"cursor-grab"
          }  text-center select-none bg-transparent text-white`}
          readOnly={check ? false : true}
        /> : `${data.label}`}
        {/* <input
            type="text"
            id="text"
            defaultValue={data.label}
            name="text"
            onChange={onChange}
            className={`${
              check && "nodrag"
            }  text-center select-none bg-transparent text-white `}
            readOnly={check ? false : true}
          /> */}
      </div>
      {rest.id !== "0" && (
        <Handle
          type="target"
          position={Position.Top}
          id="b"
          isConnectable={isConnectable}
        />
      )}
    </div>
  );
}

export default TextUpdaterNode;
