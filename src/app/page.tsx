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
    setChannels(data);
  };

  useEffect(() => {
    if (user) {
      fetchChannels();
    }
  }, [user]);

  return (
    <main className="flex min-h-screen p-16">
      {user && (
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Channels</h1>
          <div className="flex flex-col">
            {channels &&
              channels.channels.map((channel: Channel) => (
                <div key={channel.url} className="rounded-lg p-4">
                  <Link href={`/channel/${channel.id}`}>{channel.name}</Link>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="ml-40 flex flex-col gap-6">
        <NeynarFeedList
          feedType={user?.fid ? "following" : "filter"}
          fid={user?.fid}
          filterType="global_trending"
        />
      </div>
    </main>
  );
}
