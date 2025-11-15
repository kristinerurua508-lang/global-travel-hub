export interface Country {
  id: string;
  name: string;
  flag: string;
  embassyAddress: string;
  embassyPhone: string;
  embassyEmail: string;
  embassyWebsite: string;
}

export interface Insurance {
  name: string;
  type: string;
  coverage: string;
  price: string;
  recommended: boolean;
  website: string;
}

export interface CurrencyExchange {
  name: string;
  location: string;
  rating: number;
  fees: string;
  recommended: boolean;
}

export interface InternetProvider {
  name: string;
  type: string;
  price: string;
  coverage: string;
  speed: string;
  recommended: boolean;
}

export interface TravelCompany {
  name: string;
  rating: number;
  services: string[];
  price: string;
  recommended: boolean;
  warning?: string;
  reviews: number;
}

export interface Hotel {
  name: string;
  rating: number;
  location: string;
  price: string;
  amenities: string[];
  recommended: boolean;
  warning?: string;
  reviews: number;
}

export interface Law {
  category: string;
  description: string;
  importance: "high" | "medium" | "low";
}

export interface Review {
  type: "company" | "hotel";
  targetName: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
  country: string;
}
