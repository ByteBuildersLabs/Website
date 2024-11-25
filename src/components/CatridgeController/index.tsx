import { useEffect, useState } from "react";
import dojo from '../../assets/img/dojo-logo.svg';
import Controller from "@cartridge/controller";
import { ETH_CONTRACT } from "../../utils/constant";

interface IWalletConnection {
    wallet?: any;
    address?: string;
}

export default function ControllerConnector() {
    const storedAddress = localStorage.getItem("walletAddress");
    const [walletConnection, setWalletConnection] = useState<IWalletConnection | null>(
        storedAddress ? { address: storedAddress } : null
    );
    let controller = new Controller({
        policies: [
            {
                target: ETH_CONTRACT,
                method: 'approve',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                target: ETH_CONTRACT,
                method: 'transfer'
            },
            {
                target: ETH_CONTRACT,
                method: 'mint'
            },
            {
                target: ETH_CONTRACT,
                method: 'burn'
            },
            {
                target: ETH_CONTRACT,
                method: 'allowance'
            }
        ],
        rpc: "https://api.cartridge.gg/x/starknet/mainnet"
    });


    const handleConnect = async () => {
        await controller.probe();
        try {
            const result = await controller.connect();
            if (result) {
                const address = result.address;
                setWalletConnection({
                    wallet: result,
                    address: address,
                });
                localStorage.setItem("walletAddress", address || '');
            } 
        } catch (e) {
            console.log(e);
        }

    };

    const handleDisconnect = async () => {
        await controller.probe();
        await controller.disconnect()
        localStorage.removeItem("walletAddress");
        setWalletConnection(null);
    };


    useEffect(() => {
        if (storedAddress && storedAddress.length > 0) {
            const initialize = async () => {
                await handleConnect()
            };
            initialize();

        }
    }, [storedAddress]);


    return (
        <>
            {walletConnection?.address ? (
                <button
                    className="connect-btn"
                    onClick={handleDisconnect}
                >
                    Disconnect ...{walletConnection.address.slice(-6)}
                </button>
            ) : (
                <button
                    className="connect-btn"
                    onClick={handleConnect}
                >
                    Connect
                    <img src={dojo} alt="starknet" />
                </button>
            )}
        </>
    );
}
