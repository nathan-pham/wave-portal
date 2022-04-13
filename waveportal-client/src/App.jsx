import useWallet from "@/hooks/useWallet";
import Button from "@/components/atoms/Button";

import { ethers } from "ethers";

import contractAbi from "@/utils/WavePortal.json";
const contractAddress = "0x9f24940ab38ca5E269Ce909635cC1D2CC5fB9117";

const App = () => {
    const { wallet, connectWallet } = useWallet();

    const wave = async () => {
        if (wallet) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const wavePortalContract = new ethers.Contract(
                contractAddress,
                contractAbi.abi,
                signer
            );

            console.log((await wavePortalContract.getTotalWaves()).toNumber());
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-20">
            <header>
                <h1 className="text-4xl font-bold">👋 Hello there.</h1>
                <p className="text-slate-500 mt-4">
                    I code cool things (
                    <a
                        className="text-blue-600 hover:underline"
                        href="https://github.com/nathan-pham/battlerena"
                        target="__blank"
                        rel="noreferrer"
                    >
                        like the game Battle Rena
                    </a>
                    ) and eat goldfish. Consider connecting your Ethereum wallet
                    to say hi.
                </p>

                {wallet ? (
                    <Button onClick={wave}>Wave</Button>
                ) : (
                    <Button onClick={connectWallet}>
                        Connect with MetaMask
                    </Button>
                )}
            </header>
        </div>
    );
};

export default App;
