import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body.email);
  res.json({ ok: true });
}

export default withHandler("POST", handler);
