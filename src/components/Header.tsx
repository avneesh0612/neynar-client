"use client";

import { NeynarAuthButton } from "@neynar/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FC } from "react";

export const Header: FC = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-16 pt-4 text-white">
      <Link href="/" className="text-3xl font-bold">
        NeynarClient
      </Link>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Go to profile"
          className="rounded-lg p-2 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            console.log("searching for", username);
            router.push(`/profile/${username}`);
          }}
          className="rounded-lg bg-blue-500 p-2"
        >
          Search
        </button>
      </div>

      <NeynarAuthButton className="right-4 top-4" />
    </div>
  );
};
