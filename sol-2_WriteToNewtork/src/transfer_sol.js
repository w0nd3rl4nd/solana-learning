/*
We import System program because the system program is the one that has the hability to call transfers within the system. We will use it to declare the transaction
We also import sendAndConfirmTransacion to perform the transaction and get it's signature
*/
import {
    LAMPORTS_PER_SOL,
    SystemProgram,
    Transaction,
    sendAndConfirmTransaction,
    Keypair,
    Connection
} from "@solana/web3.js";

const connection = new Connection("http://localhost:8899", "confirmed");

const sender = new Keypair();
const receiver = new Keypair();

const signature = await connection.requestAirdrop(
    sender.publicKey,
    LAMPORTS_PER_SOL  * 5
)
await connection.confirmTransaction(signature, "confirmed");

const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver.publicKey,
    lamports: 0.01 * LAMPORTS_PER_SOL
});

const transaction = new Transaction().add(transferInstruction);

const transactionSignature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [sender]
);

console.log(`Transaction signature: ${transactionSignature}`)
const receiverAccountInfo = await connection.getAccountInfo(receiver.publicKey);
const senderAccountInfo = await connection.getAccountInfo(sender.publicKey);
console.log(JSON.stringify(senderAccountInfo, null, 2));
console.log(JSON.stringify(receiverAccountInfo, null, 2));