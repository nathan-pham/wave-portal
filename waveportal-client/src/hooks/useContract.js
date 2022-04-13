import { useEffect, useState } from "react";
import { ethers } from "ethers";

import contractAbi from "@/utils/WavePortal.json";
const contractAddress = "0x75D93e80Bf97BF9978B30E5A05aBFbB1225D2544";

const useContract = (wallet) => {
    const [contract, setContract] = useState(null);
    const [waves, setWaves] = useState([]);

    useEffect(async () => {
        if (wallet) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const wavePortalContract = new ethers.Contract(
                contractAddress,
                contractAbi.abi,
                signer
            );

            setContract(wavePortalContract);
        }
    }, [wallet]);

    useEffect(() => {
        updateWaves();
    }, [contract]);

    const updateWaves = async () => {
        if (contract) {
            const waves = await contract.getWaves();
            setWaves(
                waves.map((wave) => ({
                    address: wave.waver,
                    timestamp: new Date(wave.timestamp * 1000),
                    message: wave.message,
                }))
            );
        }
    };

    return { contract, waves, updateWaves };
};

export default useContract;
