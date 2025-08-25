import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "How long does it take to heat up?",
    answer: "Our wood-fired hot tubs typically take 2-4 hours to reach optimal temperature (38-40°C), depending on weather conditions and starting water temperature."
  },
  {
    question: "What about hygiene and water quality?",
    answer: "Each tub is thoroughly cleaned and sanitized between rentals."
  },
  {
    question: "Do I need special space requirements?",
    answer: "You need a flat, stable surface that can support approximately 2 tons when filled. The tub requires about 3x3 meters of space plus clearance for our delivery vehicle. We handle all setup details."
  },
  {
    question: "What's included in the rental?",
    answer: "Every rental includes: complete tub setup, initial water fill, basic firewood, water treatment chemicals, maintenance tools, safety instructions, and full cleanup upon collection. Optional extras available for enhanced experiences."
  },
  {
    question: "How far do you deliver?",
    answer: "We deliver throughout Pretoria and surrounding areas within a 50km radius. This includes Centurion, Midrand, and nearby suburbs."
  },
  {
    question: "Can I use it in winter?",
    answer: "Absolutely! Winter is actually the perfect time for hot tubbing. Our wood-fired system maintains water temperature even in cold weather, and there's nothing quite like soaking in hot water under the stars on a chilly evening."
  },
  {
    question: "What happens if it rains?",
    answer: "Light rain actually adds to the magical experience! Our hot tubs are designed to be used in all weather conditions."
  },
  {
    question: "How many people can use the hot tub?",
    answer: "Our standard hot tubs comfortably accommodate 4-6 adults."
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-cedar-600 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our luxury wood-fired hot tub rental service. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-cedar-600 mb-6">
              Hot Tub Tips & Best Practices
            </h2>
            <p className="text-xl text-gray-600">
              Make the most of your luxury hot tub experience with these insider tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream-100 rounded-xl p-6" data-testid="tip-heating">
              <div className="w-12 h-12 bg-fire-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔥</span>
              </div>
              <h3 className="text-lg font-semibold text-cedar-600 mb-3">Optimal Heating</h3>
              <p className="text-gray-600 text-sm">
                Start heating 5 hours before use. Use dry, seasoned hardwood for best results. 
                Keep the fire steady rather than blazing hot.
              </p>
            </div>
            
            <div className="bg-cream-100 rounded-xl p-6" data-testid="tip-comfort">
              <div className="w-12 h-12 bg-water-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌡️</span>
              </div>
              <h3 className="text-lg font-semibold text-cedar-600 mb-3">Perfect Temperature</h3>
              <p className="text-gray-600 text-sm">
                Ideal temperature is 38-40°C (100-104°F). Test regularly and adjust fire as needed. 
                Remember, it takes time to cool down if too hot.
              </p>
            </div>
            
            <div className="bg-cream-100 rounded-xl p-6" data-testid="tip-safety">
              <div className="w-12 h-12 bg-cedar-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-cedar-600 mb-3">Safety First</h3>
              <p className="text-gray-600 text-sm">
                Never leave the fire unattended. Keep water nearby for emergencies. 
                Follow all safety guidelines provided during setup.
              </p>
            </div>
            
            <div className="bg-cream-100 rounded-xl p-6" data-testid="tip-maintenance">
              <div className="w-12 h-12 bg-fire-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🧽</span>
              </div>
              <h3 className="text-lg font-semibold text-cedar-600 mb-3">Water Care</h3>
              <p className="text-gray-600 text-sm">
                Never use chemicals in the water. 
                Shower before entering to maintain water quality.
              </p>
            </div>
            
            <div className="bg-cream-100 rounded-xl p-6" data-testid="tip-comfort-2">
              <div className="w-12 h-12 bg-water-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-cedar-600 mb-3">Enhance the Experience</h3>
              <p className="text-gray-600 text-sm">
                Bring soft lighting, refreshing drinks, and comfortable seating nearby. 
                Consider the timing - sunset and evening are magical.
              </p>
            </div>
            
            <div className="bg-cream-100 rounded-xl p-6" data-testid="tip-weather">
              <div className="w-12 h-12 bg-cedar-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌙</span>
              </div>
              <h3 className="text-lg font-semibold text-cedar-600 mb-3">Weather Wisdom</h3>
              <p className="text-gray-600 text-sm">
                Cold weather is perfect for hot tubbing! Wind can affect heating time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-cedar-600 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our friendly team is here to help with any specific concerns or special requirements
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm" data-testid="contact-phone">
              <div className="w-12 h-12 bg-fire-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="font-semibold text-cedar-600 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Speak directly with our team</p>
              <a href="tel:+27123456789" className="text-fire-500 font-semibold hover:underline">
                072 270 6959
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm" data-testid="contact-whatsapp">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <h3 className="font-semibold text-cedar-600 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-3">Quick responses guaranteed</p>
              <a 
                href="https://wa.me/27790756571?text=Hi%20BosTubs!%20I%20have%20a%20question%20about%20your%20hot%20tub%20rentals."
                className="text-green-600 font-semibold hover:underline"
              >
                Chat Now
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm" data-testid="contact-email">
              <div className="w-12 h-12 bg-water-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✉️</span>
              </div>
              <h3 className="font-semibold text-cedar-600 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Detailed responses within 24h</p>
              <a href="mailto:hello@bostubs.co.za" className="text-water-600 font-semibold hover:underline">
                bostubs@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-fire-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 text-fire-100">
            All your questions answered? Perfect! Let's get your hot tub experience booked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-fire-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-book-now-faq"
              >
                Book Now
              </Button>
            </Link>
            {/*
            <Link href="/pricing">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-pricing-faq"
              >
                View Pricing
              </Button>
            </Link>
            */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
