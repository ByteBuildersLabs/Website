import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background/index';
import Header from './components/Header/index';
import NftRoom from './views/NftRoom/index';
import Roadmap from './views/Roadmap';
import Game from './views/Game';
import Navbar from './components/Navbar/index';
import Cover from './views/Cover';
import './App.css';

import { Chain, sepolia } from "@starknet-react/chains";
import { StarknetConfig, starkscan } from "@starknet-react/core";
import { RpcProvider } from "starknet";
import cartridgeConnector from "./cartridgeConnector.tsx";

function provider(chain: Chain) {
  return new RpcProvider({
    nodeUrl: "https://api.cartridge.gg/x/starknet/sepolia",
  });
}

function App() {
  return (
    <StarknetConfig
      autoConnect
      chains={[sepolia]}
      connectors={[cartridgeConnector]}
      explorer={starkscan}
      provider={provider}
    >
      <div>
        <Router>
          <Header />
          <Background />
          <div id="content">
            {true ? (
              <Routes>
                <Route path='/' element={<Game />} />
                <Route path='/nftroom' element={<NftRoom />} />
                <Route path='/roadmap' element={<Roadmap />} />
                <Route path='/game' element={<Game />} />
              </Routes>
            ) : (
              <Cover />
            )}
          </div>
          <Navbar />
        </Router>
      </div>
    </StarknetConfig>
  );
}

export default App;
