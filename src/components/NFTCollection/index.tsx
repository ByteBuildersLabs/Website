import { Link, useParams } from 'react-router-dom';
import './main.css';

interface NftMetaData {
  name: string;
  image: string;
  tokenId: number;
}

export default function Component() {
  const { collectionName } = useParams<{ collectionName: string }>();

  // Dummy data for the collection
  const collection: NftMetaData[] = [
    { name: "Mystic Animals #0", image: "/placeholder.svg?height=200&width=200", tokenId: 0 },
    { name: "Mystic Animals #1", image: "/placeholder.svg?height=200&width=200", tokenId: 1 },
    { name: "Mystic Animals #2", image: "/placeholder.svg?height=200&width=200", tokenId: 2 },
    { name: "Mystic Animals #3", image: "/placeholder.svg?height=200&width=200", tokenId: 3 },
    { name: "Mystic Animals #4", image: "/placeholder.svg?height=200&width=200", tokenId: 4 },
    { name: "Mystic Animals #5", image: "/placeholder.svg?height=200&width=200", tokenId: 5 },
    { name: "Mystic Animals #6", image: "/placeholder.svg?height=200&width=200", tokenId: 6 },
  ];

  return (
    <div className="nft-room">
      <div className="container">
        <div className="section-title">
          <span>Collectibles</span>
          <h2>Collection</h2>
          <h2 className="collection-name">{collectionName}</h2>
        </div>
        <div className="separator"></div>
        <div className="collection">
          {collection.map(({ name, image, tokenId }) => (
            <Link key={tokenId} to={`/nftroom/${collectionName}/${tokenId}`} className="nft-card">
              <img src={image} alt={name} />
              <p>{name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}