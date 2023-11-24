import React from 'react'

export default function Card({data}) {
  return (
    <>
        <div className="card">
          <div className="content-card">{data?.content}</div>
          <button>xoá</button>
        </div>
    </>
  )
}
