async function main() {
  const Penguin = await hre.ethers.getContractFactory("Penguin");
  const penguin = await Penguin.deploy();

  await penguin.deployed();

  console.log("Penguin deployed to:", penguin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
