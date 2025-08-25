import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm" data-testid={`faq-item-${index}`}>
          <button
            className="w-full text-left p-6 focus:outline-none"
            onClick={() => toggleItem(index)}
            data-testid={`faq-button-${index}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-cedar-600">
                {item.question}
              </h3>
              <ChevronDown
                className={`text-cedar-600 transform transition-transform duration-200 ${
                  openItems.includes(index) ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          {openItems.includes(index) && (
            <div className="px-6 pb-6" data-testid={`faq-answer-${index}`}>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
