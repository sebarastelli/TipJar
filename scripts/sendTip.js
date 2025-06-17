const { ethers } = require("hardhat");

async function main() {
  const tipJarAddress = "0x2c27B478D598cd2d6E3c60D102742290325f194e";

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
