import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, Heart, MapPin, Maximize } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function FeaturedProperties() {
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
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden h-full">
          <div className="relative">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              width={500}
              height={300}
              className="w-full h-[220px] object-cover"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {property.badges.map((badge) => (
                <Badge key={badge} variant={badge === "Premium" ? "default" : "secondary"}>
                  {badge}
                </Badge>
              ))}
            </div>
            <Badge variant={property.type === "For Sale" ? "default" : "outline"} className="absolute top-3 right-3">
              {property.type}
            </Badge>
            <Button
              size="icon"
              variant="ghost"
              className={`absolute bottom-3 right-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background ${property.isFavorite ? "text-red-500" : "text-muted-foreground"}`}
            >
              <Heart className="h-5 w-5" fill={property.isFavorite ? "currentColor" : "none"} />
              <span className="sr-only">Add to favorites</span>
            </Button>
          </div>

          <CardContent className="p-4">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
              <p className="font-bold text-primary">{property.price}</p>
            </div>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-sm truncate">{property.address}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
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
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full">
              <Link href={`/properties/${property.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

