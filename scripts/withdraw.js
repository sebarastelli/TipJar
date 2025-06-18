const { ethers } = require("hardhat");

async function main() {
  const tipJarAddress = "0x48583ec0b2923f431fCBcd55bd01932BA02a0cCB";

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