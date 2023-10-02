import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    let url = new URL("/", req.url)
    console.log(url)
    return NextResponse.rewrite(new URL("/Home", req.url));
  },
  {
    callbacks: {
      authorized({ token }) {
        let res = token?.role === "Expert";
        return res
      },
    },
  },
  
);

export const config = {
     matcher: ["/Home", "/Reply/:path*","/WriteReply/:path*"],
     pages: {
        signIn: "/",
      },
    
    };