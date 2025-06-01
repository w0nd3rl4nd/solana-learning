import {
    Connection,
    Keypair,
    SystemProgram,
    Transaction,
    sendAndConfirmTransaction,
    LAMPORTS_PER_SOL
} from "@solana/web3.js";

import {
    MINT_SIZE,
    TOKEN_2022_PROGRAM_ID,
    createInitializeMint2Instruction,
    getMinimumBalanceForRentExemptMint
} from "@solana/spl-token";

const connection = new Connection("http://localhost:8899", "confirmed")

const wallet = new Keypair();

const signature = await connection.requestAirdrop(
    wallet.publicKey,
    LAMPORTS_PER_SOL
);
await connection.confirmTransaction(signature, "confirmed");

// Generate minting keypair for the currency
const mint = new Keypair();

// Calculate lamports required for rent exemption
const rentExemptionLamports = await getMinimumBalanceForRentExemptMint(connection);

// Create an account that holds space for a mint account
const createAccountInstruction = SystemProgram.createAccount({
    fromPubkey: wallet.publicKey,
    newAccountPubkey: mint.publicKey,
    space: MINT_SIZE,
    lamports: rentExemptionLamports,
    programId: TOKEN_2022_PROGRAM_ID
});

// Initialise mint account
const initializeMintInstruction = createInitializeMint2Instruction (
    mint.publicKey,
    2,
    wallet.publicKey,
    wallet.publicKey,
    TOKEN_2022_PROGRAM_ID
)

// Build a transaction to create an initialise the mint account
// This transaction ensures either both or none operations succeed
const transaction = new Transaction().add(
    createAccountInstruction,
    initializeMintInstruction
);

// Performs the transaction and adds the wallet and the mint acc
const transactionSignature = await sendAndConfirmTransaction (
    connection,
    transaction,
    [
        wallet,
        mint
    ]
);

let accountInfo
console.log("Minimum Lamports for Rent Exemption:", `${rentExemptionLamports / 1000000000}`);
console.log("Wallet Account:", `${wallet.publicKey}`);
accountInfo = await connection.getAccountInfo(wallet.publicKey);
console.log(JSON.stringify(accountInfo, null, 2));
console.log("Mint Account:", `${mint.publicKey}`);
accountInfo = await connection.getAccountInfo(mint.publicKey);
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
console.log("Transaction Signature:", `${transactionSignature}`);