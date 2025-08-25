import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PricingCard } from "@/components/ui/pricing-card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const handlePackageSelect = (packageName: string) => {
    // Navigate to contact page with pre-selected package
    window.location.href = `/contact?package=${encodeURIComponent(packageName)}`;
  };

  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-cedar-600 mb-6">
            Pricing & Packages
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Flexible rental options designed to suit your needs and budget. 
            All packages include delivery, setup, and collection services.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Weekend Escape"
              price="R1,200"
              period="2 days"
              features={[
                "Friday evening delivery",
                "Sunday evening collection",
                "Complete setup included",
                "Basic firewood included"
              ]}
              buttonText="Choose Weekend"
              onSelect={() => handlePackageSelect("Weekend Escape")}
              testId="pricing-weekend"
            />

            <PricingCard
              title="Weekly Retreat"
              price="R2,800"
              period="7 days"
              features={[
                "Full week rental",
                "Premium firewood package",
                "Mid-week maintenance visit",
                "Best value for money"
              ]}
              isPopular={true}
              buttonText="Choose Weekly"
              onSelect={() => handlePackageSelect("Weekly Retreat")}
              testId="pricing-weekly"
            />

            <PricingCard
              title="Special Events"
              price="R800"
              period="day"
              features={[
                "Perfect for parties",
                "Same-day setup & collection",
                "Flexible timing",
                "Additional firewood available"
              ]}
              buttonText="Choose Event"
              onSelect={() => handlePackageSelect("Special Events")}
              testId="pricing-events"
            />
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-playfair font-bold text-cedar-600 mb-6 text-center">
              Optional Add-ons
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 bg-cream-100 rounded-lg" data-testid="addon-firewood">
                <div>
                  <h4 className="font-semibold text-cedar-600">Premium Firewood Package</h4>
                  <p className="text-gray-600 text-sm">Extra seasoned wood for extended use</p>
                </div>
                <span className="font-bold text-fire-500 text-lg">+R200</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-cream-100 rounded-lg" data-testid="addon-hours">
                <div>
                  <h4 className="font-semibold text-cedar-600">Extended Hours</h4>
                  <p className="text-gray-600 text-sm">Keep the tub longer on collection day</p>
                </div>
                <span className="font-bold text-fire-500 text-lg">+R150</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-cedar-600 mb-6">
            Service Area
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We deliver throughout Pretoria and surrounding areas within a 50km radius
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-cream-100 rounded-lg" data-testid="area-pretoria">
              <h3 className="font-semibold text-cedar-600 mb-2">Pretoria Central</h3>
              <p className="text-gray-600 text-sm">City center and surrounding suburbs</p>
            </div>
            <div className="p-6 bg-cream-100 rounded-lg" data-testid="area-centurion">
              <h3 className="font-semibold text-cedar-600 mb-2">Centurion</h3>
              <p className="text-gray-600 text-sm">All residential areas included</p>
            </div>
            <div className="p-6 bg-cream-100 rounded-lg" data-testid="area-midrand">
              <h3 className="font-semibold text-cedar-600 mb-2">Midrand & Beyond</h3>
              <p className="text-gray-600 text-sm">Extended delivery available</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Delivery fees may apply for locations outside our standard service area. 
            Contact us for specific delivery quotes.
          </p>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-cedar-600 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              All our packages include these standard features at no extra cost
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-4 gap-0">
              <div className="p-6 bg-cedar-600 text-white">
                <h3 className="font-semibold text-lg">Features</h3>
              </div>
              <div className="p-6 text-center border-r border-gray-200">
                <h3 className="font-semibold text-cedar-600">Weekend</h3>
              </div>
              <div className="p-6 text-center border-r border-gray-200 bg-fire-50">
                <h3 className="font-semibold text-cedar-600">Weekly ⭐</h3>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-cedar-600">Events</h3>
              </div>
            </div>
            
            {[
              "Professional delivery & setup",
              "Complete water filling",
              "Safety briefing included",
              "Water treatment chemicals",
              "Basic firewood supply",
              "Full cleanup & collection",
              "24/7 support hotline",
              "Insurance coverage"
            ].map((feature, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-0 border-t border-gray-200">
                <div className="p-4 font-medium text-gray-700 border-r border-gray-200">
                  {feature}
                </div>
                <div className="p-4 text-center border-r border-gray-200">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
                <div className="p-4 text-center border-r border-gray-200 bg-fire-50">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-fire-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Book Your Perfect Package?
          </h2>
          <p className="text-xl mb-8 text-fire-100">
            Choose the rental package that fits your needs and let us create an unforgettable experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-fire-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-book-package"
              >
                Book Now
              </Button>
            </Link>
            <Link href="/faq">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-view-faq"
              >
                View FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
