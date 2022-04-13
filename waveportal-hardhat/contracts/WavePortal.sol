// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("testing the contract");
    }

    // add a new wave
    function wave() public {
        console.log("%s just waved!", msg.sender);
        totalWaves++;
    }

    // retrieve how many waves we have
    function getTotalWaves() public view returns (uint256) {
        console.log("we have %s waves", totalWaves);
        return totalWaves;
    }
}
