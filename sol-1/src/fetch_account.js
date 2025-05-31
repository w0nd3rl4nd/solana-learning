// Import Keypair generator, Connection to connect and Lamports_per_sol constant
import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

// Create a keypair with generate and print it's public key
const keypair = Keypair.generate();
console.log(`Pub keypair is:  ${keypair.publicKey}`);

// Create a connection to a local testnet
const connection = new Connection("http://localhost:8899", "confirmed")

// Perform an airdrop and store it in a signature to validate it later
// We use await because the function is async
// We must provide the key to the acc and the amount of lamports
const signature = await connection.requestAirdrop(
  keypair.publicKey,
  LAMPORTS_PER_SOL * 5
);

// We confirm the transaction like we were a validator
await connection.confirmTransaction(signature, "confirmed")

// We create an object with the information from a given account and print it
const accountInfo = await connection.getAccountInfo(keypair.publicKey);
console.log(JSON.stringify(accountInfo, null, 2));