import { Link, useParams } from 'react-router-dom';
import LuisImg from '../../assets/img/Luis.png';
import Daniel from '../../assets/img/daniel.jpeg';
import Marco from '../../assets/img/marco.jpeg';
import Rol from '../../assets/img/rol.jpg';
import './main.css';

interface NftMetaData {
  name: string;
  description: string;
  image: string;
  tokenId: number;
  owner: string;
}

export default function Component() {
  const { collectionName } = useParams<{ collectionName: string }>();

  // Dummy data for the collection
  const animals: NftMetaData[] = [
    {
      name: "Mystic Animals #1",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: LuisImg,
      tokenId: 1,
      owner: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    {
      name: "Mystic Animals #2",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: Daniel,
      tokenId: 2,
      owner: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
    },
    {
      name: "Mystic Animals #3",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: Rol,
      tokenId: 3,
      owner: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    {
      name: "Mystic Animals #4",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: Marco,
      tokenId: 4,
      owner: "0x123d35Cc6634C0532925a3b844Bc454e4438f123"
    },
    {
      name: "Mystic Animals #5",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: Rol,
      tokenId: 5,
      owner: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    {
      name: "Mystic Animals #6",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: Daniel,
      tokenId: 6,
      owner: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
    },
    {
      name: "Mystic Animals #7",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: Marco,
      tokenId: 7,
      owner: "0x123d35Cc6634C0532925a3b844Bc454e4438f123"
    },
    {
      name: "Mystic Animals #8",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: LuisImg,
      tokenId: 8,
      owner: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    {
      name: "Mystic Animals #9",
      description: "Mystic Animals is a collection that is only owned by the most fearless investors",
      image: Daniel,
      tokenId: 9,
      owner: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
    }
  ];

  return (
    <div className="nft-room">
      <div className="container">
        <div className="section-title text-center my-4">
          <h1 className="display-5">Mystic Animals Collection</h1>
          <span className="text-muted">A collection for the most fearless investors</span>
          <h2 className="collection-name text-primary">{collectionName}</h2>
        </div>
        <div className="separator"></div>
        <div className="row">
          {animals.map(({ name, image, tokenId }) => (
            <div key={tokenId} className="col-6 col-md-4 col-lg-3 mb-4">
              <Link to={`/nftroom/${collectionName}/${tokenId}`} className="nft-card d-block text-center p-1">
                <img src={image} alt={name} className="img-fluid" />
                <p className="mt-2">{name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
