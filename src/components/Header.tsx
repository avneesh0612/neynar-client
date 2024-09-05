"use client";

import { NeynarAuthButton } from "@neynar/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FC } from "react";

export const Header: FC = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  return (
    <div className="flex items-center justify-between pt-4 px-16 text-white">
      <Link href="/" className="text-3xl font-bold">
        NeynarClient
      </Link>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Go to profile"
          className="p-2 rounded-lg text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            console.log("searching for", username);
            router.push(`/profile/${username}`);
          }}
          className="p-2 rounded-lg bg-blue-500"
        >
          Search
        </button>
      </div>

      <NeynarAuthButton className="top-4 right-4" />
    </div>
  );
};
