import { useEffect, useState } from "react";

// custom hook to get MetaMask wallet
const useWallet = () => {
    const [wallet, setWallet] = useState(null);

    // check if Metmask installed/already authorized
    useEffect(async () => {
        if (!window.ethereum) {
            console.warn("no wallet detected");
            return;
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
            console.info("wallet detected");
            setWallet(accounts[0]);
        } else {
            console.warn("no wallet detected");
        }
    }, []);

    // onClick for connecting a wallet
    const connectWallet = async () => {
        if (!window.ethereum) {
            console.warn("no wallet detected");
            return;
        }

        // prettier-ignore
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
            console.info("wallet detected");
            setWallet(accounts[0]);
        } else {
            console.warn("no wallet detected");
        }
    };

    return { wallet, connectWallet };
};

export default useWallet;
