import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background/index';
import Header from './components/Header/index';
import NftRoom from './views/NftRoom/index';
import Roadmap from './views/Roadmap';
import Game from './views/Game';
import Navbar from './components/Navbar/index';
import Cover from './views/Cover';
import './App.css';

import NftCollection from './components/NFTCollection/index';
import NftDetails from './components/NftDetails';
import NftOwner from "./views/NftOwner";
        
function App() {
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
                <Route path="/nftowner" element={<NftOwner />} />
                <Route path='/nftcollection/:collectionName' element={<NftCollection />} />
                <Route path='/nftroom/:collectionName/:tokenId' element={<NftDetails/>}/>
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
