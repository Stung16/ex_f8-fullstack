import React from 'react'

const Favorite = ({data}) => {
  return (
    <div className="border shadow rounded-lg p-6">
      <h3 className="heading text-center font-bold">{data.title}</h3>
      <ul className="ml-4 list-disc">
        {data.hobbies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Favorite