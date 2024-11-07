import { Collection } from "../types";
import http from "../http";

interface GetCollectionParams {
  collectionAddress: string;
  chainId?: string;
}

export interface CollectionApiResponse {
  data: Collection;
}

const defaultChainId = "0x534e5f4d41494e";

export default async function getCollectionService({
  collectionAddress,
  chainId = defaultChainId,
}: GetCollectionParams) {
  try {
    const response = await http.get(
      `/collections/${collectionAddress}/${chainId}`
    );

    if (response.status !== 200) {
      console.error("Failed to fetch collection data");
      return null;
    }

    const { data } = response as CollectionApiResponse;

    return data;
  } catch (error) {
    console.error(error);
  }
}
