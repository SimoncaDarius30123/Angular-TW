export interface VehicleListing {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  city: string;
  status: string;
  highlight: string;
  imageUrl: string;
}

export interface MarketplaceStat {
  label: string;
  value: string;
}

export interface VehicleCategory {
  id: string;
  title: string;
  description: string;
  route: string;
  tags: string[];
  count: number;
}
