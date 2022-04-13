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

    let totalWaves, waves, waveTxn;

    // wave to ourself
    waveTxn = await waveContract.wave("Hello There!").then((tx) => tx.wait());

    // random person waves
    // waveTxn = await waveContract.connect(randomPerson).wave();
    // await waveTxn.wait();

    // totalWaves = await waveContract.getTotalWaves();

    totalWaves = (await waveContract.getTotalWaves()).toNumber();
    waves = await waveContract.getWaves();

    console.log({ totalWaves, waves });
};

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
