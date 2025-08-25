import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  onSelect: () => void;
  testId: string;
}

export function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  isPopular = false, 
  buttonText, 
  onSelect,
  testId 
}: PricingCardProps) {
  return (
    <div 
      className={`relative rounded-2xl p-8 transition-all duration-200 ${
        isPopular 
          ? "bg-fire-500 text-white transform hover:scale-105 shadow-xl" 
          : "bg-white border-2 border-gray-200 hover:border-water-400 hover:shadow-lg"
      }`}
      data-testid={testId}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-cedar-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className={`text-2xl font-playfair font-bold mb-4 ${isPopular ? "text-white" : "text-cedar-600"}`}>
          {title}
        </h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">
            {price}
          </span>
          <span className={`${isPopular ? "text-fire-200" : "text-gray-600"}`}>
            /{period}
          </span>
        </div>
        <ul className="text-left space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className={`w-5 h-5 mr-3 ${isPopular ? "text-white" : "text-water-400"}`} />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          onClick={onSelect}
          className={`w-full py-3 rounded-full font-semibold transition-colors duration-200 ${
            isPopular 
              ? "bg-white text-fire-500 hover:bg-gray-100" 
              : "bg-water-400 hover:bg-water-600 text-white"
          }`}
          data-testid={`button-${buttonText.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
