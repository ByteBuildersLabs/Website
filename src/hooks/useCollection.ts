import { useState, useEffect } from "react";
import { Collection } from "../types";
import getCollectionService from "../services/getCollection";

interface UseCollectionProps {
  collectionAddress: string;
  chainId?: string;
}

export function useCollection({
  collectionAddress,
  chainId,
}: UseCollectionProps) {
  const [data, setData] = useState<Collection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setLoading(true);
        const result = await getCollectionService({
          collectionAddress,
          chainId,
        });

        if (result) {
          setData(result);
          setError(null);
        } else {
          setError("We have not been able to obtain the data");
        }
      } catch (err) {
        setError("There is an error in the request");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [collectionAddress, chainId]);

  return { data, loading, error };
}
