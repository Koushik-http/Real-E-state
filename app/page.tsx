import Link from "next/link"
import { Building, ChevronRight, Home, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProperties from "@/components/featured-properties"
import HeroSection from "@/components/hero-section"
import PropertyCategories from "@/components/property-categories"
import TestimonialSection from "@/components/testimonial-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Building className="h-6 w-6" />
              <span>EstateHub</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/properties" className="text-sm font-medium transition-colors hover:text-primary">
                Buy
              </Link>
              <Link href="/properties?type=rent" className="text-sm font-medium transition-colors hover:text-primary">
                Rent
              </Link>
              <Link href="/sell" className="text-sm font-medium transition-colors hover:text-primary">
                Sell
              </Link>
              <Link href="/agents" className="text-sm font-medium transition-colors hover:text-primary">
                Agents
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary hidden md:block">
              Log in
            </Link>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Find Your Dream Home</h2>
            <p className="mt-4 text-muted-foreground max-w-[700px]">
              Browse through our extensive collection of properties and find the perfect place to call home.
            </p>
          </div>

          <PropertyCategories />
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Properties</h2>
            <p className="mt-4 text-muted-foreground max-w-[700px]">
              Explore our handpicked selection of premium properties available for sale and rent.
            </p>
          </div>

          <FeaturedProperties />

          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/properties" className="flex items-center gap-2">
                View All Properties
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="mt-4 text-muted-foreground max-w-[700px]">
                We provide exceptional service and expertise to help you find your perfect property.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
                <p className="text-muted-foreground">
                  Access thousands of properties across the country, with new listings added daily.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location Expertise</h3>
                <p className="text-muted-foreground">
                  Our agents have in-depth knowledge of local markets and neighborhoods.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">
                  We provide tailored recommendations based on your specific needs and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialSection />
      </main>
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
                <Building className="h-6 w-6" />
                <span>EstateHub</span>
              </Link>
              <p className="text-muted-foreground">
                Your trusted partner in finding the perfect property for your needs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="text-muted-foreground hover:text-primary transition-colors">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-muted-foreground hover:text-primary transition-colors">
                    Buying Guides
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-muted-foreground space-y-2">
                <p>123 Real Estate Avenue</p>
                <p>Mumbai, Maharashtra 400001</p>
                <p>Email: info@estatehub.com</p>
                <p>Phone: (+91) 98765-43210</p>
              </address>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 EstateHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

