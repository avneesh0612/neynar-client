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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <NeynarProfileCard fid={user.fid} />
      <div className="flex items-center mt-4">
        <NeynarFeedList
          feedType="filter"
          fid={user.fid}
          fids={`${user.fid}`}
          withRecasts={false}
          
        />
      </div>
    </main>
  );
}
