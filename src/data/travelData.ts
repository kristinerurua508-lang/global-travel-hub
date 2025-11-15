import { Insurance, CurrencyExchange, InternetProvider, TravelCompany, Hotel, Law } from "@/types/travel";

export const insuranceByCountry: Record<string, Insurance[]> = {
  turkey: [
    {
      name: "Allianz Travel Insurance",
      type: "Comprehensive",
      coverage: "Medical, Trip Cancellation, Lost Luggage",
      price: "€45-120 per trip",
      recommended: true,
      website: "https://www.allianz-assistance.com"
    },
    {
      name: "AXA Schengen",
      type: "Medical",
      coverage: "Medical emergencies up to €50,000",
      price: "€35-80 per trip",
      recommended: true,
      website: "https://www.axa-schengen.com"
    }
  ],
  uae: [
    {
      name: "Oman Insurance Company",
      type: "Comprehensive",
      coverage: "Medical, Accident, Emergency Evacuation",
      price: "$60-150 per trip",
      recommended: true,
      website: "https://www.oman-insurance.ae"
    }
  ],
  // Add more countries as needed
};

export const currencyExchangeByCountry: Record<string, CurrencyExchange[]> = {
  turkey: [
    {
      name: "Doviz.com Exchange Points",
      location: "Istanbul Airport, Taksim, Sultanahmet",
      rating: 4.5,
      fees: "1-2% commission",
      recommended: true
    },
    {
      name: "PTT (Turkish Post)",
      location: "Nationwide branches",
      rating: 4.2,
      fees: "Lower rates, 0.5-1.5% commission",
      recommended: true
    }
  ],
  uae: [
    {
      name: "Al Ansari Exchange",
      location: "Dubai Mall, Marina Mall, Airport",
      rating: 4.7,
      fees: "0% commission, competitive rates",
      recommended: true
    }
  ],
};

export const internetProvidersByCountry: Record<string, InternetProvider[]> = {
  turkey: [
    {
      name: "Turkcell Tourist Line",
      type: "Prepaid SIM",
      price: "€15-40",
      coverage: "Nationwide 4G/5G",
      speed: "Up to 100 Mbps",
      recommended: true
    },
    {
      name: "Vodafone Turkey",
      type: "Tourist Package",
      price: "€12-35",
      coverage: "Major cities 4G/5G",
      speed: "Up to 80 Mbps",
      recommended: true
    }
  ],
  uae: [
    {
      name: "Etisalat Tourist SIM",
      type: "Prepaid SIM",
      price: "$30-60",
      coverage: "UAE-wide 5G",
      speed: "Up to 200 Mbps",
      recommended: true
    }
  ],
};

export const travelCompaniesByCountry: Record<string, TravelCompany[]> = {
  turkey: [
    {
      name: "Turkey Travel Planner",
      rating: 4.8,
      services: ["Custom Tours", "Hotel Booking", "Airport Transfer"],
      price: "$$$",
      recommended: true,
      reviews: 2847
    },
    {
      name: "Istanbul Tour Studio",
      rating: 4.9,
      services: ["City Tours", "Cultural Experiences", "Photography Tours"],
      price: "$$",
      recommended: true,
      reviews: 1923
    },
    {
      name: "Cappadocia Travel Center",
      rating: 4.7,
      services: ["Hot Air Balloon", "Cave Hotels", "Underground Cities"],
      price: "$$$",
      recommended: true,
      reviews: 3156
    },
    {
      name: "Cheap Tours Istanbul",
      rating: 2.3,
      services: ["Budget Tours"],
      price: "$",
      recommended: false,
      warning: "Multiple complaints about hidden fees and unprofessional guides",
      reviews: 432
    }
  ],
  uae: [
    {
      name: "Arabian Adventures",
      rating: 4.9,
      services: ["Desert Safari", "City Tours", "Luxury Experiences"],
      price: "$$$$",
      recommended: true,
      reviews: 4521
    },
    {
      name: "Rayna Tours",
      rating: 4.6,
      services: ["Theme Parks", "Desert Activities", "Marina Cruises"],
      price: "$$$",
      recommended: true,
      reviews: 2891
    }
  ],
};

export const hotelsByCountry: Record<string, Hotel[]> = {
  turkey: [
    {
      name: "Four Seasons Istanbul at Sultanahmet",
      rating: 4.9,
      location: "Sultanahmet, Istanbul",
      price: "$$$$$",
      amenities: ["Spa", "Restaurant", "Historic Building", "City Views"],
      recommended: true,
      reviews: 3421
    },
    {
      name: "Museum Hotel Cappadocia",
      rating: 4.8,
      location: "Uçhisar, Cappadocia",
      price: "$$$$",
      amenities: ["Cave Rooms", "Infinity Pool", "Balloon Views", "Restaurant"],
      recommended: true,
      reviews: 2134
    },
    {
      name: "Sultan Hotel Istanbul",
      rating: 2.1,
      location: "Near Taksim",
      price: "$$",
      amenities: ["Basic rooms"],
      recommended: false,
      warning: "Poor hygiene standards, misleading photos, unresponsive staff",
      reviews: 876
    }
  ],
  uae: [
    {
      name: "Burj Al Arab Jumeirah",
      rating: 4.9,
      location: "Jumeirah Beach, Dubai",
      price: "$$$$$",
      amenities: ["Private Beach", "Butler Service", "Multiple Restaurants", "Spa"],
      recommended: true,
      reviews: 5234
    },
    {
      name: "Atlantis The Palm",
      rating: 4.7,
      location: "Palm Jumeirah, Dubai",
      price: "$$$$",
      amenities: ["Aquaventure", "Dolphin Bay", "Private Beach", "Multiple Pools"],
      recommended: true,
      reviews: 6781
    }
  ],
};

export const lawsByCountry: Record<string, Law[]> = {
  turkey: [
    {
      category: "Customs",
      description: "You can bring up to $15,000 without declaration. Antiquities export is strictly forbidden.",
      importance: "high"
    },
    {
      category: "Photography",
      description: "Do not photograph military installations or personnel. Ask permission before photographing people.",
      importance: "medium"
    },
    {
      category: "Alcohol",
      description: "Legal drinking age is 18. Public intoxication is frowned upon.",
      importance: "medium"
    },
    {
      category: "Dress Code",
      description: "Modest dress required when visiting mosques. Remove shoes before entering.",
      importance: "high"
    }
  ],
  uae: [
    {
      category: "Alcohol",
      description: "Only allowed in licensed venues. Drinking in public or being drunk in public is illegal.",
      importance: "high"
    },
    {
      category: "Public Behavior",
      description: "Public displays of affection are illegal. Respect local customs and dress modestly.",
      importance: "high"
    },
    {
      category: "Ramadan",
      description: "Eating, drinking, or smoking in public during Ramadan is illegal for non-Muslims.",
      importance: "high"
    },
    {
      category: "Photography",
      description: "Do not photograph government buildings, military sites, or people without permission.",
      importance: "high"
    }
  ],
};
