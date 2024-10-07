export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more params
  // +: one ore more params
  // ?: zero or one params
  matcher: ["/dashboard/:path*"],
};
