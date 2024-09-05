import { NeynarFeedList } from "@/components/Neynar";

export default async function Page({
  params: { channelId },
}: {
  params: { channelId: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="flex items-center mt-4">
        <NeynarFeedList
          feedType="filter"
          channelId={channelId}
          viewerFid={2}
          limit={50}
          filterType="channel_id"
        />
      </div>
    </main>
  );
}
