"use client";

import { Channel } from "@neynar/nodejs-sdk/build/neynar-api/v2";
import { NeynarFeedList, useNeynarContext } from "@neynar/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useNeynarContext();
  const [channels, setChannels] = useState<any | null>();

  const fetchChannels = async () => {
    if (!user) return;

    const response = await fetch(`/api/channels?fid=${user?.fid}`);
    const data = await response.json();
    setChannels(data);
  };

  useEffect(() => {
    if (user) fetchChannels();
  }, [user]);

  return (
    <div className="flex min-h-screen text-white bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-gray-800 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Farcaster</h1>
            <button className="bg-purple-600 px-4 py-2 rounded-lg">Cast</button>
          </div>
          <nav className="mt-10 space-y-4">
            <Link href="/" className="flex items-center gap-3 text-lg hover:text-purple-400">
              <span>🏠</span> Home
            </Link>
            <Link href="/explore" className="flex items-center gap-3 text-lg hover:text-purple-400">
              <span>🔍</span> Explore
            </Link>
            <Link href="/profile" className="flex items-center gap-3 text-lg hover:text-purple-400">
              <span>👤</span> Profile
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Home</h1>
          <input
            type="text"
            placeholder="Search Farcaster"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
          />
        </header>

        <div className="bg-gray-800 rounded-lg p-6 mb-4">
          <input
            type="text"
            placeholder="What's happening?"
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
          />
        </div>

        <div className="space-y-4">
        <NeynarFeedList
          feedType={user?.fid ? "following" : "filter"}
          fid={user?.fid}
          filterType="global_trending"
        />
        </div>
      </main>
    </div>
  );
}
