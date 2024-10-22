import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

const connection = new Connection(clusterApiUrl("devnet"));
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(`User account loaded: ${user.publicKey.toBase58()}`);

const tokenMint = new PublicKey("A2bV3DwoHvkGNFAUj6oUrrHzhuxz3tkDTAuGahTnsMLR");

// const destPubkey = new PublicKey("Hg7QXrvrmsrEZ4vZDPSvghtTY9wRDsM6obRfpJTHFLAo");

const destPubkey = new PublicKey("9hh4HNTUtsmG6SXA8nudj1chWdnNTLtv1SydkQbvujLK"); // my public key

const destTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  user,
  tokenMint,
  destPubkey
);

console.log(`Token account created: ${destTokenAccount.address.toBase58()}`)