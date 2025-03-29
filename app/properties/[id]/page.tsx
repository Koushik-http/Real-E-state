import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, Building, Calendar, ChevronLeft, Heart, Home, MapPin, Maximize, Share2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PropertyContactForm from "@/components/property-contact-form"
import SimilarProperties from "@/components/similar-properties"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the property data based on the ID
  const property = {
    id: Number.parseInt(params.id),
    title: "Luxury Villa in Juhu",
    address: "Juhu Beach Road, Mumbai, Maharashtra",
    price: "₹1,25,00,000",
    type: "For Sale",
    badges: ["Premium"],
    description:
      "This spectacular beachfront villa offers luxurious living with breathtaking views of the Arabian Sea. The property features an open floor plan with high ceilings, floor-to-ceiling windows, and premium finishes throughout. The gourmet kitchen includes top-of-the-line appliances, custom cabinetry, and a large island perfect for entertaining. The primary suite boasts a spa-like bathroom and private balcony overlooking the water. Outside, enjoy the infinity pool, private garden, and meticulously landscaped grounds. Additional amenities include a home theater, wine cellar, and smart home technology.",
    features: [
      "Beachfront Property",
      "Infinity Pool",
      "Private Garden",
      "Home Theater",
      "Wine Cellar",
      "Smart Home Technology",
      "Gourmet Kitchen",
      "Primary Suite with Balcony",
      "Floor-to-Ceiling Windows",
      "Landscaped Gardens",
      "3-Car Garage",
      "Outdoor Kitchen",
    ],
    details: {
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      yearBuilt: 2018,
      lotSize: "0.5 acres",
      garage: "3-Car Attached",
      basement: "Finished",
      heating: "Central",
      cooling: "Central A/C",
      propertyType: "Villa",
      stories: 2,
    },
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    ],
    agent: {
      name: "Priya Sharma",
      phone: "(+91) 98765-43210",
      email: "priya.sharma@estatehub.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    isFavorite: false,
  }

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
        <div className="container py-8">
          <div className="mb-6">
            <Link
              href="/properties"
              className="flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Properties
            </Link>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{property.title}</h1>
                <div className="flex items-center text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>{property.address}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className={`${property.isFavorite ? "text-red-500" : ""}`}>
                  <Heart className="h-4 w-4 mr-2" fill={property.isFavorite ? "currentColor" : "none"} />
                  {property.isFavorite ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Image
                    src={property.images[0] || "/placeholder.svg"}
                    alt={property.title}
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
                {property.images.slice(1, 5).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 2}`}
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  {property.type}
                </Badge>
                <div className="flex items-center text-muted-foreground">
                  <Bed className="h-5 w-5 mr-1" />
                  <span>{property.details.beds} Beds</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Bath className="h-5 w-5 mr-1" />
                  <span>{property.details.baths} Baths</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Maximize className="h-5 w-5 mr-1" />
                  <span>{property.details.sqft} sqft</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Home className="h-5 w-5 mr-1" />
                  <span>{property.details.lotSize} Lot</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-1" />
                  <span>Built in {property.details.yearBuilt}</span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Price</h2>
                <p className="text-3xl font-bold text-primary">{property.price}</p>
                <p className="text-muted-foreground mt-1">
                  Est. ₹{Math.round(Number.parseInt(property.price.replace(/₹|,/g, "")) * 0.004).toLocaleString()}/mo
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Property Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Type</span>
                      <span className="font-medium">{property.details.propertyType}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built</span>
                      <span className="font-medium">{property.details.yearBuilt}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bedrooms</span>
                      <span className="font-medium">{property.details.beds}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bathrooms</span>
                      <span className="font-medium">{property.details.baths}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Square Feet</span>
                      <span className="font-medium">{property.details.sqft}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lot Size</span>
                      <span className="font-medium">{property.details.lotSize}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Garage</span>
                      <span className="font-medium">{property.details.garage}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Basement</span>
                      <span className="font-medium">{property.details.basement}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Heating</span>
                      <span className="font-medium">{property.details.heating}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cooling</span>
                      <span className="font-medium">{property.details.cooling}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground mb-4">
                      This would be an interactive map showing the property location.
                      <br />
                      (Using Google Maps or Mapbox API in production)
                    </p>
                    <Button>Load Map</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">Listing Agent</p>
                    </div>
                  </div>

                  <PropertyContactForm agent={property.agent} propertyId={property.id} />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Mortgage Calculator</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Home Price</label>
                      <input
                        type="text"
                        value={property.price}
                        className="w-full px-3 py-2 border rounded-md"
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Down Payment</label>
                      <input type="text" defaultValue="₹25,00,000" className="w-full px-3 py-2 border rounded-md" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Loan Term</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>30 Years</option>
                        <option>15 Years</option>
                        <option>10 Years</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Interest Rate</label>
                      <input type="text" defaultValue="7.5%" className="w-full px-3 py-2 border rounded-md" />
                    </div>

                    <Button className="w-full">Calculate</Button>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Estimated Monthly Payment</span>
                        <span className="font-bold">₹83,267</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Includes principal, interest, property taxes, and home insurance
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
            <SimilarProperties currentPropertyId={property.id} />
          </div>
        </div>
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

