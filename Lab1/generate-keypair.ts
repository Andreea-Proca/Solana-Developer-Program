import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log('Generated keypair!');

const publicKey = keypair.publicKey.toBase58();
const secretKey = keypair.secretKey;

console.log('The public key is:', publicKey);
console.log('The secret key is:', secretKey);

console.log('Finished!');
