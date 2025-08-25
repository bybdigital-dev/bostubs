import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/ui/hero-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Truck, Droplets, CalendarCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cedar-600 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, hassle-free luxury delivered to your doorstep
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group" data-testid="step-delivery">
              <div className="bg-water-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Truck className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-cedar-600 mb-4">1. We Deliver</h3>
              <p className="text-gray-600 leading-relaxed">
                We bring your luxury wood-fired hot tub directly to your location and handle all the setup. No installation required on your part.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group" data-testid="step-relax">
              <div className="bg-fire-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Droplets className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-cedar-600 mb-4">2. You Relax</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy your private spa experience. Whether it's a romantic evening, family fun, or celebration - the tub is all yours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group" data-testid="step-collect">
              <div className="bg-cedar-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <CalendarCheck className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-cedar-600 mb-4">3. We Collect</h3>
              <p className="text-gray-600 leading-relaxed">
                After your rental period, we handle all the cleanup and collection. You're left with nothing but amazing memories.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button 
                size="lg"
                className="bg-cedar-600 hover:bg-cedar-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-fire-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready for the Ultimate Relaxation Experience?
          </h2>
          <p className="text-xl mb-8 text-fire-100">
            Book your wood-fired hot tub rental today and transform any space into a luxury retreat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-fire-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-book-now-cta"
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
                data-testid="button-view-pricing"
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
