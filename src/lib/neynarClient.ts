import { NeynarAPIClient } from "@neynar/nodejs-sdk";

const neynarClient = new NeynarAPIClient(process.env.NEYNAR_API_KEY!);

export default neynarClient;
