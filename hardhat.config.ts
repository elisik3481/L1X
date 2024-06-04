import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

// Enter your Private Key here
const PRIVATE_KEY =
  "816f7b002b7ac16d0e9ff48bb80d71a927b93c0ee1602c91089ea27dc308aebe";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    localhost: {
      url: "localhost:8545",
    },
    l1xTestnet: {
      url: "https://v2-testnet-rpc.l1x.foundation",
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
