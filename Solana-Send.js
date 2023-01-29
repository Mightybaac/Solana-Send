const { Client } = require('@solana/web3.js');

// Connect to a Solana node
const client = new Client('https://testnet.solana.com');

// Check the balance of a Solana address
const address = '8ZeTjC8XJmT7p5zQ3wTupap11yQ8DXQQ8HTohTdjFkCG';
async function checkBalance() {
  const balance = await client.getBalance(address);
  console.log(`Balance of ${address}: ${balance}`);
}
checkBalance();

// Send a transaction to another Solana address
const sender = '8ZeTjC8XJmT7p5zQ3wTupap11yQ8DXQQ8HTohTdjFkCG';
const recipient = '8ZeTjC8XJmT7p5zQ3wTupap11yQ8DXQQ8HTohTdjFkCG';
const amount = '1000000000';
async function sendTransaction() {
  const { signature } = await client.transfer(amount, sender, recipient);
  console.log(`Transaction sent with signature: ${signature}`);
}
sendTransaction();
