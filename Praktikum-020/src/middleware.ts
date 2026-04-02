import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, [
  "/profile", 
  "/produk", 
  "/about",
  "/admin",
  "/editor"
]);

export const config = {
  matcher: ["/profile", "/produk", "/about", "/admin/:path*", "/editor/:path*"], 
};