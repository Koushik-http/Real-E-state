import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, Heart, MapPin, Maximize } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PropertyListings() {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment with City View",
      address: "Bandra West, Mumbai, Maharashtra",
      price: "₹45,00,000",
      type: "For Sale",
      badges: ["Featured", "New"],
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      beds: 2,
      baths: 2,
      sqft: 1200,
      isFavorite: false,
      description:
        "This beautiful apartment features floor-to-ceiling windows with stunning city views of Mumbai, modern appliances, and an open floor plan perfect for entertaining.",
    },
    {
      id: 2,
      title: "Luxury Villa in Juhu",
      address: "Juhu Beach Road, Mumbai, Maharashtra",
      price: "₹1,25,00,000",
      type: "For Sale",
      badges: ["Premium"],
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      isFavorite: true,
      description:
        "Spectacular beachfront villa with private garden, swimming pool, and panoramic sea views. Features high-end finishes throughout and a gourmet kitchen with premium appliances.",
    },
    {
      id: 3,
      title: "Cozy Studio in Indiranagar",
      address: "Indiranagar, Bangalore, Karnataka",
      price: "₹18,000/mo",
      type: "For Rent",
      badges: ["New"],
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      beds: 1,
      baths: 1,
      sqft: 650,
      isFavorite: false,
      description:
        "Charming studio apartment in the heart of Indiranagar. Walking distance to restaurants, cafes, and metro station. Includes in-unit laundry and gym access in the building.",
    },
    {
      id: 4,
      title: "Family Home with Garden",
      address: "Koramangala, Bangalore, Karnataka",
      price: "₹68,50,000",
      type: "For Sale",
      badges: [],
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      beds: 3,
      baths: 2.5,
      sqft: 2100,
      isFavorite: false,
      description:
        "Spacious family home with a large backyard garden, updated kitchen, and finished basement. Located in a quiet neighborhood with excellent schools nearby in Koramangala.",
    },
    {
      id: 5,
      title: "Modern Loft in Hauz Khas",
      address: "Hauz Khas Village, New Delhi, Delhi",
      price: "₹24,000/mo",
      type: "For Rent",
      badges: ["Featured"],
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      beds: 1,
      baths: 1.5,
      sqft: 950,
      isFavorite: true,
      description:
        "Contemporary loft with exposed brick walls, high ceilings, and large windows. Located in the vibrant Hauz Khas Village with art galleries, cafes, and boutiques just steps away.",
    },
    {
      id: 6,
      title: "Hill View Cottage in Shimla",
      address: "Mall Road, Shimla, Himachal Pradesh",
      price: "₹39,50,000",
      type: "For Sale",
      badges: ["New"],
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      beds: 2,
      baths: 1,
      sqft: 1100,
      isFavorite: false,
      description:
        "Cozy cottage with stunning mountain views, wood-burning fireplace, and wraparound deck. Perfect for year-round living or as a vacation getaway in beautiful Shimla.",
    },
    {
      id: 7,
      title: "Heritage Haveli in Jaipur",
      address: "Civil Lines, Jaipur, Rajasthan",
      price: "₹87,50,000",
      type: "For Sale",
      badges: [],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      beds: 3,
      baths: 2,
      sqft: 1800,
      isFavorite: false,
      description:
        "Beautifully renovated heritage haveli with original architectural details, modern updates, and a private courtyard. Located in a historic neighborhood of Jaipur.",
    },
    {
      id: 8,
      title: "Luxury Penthouse in Gurgaon",
      address: "Golf Course Road, Gurgaon, Haryana",
      price: "₹32,000/mo",
      type: "For Rent",
      badges: ["Premium"],
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      beds: 2,
      baths: 2,
      sqft: 1500,
      isFavorite: false,
      description:
        "Stunning penthouse with floor-to-ceiling windows, private terrace, and panoramic city views. Includes concierge service and access to building amenities like pool and gym.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">Showing {properties.length} properties</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <select className="text-sm border rounded-md px-2 py-1">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-1/3">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={500}
                  height={300}
                  className="w-full h-[220px] md:h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {property.badges.map((badge) => (
                    <Badge key={badge} variant={badge === "Premium" ? "default" : "secondary"}>
                      {badge}
                    </Badge>
                  ))}
                </div>
                <Badge
                  variant={property.type === "For Sale" ? "default" : "outline"}
                  className="absolute top-3 right-3"
                >
                  {property.type}
                </Badge>
              </div>

              <div className="flex flex-col flex-1 p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-bold text-lg">{property.title}</h3>
                  <p className="font-bold text-primary">{property.price}</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">{property.address}</span>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">{property.description}</p>

                <div className="flex items-center justify-between text-sm mt-auto">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>
                      {property.beds} {property.beds === 1 ? "Bed" : "Beds"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>
                      {property.baths} {property.baths === 1 ? "Bath" : "Baths"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${property.isFavorite ? "text-red-500" : "text-muted-foreground"}`}
                  >
                    <Heart className="h-5 w-5 mr-2" fill={property.isFavorite ? "currentColor" : "none"} />
                    {property.isFavorite ? "Saved" : "Save"}
                  </Button>
                  <Button asChild>
                    <Link href={`/properties/${property.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled>
            &lt;
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="icon">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  )
}

