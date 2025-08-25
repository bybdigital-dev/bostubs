import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Truck, Droplets, CalendarCheck, Clock, Shield, Wrench } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-cedar-600 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our simple 3-step process makes luxury hot tub rentals completely hassle-free. 
            From delivery to collection, we handle everything so you can focus on relaxation.
          </p>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12" data-testid="step-1-detailed">
              <div className="lg:w-1/2">
                <div className="bg-water-400 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                  <Truck className="text-white w-12 h-12" />
                </div>
                <h2 className="text-3xl font-playfair font-bold text-cedar-600 mb-6">
                  Step 1: We Deliver & Setup
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    Our professional team brings your luxury wood-fired hot tub directly to your chosen location. 
                    We handle the complete setup process, including:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Positioning the hot tub on a suitable flat surface</li>
                    <li>• Filling with fresh, treated water</li>
                    <li>• Safety briefing and operation instructions</li>
                    <li>• Providing initial firewood supply</li>
                    <li>• Water testing and chemical balance</li>
                  </ul>
                  <p className="text-lg">
                    The entire setup process typically takes 30-45 minutes, and we'll make sure 
                    everything is perfect before we leave.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://pixabay.com/get/ge0766dda8ae84f8805e219c2a3bd50369d803921ba21d953484c595696ee1193c38921717c1a90fea49c2771b5a8cd3d0f1221d6eb4f91fba2b5e9524f834d66_1280.jpg"
                  alt="Professional hot tub delivery and setup"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12" data-testid="step-2-detailed">
              <div className="lg:w-1/2">
                <div className="bg-fire-500 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                  <Droplets className="text-white w-12 h-12" />
                </div>
                <h2 className="text-3xl font-playfair font-bold text-cedar-600 mb-6">
                  Step 2: You Relax & Enjoy
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    Now comes the best part - pure relaxation! Your hot tub experience includes:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• 2-4 hours heating time to reach perfect temperature (38-40°C)</li>
                    <li>• Natural wood-fired heating system</li>
                    <li>• Crystal clear, sanitized water</li>
                    <li>• Rustic luxury experience under the stars</li>
                    <li>• Perfect for couples, families, or small groups</li>
                  </ul>
                  <p className="text-lg">
                    Whether you're celebrating a special occasion, hosting friends, or simply 
                    enjoying a romantic evening, the hot tub creates unforgettable moments.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                  alt="Relaxing evening in hot tub with ambient lighting"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12" data-testid="step-3-detailed">
              <div className="lg:w-1/2">
                <div className="bg-cedar-600 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                  <CalendarCheck className="text-white w-12 h-12" />
                </div>
                <h2 className="text-3xl font-playfair font-bold text-cedar-600 mb-6">
                  Step 3: We Collect & Clean
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    When your rental period ends, we return to handle everything:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Complete water drainage and cleanup</li>
                    <li>• Thorough sanitization for the next customer</li>
                    <li>• Safe removal from your property</li>
                    <li>• No mess or residue left behind</li>
                    <li>• Professional, courteous service</li>
                  </ul>
                  <p className="text-lg">
                    You're left with nothing but wonderful memories and the satisfaction of 
                    having enjoyed a truly unique luxury experience.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://pixabay.com/get/g60eaf69f89e7e596186f4fb90100c9e7e43ca6fcd01c8caff21a0c7d931185a427782c94f0d348cd38795e47274d028a07026e5ebdfe67884e62030086ef2ab5_1280.jpg"
                  alt="Professional cleanup and collection service"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cedar-600 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your hot tub experience is perfect from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm" data-testid="feature-professional">
              <Clock className="w-16 h-16 text-water-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cedar-600 mb-4">Professional Service</h3>
              <p className="text-gray-600">
                Punctual delivery, expert setup, and reliable collection. Our team is trained, 
                insured, and committed to excellence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm" data-testid="feature-safety">
              <Shield className="w-16 h-16 text-fire-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cedar-600 mb-4">Safety & Hygiene</h3>
              <p className="text-gray-600">
                Rigorous cleaning protocols, water quality testing, and comprehensive safety 
                briefings ensure worry-free enjoyment.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm" data-testid="feature-support">
              <Wrench className="w-16 h-16 text-cedar-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cedar-600 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                24/7 support hotline, maintenance visits for extended rentals, and expert 
                advice whenever you need it.
              </p>
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
            Join hundreds of satisfied customers who have discovered the joy of wood-fired hot tub rentals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-fire-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-book-experience-cta"
              >
                Book Your Experience
              </Button>
            </Link>
            <Link href="/gallery">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-view-gallery"
              >
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
