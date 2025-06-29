import { NextResponse, NextRequest } from "next/server";
import { PATH } from "./constants/paths";

const AUTH_PATHS = [PATH.LOGIN, PATH.REGISTER];
const ACCESS_TOKEN = "accessToken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(ACCESS_TOKEN)?.value;
  const { pathname } = request.nextUrl;

  if (!token && pathname.startsWith("/user")) {
    return NextResponse.redirect(new URL(PATH.LOGIN, request.url));
  }

  if (token && AUTH_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/user/:path*"],
};
