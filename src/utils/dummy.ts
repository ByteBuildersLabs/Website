import mysticAnimals1 from '../assets/img/mysticAnimals/mysticAnimals1.png'
import mysticAnimals2 from '../assets/img/mysticAnimals/mysticAnimals2.png'
import mysticAnimals3 from '../assets/img/mysticAnimals/mysticAnimals3.png'
import mysticAnimals4 from '../assets/img/mysticAnimals/mysticAnimals4.png'
import mysticAnimals5 from '../assets/img/mysticAnimals/mysticAnimals5.png'
import mysticAnimals6 from '../assets/img/mysticAnimals/mysticAnimals6.png'

export interface NftMetadata {
  name: string,
  description: string,
  image: string,
  tokenId: number,
  owner: string,
}

// dummy data
export const animals: NftMetadata[] = [
  {
    name: "Mystic Animals #0",
    description: "Mystic Animals is a collection that is only owned by the most fearless investors",
    image: mysticAnimals1,
    owner: "0x0528f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C30",
    tokenId: 0
  },

  {
    name: "Mystic Animals #1",
    description: "Mystic Animals is a collection that is only owned by the most fearless investors",
    image: mysticAnimals2,
    owner: "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C31",
    tokenId: 1
  },
  {
    name: "Mystic Animals #2",
    description: "Mystic Animals is a collection that is only owned by the most fearless investors",
    image: mysticAnimals3,
    owner: "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C32",
    tokenId: 2
  },
  {
    name: "Mystic Animals #3",
    description: "Mystic Animals is a collection that is only owned by the most fearless investors",
    image: mysticAnimals4,
    owner: "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C33",
    tokenId: 3
  },
  {
    name: "Mystic Animals #4",
    description: "Mystic Animals is a collection that is only owned by the most fearless investors",
    image: mysticAnimals5,
    owner: "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C34",
    tokenId: 4
  },
  {
    name: "Mystic Animals #5",
    description: "Mystic Animals is a collection that is only owned by the most fearless investors",
    image: mysticAnimals6,
    owner: "0x8f12f903248512E8755773DC40b5917F85b49b451F743Fd8F5fe018c90C35",
    tokenId: 5
  },
]
