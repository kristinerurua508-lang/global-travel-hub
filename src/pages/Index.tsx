import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";

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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Travel destinations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-background/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Your Complete Georgian Travel Guide
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow">
            Everything you need for safe and informed travel abroad
          </p>
        </div>
      </section>

      {/* Country Selection */}
      <section className="container mx-auto px-4 py-16">
        <CountrySelector 
          selectedCountry={selectedCountry} 
          onCountrySelect={handleCountrySelect} 
        />
        
        {selectedCountry && (
          <div className="text-center mt-8">
            <Button size="lg" onClick={handleExplore}>
              Explore Travel Information
            </Button>
          </div>
        )}
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>
            <p className="text-muted-foreground">Find the best insurance options for your destination</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💱</div>
            <h3 className="text-xl font-semibold mb-2">Currency Exchange</h3>
            <p className="text-muted-foreground">Best places and rates for exchanging money</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Internet & SIM</h3>
            <p className="text-muted-foreground">Stay connected with the best mobile providers</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-xl font-semibold mb-2">Travel Companies</h3>
            <p className="text-muted-foreground">Top-rated and verified tour operators</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🏨</div>
            <h3 className="text-xl font-semibold mb-2">Hotel Reviews</h3>
            <p className="text-muted-foreground">Honest reviews and recommendations</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-semibold mb-2">Local Laws</h3>
            <p className="text-muted-foreground">Important regulations you need to know</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
