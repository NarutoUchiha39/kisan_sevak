import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    
    console.log(req.url)
    return NextResponse.rewrite(new URL(req.url));
  },
  {
    callbacks: {
      authorized({ token }) {
        console.log(token)
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