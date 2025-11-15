import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Card } from "@/components/ui/card";
import { countries } from "@/data/countries";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Embassy = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country") || "";

  const handleCountrySelect = (countryId: string) => {
    setSearchParams({ country: countryId });
  };

  const selectedCountryData = countries.find(c => c.id === selectedCountry);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            🇬🇪 Georgian Embassy Locations
          </h1>
          <p className="text-muted-foreground text-lg">
            Find Georgian embassy contact information worldwide
          </p>
        </div>

        <div className="mb-12">
          <CountrySelector 
            selectedCountry={selectedCountry} 
            onCountrySelect={handleCountrySelect} 
          />
        </div>

        {selectedCountryData && (
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{selectedCountryData.flag}</div>
                <h2 className="text-3xl font-bold mb-2">
                  Embassy of Georgia in {selectedCountryData.name}
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">{selectedCountryData.embassyAddress}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href={`tel:${selectedCountryData.embassyPhone}`}
                      className="text-primary hover:underline"
                    >
                      {selectedCountryData.embassyPhone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href={`mailto:${selectedCountryData.embassyEmail}`}
                      className="text-primary hover:underline"
                    >
                      {selectedCountryData.embassyEmail}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Website</h3>
                    <a 
                      href={selectedCountryData.embassyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {selectedCountryData.embassyWebsite}
                    </a>
                  </div>
                </div>
              </div>

              <Card className="mt-8 p-6 bg-muted/50">
                <h3 className="font-semibold mb-3">📋 Embassy Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Passport and consular services</li>
                  <li>• Emergency assistance for Georgian citizens</li>
                  <li>• Visa information and processing</li>
                  <li>• Legal assistance and notarial services</li>
                  <li>• Travel document replacement</li>
                  <li>• Registration of Georgian citizens abroad</li>
                </ul>
              </Card>
            </Card>
          </div>
        )}

        {!selectedCountry && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Please select a country to view embassy information
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Embassy;
