import { NextResponse } from "next/server";
import { getSession } from '@auth0/nextjs-auth0/edge';
// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  const path = request.nextUrl.pathname;
  const id = path.replace("/my-mindmap/", "");
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${id}`);
  const data = await response.json();
  if(data?.isPublic === 'true'){
    const user = await getSession();
    if (!user) {
      return NextResponse.rewrite(new URL('/api/auth/login', request.url));
    }
  }
};

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: '/about/:path*',
};
