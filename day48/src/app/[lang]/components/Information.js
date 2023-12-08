import React from "react";

const Information = () => {
  return (
    <div className=" w-60">
      <div className="border shadow rounded-lg p-6">
        <div className="flex flex-col items-center">
          <img
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/405363821_1051094602759129_2432277324655653237_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ReAwke6-HIMAX9qXjlJ&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBqxXb9gQz91ZtcBWix2cO4j2eFoA-xRV2libqE5Cnl_w&oe=657650CE"
            className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
          />
          <h1 className="text-xl font-bold">Kiều Duy Tùng</h1>
          {/* <p className="text-gray-700">Software Developer</p> */}
          <div className="mt-6 flex  gap-4 justify-center">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Contact
            </a>
            <a
              href="#"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
            >
              Resume
            </a>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div className="flex flex-col">
          <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
            Skills
          </span>
          <ul>
            <li className="mb-2">JavaScript</li>
            <li className="mb-2">React</li>
            <li className="mb-2">Node.js</li>
            <li className="mb-2">HTML/CSS</li>
            <li className="mb-2">Tailwind Css</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
