import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const type = phone ? { phone: +phone } : { email };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const user = await client.user.upsert({
    where: {
      ...type,
    },
    create: {
      name: "Anonymous",
      ...type,
    },
    update: {},
  });
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  console.log({ token });

  return res.status(200).end();
}

export default withHandler("POST", handler);
