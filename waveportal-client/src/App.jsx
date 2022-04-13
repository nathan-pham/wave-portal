import { useState } from "react";

import useWallet from "@/hooks/useWallet";
import useContract from "@/hooks/useContract";

import Textarea from "@/components/atoms/Textarea";
import Button from "@/components/atoms/Button";
import A from "@/components/atoms/A";

import Loading from "@/components/Loading";
import Wave from "@/components/Wave";

const App = () => {
    const { wallet, connectWallet } = useWallet();
    const { contract, waves, updateWaves } = useContract(wallet);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onClickWave = async () => {
        if (contract && !loading && message.length > 0) {
            setLoading(true);

            await contract.wave(message).then((txn) => txn.wait());
            await updateWaves();

            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-20">
            <header>
                <h1 className="text-4xl font-bold">👋 Hello there.</h1>
                <p className="text-slate-500 mt-4">
                    I code cool things (
                    <A
                        href="https://github.com/nathan-pham/battlerena"
                        target="__blank"
                        rel="noreferrer"
                    >
                        like the game Battle Rena
                    </A>
                    ) and eat goldfish. Consider connecting your Ethereum wallet
                    to say hi.
                </p>

                <div className="mt-8">
                    {wallet ? (
                        <>
                            <Textarea
                                required
                                placeholder="What's up?"
                                onChange={(e) => setMessage(e.target.value)}
                            ></Textarea>
                            <Button className="mt-2" onClick={onClickWave}>
                                {loading ? <Loading /> : "Wave"}
                            </Button>
                        </>
                    ) : (
                        <Button onClick={connectWallet}>
                            Connect with MetaMask
                        </Button>
                    )}
                </div>
            </header>

            <main className="mt-8">
                {waves.map((wave, key) => (
                    <Wave key={key} {...wave} />
                ))}
            </main>
        </div>
    );
};

export default App;
