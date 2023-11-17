import React, { useState } from "react";

export default function TableResult() {
  const data = JSON.parse(localStorage.getItem("data"));
  const [done,setDone] = useState(false)
  const handleDele = () => {
    localStorage.clear()
    setDone(!done)
  }
  return (
    <>
      {data && (
        <div className="listTable">
          <button className="delete"onClick={handleDele} >xoá</button>
          <div className="tableItem">
            <table>
              <thead>
                <tr>
                  <th>Số lần nhập</th>
                  <th>Số nhập vào</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
