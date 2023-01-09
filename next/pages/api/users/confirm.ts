import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const token = await client.token.findUnique({
    where: { payload: req.body.token },
    include: { user: true },
  });

  if (!token) res.status(404).end;

  req.session.user = {
    id: token.id,
  };

  await req.session.save();

  return res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotMarket",
  password: process.env.IRON_PASSWORD,
});
