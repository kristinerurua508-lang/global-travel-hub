import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { hotelsByCountry } from "@/data/travelData";
import { Hotel, Star, AlertTriangle } from "lucide-react";

const Hotels = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country") || "";

  const handleCountrySelect = (countryId: string) => {
    setSearchParams({ country: countryId });
  };

  const hotels = selectedCountry ? hotelsByCountry[selectedCountry] || [] : [];
  const recommended = hotels.filter(h => h.recommended);
  const warnings = hotels.filter(h => !h.recommended);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Hotel className="h-8 w-8 text-primary" />
            Hotels & Accommodations
          </h1>
          <p className="text-muted-foreground text-lg">
            Top-rated hotels and places to avoid
          </p>
        </div>

        <div className="mb-12">
          <CountrySelector 
            selectedCountry={selectedCountry} 
            onCountrySelect={handleCountrySelect} 
          />
        </div>

        {selectedCountry && hotels.length > 0 && (
          <div className="space-y-12">
            {/* Recommended Hotels */}
            {recommended.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-success">✨ Top Recommended Hotels</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {recommended.map((hotel, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-success/20">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                        <p className="text-muted-foreground mb-2">{hotel.location}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="ml-1 font-semibold">{hotel.rating}/5</span>
                          </div>
                          <span className="text-sm text-muted-foreground">({hotel.reviews} reviews)</span>
                        </div>
                        <Badge className="bg-success">Recommended</Badge>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-primary">Price:</span> {hotel.price}
                        </div>
                        <div>
                          <span className="font-semibold">Amenities:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {hotel.amenities.map((amenity, i) => (
                              <Badge key={i} variant="secondary">{amenity}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Hotels to Avoid */}
            {warnings.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-warning flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Hotels to Avoid
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {warnings.map((hotel, index) => (
                    <Card key={index} className="p-6 border-warning/50 bg-warning/5">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                        <p className="text-muted-foreground mb-2">{hotel.location}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-muted-foreground" />
                            <span className="ml-1 font-semibold">{hotel.rating}/5</span>
                          </div>
                          <span className="text-sm text-muted-foreground">({hotel.reviews} reviews)</span>
                        </div>
                        <Badge variant="destructive">Not Recommended</Badge>
                      </div>
                      {hotel.warning && (
                        <div className="p-3 bg-warning/10 rounded-lg border border-warning/30">
                          <p className="text-sm">
                            <span className="font-semibold">Warning:</span> {hotel.warning}
                          </p>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {selectedCountry && hotels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Hotel information for this country is being updated.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;
