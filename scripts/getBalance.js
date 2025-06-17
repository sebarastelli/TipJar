const { ethers } = require("hardhat");

async function main() {
  const tipJarAddress = "0x2c27B478D598cd2d6E3c60D102742290325f194e";
  const provider = ethers.provider;

  const balance = await provider.getBalance(tipJarAddress);
  console.log(`Balance del contrato: ${ethers.formatEther(balance)} ETH`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});