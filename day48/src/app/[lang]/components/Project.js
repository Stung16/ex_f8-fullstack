import React from "react";

const Project = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="heading text-center font-bold">{data.title}</h3>
      <ul>
        <li>
          <h4 className="heading-2 font-bold">Trello web</h4>
          <p>{data.desc1}</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-danger font-medium text-cyan-400 hover:text-blue-700	">
              Link github
            </a>
            <a href="#" className="text-danger font-medium text-cyan-400 hover:text-blue-700">
              Link demo
            </a>
          </div>
          <hr className="mt-2 mb-4" />
        </li>
        <li>
          <h4 className="heading-2 font-bold">Shop mini</h4>
          <p>{data.desc2}</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-danger font-medium text-cyan-400 hover:text-blue-700">
              Link github
            </a>
            <a href="#" className="text-danger font-medium text-cyan-400 hover:text-blue-700">
              Link demo
            </a>
          </div>
          <hr className="mt-2 mb-4" />
        </li>
      </ul>
    </div>
  );
};

export default Project;
