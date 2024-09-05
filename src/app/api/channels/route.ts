import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const { searchParams } = new URL(req.url);
  const fid = searchParams.get("fid");

  const url = `https://api.neynar.com/v2/farcaster/user/channels?fid=${fid}&limit=25`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      api_key: process.env.NEYNAR_API_KEY!,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch channel" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      channel: await response.json(),
    },
    { status: 200 }
  );
};
