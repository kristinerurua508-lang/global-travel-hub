import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { CountrySelector } from "@/components/CountrySelector";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { lawsByCountry } from "@/data/travelData";
import { Scale, AlertCircle } from "lucide-react";

const Laws = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country") || "";

  const handleCountrySelect = (countryId: string) => {
    setSearchParams({ country: countryId });
  };

  const laws = selectedCountry ? lawsByCountry[selectedCountry] || [] : [];

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case "high":
        return <Badge variant="destructive">Critical</Badge>;
      case "medium":
        return <Badge className="bg-warning">Important</Badge>;
      default:
        return <Badge variant="secondary">Good to Know</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            Local Laws & Regulations
          </h1>
          <p className="text-muted-foreground text-lg">
            Important laws and customs you need to know
          </p>
        </div>

        <div className="mb-12">
          <CountrySelector 
            selectedCountry={selectedCountry} 
            onCountrySelect={handleCountrySelect} 
          />
        </div>

        {selectedCountry && laws.length > 0 && (
          <div className="space-y-6">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Important Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    Please familiarize yourself with local laws and customs. Ignorance of the law is not a valid defense. 
                    When in doubt, observe local behavior and ask for guidance.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              {laws.map((law, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{law.category}</h3>
                    {getImportanceBadge(law.importance)}
                  </div>
                  <p className="text-muted-foreground">{law.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-2">⚖️ General Travel Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Always carry your passport and keep copies separately</li>
                <li>• Register with your embassy upon arrival for long stays</li>
                <li>• Research local emergency numbers and save them</li>
                <li>• Respect local customs and dress codes</li>
                <li>• Purchase comprehensive travel insurance</li>
                <li>• Keep embassy contact information handy</li>
              </ul>
            </Card>
          </div>
        )}

        {selectedCountry && laws.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Legal information for this country is being updated.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Laws;
