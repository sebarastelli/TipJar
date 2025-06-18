const { ethers } = require("hardhat");

async function main() {
  const tipJarAddress = "0x48583ec0b2923f431fCBcd55bd01932BA02a0cCB";
  const provider = ethers.provider;

  const balance = await provider.getBalance(tipJarAddress);
  console.log(`Balance del contrato: ${ethers.formatEther(balance)} ETH`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});