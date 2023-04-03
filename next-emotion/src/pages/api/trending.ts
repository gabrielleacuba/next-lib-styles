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
  const resultWeek = await fetch(
    `${apiBase}/trending/all/week?api_key=${apiKey}&language=pt-BR`
  );

  const jsonWeek = await resultWeek.json();

  const resultDay = await fetch(
    `${apiBase}/trending/all/day?api_key=${apiKey}&language=pt-BR`
  );

  const jsonDay = await resultDay.json();

  res
    .status(200)
    .json({ listWeek: jsonWeek.results, listDay: jsonDay.results });
}
