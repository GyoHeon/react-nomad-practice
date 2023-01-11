import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const token = await client.token.findUnique({
    where: { payload: req.body.token },
    include: { user: true },
  });

  if (!token) res.status(404).end;

  req.session.user = { id: token!.userId };

  await req.session.save();
  await client.token.deleteMany({ where: { userId: token!.userId } });

  res.json({ ok: true });
}

export default withApiSession(withHandler("POST", handler));
