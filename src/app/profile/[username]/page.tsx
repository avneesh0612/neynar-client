import { NeynarProfileCard, NeynarFeedList } from "@/components/Neynar";
import neynarClient from "@/lib/neynarClient";

async function getData(username: string) {
  const user = await neynarClient.lookupUserByUsername(username);

  return { user: user.result.user };
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  const { user } = await getData(username);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <NeynarProfileCard fid={user.fid} />
      <div className="mt-4 flex items-center">
        <NeynarFeedList
          feedType="filter"
          fid={user.fid}
          fids={`${user.fid}`}
          withRecasts={false}
          limit={50}
        />
      </div>
    </main>
  );
}
