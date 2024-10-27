import { Link, } from "react-router-dom";
import { animals } from "../../utils/dummy";

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any,
}

function NftOwner() {

  return (
    <>
      {
      <div className='nft-room'>
        <div className={ 'nft-owner' }>
          <div className="section-title title-style-two text-center mb-60">
            <span>Collectibles</span>
            <h2>Holder <span className='d-block'>0xdAC...1ec7</span></h2>
          </div>
          <div className="collection row">
            { 
              animals.map(({ name, image, tokenId, }:nftMetaData) => {
                  return <Link key={tokenId} to={`/nftroom/`} className="col-4 yellow">
                            <div className="nft-card">
                              <img src={image} alt=""/>
                              <p>{name}</p>
                            </div>
                          </Link>
              })
            }
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default NftOwner;