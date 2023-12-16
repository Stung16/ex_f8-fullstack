"use client";
import Link from "next/link";
import React from 'react'
import { useSession, signOut } from "next-auth/react";
import UserInfor from "./UserInfor";
import Social from "./Social";


function Home() {
    const { data: session } = useSession();
    return (
      <>
        {session ? (
          <>
            {/* Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button> */}
            <UserInfor data={session} />
            <Social data={session} />
          </>
        ) : (
          <>
            Not signed in <br />
            <Link href={"/login"}>Sign in</Link>
          </>
        )}
      </>
    );
}

export default Home