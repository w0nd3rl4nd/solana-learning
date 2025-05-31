// This time we only import PublicKey as we don't need to generate a keypair
import { Connection, PublicKey } from "@solana/web3.js";

// We create a connection to the Solana mainnet
const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);

// We define the address as a known one and create an object with it's information
const address = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
const accountInfo = await connection.getAccountInfo(address);

// We use stringify to truncate the very long data portion that is in byte code
console.log(
  JSON.stringify(
    accountInfo,
    (key, value) => {
      if (key === "data" && value && value.length > 1) {
        return [
          value[0],
          "...truncated, total bytes: " + value.length + "...",
          value[value.length - 1]
        ];
      }
      return value;
    },
    2
  )
);