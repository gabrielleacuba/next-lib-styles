// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { apiBase, apiKey } from "@/../../lib/tmdb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const result = await fetch(
    `${apiBase}/trending/all/week?api_key=${apiKey}&language=pt-BR`
  );

  const json = await result.json();

  res.status(200).json({ list: json.results });
}
