import A from "@/components/atoms/A";

const Wave = ({ address, timestamp, message }) => (
    <div className="border p-4 rounded-md">
        <h2>
            <A
                href={`https://rinkeby.etherscan.io/address/${address}`}
                target="_blank"
                rel="noreferrer"
            >
                {address}
            </A>
        </h2>
        <p className="mt-2">{timestamp.toString()}</p>
        <p>{message}</p>
    </div>
);

export default Wave;
