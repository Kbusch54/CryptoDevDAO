require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: ALCHEMY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

//nftMarketplace
// 0x6b42a275e863Ae5C747bcCB1f7234e0a6E6E46b6

//dao
//0x2EbcaD0146dFf32bf2C2A1Fae59D384Ae7e8ba2E
