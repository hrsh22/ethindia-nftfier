import * as PushAPI from "@pushprotocol/restapi";

const notifications = await PushAPI.user.getFeeds({
  user: "eip155:5:0xB78721b29c028B16ab25f4a2adE1d25fbf8B2d74", // user address in CAIP
  env: "staging",
});

const spams = await PushAPI.user.getFeeds({
  user: "eip155:5:0xB78721b29c028B16ab25f4a2adE1d25fbf8B2d74", // user address in CAIP
  spam: true,
  env: "staging",
});

const subscriptions = await PushAPI.user.getSubscriptions({
  user: "eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681", // user address in CAIP
  env: "staging",
});

const channelData = await PushAPI.channels.getChannel({
  channel: "eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681", // channel address in CAIP
  env: "staging",
});

const channelsData = await PushAPI.channels.search({
  query: "push", // a search query
  page: 1, // page index
  limit: 20, // no of items per page
  env: "staging",
});

const ethers = require("ethers");
const PK = "7ED790A1Ac108b9A50e24f5c5E061df59e3673a7";
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
