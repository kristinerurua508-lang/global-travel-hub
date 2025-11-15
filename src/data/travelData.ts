import { Insurance, CurrencyExchange, InternetProvider, TravelCompany, Hotel, Law } from "@/types/travel";

export const insuranceByCountry: Record<string, Insurance[]> = {
  turkey: [
    {
      name: "TBC Insurance (Georgian)",
      type: "Comprehensive Travel",
      coverage: "Medical €100,000, Trip Cancellation, Luggage, COVID-19",
      price: "150-300 GEL per trip",
      recommended: true,
      website: "https://www.tbcinsurance.ge"
    },
    {
      name: "Aldagi BCI (Georgian)",
      type: "Travel Insurance",
      coverage: "Medical €50,000, Accident, Emergency Evacuation",
      price: "120-250 GEL per trip",
      recommended: true,
      website: "https://www.aldagi.ge"
    },
    {
      name: "Insurance Company IMEDI L (Georgian)",
      type: "International Travel",
      coverage: "Medical, Trip Cancellation, Baggage Protection",
      price: "100-280 GEL per trip",
      recommended: true,
      website: "https://www.icil.ge"
    }
  ],
  uae: [
    {
      name: "TBC Insurance (Georgian)",
      type: "Comprehensive Travel",
      coverage: "Medical $100,000, Trip Cancellation, Luggage, COVID-19",
      price: "200-400 GEL per trip",
      recommended: true,
      website: "https://www.tbcinsurance.ge"
    },
    {
      name: "Aldagi BCI (Georgian)",
      type: "Travel Insurance",
      coverage: "Medical $75,000, Accident, Emergency Services",
      price: "180-350 GEL per trip",
      recommended: true,
      website: "https://www.aldagi.ge"
    }
  ],
};

export const currencyExchangeByCountry: Record<string, CurrencyExchange[]> = {
  turkey: [
    {
      name: "TBC Bank (Georgian - Before Travel)",
      location: "All TBC branches in Georgia",
      rating: 4.8,
      fees: "Best rates, exchange before departure",
      recommended: true
    },
    {
      name: "Bank of Georgia (Georgian - Before Travel)",
      location: "All BOG branches in Georgia",
      rating: 4.7,
      fees: "Good rates, no commission for account holders",
      recommended: true
    },
    {
      name: "Liberty Bank (Georgian - Before Travel)",
      location: "All Liberty branches in Georgia",
      rating: 4.6,
      fees: "Competitive rates for Lira exchange",
      recommended: true
    },
    {
      name: "Doviz.com Exchange (In Turkey)",
      location: "Istanbul Airport, Taksim, Sultanahmet",
      rating: 4.3,
      fees: "1-2% commission",
      recommended: false
    }
  ],
  uae: [
    {
      name: "TBC Bank (Georgian - Before Travel)",
      location: "All TBC branches in Georgia",
      rating: 4.8,
      fees: "Exchange USD or EUR in Georgia first",
      recommended: true
    },
    {
      name: "Al Ansari Exchange (In UAE)",
      location: "Dubai Mall, Marina Mall, Airport",
      rating: 4.5,
      fees: "Good rates for GEL to AED",
      recommended: true
    }
  ],
};

export const internetProvidersByCountry: Record<string, InternetProvider[]> = {
  turkey: [
    {
      name: "Magti / Beeline International Roaming",
      type: "Georgian Roaming",
      price: "50-150 GEL/week",
      coverage: "Turkey nationwide",
      speed: "4G/5G speeds",
      recommended: true
    },
    {
      name: "Silknet Roaming Packages",
      type: "Georgian Roaming",
      price: "45-140 GEL/week",
      coverage: "Turkey full coverage",
      speed: "High-speed data",
      recommended: true
    },
    {
      name: "Turkcell Tourist SIM (Buy in Turkey)",
      type: "Local Prepaid SIM",
      price: "300-800 TL",
      coverage: "Nationwide 4G/5G",
      speed: "Up to 100 Mbps",
      recommended: true
    }
  ],
  uae: [
    {
      name: "Magti / Beeline International",
      type: "Georgian Roaming",
      price: "100-250 GEL/week",
      coverage: "UAE-wide",
      speed: "5G speeds",
      recommended: true
    },
    {
      name: "Etisalat Tourist SIM (Buy in UAE)",
      type: "Local Prepaid",
      price: "$30-60",
      coverage: "UAE 5G",
      speed: "Up to 200 Mbps",
      recommended: true
    }
  ],
};

export const travelCompaniesByCountry: Record<string, TravelCompany[]> = {
  turkey: [
    {
      name: "Travel House Georgia (Georgian)",
      rating: 4.9,
      services: ["Turkey Packages", "Hotel Booking", "Visa Support", "Group Tours"],
      price: "800-2500 GEL",
      recommended: true,
      reviews: 3421
    },
    {
      name: "Caucasus Travel (Georgian)",
      rating: 4.8,
      services: ["Turkey Tours", "All-Inclusive Packages", "Family Tours"],
      price: "900-2800 GEL",
      recommended: true,
      reviews: 2847
    },
    {
      name: "Geo Travel (Georgian)",
      rating: 4.7,
      services: ["Istanbul Tours", "Antalya Packages", "Custom Itineraries"],
      price: "750-2400 GEL",
      recommended: true,
      reviews: 2134
    },
    {
      name: "Phoenix Travel Agency (Georgian)",
      rating: 4.9,
      services: ["Premium Turkey Tours", "Business Travel", "VIP Services"],
      price: "1200-3500 GEL",
      recommended: true,
      reviews: 1856
    },
    {
      name: "Silk Road Tours Georgia",
      rating: 4.6,
      services: ["Budget Turkey Tours", "Student Packages", "Group Discounts"],
      price: "600-1800 GEL",
      recommended: true,
      reviews: 1634
    },
    {
      name: "Cheap Holiday Tours",
      rating: 2.1,
      services: ["Low-cost packages"],
      price: "400-900 GEL",
      recommended: false,
      warning: "Poor customer service, hidden costs, unreliable bookings. Many Georgian travelers reported issues.",
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
