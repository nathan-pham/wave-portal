const hre = require("hardhat");
const contractName = "WavePortal";

const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const deployerBalance = await deployer.getBalance();

    console.log(`${contractName} deployed by ${deployer.address}`);
    console.log(`deployer has ${deployerBalance} ETH`);

    // create contract
    // prettier-ignore
    const waveContractFactory = await hre.ethers.getContractFactory(contractName);
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log(`${contractName} deployed to ${waveContract.address}`);
};

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
