import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  // const id = path.replace("/my-mindmap","")
  // console.log(id);
  // console.log(path);
  // console.log(user);

    // return NextResponse.redirect(new URL("/api/auth/login", request.url));
  //   return NextResponse.redirect(new URL('/home', request.url))
};

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: '/about/:path*',
};
