"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HeroSection() {
  const [location, setLocation] = useState("")

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80"
          alt="Modern luxury home exterior in India"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="relative z-10 container py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Your Perfect Place to Call Home
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl">
            Discover thousands of properties for sale and rent across India. Your dream home is just a search away.
          </p>

          <div className="mt-10 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="sell">Sell</TabsTrigger>
              </TabsList>

              <TabsContent value="buy" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="flex items-center border rounded-md pl-3 bg-background">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Enter location"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10l">Under ₹10 Lakhs</SelectItem>
                      <SelectItem value="25l">₹10-25 Lakhs</SelectItem>
                      <SelectItem value="50l">₹25-50 Lakhs</SelectItem>
                      <SelectItem value="75l">₹50-75 Lakhs</SelectItem>
                      <SelectItem value="1cr">₹75 Lakhs-1 Crore</SelectItem>
                      <SelectItem value="1cr+">Above ₹1 Crore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between items-center">
                  <Link href="/advanced-search" className="text-sm text-primary hover:underline">
                    Advanced Search
                  </Link>
                  <Button size="lg">Search Properties</Button>
                </div>
              </TabsContent>

              <TabsContent value="rent" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="flex items-center border rounded-md pl-3 bg-background">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Enter location"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Monthly Rent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k">Under ₹10,000</SelectItem>
                      <SelectItem value="20k">₹10,000-₹20,000</SelectItem>
                      <SelectItem value="30k">₹20,000-₹30,000</SelectItem>
                      <SelectItem value="50k">₹30,000-₹50,000</SelectItem>
                      <SelectItem value="50k+">Above ₹50,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between items-center">
                  <Link href="/advanced-search" className="text-sm text-primary hover:underline">
                    Advanced Search
                  </Link>
                  <Button size="lg">Search Rentals</Button>
                </div>
              </TabsContent>

              <TabsContent value="sell" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center border rounded-md pl-3 bg-background">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter your property address"
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end">
                  <Button size="lg">Get Property Valuation</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

