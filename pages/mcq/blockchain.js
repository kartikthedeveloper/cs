import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- Blockchain Basics (6) -----
  {
    id: 1,
    topic: "Blockchain Basics",
    question: "What is a blockchain?",
    options: [
      { label: "A", text: "A decentralized, distributed digital ledger" },
      { label: "B", text: "A type of cryptocurrency" },
      { label: "C", text: "A centralized database" },
      { label: "D", text: "A programming language" },
    ],
    answer: "A. A decentralized, distributed digital ledger",
  },
  {
    id: 2,
    topic: "Blockchain Basics",
    question: "What is the primary purpose of blockchain technology?",
    options: [
      { label: "A", text: "To enable secure, transparent, and tamper-proof transactions" },
      { label: "B", text: "To replace all traditional banks" },
      { label: "C", text: "To create a global currency" },
      { label: "D", text: "To mine cryptocurrency" },
    ],
    answer: "A. To enable secure, transparent, and tamper-proof transactions",
  },
  {
    id: 3,
    topic: "Blockchain Basics",
    question: "What is a block in a blockchain?",
    options: [
      { label: "A", text: "A collection of transactions bundled together" },
      { label: "B", text: "A single transaction" },
      { label: "C", text: "The entire chain of records" },
      { label: "D", text: "A cryptographic key" },
    ],
    answer: "A. A collection of transactions bundled together",
  },
  {
    id: 4,
    topic: "Blockchain Basics",
    question: "What links blocks together in a blockchain?",
    options: [
      { label: "A", text: "The previous block's hash" },
      { label: "B", text: "The block's timestamp" },
      { label: "C", text: "The block's transactions" },
      { label: "D", text: "The block's size" },
    ],
    answer: "A. The previous block's hash",
  },
  {
    id: 5,
    topic: "Blockchain Basics",
    question: "What is a hash function in blockchain?",
    options: [
      { label: "A", text: "A mathematical function that converts input into a fixed-length string" },
      { label: "B", text: "A type of cryptocurrency" },
      { label: "C", text: "A consensus algorithm" },
      { label: "D", text: "A digital signature" },
    ],
    answer: "A. A mathematical function that converts input into a fixed-length string",
  },
  {
    id: 6,
    topic: "Blockchain Basics",
    question: "What is the difference between public and private blockchain?",
    options: [
      { label: "A", text: "Public is open to anyone, private is restricted to authorized participants" },
      { label: "B", text: "Public is faster than private" },
      { label: "C", text: "Private is more secure than public" },
      { label: "D", text: "Public uses proof-of-work, private uses proof-of-stake" },
    ],
    answer: "A. Public is open to anyone, private is restricted to authorized participants",
  },

  // ----- Bitcoin (6) -----
  {
    id: 7,
    topic: "Bitcoin",
    question: "Who is the founder of Bitcoin?",
    options: [
      { label: "A", text: "Satoshi Nakamoto" },
      { label: "B", text: "Vitalik Buterin" },
      { label: "C", text: "Charles Hoskinson" },
      { label: "D", text: "Gavin Wood" },
    ],
    answer: "A. Satoshi Nakamoto",
  },
  {
    id: 8,
    topic: "Bitcoin",
    question: "On which blockchain is Bitcoin based?",
    options: [
      { label: "A", text: "Public blockchain" },
      { label: "B", text: "Private blockchain" },
      { label: "C", text: "Permissioned blockchain" },
      { label: "D", text: "Hybrid blockchain" },
    ],
    answer: "A. Public blockchain",
  },
  {
    id: 9,
    topic: "Bitcoin",
    question: "What is the consensus mechanism used by Bitcoin?",
    options: [
      { label: "A", text: "Proof of Work (PoW)" },
      { label: "B", text: "Proof of Stake (PoS)" },
      { label: "C", text: "Delegated Proof of Stake (DPoS)" },
      { label: "D", text: "Proof of Authority (PoA)" },
    ],
    answer: "A. Proof of Work (PoW)",
  },
  {
    id: 10,
    topic: "Bitcoin",
    question: "What is the maximum supply of Bitcoin?",
    options: [
      { label: "A", text: "21 million" },
      { label: "B", text: "100 million" },
      { label: "C", text: "1 billion" },
      { label: "D", text: "Unlimited" },
    ],
    answer: "A. 21 million",
  },
  {
    id: 11,
    topic: "Bitcoin",
    question: "What is a Bitcoin halving?",
    options: [
      { label: "A", text: "The reward for mining Bitcoin is reduced by half" },
      { label: "B", text: "The block time is halved" },
      { label: "C", text: "The price is halved" },
      { label: "D", text: "The number of transactions is halved" },
    ],
    answer: "A. The reward for mining Bitcoin is reduced by half",
  },
  {
    id: 12,
    topic: "Bitcoin",
    question: "What is the smallest unit of Bitcoin?",
    options: [
      { label: "A", text: "Satoshi" },
      { label: "B", text: "Wei" },
      { label: "C", text: "Gwei" },
      { label: "D", text: "Ether" },
    ],
    answer: "A. Satoshi",
  },

  // ----- Ethereum (6) -----
  {
    id: 13,
    topic: "Ethereum",
    question: "Who is the founder of Ethereum?",
    options: [
      { label: "A", text: "Vitalik Buterin" },
      { label: "B", text: "Satoshi Nakamoto" },
      { label: "C", text: "Charles Hoskinson" },
      { label: "D", text: "Gavin Wood" },
    ],
    answer: "A. Vitalik Buterin",
  },
  {
    id: 14,
    topic: "Ethereum",
    question: "What is the native cryptocurrency of Ethereum?",
    options: [
      { label: "A", text: "Ether (ETH)" },
      { label: "B", text: "Bitcoin (BTC)" },
      { label: "C", text: "Litecoin (LTC)" },
      { label: "D", text: "Cardano (ADA)" },
    ],
    answer: "A. Ether (ETH)",
  },
  {
    id: 15,
    topic: "Ethereum",
    question: "What is a smart contract?",
    options: [
      { label: "A", text: "A self-executing contract with the terms directly written into code" },
      { label: "B", text: "A legal document on the blockchain" },
      { label: "C", text: "A type of token" },
      { label: "D", text: "A consensus algorithm" },
    ],
    answer: "A. A self-executing contract with the terms directly written into code",
  },
  {
    id: 16,
    topic: "Ethereum",
    question: "What is the Ethereum Virtual Machine (EVM)?",
    options: [
      { label: "A", text: "A runtime environment for executing smart contracts" },
      { label: "B", text: "A type of cryptocurrency" },
      { label: "C", text: "A consensus mechanism" },
      { label: "D", text: "A mining pool" },
    ],
    answer: "A. A runtime environment for executing smart contracts",
  },
  {
    id: 17,
    topic: "Ethereum",
    question: "What is the token standard for fungible tokens on Ethereum?",
    options: [
      { label: "A", text: "ERC-20" },
      { label: "B", text: "ERC-721" },
      { label: "C", text: "ERC-1155" },
      { label: "D", text: "ERC-777" },
    ],
    answer: "A. ERC-20",
  },
  {
    id: 18,
    topic: "Ethereum",
    question: "What is the token standard for non-fungible tokens (NFTs) on Ethereum?",
    options: [
      { label: "A", text: "ERC-721" },
      { label: "B", text: "ERC-20" },
      { label: "C", text: "ERC-1155" },
      { label: "D", text: "ERC-777" },
    ],
    answer: "A. ERC-721",
  },

  // ----- Consensus Mechanisms (6) -----
  {
    id: 19,
    topic: "Consensus Mechanisms",
    question: "What is Proof of Work (PoW)?",
    options: [
      { label: "A", text: "A consensus mechanism requiring miners to solve complex puzzles" },
      { label: "B", text: "A mechanism where validators stake coins to validate blocks" },
      { label: "C", text: "A mechanism where users vote on block validity" },
      { label: "D", text: "A mechanism that uses authorities to validate" },
    ],
    answer: "A. A consensus mechanism requiring miners to solve complex puzzles",
  },
  {
    id: 20,
    topic: "Consensus Mechanisms",
    question: "What is Proof of Stake (PoS)?",
    options: [
      { label: "A", text: "A consensus mechanism where validators stake their coins to propose and validate blocks" },
      { label: "B", text: "A mechanism that uses mining" },
      { label: "C", text: "A mechanism that uses authorities" },
      { label: "D", text: "A mechanism that uses voting" },
    ],
    answer: "A. A consensus mechanism where validators stake their coins to propose and validate blocks",
  },
  {
    id: 21,
    topic: "Consensus Mechanisms",
    question: "Which blockchain uses Delegated Proof of Stake (DPoS)?",
    options: [
      { label: "A", text: "EOS" },
      { label: "B", text: "Bitcoin" },
      { label: "C", text: "Ethereum" },
      { label: "D", text: "Monero" },
    ],
    answer: "A. EOS",
  },
  {
    id: 22,
    topic: "Consensus Mechanisms",
    question: "What is a 51% attack?",
    options: [
      { label: "A", text: "An attack where a single entity controls more than 50% of the network's mining power" },
      { label: "B", text: "An attack where 51% of the nodes are offline" },
      { label: "C", text: "An attack where 51% of transactions are reverted" },
      { label: "D", text: "An attack where 51% of users lose their wallets" },
    ],
    answer: "A. An attack where a single entity controls more than 50% of the network's mining power",
  },
  {
    id: 23,
    topic: "Consensus Mechanisms",
    question: "What is the purpose of a consensus mechanism in blockchain?",
    options: [
      { label: "A", text: "To achieve agreement on the state of the ledger among distributed nodes" },
      { label: "B", text: "To mine new coins" },
      { label: "C", text: "To create smart contracts" },
      { label: "D", text: "To encrypt transactions" },
    ],
    answer: "A. To achieve agreement on the state of the ledger among distributed nodes",
  },
  {
    id: 24,
    topic: "Consensus Mechanisms",
    question: "Which consensus mechanism does Ethereum 2.0 use?",
    options: [
      { label: "A", text: "Proof of Stake (PoS)" },
      { label: "B", text: "Proof of Work (PoW)" },
      { label: "C", text: "Delegated Proof of Stake (DPoS)" },
      { label: "D", text: "Proof of Authority (PoA)" },
    ],
    answer: "A. Proof of Stake (PoS)",
  },

  // ----- Smart Contracts (6) -----
  {
    id: 25,
    topic: "Smart Contracts",
    question: "What is a smart contract?",
    options: [
      { label: "A", text: "A self-executing contract with the terms of the agreement directly written into code" },
      { label: "B", text: "A paper contract that is digitized" },
      { label: "C", text: "A legal document that is not enforceable" },
      { label: "D", text: "A type of digital signature" },
    ],
    answer: "A. A self-executing contract with the terms of the agreement directly written into code",
  },
  {
    id: 26,
    topic: "Smart Contracts",
    question: "Which programming language is commonly used for writing smart contracts on Ethereum?",
    options: [
      { label: "A", text: "Solidity" },
      { label: "B", text: "JavaScript" },
      { label: "C", text: "Python" },
      { label: "D", text: "C++" },
    ],
    answer: "A. Solidity",
  },
  {
    id: 27,
    topic: "Smart Contracts",
    question: "What is a decentralized application (dApp) built on smart contracts?",
    options: [
      { label: "A", text: "An application that runs on a blockchain" },
      { label: "B", text: "An application that runs on a single server" },
      { label: "C", text: "An application that uses centralized databases" },
      { label: "D", text: "An application that cannot be used without authorization" },
    ],
    answer: "A. An application that runs on a blockchain",
  },
  {
    id: 28,
    topic: "Smart Contracts",
    question: "What is the gas fee in Ethereum?",
    options: [
      { label: "A", text: "A fee paid to execute transactions and smart contracts" },
      { label: "B", text: "A tax on cryptocurrency gains" },
      { label: "C", text: "A fee to create a new account" },
      { label: "D", text: "A fee to transfer tokens" },
    ],
    answer: "A. A fee paid to execute transactions and smart contracts",
  },
  {
    id: 29,
    topic: "Smart Contracts",
    question: "What is the main advantage of using smart contracts?",
    options: [
      { label: "A", text: "They are automatically executed without intermediaries" },
      { label: "B", text: "They are cheaper than traditional contracts" },
      { label: "C", text: "They are more secure" },
      { label: "D", text: "They are faster to write" },
    ],
    answer: "A. They are automatically executed without intermediaries",
  },
  {
    id: 30,
    topic: "Smart Contracts",
    question: "Can smart contracts be updated after deployment?",
    options: [
      { label: "A", text: "No, they are immutable once deployed" },
      { label: "B", text: "Yes, they can be updated by the owner" },
      { label: "C", text: "Yes, but only through a governance vote" },
      { label: "D", text: "Yes, they can be deleted and redeployed" },
    ],
    answer: "A. No, they are immutable once deployed (though upgradeable patterns exist)",
  },

  // ----- Cryptocurrency (6) -----
  {
    id: 31,
    topic: "Cryptocurrency",
    question: "What is cryptocurrency?",
    options: [
      { label: "A", text: "Digital or virtual currency that uses cryptography for security" },
      { label: "B", text: "Physical money that is stored in banks" },
      { label: "C", text: "A type of stock" },
      { label: "D", text: "A government-issued currency" },
    ],
    answer: "A. Digital or virtual currency that uses cryptography for security",
  },
  {
    id: 32,
    topic: "Cryptocurrency",
    question: "Which of the following is a type of cryptocurrency?",
    options: [
      { label: "A", text: "Bitcoin" },
      { label: "B", text: "Ethereum" },
      { label: "C", text: "Litecoin" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 33,
    topic: "Cryptocurrency",
    question: "What is a token in cryptocurrency?",
    options: [
      { label: "A", text: "A digital asset created on top of an existing blockchain" },
      { label: "B", text: "The same as a coin" },
      { label: "C", text: "A physical token used for payment" },
      { label: "D", text: "A type of mining reward" },
    ],
    answer: "A. A digital asset created on top of an existing blockchain",
  },
  {
    id: 34,
    topic: "Cryptocurrency",
    question: "What are the different types of tokens in cryptocurrency?",
    options: [
      { label: "A", text: "Currency, privacy, and platform tokens" },
      { label: "B", text: "Only currency tokens" },
      { label: "C", text: "Only privacy tokens" },
      { label: "D", text: "Only platform tokens" },
    ],
    answer: "A. Currency, privacy, and platform tokens",
  },
  {
    id: 35,
    topic: "Cryptocurrency",
    question: "What is a stablecoin?",
    options: [
      { label: "A", text: "A cryptocurrency pegged to a stable asset like USD" },
      { label: "B", text: "A cryptocurrency that does not change in value" },
      { label: "C", text: "A type of mining hardware" },
      { label: "D", text: "A coin that is not traded" },
    ],
    answer: "A. A cryptocurrency pegged to a stable asset like USD",
  },
  {
    id: 36,
    topic: "Cryptocurrency",
    question: "What is the market capitalization of a cryptocurrency?",
    options: [
      { label: "A", text: "The total value of all coins in circulation multiplied by the price" },
      { label: "B", text: "The total number of coins ever created" },
      { label: "C", text: "The price of a single coin" },
      { label: "D", text: "The trading volume" },
    ],
    answer: "A. The total value of all coins in circulation multiplied by the price",
  },

  // ----- Wallets (6) -----
  {
    id: 37,
    topic: "Wallets",
    question: "What is a cryptocurrency wallet?",
    options: [
      { label: "A", text: "A software or hardware that stores private and public keys" },
      { label: "B", text: "A physical wallet for holding cash" },
      { label: "C", text: "A bank account for cryptocurrency" },
      { label: "D", text: "A type of exchange" },
    ],
    answer: "A. A software or hardware that stores private and public keys",
  },
  {
    id: 38,
    topic: "Wallets",
    question: "Where is cryptocurrency stored?",
    options: [
      { label: "A", text: "In a wallet" },
      { label: "B", text: "In a bank account" },
      { label: "C", text: "On a credit card" },
      { label: "D", text: "On a USB drive" },
    ],
    answer: "A. In a wallet",
  },
  {
    id: 39,
    topic: "Wallets",
    question: "What is the difference between a hot wallet and a cold wallet?",
    options: [
      { label: "A", text: "Hot wallet is connected to the internet, cold wallet is offline" },
      { label: "B", text: "Hot wallet is for large amounts, cold wallet for small" },
      { label: "C", text: "Hot wallet is free, cold wallet is paid" },
      { label: "D", text: "Hot wallet is used for trading, cold wallet for saving" },
    ],
    answer: "A. Hot wallet is connected to the internet, cold wallet is offline",
  },
  {
    id: 40,
    topic: "Wallets",
    question: "What is a private key in a wallet?",
    options: [
      { label: "A", text: "A secret code that allows you to access and manage your cryptocurrency" },
      { label: "B", text: "A public address to receive funds" },
      { label: "C", text: "A password for the exchange" },
      { label: "D", text: "A key for mining" },
    ],
    answer: "A. A secret code that allows you to access and manage your cryptocurrency",
  },
  {
    id: 41,
    topic: "Wallets",
    question: "What is a seed phrase in a wallet?",
    options: [
      { label: "A", text: "A list of words that can recover a wallet" },
      { label: "B", text: "A phrase used to encrypt transactions" },
      { label: "C", text: "A phrase for mining" },
      { label: "D", text: "A phrase for trading" },
    ],
    answer: "A. A list of words that can recover a wallet",
  },
  {
    id: 42,
    topic: "Wallets",
    question: "What is a multi-signature wallet?",
    options: [
      { label: "A", text: "A wallet that requires multiple private keys to authorize a transaction" },
      { label: "B", text: "A wallet with multiple currencies" },
      { label: "C", text: "A wallet that can be accessed from multiple devices" },
      { label: "D", text: "A wallet with multiple users" },
    ],
    answer: "A. A wallet that requires multiple private keys to authorize a transaction",
  },

  // ----- Mining (6) -----
  {
    id: 43,
    topic: "Mining",
    question: "What is mining in blockchain?",
    options: [
      { label: "A", text: "The process of validating transactions and adding them to the blockchain" },
      { label: "B", text: "Extracting physical minerals" },
      { label: "C", text: "Creating new cryptocurrencies" },
      { label: "D", text: "Storing data on the blockchain" },
    ],
    answer: "A. The process of validating transactions and adding them to the blockchain",
  },
  {
    id: 44,
    topic: "Mining",
    question: "What is a miner in terms of blockchain?",
    options: [
      { label: "A", text: "Computers that validate and process blockchain transactions" },
      { label: "B", text: "A person who mines gold" },
      { label: "C", text: "Transaction picking algorithm" },
      { label: "D", text: "Calculation of hash" },
    ],
    answer: "A. Computers that validate and process blockchain transactions",
  },
  {
    id: 45,
    topic: "Mining",
    question: "What is a mining pool?",
    options: [
      { label: "A", text: "A group of miners who combine their computational power to increase chances of finding a block" },
      { label: "B", text: "A single miner" },
      { label: "C", text: "A pool of cryptocurrencies" },
      { label: "D", text: "A type of wallet" },
    ],
    answer: "A. A group of miners who combine their computational power to increase chances of finding a block",
  },
  {
    id: 46,
    topic: "Mining",
    question: "What is the block reward in Bitcoin?",
    options: [
      { label: "A", text: "The number of bitcoins given to a miner for successfully mining a block" },
      { label: "B", text: "The fee paid by users for transactions" },
      { label: "C", text: "The total supply of bitcoins" },
      { label: "D", text: "The hash rate" },
    ],
    answer: "A. The number of bitcoins given to a miner for successfully mining a block",
  },
  {
    id: 47,
    topic: "Mining",
    question: "What is hashing in mining?",
    options: [
      { label: "A", text: "The process of converting input data into a fixed-size string of characters" },
      { label: "B", text: "The process of guessing the private key" },
      { label: "C", text: "The process of creating a new block" },
      { label: "D", text: "The process of signing transactions" },
    ],
    answer: "A. The process of converting input data into a fixed-size string of characters",
  },
  {
    id: 48,
    topic: "Mining",
    question: "What is the difficulty in mining?",
    options: [
      { label: "A", text: "A measure of how hard it is to find a new block" },
      { label: "B", text: "The number of miners on the network" },
      { label: "C", text: "The price of the cryptocurrency" },
      { label: "D", text: "The number of transactions" },
    ],
    answer: "A. A measure of how hard it is to find a new block",
  },

  // ----- Forks (6) -----
  {
    id: 49,
    topic: "Forks",
    question: "What is a fork in blockchain?",
    options: [
      { label: "A", text: "A split in the blockchain due to protocol changes" },
      { label: "B", text: "A type of transaction" },
      { label: "C", text: "A new cryptocurrency" },
      { label: "D", text: "A mining pool" },
    ],
    answer: "A. A split in the blockchain due to protocol changes",
  },
  {
    id: 50,
    topic: "Forks",
    question: "What is a hard fork?",
    options: [
      { label: "A", text: "A fork that is not backward-compatible" },
      { label: "B", text: "A fork that is backward-compatible" },
      { label: "C", text: "A fork that creates a new coin" },
      { label: "D", text: "A fork that does not split the chain" },
    ],
    answer: "A. A fork that is not backward-compatible",
  },
  {
    id: 51,
    topic: "Forks",
    question: "What is a soft fork?",
    options: [
      { label: "A", text: "A fork that is backward-compatible" },
      { label: "B", text: "A fork that creates a new blockchain" },
      { label: "C", text: "A fork that requires new mining hardware" },
      { label: "D", text: "A fork that is not backward-compatible" },
    ],
    answer: "A. A fork that is backward-compatible",
  },
  {
    id: 52,
    topic: "Forks",
    question: "What is the term for when a blockchain splits?",
    options: [
      { label: "A", text: "Fork" },
      { label: "B", text: "Split" },
      { label: "C", text: "Divide" },
      { label: "D", text: "None of the above" },
    ],
    answer: "A. Fork",
  },
  {
    id: 53,
    topic: "Forks",
    question: "Which fork resulted in the creation of Bitcoin Cash?",
    options: [
      { label: "A", text: "Hard fork from Bitcoin" },
      { label: "B", text: "Soft fork from Bitcoin" },
      { label: "C", text: "Hard fork from Ethereum" },
      { label: "D", text: "Soft fork from Ethereum" },
    ],
    answer: "A. Hard fork from Bitcoin",
  },
  {
    id: 54,
    topic: "Forks",
    question: "What is a governance fork?",
    options: [
      { label: "A", text: "A fork that occurs due to disagreements in community governance" },
      { label: "B", text: "A fork that changes the mining algorithm" },
      { label: "C", text: "A fork that splits the blockchain in two" },
      { label: "D", text: "A fork that is not consensus-based" },
    ],
    answer: "A. A fork that occurs due to disagreements in community governance",
  },

  // ----- Security (6) -----
  {
    id: 55,
    topic: "Security",
    question: "What is the impact of information leaks on an organization?",
    options: [
      { label: "A", text: "Loss of reputation" },
      { label: "B", text: "Loss of revenue" },
      { label: "C", text: "Loss of customer trust" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 56,
    topic: "Security",
    question: "What is a 51% attack?",
    options: [
      { label: "A", text: "A situation where a miner or group controls more than half of the network's mining power" },
      { label: "B", text: "A type of hacking attack" },
      { label: "C", text: "A phishing attack" },
      { label: "D", text: "A virus on the blockchain" },
    ],
    answer: "A. A situation where a miner or group controls more than half of the network's mining power",
  },
  {
    id: 57,
    topic: "Security",
    question: "What is the role of cryptography in blockchain security?",
    options: [
      { label: "A", text: "To secure transactions and control the creation of new coins" },
      { label: "B", text: "To provide user anonymity" },
      { label: "C", text: "To encrypt the entire blockchain" },
      { label: "D", text: "To secure the network from DDoS attacks" },
    ],
    answer: "A. To secure transactions and control the creation of new coins",
  },
  {
    id: 58,
    topic: "Security",
    question: "What is a private key?",
    options: [
      { label: "A", text: "A secret key used to sign transactions and prove ownership" },
      { label: "B", text: "A public key used to receive funds" },
      { label: "C", text: "A password for the wallet" },
      { label: "D", text: "A key for mining" },
    ],
    answer: "A. A secret key used to sign transactions and prove ownership",
  },
  {
    id: 59,
    topic: "Security",
    question: "What is a public key?",
    options: [
      { label: "A", text: "A key used to receive cryptocurrency" },
      { label: "B", text: "A key used to sign transactions" },
      { label: "C", text: "A key used to encrypt data" },
      { label: "D", text: "A key used to mine" },
    ],
    answer: "A. A key used to receive cryptocurrency",
  },
  {
    id: 60,
    topic: "Security",
    question: "What is a double-spending attack?",
    options: [
      { label: "A", text: "An attack where the same cryptocurrency is spent more than once" },
      { label: "B", text: "An attack where the network is doubled" },
      { label: "C", text: "An attack where miners double their rewards" },
      { label: "D", text: "An attack where users double their coins" },
    ],
    answer: "A. An attack where the same cryptocurrency is spent more than once",
  },

  // ----- Decentralization (6) -----
  {
    id: 61,
    topic: "Decentralization",
    question: "What does decentralization mean in blockchain?",
    options: [
      { label: "A", text: "No single entity controls the network" },
      { label: "B", text: "The network is controlled by a central authority" },
      { label: "C", text: "The network is controlled by a few large entities" },
      { label: "D", text: "The network is controlled by the government" },
    ],
    answer: "A. No single entity controls the network",
  },
  {
    id: 62,
    topic: "Decentralization",
    question: "What is a decentralized application (dApp)?",
    options: [
      { label: "A", text: "An application that runs on a decentralized network" },
      { label: "B", text: "An application that runs on a centralized server" },
      { label: "C", text: "An application that is controlled by a single authority" },
      { label: "D", text: "An application that does not require a user interface" },
    ],
    answer: "A. An application that runs on a decentralized network",
  },
  {
    id: 63,
    topic: "Decentralization",
    question: "What is a Decentralized Autonomous Organization (DAO)?",
    options: [
      { label: "A", text: "An organization governed by smart contracts without a central authority" },
      { label: "B", text: "A traditional organization with a CEO" },
      { label: "C", text: "A government agency" },
      { label: "D", text: "A type of cryptocurrency" },
    ],
    answer: "A. An organization governed by smart contracts without a central authority",
  },
  {
    id: 64,
    topic: "Decentralization",
    question: "What is a node in a blockchain network?",
    options: [
      { label: "A", text: "A computer that maintains a copy of the blockchain and participates in the network" },
      { label: "B", text: "A transaction" },
      { label: "C", text: "A block" },
      { label: "D", text: "A wallet" },
    ],
    answer: "A. A computer that maintains a copy of the blockchain and participates in the network",
  },
  {
    id: 65,
    topic: "Decentralization",
    question: "What is the benefit of decentralization?",
    options: [
      { label: "A", text: "Increased security and resistance to censorship" },
      { label: "B", text: "Faster transactions" },
      { label: "C", text: "Lower energy consumption" },
      { label: "D", text: "Higher profitability" },
    ],
    answer: "A. Increased security and resistance to censorship",
  },
  {
    id: 66,
    topic: "Decentralization",
    question: "What is the role of miners in a decentralized network?",
    options: [
      { label: "A", text: "They validate and secure transactions" },
      { label: "B", text: "They create new coins" },
      { label: "C", text: "They govern the network" },
      { label: "D", text: "They design smart contracts" },
    ],
    answer: "A. They validate and secure transactions",
  },

  // ----- Applications (6) -----
  {
    id: 67,
    topic: "Applications",
    question: "What is a typical use case of blockchain beyond cryptocurrency?",
    options: [
      { label: "A", text: "Supply chain management" },
      { label: "B", text: "Voting systems" },
      { label: "C", text: "Healthcare records" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 68,
    topic: "Applications",
    question: "How can blockchain be used in supply chain?",
    options: [
      { label: "A", text: "To track the provenance and movement of goods" },
      { label: "B", text: "To pay for goods" },
      { label: "C", text: "To create invoices" },
      { label: "D", text: "To store product images" },
    ],
    answer: "A. To track the provenance and movement of goods",
  },
  {
    id: 69,
    topic: "Applications",
    question: "What is a smart contract used for in real estate?",
    options: [
      { label: "A", text: "To automate property transfers and escrow" },
      { label: "B", text: "To pay property taxes" },
      { label: "C", text: "To store property deeds" },
      { label: "D", text: "To manage maintenance requests" },
    ],
    answer: "A. To automate property transfers and escrow",
  },
  {
    id: 70,
    topic: "Applications",
    question: "How can blockchain improve voting systems?",
    options: [
      { label: "A", text: "By providing a transparent and tamper-proof record of votes" },
      { label: "B", text: "By allowing remote voting without security" },
      { label: "C", text: "By eliminating the need for voters" },
      { label: "D", text: "By counting votes faster" },
    ],
    answer: "A. By providing a transparent and tamper-proof record of votes",
  },
  {
    id: 71,
    topic: "Applications",
    question: "What is a digital identity on blockchain?",
    options: [
      { label: "A", text: "A decentralized identity that users control" },
      { label: "B", text: "A government-issued ID" },
      { label: "C", text: "A social media profile" },
      { label: "D", text: "A username on an exchange" },
    ],
    answer: "A. A decentralized identity that users control",
  },
  {
    id: 72,
    topic: "Applications",
    question: "What is the role of blockchain in healthcare?",
    options: [
      { label: "A", text: "To securely store patient records and share them with authorized parties" },
      { label: "B", text: "To replace doctors" },
      { label: "C", text: "To mine patient data" },
      { label: "D", text: "To issue medical bills" },
    ],
    answer: "A. To securely store patient records and share them with authorized parties",
  },

  // ----- Scalability (6) -----
  {
    id: 73,
    topic: "Scalability",
    question: "What is the scalability problem in blockchain?",
    options: [
      { label: "A", text: "The inability to process a large number of transactions quickly" },
      { label: "B", text: "The inability to store large amounts of data" },
      { label: "C", text: "The inability to add new nodes" },
      { label: "D", text: "The inability to create new blocks" },
    ],
    answer: "A. The inability to process a large number of transactions quickly",
  },
  {
    id: 74,
    topic: "Scalability",
    question: "What is a Layer 2 solution in blockchain?",
    options: [
      { label: "A", text: "A protocol built on top of the main blockchain to improve scalability" },
      { label: "B", text: "A new blockchain" },
      { label: "C", text: "A sidechain" },
      { label: "D", text: "A hard fork" },
    ],
    answer: "A. A protocol built on top of the main blockchain to improve scalability",
  },
  {
    id: 75,
    topic: "Scalability",
    question: "What is the Lightning Network?",
    options: [
      { label: "A", text: "A Layer 2 scaling solution for Bitcoin" },
      { label: "B", text: "A new cryptocurrency" },
      { label: "C", text: "A mining pool" },
      { label: "D", text: "A wallet" },
    ],
    answer: "A. A Layer 2 scaling solution for Bitcoin",
  },
  {
    id: 76,
    topic: "Scalability",
    question: "What is sharding in blockchain?",
    options: [
      { label: "A", text: "A technique to split the blockchain into smaller parts to increase throughput" },
      { label: "B", text: "A way to mine multiple blocks at once" },
      { label: "C", text: "A consensus mechanism" },
      { label: "D", text: "A type of fork" },
    ],
    answer: "A. A technique to split the blockchain into smaller parts to increase throughput",
  },
  {
    id: 77,
    topic: "Scalability",
    question: "What is the transaction throughput of Bitcoin?",
    options: [
      { label: "A", text: "Approximately 7 transactions per second" },
      { label: "B", text: "Approximately 100 transactions per second" },
      { label: "C", text: "Approximately 1,000 transactions per second" },
      { label: "D", text: "Approximately 10,000 transactions per second" },
    ],
    answer: "A. Approximately 7 transactions per second",
  },
  {
    id: 78,
    topic: "Scalability",
    question: "What is the block size limit in Bitcoin?",
    options: [
      { label: "A", text: "1 MB" },
      { label: "B", text: "2 MB" },
      { label: "C", text: "4 MB" },
      { label: "D", text: "8 MB" },
    ],
    answer: "A. 1 MB",
  },

  // ----- Interoperability (6) -----
  {
    id: 79,
    topic: "Interoperability",
    question: "What is interoperability in blockchain?",
    options: [
      { label: "A", text: "The ability of different blockchain networks to communicate and share data" },
      { label: "B", text: "The ability of a blockchain to process more transactions" },
      { label: "C", text: "The ability of a blockchain to store more data" },
      { label: "D", text: "The ability of a blockchain to be upgraded" },
    ],
    answer: "A. The ability of different blockchain networks to communicate and share data",
  },
  {
    id: 80,
    topic: "Interoperability",
    question: "What is a blockchain bridge?",
    options: [
      { label: "A", text: "A connection that allows assets and data to move between blockchains" },
      { label: "B", text: "A physical bridge" },
      { label: "C", text: "A type of wallet" },
      { label: "D", text: "A consensus mechanism" },
    ],
    answer: "A. A connection that allows assets and data to move between blockchains",
  },
  {
    id: 81,
    topic: "Interoperability",
    question: "What is a sidechain?",
    options: [
      { label: "A", text: "A separate blockchain that is connected to a main blockchain" },
      { label: "B", text: "A type of transaction" },
      { label: "C", text: "A mining algorithm" },
      { label: "D", text: "A smart contract" },
    ],
    answer: "A. A separate blockchain that is connected to a main blockchain",
  },
  {
    id: 82,
    topic: "Interoperability",
    question: "What is the purpose of cross-chain communication?",
    options: [
      { label: "A", text: "To enable interoperability and transfer of value between blockchains" },
      { label: "B", text: "To increase block size" },
      { label: "C", text: "To improve mining efficiency" },
      { label: "D", text: "To centralize the network" },
    ],
    answer: "A. To enable interoperability and transfer of value between blockchains",
  },
  {
    id: 83,
    topic: "Interoperability",
    question: "What is Polkadot known for?",
    options: [
      { label: "A", text: "Interoperability between multiple blockchains" },
      { label: "B", text: "High scalability" },
      { label: "C", text: "Privacy" },
      { label: "D", text: "Smart contracts" },
    ],
    answer: "A. Interoperability between multiple blockchains",
  },
  {
    id: 84,
    topic: "Interoperability",
    question: "What is a wrapped token?",
    options: [
      { label: "A", text: "A token that represents another asset on a different blockchain" },
      { label: "B", text: "A token that is wrapped in a smart contract" },
      { label: "C", text: "A token that is hidden" },
      { label: "D", text: "A token that is encrypted" },
    ],
    answer: "A. A token that represents another asset on a different blockchain",
  },

  // ----- Privacy (6) -----
  {
    id: 85,
    topic: "Privacy",
    question: "What is a privacy coin?",
    options: [
      { label: "A", text: "A cryptocurrency that focuses on hiding transaction details" },
      { label: "B", text: "A coin that is not regulated" },
      { label: "C", text: "A coin with high liquidity" },
      { label: "D", text: "A coin that is used for privacy policies" },
    ],
    answer: "A. A cryptocurrency that focuses on hiding transaction details",
  },
  {
    id: 86,
    topic: "Privacy",
    question: "Which of the following is a privacy coin?",
    options: [
      { label: "A", text: "Monero" },
      { label: "B", text: "Zcash" },
      { label: "C", text: "Dash" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 87,
    topic: "Privacy",
    question: "What is a zk-SNARK?",
    options: [
      { label: "A", text: "A cryptographic proof that allows transactions to be verified without revealing the details" },
      { label: "B", text: "A type of mining algorithm" },
      { label: "C", text: "A consensus mechanism" },
      { label: "D", text: "A wallet type" },
    ],
    answer: "A. A cryptographic proof that allows transactions to be verified without revealing the details",
  },
  {
    id: 88,
    topic: "Privacy",
    question: "What is the purpose of ring signatures?",
    options: [
      { label: "A", text: "To hide the sender of a transaction among a group" },
      { label: "B", text: "To encrypt the transaction data" },
      { label: "C", text: "To sign the transaction with multiple keys" },
      { label: "D", text: "To increase transaction speed" },
    ],
    answer: "A. To hide the sender of a transaction among a group",
  },
  {
    id: 89,
    topic: "Privacy",
    question: "What is a stealth address?",
    options: [
      { label: "A", text: "A one-time address used to receive funds to protect privacy" },
      { label: "B", text: "A permanent address" },
      { label: "C", text: "A public address" },
      { label: "D", text: "A mining address" },
    ],
    answer: "A. A one-time address used to receive funds to protect privacy",
  },
  {
    id: 90,
    topic: "Privacy",
    question: "What is the trade-off of privacy coins?",
    options: [
      { label: "A", text: "They may be used for illicit activities" },
      { label: "B", text: "They have lower scalability" },
      { label: "C", text: "They are less secure" },
      { label: "D", text: "They are more centralized" },
    ],
    answer: "A. They may be used for illicit activities",
  },

  // ----- Governance (6) -----
  {
    id: 91,
    topic: "Governance",
    question: "What is on-chain governance?",
    options: [
      { label: "A", text: "A governance mechanism where decisions are made through blockchain-based voting" },
      { label: "B", text: "A governance mechanism off the blockchain" },
      { label: "C", text: "A type of consensus" },
      { label: "D", text: "A type of fork" },
    ],
    answer: "A. A governance mechanism where decisions are made through blockchain-based voting",
  },
  {
    id: 92,
    topic: "Governance",
    question: "What is off-chain governance?",
    options: [
      { label: "A", text: "Governance decisions made outside the blockchain" },
      { label: "B", text: "Governance decisions made through smart contracts" },
      { label: "C", text: "Governance decisions made by miners" },
      { label: "D", text: "Governance decisions made by the community" },
    ],
    answer: "A. Governance decisions made outside the blockchain",
  },
  {
    id: 93,
    topic: "Governance",
    question: "What is a DAO?",
    options: [
      { label: "A", text: "A Decentralized Autonomous Organization" },
      { label: "B", text: "A Distributed Application Organization" },
      { label: "C", text: "A Digital Asset Operation" },
      { label: "D", text: "A Direct Access Order" },
    ],
    answer: "A. A Decentralized Autonomous Organization",
  },
  {
    id: 94,
    topic: "Governance",
    question: "What is a governance token?",
    options: [
      { label: "A", text: "A token that allows holders to vote on protocol decisions" },
      { label: "B", text: "A token that is used for mining" },
      { label: "C", text: "A token that is used for staking" },
      { label: "D", text: "A token that is used for transactions" },
    ],
    answer: "A. A token that allows holders to vote on protocol decisions",
  },
  {
    id: 95,
    topic: "Governance",
    question: "What is the role of a governance proposal?",
    options: [
      { label: "A", text: "To suggest changes to the protocol" },
      { label: "B", text: "To mine new blocks" },
      { label: "C", text: "To create new tokens" },
      { label: "D", text: "To validate transactions" },
    ],
    answer: "A. To suggest changes to the protocol",
  },
  {
    id: 96,
    topic: "Governance",
    question: "What is a constitutional blockchain?",
    options: [
      { label: "A", text: "A blockchain with a formal constitution that governs its operation" },
      { label: "B", text: "A blockchain used by governments" },
      { label: "C", text: "A blockchain that cannot be forked" },
      { label: "D", text: "A blockchain that is regulated" },
    ],
    answer: "A. A blockchain with a formal constitution that governs its operation",
  },

  // ----- NFTs (6) -----
  {
    id: 97,
    topic: "NFTs",
    question: "What does NFT stand for?",
    options: [
      { label: "A", text: "Non-Fungible Token" },
      { label: "B", text: "Non-Fungible Transaction" },
      { label: "C", text: "Network Fungible Token" },
      { label: "D", text: "New Finance Token" },
    ],
    answer: "A. Non-Fungible Token",
  },
  {
    id: 98,
    topic: "NFTs",
    question: "What does 'non-fungible' mean?",
    options: [
      { label: "A", text: "Unique and not interchangeable" },
      { label: "B", text: "Interchangeable" },
      { label: "C", text: "Fungible" },
      { label: "D", text: "Divisible" },
    ],
    answer: "A. Unique and not interchangeable",
  },
  {
    id: 99,
    topic: "NFTs",
    question: "What is the most common token standard for NFTs on Ethereum?",
    options: [
      { label: "A", text: "ERC-721" },
      { label: "B", text: "ERC-20" },
      { label: "C", text: "ERC-1155" },
      { label: "D", text: "ERC-777" },
    ],
    answer: "A. ERC-721",
  },
  {
    id: 100,
    topic: "NFTs",
    question: "What is an NFT primarily used for?",
    options: [
      { label: "A", text: "Representing ownership of digital assets like art, music, collectibles" },
      { label: "B", text: "Sending payments" },
      { label: "C", text: "Mining" },
      { label: "D", text: "Staking" },
    ],
    answer: "A. Representing ownership of digital assets like art, music, collectibles",
  },
  {
    id: 101,
    topic: "NFTs",
    question: "Where are NFTs stored?",
    options: [
      { label: "A", text: "On the blockchain" },
      { label: "B", text: "On a centralized server" },
      { label: "C", text: "On a wallet" },
      { label: "D", text: "On a hard drive" },
    ],
    answer: "A. On the blockchain",
  },
  {
    id: 102,
    topic: "NFTs",
    question: "What is the difference between an NFT and a cryptocurrency?",
    options: [
      { label: "A", text: "NFTs are unique, cryptocurrencies are fungible" },
      { label: "B", text: "Cryptocurrencies are unique, NFTs are fungible" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "NFTs cannot be traded" },
    ],
    answer: "A. NFTs are unique, cryptocurrencies are fungible",
  },

  // ----- DeFi (6) -----
  {
    id: 103,
    topic: "DeFi",
    question: "What does DeFi stand for?",
    options: [
      { label: "A", text: "Decentralized Finance" },
      { label: "B", text: "Distributed Finance" },
      { label: "C", text: "Digital Finance" },
      { label: "D", text: "Direct Finance" },
    ],
    answer: "A. Decentralized Finance",
  },
  {
    id: 104,
    topic: "DeFi",
    question: "What is the purpose of DeFi?",
    options: [
      { label: "A", text: "To create an open, permissionless financial system" },
      { label: "B", text: "To replace traditional banks" },
      { label: "C", text: "To centralize finance" },
      { label: "D", text: "To increase government control" },
    ],
    answer: "A. To create an open, permissionless financial system",
  },
  {
    id: 105,
    topic: "DeFi",
    question: "What is a DEX in DeFi?",
    options: [
      { label: "A", text: "Decentralized Exchange" },
      { label: "B", text: "Digital Exchange" },
      { label: "C", text: "Direct Exchange" },
      { label: "D", text: "Distributed Exchange" },
    ],
    answer: "A. Decentralized Exchange",
  },
  {
    id: 106,
    topic: "DeFi",
    question: "What is yield farming?",
    options: [
      { label: "A", text: "The process of staking or lending crypto to earn rewards" },
      { label: "B", text: "Mining for new coins" },
      { label: "C", text: "Buying and selling tokens" },
      { label: "D", text: "Creating NFTs" },
    ],
    answer: "A. The process of staking or lending crypto to earn rewards",
  },
  {
    id: 107,
    topic: "DeFi",
    question: "What is liquidity provision in DeFi?",
    options: [
      { label: "A", text: "Supplying assets to a decentralized exchange to enable trading" },
      { label: "B", text: "Mining blocks" },
      { label: "C", text: "Creating new tokens" },
      { label: "D", text: "Governance voting" },
    ],
    answer: "A. Supplying assets to a decentralized exchange to enable trading",
  },
  {
    id: 108,
    topic: "DeFi",
    question: "What is an automated market maker (AMM)?",
    options: [
      { label: "A", text: "A smart contract that automatically creates liquidity pools and determines prices" },
      { label: "B", text: "A person who makes markets" },
      { label: "C", text: "A centralized exchange" },
      { label: "D", text: "A mining pool" },
    ],
    answer: "A. A smart contract that automatically creates liquidity pools and determines prices",
  },

  // ----- Security Tokens & STOs (6) -----
  {
    id: 109,
    topic: "Security Tokens",
    question: "What is a security token?",
    options: [
      { label: "A", text: "A token that represents ownership in a real-world asset, subject to regulations" },
      { label: "B", text: "A token used for security purposes" },
      { label: "C", text: "A token that is not tradable" },
      { label: "D", text: "A token for mining" },
    ],
    answer: "A. A token that represents ownership in a real-world asset, subject to regulations",
  },
  {
    id: 110,
    topic: "Security Tokens",
    question: "What is an STO?",
    options: [
      { label: "A", text: "Security Token Offering" },
      { label: "B", text: "Simple Token Offering" },
      { label: "C", text: "Standard Token Offering" },
      { label: "D", text: "Smart Token Offering" },
    ],
    answer: "A. Security Token Offering",
  },
  {
    id: 111,
    topic: "Security Tokens",
    question: "How are security tokens different from utility tokens?",
    options: [
      { label: "A", text: "Security tokens represent investment contracts; utility tokens provide access to a service" },
      { label: "B", text: "Security tokens are used for governance; utility tokens for transactions" },
      { label: "C", text: "They are the same" },
      { label: "D", text: "Security tokens are for games; utility tokens for finance" },
    ],
    answer: "A. Security tokens represent investment contracts; utility tokens provide access to a service",
  },
  {
    id: 112,
    topic: "Security Tokens",
    question: "What is the regulatory status of security tokens?",
    options: [
      { label: "A", text: "They are often subject to securities laws" },
      { label: "B", text: "They are unregulated" },
      { label: "C", text: "They are banned" },
      { label: "D", text: "They are only allowed in some countries" },
    ],
    answer: "A. They are often subject to securities laws",
  },
  {
    id: 113,
    topic: "Security Tokens",
    question: "What is the purpose of a security token?",
    options: [
      { label: "A", text: "To represent ownership in a company or asset" },
      { label: "B", text: "To pay for services" },
      { label: "C", text: "To mine blocks" },
      { label: "D", text: "To govern a protocol" },
    ],
    answer: "A. To represent ownership in a company or asset",
  },
  {
    id: 114,
    topic: "Security Tokens",
    question: "What is a blockchain-based security?",
    options: [
      { label: "A", text: "A security token issued on a blockchain" },
      { label: "B", text: "A traditional security" },
      { label: "C", text: "A mining contract" },
      { label: "D", text: "A smart contract security" },
    ],
    answer: "A. A security token issued on a blockchain",
  },

  // ----- Blockchain Oracles (6) -----
  {
    id: 115,
    topic: "Oracles",
    question: "What is a blockchain oracle?",
    options: [
      { label: "A", text: "A service that provides external data to smart contracts" },
      { label: "B", text: "A type of node" },
      { label: "C", text: "A mining algorithm" },
      { label: "D", text: "A wallet" },
    ],
    answer: "A. A service that provides external data to smart contracts",
  },
  {
    id: 116,
    topic: "Oracles",
    question: "Why are oracles needed in blockchain?",
    options: [
      { label: "A", text: "Blockchains cannot access off-chain data directly" },
      { label: "B", text: "To increase transaction speed" },
      { label: "C", text: "To reduce fees" },
      { label: "D", text: "To mine more efficiently" },
    ],
    answer: "A. Blockchains cannot access off-chain data directly",
  },
  {
    id: 117,
    topic: "Oracles",
    question: "What is a decentralized oracle network?",
    options: [
      { label: "A", text: "A network of multiple oracles to ensure data reliability" },
      { label: "B", text: "A single oracle" },
      { label: "C", text: "A centralized oracle" },
      { label: "D", text: "A type of smart contract" },
    ],
    answer: "A. A network of multiple oracles to ensure data reliability",
  },
  {
    id: 118,
    topic: "Oracles",
    question: "Which project is known for providing decentralized oracles?",
    options: [
      { label: "A", text: "Chainlink" },
      { label: "B", text: "Polkadot" },
      { label: "C", text: "Solana" },
      { label: "D", text: "Cardano" },
    ],
    answer: "A. Chainlink",
  },
  {
    id: 119,
    topic: "Oracles",
    question: "What type of data can an oracle provide?",
    options: [
      { label: "A", text: "Price feeds, weather data, sports scores, etc." },
      { label: "B", text: "Only financial data" },
      { label: "C", text: "Only random numbers" },
      { label: "D", text: "Only blockchain data" },
    ],
    answer: "A. Price feeds, weather data, sports scores, etc.",
  },
  {
    id: 120,
    topic: "Oracles",
    question: "What is the oracle problem?",
    options: [
      { label: "A", text: "The challenge of ensuring data from off-chain sources is reliable and secure" },
      { label: "B", text: "The problem of slow oracles" },
      { label: "C", text: "The problem of expensive oracles" },
      { label: "D", text: "The problem of centralized oracles" },
    ],
    answer: "A. The challenge of ensuring data from off-chain sources is reliable and secure",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is Blockchain?",
    answer:
      "Blockchain is a decentralized, distributed digital ledger that records transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks.",
  },
  {
    question: "Why should I practice Blockchain MCQs?",
    answer:
      "Practicing Blockchain MCQs helps prepare for interviews, competitive exams, and placement tests. It strengthens your understanding of blockchain fundamentals, cryptocurrencies, smart contracts, and distributed systems.",
  },
  {
    question: "What are the key topics in Blockchain?",
    answer:
      "Key topics include Blockchain Basics, Bitcoin, Ethereum, Smart Contracts, Consensus Mechanisms, Wallets, Mining, Forks, Security, Decentralization, DeFi, NFTs, and more.",
  },
  {
    question: "How can I prepare for Blockchain interviews?",
    answer:
      "Start with the basics, practice MCQs, build small projects, understand consensus algorithms, study real-world applications, and follow the latest trends in the blockchain space.",
  },
  {
    question: "Is Blockchain only about cryptocurrency?",
    answer:
      "No, blockchain has many applications beyond cryptocurrency, including supply chain, healthcare, voting, digital identity, and decentralized finance (DeFi).",
  },
  {
    question: "What is the future of Blockchain technology?",
    answer:
      "Blockchain is expected to revolutionize many industries by providing transparent, secure, and decentralized solutions. With advancements in scalability and interoperability, blockchain will become more integrated into everyday systems.",
  },
];

// ========================== COMPONENT ==========================
export default function BlockchainMcq() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Extract unique topics
  const topics = Array.from(new Set(questionsData.map((q) => q.topic)));

  const filteredQuestions = selectedTopic
    ? questionsData.filter((q) => q.topic === selectedTopic)
    : questionsData;

  const getTopicCount = (topic) => {
    return questionsData.filter((q) => q.topic === topic).length;
  };

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://CodeSkipper.in/mcq/blockchain",
        "url": "https://CodeSkipper.in/mcq/blockchain",
        "name": "Blockchain Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Blockchain, covering Bitcoin, Ethereum, smart contracts, consensus mechanisms, and more.",
        "about": { "@type": "Thing", "name": "Blockchain MCQ" },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": questionsData.map((q, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": { "@type": "Question", "name": q.question, "text": q.question },
          })),
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://CodeSkipper.in" },
            { "@type": "ListItem", "position": 2, "name": "MCQ", "item": "https://CodeSkipper.in/mcq" },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Blockchain",
              "item": "https://CodeSkipper.in/mcq/blockchain",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://CodeSkipper.in/#website",
        "url": "https://CodeSkipper.in",
        "name": "Code Skipper",
        "description": "Learn programming, AI, and data science with tutorials, MCQs, and resources.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://CodeSkipper.in/#organization",
          "name": "Code Skipper",
          "logo": { "@type": "ImageObject", "url": "https://CodeSkipper.in/Images/logo.png" },
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://CodeSkipper.in/search?q={search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://CodeSkipper.in/#organization",
        "name": "Code Skipper",
        "url": "https://CodeSkipper.in",
        "logo": { "@type": "ImageObject", "url": "https://CodeSkipper.in/Images/logo.png", "width": "150", "height": "150" },
        "description": "Code Skipper provides programming tutorials, MCQs, and learning resources.",
        "email": "contact@CodeSkipper.in",
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://CodeSkipper.in/#educational",
        "name": "Code Skipper",
        "url": "https://CodeSkipper.in",
        "description": "Educational platform for programming and AI learning.",
      },
      {
        "@type": "Course",
        "@id": "https://CodeSkipper.in/mcq/blockchain#course",
        "name": "Blockchain MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Blockchain exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Blockchain" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/blockchain#faq",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      },
    ],
  };

  return (
    <CourseLayout>
      <Head>
        <title>Blockchain MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Blockchain multiple-choice questions with answers. Covers Bitcoin, Ethereum, smart contracts, consensus mechanisms, DeFi, NFTs, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Blockchain, MCQs, Blockchain MCQ, Bitcoin, Ethereum, Smart Contracts, Consensus, Cryptocurrency, DeFi, NFTs, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/blockchain" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/blockchain" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/blockchain" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/blockchain" />
        <meta property="og:title" content="Blockchain MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Blockchain multiple-choice questions covering Bitcoin, Ethereum, smart contracts, consensus, DeFi, NFTs, and more."
        />
        <meta property="og:image" content="https://CodeSkipper.in/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:site_name" content="Code Skipper" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CodeSkipper" />
        <meta name="twitter:title" content="Blockchain MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Blockchain multiple-choice questions covering Bitcoin, Ethereum, smart contracts, consensus, DeFi, NFTs, and more."
        />
        <meta name="twitter:image" content="https://CodeSkipper.in/Images/logo.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="relative xl:container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ===== HERO ===== */}
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              🎯 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Blockchain <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master Blockchain concepts with 120+ curated MCQs covering Bitcoin, Ethereum,
              smart contracts, consensus mechanisms, DeFi, NFTs, and more. Perfect for exams,
              interviews, and placement preparation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">20 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">120+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Exam Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-purple-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore Blockchain Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
                aria-label={`Filter by ${topic}`}
              >
                <span className="block truncate">{topic}</span>
                <span className="text-xs text-gray-400 font-normal">{getTopicCount(topic)} questions</span>
              </button>
            ))}
          </div>
          {selectedTopic && (
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Showing <strong>{filteredQuestions.length}</strong> questions for{" "}
                <strong className="text-blue-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filter ✕
              </button>
            </div>
          )}
        </section>

        {/* ===== MCQ LIST ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📝</span>
            Blockchain MCQs
            <span className="ml-2 text-sm font-normal text-gray-500">({filteredQuestions.length} questions)</span>
          </h2>
          <div className="space-y-6">
            {filteredQuestions.map((q, index) => (
              <article
                key={q.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                      {q.question}
                    </p>
                  </div>
                  <ul className="space-y-2 ml-11">
                    {q.options.map((option) => (
                      <li key={option.label} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold flex items-center justify-center">
                          {option.label}
                        </span>
                        <p className="text-gray-700 text-sm md:text-base">{option.text}</p>
                      </li>
                    ))}
                  </ul>
                  <details className="mt-4 ml-11 group">
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="group-open:hidden">Show Answer</span>
                      <span className="hidden group-open:inline">Hide Answer</span>
                    </summary>
                    <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm md:text-base">
                      <span className="font-semibold">✓</span> {q.answer}
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No questions found for this topic.</p>
              <button
                onClick={() => setSelectedTopic(null)}
                className="mt-3 text-blue-600 hover:text-blue-800 font-medium"
              >
                View all questions
              </button>
            </div>
          )}
        </section>

        {/* ===== FAQ ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">❓</span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-base font-medium text-gray-900 pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>
    </CourseLayout>
  );
}