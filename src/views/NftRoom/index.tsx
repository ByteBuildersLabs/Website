import MintBeast from '../../components/MintBeast/index';
import NftHall from '../../components/NftHall';
import Footer from '../../components/Footer';
import './main.css';

function NftRoom() {
  return (
    <div className="nft-room">
      <div className="section-title title-style-two text-center mb-60">
        <span>Byte Builders Labs</span>
        <h2>Mint your own <span className='d-block'>Byte Beast</span></h2>
      </div>
      <NftHall />
      <MintBeast />
      <Footer />
    </div>
  )
}

export default NftRoom;
