import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { currencyExchangeByCountry } from "@/data/travelData";
import { Coins, Star } from "lucide-react";

const Currency = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country") || "";

  const handleCountrySelect = (countryId: string) => {
    setSearchParams({ country: countryId });
  };

  const exchangeOptions = selectedCountry ? currencyExchangeByCountry[selectedCountry] || [] : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Coins className="h-8 w-8 text-primary" />
            Currency Exchange
          </h1>
          <p className="text-muted-foreground text-lg">
            Find the best places to exchange your money
          </p>
        </div>

        <div className="mb-12">
          <CountrySelector 
            selectedCountry={selectedCountry} 
            onCountrySelect={handleCountrySelect} 
          />
        </div>

        {selectedCountry && exchangeOptions.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Recommended Exchange Points</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exchangeOptions.map((exchange, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{exchange.name}</h3>
                    {exchange.recommended && (
                      <Badge className="bg-success">Recommended</Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Location:</span> {exchange.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1">{exchange.rating}/5</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold">Fees:</span> {exchange.fees}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-2">💡 Tips for Currency Exchange</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Always compare rates before exchanging</li>
                <li>• Airport exchanges typically have higher fees</li>
                <li>• Use ATMs for better rates (check your bank fees)</li>
                <li>• Avoid exchanging money with street vendors</li>
                <li>• Keep receipts for all transactions</li>
              </ul>
            </Card>
          </div>
        )}

        {selectedCountry && exchangeOptions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Currency exchange information for this country is being updated.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Currency;
