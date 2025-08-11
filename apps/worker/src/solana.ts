import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import base58 from "bs58";

const connection = new Connection("https://api.devnet.solana.com", "finalized");

export async function sendSolanaTransaction(address: string, amount: string) {
    const keyPair = Keypair.fromSecretKey(base58.decode(process.env.SOLANA_PRIVATE_KEY ?? ""));
    const transferTransaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: keyPair.publicKey,
            toPubkey: new PublicKey(address),
            lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
        })
    );

    await sendAndConfirmTransaction(connection, transferTransaction, [keyPair]);
    console.log("Transaction sent successfully");
}