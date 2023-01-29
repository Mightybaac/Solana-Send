const { Client } = require('@solana/web3.js');
const fs = require('fs');

// Connect to a Solana node on the mainnet
const client = new Client('https://api.solana.com');

// Load private keys from a secure location
const PRIVATE_KEY_FILE = './private_key.txt';
let privateKey;
try {
  privateKey = fs.readFileSync(PRIVATE_KEY_FILE, 'utf8').trim();
} catch (error) {
  console.error(`Error reading private key from ${PRIVATE_KEY_FILE}: ${error}`);
  process.exit(1);
}

// Check the balance of a Solana address
const address = '8ZeTjC8XJmT7p5zQ3wTupap11yQ8DXQQ8HTohTdjFkCG';
async function checkBalance() {
  const balance = await client.getBalance(address);
  console.log(`Balance of ${address}: ${balance} SOL`);
}

// Send a transaction to another Solana address
const recipient = '8ZeTjC8XJmT7p5zQ3wTupap11yQ8DXQQ8HTohTdjFkCG';
const amount = '1000000000';
async function sendTransaction() {
  const { signature } = await client.transferWithSignature(amount, recipient, privateKey);
  console.log(`Transaction sent with signature: ${signature}`);
}

checkBalance();
sendTransaction();
