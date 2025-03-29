import { Filter, SlidersHorizontal, Building } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyListings from "@/components/property-listings"
import PropertyMap from "@/components/property-map"

export default function PropertiesPage() {
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
              <p className="text-muted-foreground">Browse our available properties for sale and rent</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Tabs defaultValue="list">
                <TabsList>
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="map">Map View</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-background rounded-lg border p-4">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Location</label>
                    <Input placeholder="Enter city, zip or address" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Property Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Price Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Min" />
                      <Input placeholder="Max" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Bedrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Bathrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div>
                    <label className="text-sm font-medium mb-1 block">Square Feet</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Min" />
                      <Input placeholder="Max" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Year Built</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="From" />
                      <Input placeholder="To" />
                    </div>
                  </div>

                  <Separator />

                  <div className="flex flex-col gap-2">
                    <Button className="w-full">Apply Filters</Button>
                    <Button variant="outline" className="w-full">
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Tabs defaultValue="list" className="w-full">
                <TabsContent value="list" className="mt-0">
                  <PropertyListings />
                </TabsContent>
                <TabsContent value="map" className="mt-0">
                  <PropertyMap />
                </TabsContent>
              </Tabs>
            </div>
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

