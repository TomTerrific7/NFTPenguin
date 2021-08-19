async function main() {
  const Wizard = await hre.ethers.getContractFactory("Wizard");
  const wizard = await Wizard.deploy();

  await wizard.deployed();

  console.log("Wizard deployed to:", wizard.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
