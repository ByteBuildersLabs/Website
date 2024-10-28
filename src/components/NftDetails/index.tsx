import { useParams, Link } from 'react-router-dom';
import goBackButton from '../../assets/img/close.png';
import './main.css';

function NftDetails() {
  const { collectionName, tokenId } = useParams();
  
  // Example of mocked data
  const nft = {
    name: "Mystic Animals #1",
    description: "Mystic Animals is a collection that is only owned by the most fearless investors",
    image: "https://gateway.ipfs.io/ipfs/Qmb711ppmGxLJRf4p5QDqmcKSaJHE5V1L3uMEe8Fixs5LR",
    owner: "0x0528f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C30"
  };
  
  const transfer = () => {
    alert("Transfer NFT");
  }
  
  return (
    <>
      {
        <div className='nft-details'>
          <div className='nft'>
            <div className="section-title title-style-two text-center mb-60">
              <span>{collectionName}</span>
              <h2>
                <Link to={`/nftcollection/${collectionName}`}><span>{nft.name}</span></Link> 
              </h2>
            </div>
            <div className="text-center">
              <img src={nft.image} className="nft-image" alt=""/>
            </div>
            <p>Owner: 
              <Link to={`/nftowner/${nft.owner}`}>
                <span className="yellow m-0">{nft.owner}</span>
              </Link>
            </p>
            <p className="">{nft.description}</p>
            <p>Token ID: 
              <span className="yellow m-0"> {tokenId}</span>
            </p>
            {
              nft.owner 
              ? <button 
                  className="main-button mt-3" 
                  onClick={(transfer)}
                >Tranfer NFT</button>
              : <></>
            }
            <Link to="/nftroom">
              <img src={goBackButton} className="nft-close" alt=""/>
            </Link>
          </div>
        </div> 
      }
    </>
  )
}

export default NftDetails;