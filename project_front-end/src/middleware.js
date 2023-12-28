import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  const path = request.nextUrl.pathname;
  // console.log(path);
  // const id = path.replace("/my-mindmap","")
  // console.log(id);
  // console.log(path);
  let mode = "private";
  const user = await getSession();
  // console.log(user);
  if (!user) {

    // return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }
  // console.log(request);
  //   return NextResponse.redirect(new URL('/home', request.url))
};

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: '/about/:path*',
};
