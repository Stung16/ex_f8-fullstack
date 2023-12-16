import React from 'react'
import { signOut } from "next-auth/react";

const UserInfor = ({data}) => {
  return (
    <main className="container mx-auto text-center py-20 w-[50vw]">
    <h3 className="text-4xl font-bold">User HomePage</h3>
    <div className="details">
      <img
        className="rounded-full w-20 block h-20 m-auto"
        src={data.user.image}
        alt=""
      />
      <h5>{data.user.email}</h5>
    </div>

    <div className="flex justify-center">
      <button
        className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 hover:bg-indigo-600 text-white"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  </main>
  )
}

export default UserInfor