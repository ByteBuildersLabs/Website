import { Link } from "react-router-dom";

interface nftMetadata {
  name: string,
  description: string,
  image: string,
  tokenId: string,
  owner: string,

}

// dummy data
const nftCollection: nftMetadata[] = [

  {
    "name": "Mystic Animals #1",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals1.png",
    "owner": "0x0528f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C30",
    tokenId: "1"
  },

  {
    "name": "Mystic Animals #2",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals2.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C31",
    "tokenId": "2"
  },
  {
    "name": "Mystic Animals #3",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals3.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C32",
    "tokenId": "3"
  },
  {
    "name": "Mystic Animals #4",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals4.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C33",
    "tokenId": "4"
  },
  {
    "name": "Mystic Animals #5",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals5.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C34",
    "tokenId": "5"
  },
  {
    "name": "Mystic Animals #6",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals15.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C35",
    "tokenId": "6"
  },
  {
    "name": "Mystic Animals #7",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals7.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C36",
    "tokenId": "7"
  },
  {
    "name": "Mystic Animals #8",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals8.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C37",
    "tokenId": "8"
  },
  {
    "name": "Mystic Animals #9",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals9.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C38",
    "tokenId": "9"
  },
  {
    "name": "Mystic Animals #10",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals10.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C39",
    "tokenId": "10"
  },
  {
    "name": "Mystic Animals #11",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals11.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C3A",
    "tokenId": "11"
  },
  {
    "name": "Mystic Animals #12",
    "description": "Mystic Animals is a collection that is only owned by the most fearless investors",
    "image": "src/assets/img/mysticAnimals/mysticAnimals12.png",
    "owner": "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C3B",
    "tokenId": "12"
  },
]


function NftVault() {
  return (
    <div className="yellow-border p-0">
      <div className="collection row justify-content-between">
        {nftCollection.map(({ name, image, }, index) => (
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
