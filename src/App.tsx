import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Background from './components/Background/index';
import Header from './components/Header/index';
import NftRoom from './views/NftRoom/index';
import Roadmap from './views/Roadmap';
import Game from './views/Game';
import Navbar from './components/Navbar/index';
import Cover from './views/Cover';
import './App.css';

function App() {
  // const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // const storedAddress = localStorage.getItem("walletAddress");
  // if (storedAddress) {
  //   setWalletAddress(storedAddress);
  // }


  return (
    <>
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
    </>
  );
}

export default App;
