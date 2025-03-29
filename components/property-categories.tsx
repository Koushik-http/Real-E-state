import Link from "next/link"
import { Building, Home, Hotel, Landmark, Mountain, Trees } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export default function PropertyCategories() {
  const categories = [
    {
      title: "Houses",
      icon: Home,
      description: "Find standalone houses with yards and privacy",
      link: "/properties?category=house",
      count: 1245,
    },
    {
      title: "Apartments",
      icon: Building,
      description: "Discover modern apartments in urban locations",
      link: "/properties?category=apartment",
      count: 873,
    },
    {
      title: "Villas",
      icon: Hotel,
      description: "Explore luxury villas with premium amenities",
      link: "/properties?category=villa",
      count: 542,
    },
    {
      title: "Commercial",
      icon: Landmark,
      description: "Find office spaces and retail properties",
      link: "/properties?category=commercial",
      count: 328,
    },
    {
      title: "Land",
      icon: Mountain,
      description: "Purchase vacant land for development",
      link: "/properties?category=land",
      count: 156,
    },
    {
      title: "Vacation Homes",
      icon: Trees,
      description: "Discover properties in vacation destinations",
      link: "/properties?category=vacation",
      count: 219,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.title} href={category.link}>
          <Card className="h-full transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-muted-foreground mb-3">{category.description}</p>
              <p className="text-sm font-medium text-primary">{category.count} Properties</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

