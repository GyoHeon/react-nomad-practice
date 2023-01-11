import { withIronSessionApiRoute } from "iron-session/next/dist";

const cookieOptions = {
  cookieName: "carrotMarket",
  password: process.env.IRON_PASSWORD!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
