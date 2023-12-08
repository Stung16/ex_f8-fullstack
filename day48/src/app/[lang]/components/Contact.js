import React from 'react'

const Contact = ({data}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
    <h3 className="heading text-center font-bold">{data.title}</h3>
    <ul>
      <li>Phone: <a href="tel:0397647002" className="text-danger text-blue-500">{data.number}</a></li>
      <li>Zalo: <a href="https://chat.zalo.me/" className="text-danger text-blue-500" target="_blank">{data.zalo}</a></li>
      <li>Email: <a href="mailto:daithehh04@gmail.com" className="text-danger text-blue-500 ">{data.email}</a></li>
      <li>Github: <a href={data.github} className="text-danger text-blue-500 ">{data.github}</a></li>
    </ul>
  </div>
  )
}

export default Contact