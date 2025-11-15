import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { insuranceByCountry } from "@/data/travelData";
import { Shield, ExternalLink } from "lucide-react";

const Insurance = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country") || "";

  const handleCountrySelect = (countryId: string) => {
    setSearchParams({ country: countryId });
  };

  const insuranceOptions = selectedCountry ? insuranceByCountry[selectedCountry] || [] : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            Travel Insurance
          </h1>
          <p className="text-muted-foreground text-lg">
            Protect yourself with comprehensive travel insurance
          </p>
        </div>

        <div className="mb-12">
          <CountrySelector 
            selectedCountry={selectedCountry} 
            onCountrySelect={handleCountrySelect} 
          />
        </div>

        {selectedCountry && insuranceOptions.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Available Insurance Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {insuranceOptions.map((insurance, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{insurance.name}</h3>
                    {insurance.recommended && (
                      <Badge className="bg-success">Recommended</Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Type:</span> {insurance.type}
                    </div>
                    <div>
                      <span className="font-semibold">Coverage:</span> {insurance.coverage}
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Price:</span> {insurance.price}
                    </div>
                    <Button className="w-full" asChild>
                      <a href={insurance.website} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {selectedCountry && insuranceOptions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Insurance information for this country is being updated. Please check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Insurance;
