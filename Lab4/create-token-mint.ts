import "dotenv/config";
import { getKeypairFromEnvironment, getErrorFromRPCResponse, getExplorerLink } from "@solana-developers/helpers";
import {
   // LAMPORTS_PER_SOL,
  //  PublicKey,
   // Transaction,
    clusterApiUrl,
    Connection,
   // sendAndConfirmTransaction,
   // SystemProgram,
} from "@solana/web3.js";

import { createMint } from "@solana/spl-token";

const DECIMALS = 6;
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log("User account loaded", user.publicKey.toBase58());

const tokenMint = await createMint(
    connection,
    user,
    user.publicKey,
    null,
    DECIMALS
);

const link = getExplorerLink("address", tokenMint.toBase58(), "devnet");

console.log("Token mint created:", link);

