import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  const clientId = Number(id);
  const product = await client.product.findUnique({
    where: {
      id: clientId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  const terms = product?.name
    .split(" ")
    .map((word) => ({ name: { contains: word } }));

  const relatedProducts = await client.product.findMany({
    where: {
      OR: terms,
      AND: {
        id: {
          not: clientId,
        },
      },
    },
  });

  console.log(relatedProducts);

  res.json({ ok: true, product, relatedProducts });
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler, isPrivate: true })
);
