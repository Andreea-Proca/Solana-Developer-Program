import "dotenv/config";
import {
  getKeypairFromEnvironment,
  getExplorerLink,
} from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { mintTo } from "@solana/spl-token";

const AMOUNT = 9;
const DECIMALS = 6;
const connection = new Connection(clusterApiUrl("devnet"));
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(`User account loaded: ${user.publicKey.toBase58()}`);

const tokenMint = new PublicKey("A2bV3DwoHvkGNFAUj6oUrrHzhuxz3tkDTAuGahTnsMLR");

const destTokenAccount = new PublicKey(
  "76pZzNSgNBkWWdN7dF4SdF844rQVhzMtNPnGSknthjuY" 
);

// const destTokenAccount = new PublicKey(
//   "1R878zAzpgrnouhq5RmpQShLYT5Pz6WDAo6JdmBsgWm" // my token account
// );

const sig = await mintTo(
  connection,
  user,
  tokenMint,
  destTokenAccount,
  user,
  AMOUNT * 10 ** DECIMALS
);

const link = getExplorerLink("tx", sig, "devnet");

console.log(`Minted ${AMOUNT} tokens: ${link}`);