"use client";

import { Channel } from "@neynar/nodejs-sdk/build/neynar-api/v2";
import { NeynarFeedList, useNeynarContext } from "@neynar/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useNeynarContext();
  const [channels, setChannels] = useState<any | null>();

  const fetchChannels = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`/api/channels?fid=${user?.fid}`);
    const data = await response.json();
    setChannels(data.channel);
  };

  useEffect(() => {
    if (user) {
      fetchChannels();
    }
  }, [user]);

  return (
    <main className="flex min-h-screen p-16">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Channels</h1>
        <div className="flex flex-col">
          {channels &&
            channels.channels.map((channel: Channel) => (
              <div key={channel.url} className="p-4 rounded-lg">
                <Link href={`/channel/${channel.id}`}>{channel.name}</Link>
              </div>
            ))}
        </div>
      </div>

      <NeynarFeedList
        feedType="filter"
        channelId="dev"
        viewerFid={2}
        fid={2}
        limit={50}
        filterType="channel_id"
      />

      <div className="flex flex-col gap-6 ml-40">
        <NeynarFeedList
          feedType={user?.fid ? "following" : "filter"}
          fid={user?.fid}
          filterType="global_trending"
        />
      </div>
    </main>
  );
}
