import card1 from '../../assets/img/card1.png';
import card2 from '../../assets/img/card2.png';
import card3 from '../../assets/img/card3.png';
import beasts from '../../assets/img/beasts.png';
import './main.css';

function MintPromo() {
  return (
    <>
      <div className="new-contract-box section-tab yellow-border">
        <img src={beasts} className="nft-beasts" />
        <div className='d-flex w-100 m-auto'>
          <img className="nft-beast" src={card1} alt="" />
          <img className="nft-beast" src={card2} alt="" />
          <img className="nft-beast" src={card3} alt="" />
        </div>
      </div>
    </>
  )
}

export default MintPromo;
