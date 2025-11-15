import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { internetProvidersByCountry } from "@/data/travelData";
import { Wifi } from "lucide-react";

const Internet = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country") || "";

  const handleCountrySelect = (countryId: string) => {
    setSearchParams({ country: countryId });
  };

  const providers = selectedCountry ? internetProvidersByCountry[selectedCountry] || [] : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Wifi className="h-8 w-8 text-primary" />
            Internet & SIM Cards
          </h1>
          <p className="text-muted-foreground text-lg">
            Stay connected with local mobile providers
          </p>
        </div>

        <div className="mb-12">
          <CountrySelector 
            selectedCountry={selectedCountry} 
            onCountrySelect={handleCountrySelect} 
          />
        </div>

        {selectedCountry && providers.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Available Providers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {providers.map((provider, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{provider.name}</h3>
                    {provider.recommended && (
                      <Badge className="bg-success">Recommended</Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Type:</span> {provider.type}
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Price:</span> {provider.price}
                    </div>
                    <div>
                      <span className="font-semibold">Coverage:</span> {provider.coverage}
                    </div>
                    <div>
                      <span className="font-semibold">Speed:</span> {provider.speed}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-2">📱 Tips for Buying SIM Cards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Buy SIM cards at official stores or airports</li>
                <li>• Bring your passport for registration</li>
                <li>• Check if your phone is unlocked</li>
                <li>• Ask about tourist packages with data</li>
                <li>• Test the SIM before leaving the store</li>
              </ul>
            </Card>
          </div>
        )}

        {selectedCountry && providers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Internet provider information for this country is being updated.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Internet;
