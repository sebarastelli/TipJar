const { ethers } = require("hardhat");

async function main() {
  const tipJarAddress = "0x2c27B478D598cd2d6E3c60D102742290325f194e";

  const [owner] = await ethers.getSigners();
  const TipJar = await ethers.getContractFactory("TipJar");
  const tipJar = TipJar.attach(tipJarAddress);

  const tx = await tipJar.withdraw();
  await tx.wait();

  console.log(`💰 Fondos retirados por el owner: ${owner.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});