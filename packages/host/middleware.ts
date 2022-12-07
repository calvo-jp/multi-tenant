import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|[\\w-]+\\.\\w+).*)"],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") ?? "localhost:3000";

  if (hostname === "localhost:3000") {
    url.pathname = `/home${url.pathname}`;

    return NextResponse.rewrite(url);
  }

  const currentHost = hostname.replace(".localhost:3000", "");
  url.pathname = `/$apps/${currentHost}${url.pathname}`;
  return NextResponse.rewrite(url);
}
