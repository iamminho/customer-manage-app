import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  // req.body로 하면 pags/enter에서 onValid에 header를 사용하지 않아도 된다.
  // 그러나 email과 phone로 구분해서 받아야 하기 때문에 header를 사용한다.
  // 이 현상의 이유는 req.body는 req의 내용의 인코딩을 기준으로 parse되기 때문이다.
  res.status(200).end();
}
