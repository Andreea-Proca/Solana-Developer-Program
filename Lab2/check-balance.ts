import "dotenv/config";

import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

import { airdropIfRequired} from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Connected to devnet", connection.rpcEndpoint);

const andreeaPubkey = new PublicKey("9hh4HNTUtsmG6SXA8nudj1chWdnNTLtv1SydkQbvujLK");

const balanceInLamports = await connection.getBalance(andreeaPubkey);

console.log("Done! Andreea's balance in lamports:", balanceInLamports);

// const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log("Airdropping 1 SOL to Andreea...");

await airdropIfRequired(
  connection,
  andreeaPubkey,
  1 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);

// await connection.requestAirdrop(andreeaPubkey, 1 * LAMPORTS_PER_SOL);

console.log("Done! Airdropped 1 SOL to Andreea!");

const balanceInLamports2 = await connection.getBalance(andreeaPubkey);

console.log("Done! Andreea's balance in lamports:", balanceInLamports2);
