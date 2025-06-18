const { ethers } = require("hardhat");

async function main() {
  const tipJarAddress = "0x48583ec0b2923f431fCBcd55bd01932BA02a0cCB";

  const [sender] = await ethers.getSigners();
  const TipJar = await ethers.getContractFactory("TipJar");
  const tipJar = TipJar.attach(tipJarAddress);

  const tipAmount = ethers.parseEther("0.01");
  const message = "¡Muy buen trabajo!";

  const tx = await tipJar.tip(message, { value: tipAmount });
  await tx.wait();

  console.log(`💸 ${sender.address} envió una propina de 0.01 ETH con mensaje: "${message}"`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
