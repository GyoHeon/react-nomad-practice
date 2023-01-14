import { withIronSessionApiRoute } from "iron-session/next";

const cookieOptions = {
  cookieName: "carrotMarket",
  password: process.env.IRON_PASSWORD!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
