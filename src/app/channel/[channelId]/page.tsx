"use client";

import { NeynarFeedList, useNeynarContext } from "@neynar/react";

export default async function Page({
  params: { channelId },
}: {
  params: { channelId: string };
}) {
  const { user } = useNeynarContext();

  console.log("channelId", channelId);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <h1>hi</h1>
      <NeynarFeedList
        feedType="filter"
        channelId="dev"
        viewerFid={2}
        fid={2}
        limit={50}
        filterType="channel_id"
      />
    </main>
  );
}
