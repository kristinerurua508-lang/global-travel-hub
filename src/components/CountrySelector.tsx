import { countries } from "@/data/countries";
import { Card } from "./ui/card";

interface CountrySelectorProps {
  selectedCountry: string;
  onCountrySelect: (countryId: string) => void;
}

export const CountrySelector = ({ selectedCountry, onCountrySelect }: CountrySelectorProps) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-6">Select Your Destination</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {countries.map((country) => (
          <Card
            key={country.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
              selectedCountry === country.id
                ? "border-primary border-2 shadow-lg"
                : "hover:border-primary/50"
            }`}
            onClick={() => onCountrySelect(country.id)}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{country.flag}</div>
              <p className="font-semibold text-sm">{country.name}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
