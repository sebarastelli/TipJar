const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TipJar contract", function () {
  let TipJar, tipJar, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    TipJar = await ethers.getContractFactory("TipJar");
    tipJar = await TipJar.deploy();
    await tipJar.waitForDeployment();
  });

  it("Should accept tips and emit NewTip event", async function () {
    const tipAmount = ethers.parseEther("0.01");
    await expect(tipJar.connect(addr1).tip("Gracias!", { value: tipAmount }))
      .to.emit(tipJar, "NewTip")
      .withArgs(addr1.address, tipAmount, "Gracias!");
  });

  it("Only owner can withdraw", async function () {
    await expect(tipJar.connect(addr1).withdraw())
      .to.be.revertedWith("Only owner can withdraw");

    // Owner puede retirar sin error
    await expect(tipJar.connect(owner).withdraw()).not.to.be.reverted;
  });

  it("Balance updates correctly after tip", async function () {
    const tipAmount = ethers.parseEther("0.05");

    // Antes de la propina, el balance del contrato es 0
    let balance = await ethers.provider.getBalance(tipJar.target);
    expect(balance).to.equal(0n);

    // Addr1 envía una propina
    await tipJar.connect(addr1).tip("Aquí está mi tip", { value: tipAmount });

    // Balance del contrato debería ser igual a la propina
    balance = await ethers.provider.getBalance(tipJar.target);
    expect(balance).to.equal(tipAmount);
  });
});