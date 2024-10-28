import { Link } from "react-router-dom";
import { animals } from "../../utils/dummy";

function NftVault() {
  return (
    <div className="yellow-border p-0">
      <div className="collection row justify-content-between">
        {animals.map(({ name, image, }, index) => (
          <Link key={index} to={`/nftroom/collection-name/${index}`} className="col-4">
            <div className="nft-card">
              <img src={image} alt={name} />
              <p>{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NftVault;
