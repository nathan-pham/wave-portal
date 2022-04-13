const hre = require("hardhat");
const contractName = "WavePortal";

// main method
const main = async () => {
    // get signers
    const [deployer, randomPerson] = await hre.ethers.getSigners();

    // deploy the contract
    // prettier-ignore
    const waveContractFactory = await hre.ethers.getContractFactory(contractName);
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log(`${contractName} deployed to ${waveContract.address}`);
    console.log(`${contractName} deployed by ${deployer.address}`);

    let totalWaves, waveTxn;

    // wave to ourself
    totalWaves = await waveContract.getTotalWaves();
    waveTxn = await waveContract.wave();
    await waveTxn.wait();

    // random person waves
    totalWaves = await waveContract.getTotalWaves();
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    totalWaves = await waveContract.getTotalWaves();
};

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
