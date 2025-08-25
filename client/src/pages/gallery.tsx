import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://pixabay.com/get/ge0766dda8ae84f8805e219c2a3bd50369d803921ba21d953484c595696ee1193c38921717c1a90fea49c2771b5a8cd3d0f1221d6eb4f91fba2b5e9524f834d66_1280.jpg",
    alt: "Modern backyard hot tub setup with landscaping"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    alt: "Romantic evening hot tub with ambient lighting"
  },
  {
    src: "https://pixabay.com/get/g0d02af2a1f9669b11cbcc74f91ec137aa2532e480e0b501f9a1bcee8bd5163622e642319b3e1fade72c2b95253559ad829bb7de661831cdd43762c5704807d46_1280.jpg",
    alt: "Family enjoying garden hot tub experience"
  },
  {
    src: "https://pixabay.com/get/g60eaf69f89e7e596186f4fb90100c9e7e43ca6fcd01c8caff21a0c7d931185a427782c94f0d348cd38795e47274d028a07026e5ebdfe67884e62030086ef2ab5_1280.jpg",
    alt: "Party celebration hot tub setup"
  },
  {
    src: "https://pixabay.com/get/g0990d4dee75c11c0745f77ea74b65fb528f908b54450535fb4c4531a19dbc4e3d06f8d36704b46c99536f01c4c4fe94eaec2462b16d064289768952a831a7158_1280.jpg",
    alt: "Natural outdoor hot tub among trees"
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    alt: "Wood-fired hot tub with flames and steam"
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-cedar-600 mb-6">
            Experience Gallery
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how our luxury wood-fired hot tubs transform any space into a private retreat. 
            From intimate backyard settings to celebration setups, see the magic for yourself.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cedar-600 mb-6">
              Perfect for Every Occasion
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our wood-fired hot tubs create memorable experiences for all types of celebrations and gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="occasion-romantic">
              <div className="bg-fire-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-2">Romantic Evenings</h3>
              <p className="text-gray-600">
                Create unforgettable moments with your partner under the stars
              </p>
            </div>
            
            <div className="text-center" data-testid="occasion-family">
              <div className="bg-water-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-2">Family Fun</h3>
              <p className="text-gray-600">
                Bond with loved ones in a relaxing, natural environment
              </p>
            </div>
            
            <div className="text-center" data-testid="occasion-celebration">
              <div className="bg-cedar-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-2">Celebrations</h3>
              <p className="text-gray-600">
                Make birthdays, anniversaries, and special events extraordinary
              </p>
            </div>
            
            <div className="text-center" data-testid="occasion-wellness">
              <div className="bg-fire-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘‍♀️</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-2">Wellness Retreat</h3>
              <p className="text-gray-600">
                Unwind and recharge with therapeutic hot water relaxation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cedar-600 mb-6">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="testimonial-1">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-fire-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Absolutely incredible experience! The setup was seamless and the hot tub was perfect for our anniversary celebration. We'll definitely be booking again!"
              </p>
              <div className="font-semibold text-cedar-600">- Sarah & Mark, Centurion</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="testimonial-2">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-fire-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The kids loved it and so did we! Professional service from start to finish. Made our backyard feel like a luxury resort."
              </p>
              <div className="font-semibold text-cedar-600">- The Johnson Family, Pretoria East</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-fire-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-xl mb-8 text-fire-100">
            Book your luxury hot tub experience and see why our customers keep coming back
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-fire-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-book-now-gallery"
              >
                Book Now
              </Button>
            </Link>
            <Link href="/pricing">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-view-pricing-gallery"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
