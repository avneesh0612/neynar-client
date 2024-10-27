import neynarClient from "@/lib/neynarClient";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const fid = searchParams.get("fid");

    const channels = await neynarClient.fetchUserChannels(Number(fid));

    return NextResponse.json(channels, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as any).response.data.message },
      { status: (error as any).response?.status || 500 }
    );
  }
};
