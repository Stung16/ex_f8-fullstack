export const metadata = {
  title: "Mindmap Flow",
  description: "Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ",
};
export default function Home() {
  return (
    <>
      <main className="bg-indigo-300 h-[90vh] flex justify-center flex-col items-center gap-4">
        <h1 className="text-black font-semibold text-4xl">
          Học tập hiệu quả với bản đồ tư duy
        </h1>
        <button className="bg-indigo-500 px-8 py-3 mx-5  rounded-3xl text-white">
          Sử dụng miễn phí
        </button>
        <img src="./so-do-tu-duy.webp" className="bg-contain w-[50%]" alt="" />
        <div className="flex justify-center items-center gap-5">
          <div className="text-center">
            <h2>DỄ SỬ DỤNG</h2>
            <p>
              FWR blocks bring in an air of fresh design with their creative
              layouts and blocks, which are easily customizable
            </p>
          </div>

          <div className="text-center">
            <h2>DỄ SỬ DỤNG</h2>
            <p>
              FWR blocks bring in an air of fresh design with their creative
              layouts and blocks, which are easily customizable
            </p>
          </div>

          <div className="text-center">
            <h2>DỄ SỬ DỤNG</h2>
            <p>
              FWR blocks bring in an air of fresh design with their creative
              layouts and blocks, which are easily customizable
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
