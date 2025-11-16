import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingButton } from "@/components/BookingButton";
import { internetProvidersByCountry } from "@/data/travelData";
import { roamingoPackages } from "@/data/roamingoPackages";
import { Wifi, Globe } from "lucide-react";

const Internet = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country") || "";

  const handleCountrySelect = (countryId: string) => {
    setSearchParams({ country: countryId });
  };

  const providers = selectedCountry ? internetProvidersByCountry[selectedCountry] || [] : [];
  const roamingoOptions = selectedCountry ? roamingoPackages[selectedCountry] || [] : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Wifi className="h-8 w-8 text-primary" />
            Internet & Mobile Data
          </h1>
          <p className="text-muted-foreground text-lg">Stay connected with Roamingo eSIM</p>
        </div>

        <div className="mb-12">
          <CountrySelector selectedCountry={selectedCountry} onCountrySelect={handleCountrySelect} />
        </div>

        {selectedCountry && roamingoOptions.length > 0 && (
          <div className="space-y-6 mb-12">
            <div className="flex items-center space-x-3">
              <Globe className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold">Roamingo eSIM Packages</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {roamingoOptions.map((pkg) => (
                <Card key={pkg.id} className={pkg.recommended ? "border-accent" : ""}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{pkg.name}</span>
                      {pkg.recommended && <Badge>Recommended</Badge>}
                    </CardTitle>
                    <CardDescription>{pkg.duration}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Data:</span>
                        <span className="font-semibold">{pkg.data}</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Price:</span>
                        <span className="text-primary font-bold">₾{pkg.price}</span>
                      </div>
                    </div>
                    <BookingButton
                      providerName={pkg.name}
                      bookingType="internet"
                      price={pkg.price}
                      destination={pkg.country}
                      packageDetails={{ data: pkg.data, duration: pkg.duration }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Internet;
