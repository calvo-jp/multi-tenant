import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|[\\w-]+\\.\\w+).*)"],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") ?? "localhost:5000";

  if (hostname === "localhost:5000") {
    url.pathname = `/home${url.pathname}`;

    return NextResponse.rewrite(url);
  }

  const currentHost = hostname.replace(".localhost:5000", "");
  url.pathname = `/$blog/${currentHost}${url.pathname}`;
  return NextResponse.rewrite(url);
}
