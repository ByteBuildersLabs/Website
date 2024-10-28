import { Link } from 'react-router-dom';
import LuisImg from '../../assets/img/Luis.png';
import Daniel from '../../assets/img/daniel.jpeg';
import Marco from '../../assets/img/marco.jpeg';
import Rol from '../../assets/img/rol.jpg';
import './main.css';

interface NftMetaData {
  name: string;
  image: string;
  tokenId: number;
}

export default function Component() {

  const animals: NftMetaData[] = [
    { name: "Mystic Animals #1", image: LuisImg, tokenId: 1 },
    { name: "Mystic Animals #2", image: Daniel, tokenId: 2 },
    { name: "Mystic Animals #3", image: Rol, tokenId: 3 },
    { name: "Mystic Animals #4", image: Marco, tokenId: 4 },
    { name: "Mystic Animals #5", image: Rol, tokenId: 5 },
    { name: "Mystic Animals #6", image: Daniel, tokenId: 6 },
    { name: "Mystic Animals #7", image: Marco, tokenId: 7 },
    { name: "Mystic Animals #8", image: LuisImg, tokenId: 8 },
    { name: "Mystic Animals #9", image: Daniel, tokenId: 9 }
  ];

  return (
    <>
      {
        <div className="nft-room">
          <div className={"nft-owner"}>
            <div className="section-title title-style-two text-center mb-60">
              <span>Collectibles</span>
              <h2>
                Holder <span className="d-block">0xdAC...1ec7</span>
              </h2>
            </div>
            <div className="collection row">
              {animals.map(({ name, image, tokenId }: NftMetaData) => {
                return (
                  <Link key={tokenId} to={`/nftroom/`} className="col-4 yellow">
                    <div className="nft-card">
                      <img src={image} alt="" />
                      <p>{name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      }
    </>
  );}