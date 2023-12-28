"use client";
import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import { useUser } from "@auth0/nextjs-auth0/client";



function TextUpdaterNode({ data, isConnectable, ...rest }) {
  const { user } = useUser();
  // let idMap = window.location.pathname.slice(-30)
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState();
  // console.log(rest);

  const onChange = useCallback(
    (evt) => {
      if (evt.target.value) {
        data.label = evt.target.value;
        // PostData
      }
      // setValue(evt.target.value);
    },
    [value]
  );
  return (
    <div
      className={`text-updater-node flex justify-center items-center ${
        rest.id === "0" && "innitital_node"
      }`}
    >
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
      <div className={`${check && "border border-gray-300"}`}>
        <input
          type="text"
          id="text"
          // value={value}
          defaultValue={data.label}
          name="text"
          onChange={onChange}
          className={`${
            check && "nodrag"
          }  text-center select-none bg-transparent text-white `}
          readOnly={check ? false : true}
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
