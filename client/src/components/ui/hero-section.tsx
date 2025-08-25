import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/Water_Steam_Hottub.jpg";

export function HeroSection() {
  return (
    <section className="pt-16">
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
              Wood-Fired Hot Tub Rentals in Pretoria
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cream-200 font-light leading-relaxed">
              No installation. No commitment. Just pure relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-fire-500 hover:bg-fire-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  data-testid="button-book-experience"
                >
                  Book Your Experience
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 transition-all duration-200"
                  data-testid="button-how-it-works"
                >
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
