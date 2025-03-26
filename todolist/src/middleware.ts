import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  console.error("Middleware is executing...");
  const { pathname } = req.nextUrl;

 
  if (pathname.startsWith("/api/auth/")) {
    console.log("Skipping authentication for:", pathname);
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;
  console.log("Token received in Middleware:", token);

  if (!token) {
    console.error("No token found. Blocking request.");
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    // console.log("User ID:", payload.id);

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("user-id", payload.id);

    return NextResponse.next({
      headers: requestHeaders,
    });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 });
  }
}

export const config = {
  matcher: ["/api/:path*"], 
};




