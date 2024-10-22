import "dotenv/config";
import {
  getKeypairFromEnvironment,
  getExplorerLink,
} from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { mintTo, transfer } from "@solana/spl-token";

const AMOUNT = 5;
const DECIMALS = 6;
const connection = new Connection(clusterApiUrl("devnet"));
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(`User account loaded: ${user.publicKey.toBase58()}`);

const destTokenAccount = new PublicKey( "76pZzNSgNBkWWdN7dF4SdF844rQVhzMtNPnGSknthjuY");

const source = new PublicKey("1R878zAzpgrnouhq5RmpQShLYT5Pz6WDAo6JdmBsgWm"); // my token account

const sig = await transfer(
  connection,
  user,
  source,
  destTokenAccount,
  user,
  AMOUNT * 10 ** DECIMALS
);

console.log(`Signatures: ${sig}`);
