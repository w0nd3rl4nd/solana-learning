import { PublicKey, Connection } from "@solana/web3.js";

// We import this library to deserialize the bytecode of a minting address
import { getMint } from "@solana/spl-token";

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);

const address = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
const mintData = await getMint(connection, address, "confirmed");

console.log(
  JSON.stringify(
    mintData,
    (key, value) => {
      // Convert BigInt to String
      if (typeof value === "bigint") {
        return value.toString();
      }
      // Handle Buffer objects to convert from hex to text
      if (Buffer.isBuffer(value)) {
        return `<Buffer ${value.toString("hex")}>`;
      }
      return value;
    },
    2
  )
);