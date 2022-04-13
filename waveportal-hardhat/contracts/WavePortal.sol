// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        uint256 timestamp;
        string message;
    }

    uint256 totalWaves;
    Wave[] waves;

    constructor() {
        console.log("Initializing WavePortal Contract");
    }

    // add a new wave
    function wave(string memory message) public {
        totalWaves++;
        waves.push(Wave(msg.sender, block.timestamp, message));
        emit NewWave(msg.sender, block.timestamp, message);
    }

    // retrieve how many waves we have
    function getTotalWaves() public view returns (uint256) {
        return totalWaves;
    }

    // get all waves
    function getWaves() public view returns (Wave[] memory) {
        return waves;
    }
}
