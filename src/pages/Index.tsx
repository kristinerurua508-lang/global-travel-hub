import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-travel.jpg";
import { Shield, Plane, Hotel, Scale, MapPin, Globe } from "lucide-react";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  const handleCountrySelect = (countryId: string) => {
    setSelectedCountry(countryId);
  };

  const handleExplore = () => {
    if (selectedCountry) {
      navigate(`/insurance?country=${selectedCountry}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Travel destinations around the world" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6">
            <div className="text-6xl md:text-8xl animate-pulse">🔥</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Phoenix Travel
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-4 drop-shadow-lg font-semibold">
            Your Complete Georgian Travel Guide
          </p>
          <p className="text-lg md:text-xl text-white/90 drop-shadow">
            Everything Georgian travelers need for safe and informed journeys abroad
          </p>
        </div>
      </section>

      {/* Complete Travel Guide Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Complete Guide to International Travel
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <Card className="p-8 border-primary/20 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Plane className="h-6 w-6 text-primary" />
                Welcome to Phoenix Travel
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Phoenix Travel is Georgia&apos;s most comprehensive travel information platform, designed specifically for Georgian citizens planning international trips. We provide verified information about travel insurance, currency exchange, mobile internet, accommodations, and local laws to ensure your journey is safe, comfortable, and hassle-free.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re traveling to Turkey, UAE, Europe, or beyond, Phoenix Travel guides you through every step of your journey with trusted Georgian service providers and essential destination information.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-xl transition-shadow border-l-4 border-l-primary">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Travel Insurance</h3>
                <p className="text-muted-foreground">
                  Protect yourself with comprehensive travel insurance from trusted Georgian providers like TBC Insurance, Aldagi BCI, and IMEDI. Get coverage for medical emergencies, trip cancellations, lost luggage, and COVID-19 related issues. Prices range from 100-400 GEL depending on destination and coverage.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow border-l-4 border-l-accent">
                <Globe className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Currency Exchange</h3>
                <p className="text-muted-foreground">
                  Exchange your GEL at the best rates through Georgian banks before departure. TBC Bank, Bank of Georgia, and Liberty Bank offer competitive rates with no commission for account holders. Always compare rates and avoid airport exchanges which typically charge 3-5% more.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow border-l-4 border-l-primary">
                <svg className="h-10 w-10 text-primary mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12" y2="18"/>
                </svg>
                <h3 className="text-xl font-bold mb-3">Mobile Internet</h3>
                <p className="text-muted-foreground">
                  Stay connected with international roaming from Magti/Beeline (50-250 GEL/week) or Silknet (45-240 GEL/week). Alternatively, purchase local SIM cards at your destination for better rates. All options provide 4G/5G speeds for seamless connectivity.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow border-l-4 border-l-accent">
                <Hotel className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Accommodations</h3>
                <p className="text-muted-foreground">
                  Find top-rated hotels and avoid problematic properties with our verified reviews. We highlight the best accommodations in each destination and warn about hotels with poor service, hygiene issues, or misleading information to protect Georgian travelers.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
              <h3 className="text-2xl font-bold mb-6 text-center">Recommended Georgian Travel Agencies</h3>
              
              <div className="space-y-4">
                <div className="bg-background/80 backdrop-blur p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-primary">🔥 Phoenix Travel Agency</h4>
                    <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">Top Rated</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Premium Turkey tours, business travel, and VIP services. Specialized in luxury experiences with personalized itineraries.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary font-semibold">★ 4.9/5</span>
                    <span className="text-muted-foreground">1,856 reviews</span>
                    <span className="font-semibold">1,200-3,500 GEL</span>
                  </div>
                </div>

                <div className="bg-background/80 backdrop-blur p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">Travel House Georgia</h4>
                    <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">Recommended</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Complete Turkey packages with hotel booking, visa support, and organized group tours. Excellent customer service.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary font-semibold">★ 4.9/5</span>
                    <span className="text-muted-foreground">3,421 reviews</span>
                    <span className="font-semibold">800-2,500 GEL</span>
                  </div>
                </div>

                <div className="bg-background/80 backdrop-blur p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">Caucasus Travel</h4>
                    <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">Recommended</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    All-inclusive packages and family tours to Turkey. Great for first-time travelers with comprehensive support.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary font-semibold">★ 4.8/5</span>
                    <span className="text-muted-foreground">2,847 reviews</span>
                    <span className="font-semibold">900-2,800 GEL</span>
                  </div>
                </div>

                <div className="bg-background/80 backdrop-blur p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">Geo Travel</h4>
                    <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">Recommended</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Istanbul tours, Antalya packages, and custom itineraries. Perfect for couples and small groups.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary font-semibold">★ 4.7/5</span>
                    <span className="text-muted-foreground">2,134 reviews</span>
                    <span className="font-semibold">750-2,400 GEL</span>
                  </div>
                </div>

                <div className="bg-background/80 backdrop-blur p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">Silk Road Tours Georgia</h4>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">Budget-Friendly</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Budget Turkey tours with student packages and group discounts. Reliable service at affordable prices.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary font-semibold">★ 4.6/5</span>
                    <span className="text-muted-foreground">1,634 reviews</span>
                    <span className="font-semibold">600-1,800 GEL</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-muted/50">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                Important Travel Tips
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Book in advance:</strong> Georgian travel agencies offer better rates when booked 2-3 weeks ahead</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Insurance is mandatory:</strong> Many countries require proof of travel insurance for visa applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Currency exchange:</strong> Always exchange money at official banks in Georgia before departure for best rates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Embassy registration:</strong> Register with the Georgian embassy in your destination country for long stays</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Local laws:</strong> Research destination-specific laws and customs before traveling to avoid issues</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Emergency contacts:</strong> Save Georgian embassy numbers and local emergency services before departure</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Country Selection */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-muted/20">
        <CountrySelector 
          selectedCountry={selectedCountry} 
          onCountrySelect={handleCountrySelect} 
        />
        
        {selectedCountry && (
          <div className="text-center mt-8">
            <Button size="lg" onClick={handleExplore} className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Explore Travel Information
            </Button>
          </div>
        )}
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <h2 className="text-3xl font-bold text-center mb-4">Everything You Need in One Place</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Phoenix Travel provides comprehensive information for 8 popular destinations with verified Georgian service providers
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-t-primary">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3">Travel Insurance</h3>
            <p className="text-muted-foreground">Georgian insurance companies with comprehensive coverage</p>
          </Card>
          <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-t-accent">
            <div className="text-5xl mb-4">💱</div>
            <h3 className="text-xl font-semibold mb-3">Currency Exchange</h3>
            <p className="text-muted-foreground">Best rates from Georgian banks and local exchanges</p>
          </Card>
          <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-t-primary">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3">Internet & SIM</h3>
            <p className="text-muted-foreground">Roaming packages and local SIM options</p>
          </Card>
          <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-t-accent">
            <div className="text-5xl mb-4">✈️</div>
            <h3 className="text-xl font-semibold mb-3">Travel Agencies</h3>
            <p className="text-muted-foreground">Top Georgian travel companies and warnings</p>
          </Card>
          <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-t-primary">
            <div className="text-5xl mb-4">🏨</div>
            <h3 className="text-xl font-semibold mb-3">Hotel Reviews</h3>
            <p className="text-muted-foreground">Honest reviews and recommendations</p>
          </Card>
          <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-t-accent">
            <div className="text-5xl mb-4">🇬🇪</div>
            <h3 className="text-xl font-semibold mb-3">Embassy Locations</h3>
            <p className="text-muted-foreground">Georgian embassy contacts worldwide</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Select your destination above and get instant access to all the information you need for a safe and memorable trip
          </p>
        </Card>
      </section>
    </div>
  );
};

export default Index;
