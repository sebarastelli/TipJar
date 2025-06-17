const { ethers } = require("hardhat");

async function main() {
  const TipJar = await ethers.getContractFactory("TipJar");
  const tipJar = await TipJar.deploy();

  console.log("Deploying contract...");
  await tipJar.waitForDeployment();

  console.log(`✅ TipJar deployed to: ${await tipJar.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});