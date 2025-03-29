import Link from "next/link"
import { Calendar, MapPin, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function UserRecentSearches() {
  const searches = [
    {
      id: 1,
      location: "Mumbai, Maharashtra",
      filters: "2+ beds, ₹40-60 Lakhs, Apartment",
      date: "2 days ago",
      results: 24,
    },
    {
      id: 2,
      location: "Goa, India",
      filters: "Beachfront, 3+ beds, ₹1 Crore+",
      date: "1 week ago",
      results: 12,
    },
    {
      id: 3,
      location: "Bangalore, Karnataka",
      filters: "Apartment, 1+ beds, ₹15,000-25,000/mo",
      date: "2 weeks ago",
      results: 35,
    },
  ]

  return (
    <div className="space-y-4">
      {searches.map((search) => (
        <Card key={search.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold">{search.location}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{search.filters}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{search.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Search className="h-3 w-3" />
                    <span>{search.results} properties found</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove search</span>
                </Button>
                <Button asChild size="sm">
                  <Link href={`/properties?search=${search.id}`}>View Results</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

