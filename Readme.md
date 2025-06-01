# JS + Anchor Rust Programs

This repository contains test programs written in JavaScript and Rust using the Anchor framework for Solana. The structure is organized into folders containing various exercises to help you learn or test different aspects of Solana development.

## Requirements

Make sure the following tools are installed on your system:

* [Rust](https://www.rust-lang.org/tools/install)
* [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools)
* [Node.js](https://nodejs.org/)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
* [Anchor](https://book.anchor-lang.com/getting_started/installation.html)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies with Yarn**:

   ```bash
   yarn install
   yarn add @solana/web3.js @project-serum/anchor
   ```

   **Or install with npm**:

   ```bash
   npm install
   npm install @solana/web3.js @project-serum/anchor
   ```

3. **Set up Solana local validator**:

   ```bash
   solana-test-validator --reset
   ```

   > Leave this running in a separate terminal while executing your programs.

## Running JavaScript Programs

Run any JavaScript program using Node.js:

```bash
node path/to/program.js
```

## Running Anchor Rust Programs

1. **Build the program**:

   ```bash
   anchor build
   ```

2. **Deploy the program locally**:

   ```bash
   anchor deploy
   ```

> Make sure the `solana-test-validator` is running before deploying.

## Folder Structure

Each folder in the root directory corresponds to a specific exercise or example.

```
.
├── Readme.md
├── sol-1_ReadFromNetwork
│   ├── package.json
│   └── src
│       ├── fetch_mint_account_deserialized.js
│       ├── fetch_mint_account_serialized.js
│       ├── fetch_token_account.js
│       └── fetch_wallet _account.js
├── sol-2_WriteToNewtork
│   ├── package.json
│   └── src
│       ├── create_token.js
│       └── transfer_sol.js
└── sol-3-first-solana-program
> etcetera
...
```

---

Happy building on Solana 🚀
