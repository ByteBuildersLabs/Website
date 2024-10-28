export interface Collection {
  // ! you should change it according to your collection response
  address: string;
  floor?: string;
  image?: string;
  is_verified: boolean;
  listed_items: number;
  listed_percentage: number;
  marketcap: number;
  name: string;
  owner_count: number;
  sales_7d: number;
  token_count: number;
  total_sales: number;
  total_volume: number;
  volume_7d_eth: number;
  floor_7d_percentage: string;
}
