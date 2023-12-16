"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import Social from "@/components/Social";



const UserInfo = (data) => {
  console.log(data);
  return (
    <main className="container mx-auto text-center py-20 w-[50vw]">
      <h3 className="text-4xl font-bold">User HomePage</h3>
      <div className="details">
        <img className="rounded-full w-20 block h-20 m-auto" src={data.user.image} alt="" />
        <h5 >{data.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => {
          signOut()
        }}>
          Sign Out
        </button>
      </div>
      
    </main>
  );
};

const page = () => {

    const { data: session } = useSession()
    console.log(session);
    if (session) {
      return (
        <>
          {/* Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button> */}
          {UserInfo(session)}
          <Social data={session} />
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <Link href={"/login"}>Sign in</Link>
      </>
    )
};

export default page;
