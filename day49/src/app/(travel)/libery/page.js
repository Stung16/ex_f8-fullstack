// {data.map((destination, index) => {
//     const gallery = destination.galleryBox;
//     const title = destination.gallery.content;
//     return (
//       <div className="mt-[2rem]">
//         <h3 className="capitalize text-[1.8rem] font-bold text-yellow-500 text-center">
//           {title}
//         </h3>
//         <div className="grid grid-cols-3 gap-[1rem]">
//           {gallery.map((img, index) => (
//             <img
//               key={index}
//               src={`${DATA_IMG}${img.src}`}
//               width={200}
//               height={200}
//               alt="img"
//               className="object-cover w-full h-[18rem]"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   })}