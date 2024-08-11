import { useState } from "react";
import starknet from '../../assets/img/stark.png';
import { connect, disconnect } from "starknetkit";

interface IWalletConnection {
  wallet?: any;
  address?: string;
}

export default function WalletConnector() {
  const storedAddress = localStorage.getItem("walletAddress");
  const [walletConnection, setWalletConnection] = useState<IWalletConnection | null>(
    storedAddress ? { address: storedAddress } : null
  );

  const handleConnect = async (event:any) => {
    event.preventDefault();
    try {
      const result = await connect();
      if (result.wallet) {
        const address = result.wallet.selectedAddress;
        setWalletConnection({
          wallet: result.wallet,
          address: address,
        });
        localStorage.setItem("walletAddress", address || '');
        console.log("Wallet connected:", result, "Address:", address);
      } else {
        console.error("No wallet found in connection result.");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const handleDisconnect = async (event:any) => {
    event.preventDefault();
    try {
      await disconnect();
      setWalletConnection(null);
      localStorage.removeItem("walletAddress");
      localStorage.removeItem("nftSrc");
      console.log("Wallet disconnected");
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };

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
          <img src={starknet} alt="starknet" />
        </button>
      )}
    </>
  );
}
