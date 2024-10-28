import { useParams, Link } from 'react-router-dom';
import { useTruncatedAddress } from '../../utils/useTruncatedAddress';
import { animals, NftMetadata } from "../../utils/dummy";
import goBackButton from '../../assets/img/close.png';
import './main.css';

function NftDetails() {
  const { collectionName, tokenId } = useParams();

  const nft = animals.find((nft: NftMetadata) => nft.tokenId === Number(tokenId));
  
  const transfer = () => {
    alert("Transfer NFT");
  }

  return (
    <>
      {
        nft && 
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
                <span className="yellow mx-2">{useTruncatedAddress(nft.owner)}</span>
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