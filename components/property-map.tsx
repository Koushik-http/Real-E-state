"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PropertyMap() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)

  const properties = [
    { id: 1, lat: 19.076, lng: 72.8777, price: "₹45,00,000", title: "Modern Apartment with City View" },
    { id: 2, lat: 19.0883, lng: 72.8321, price: "₹1,25,00,000", title: "Luxury Villa in Juhu" },
    { id: 3, lat: 12.9716, lng: 77.6441, price: "₹18,000/mo", title: "Cozy Studio in Indiranagar" },
    { id: 4, lat: 12.9352, lng: 77.6245, price: "₹68,50,000", title: "Family Home with Garden" },
    { id: 5, lat: 28.5529, lng: 77.188, price: "₹24,000/mo", title: "Modern Loft in Hauz Khas" },
    { id: 6, lat: 31.1048, lng: 77.1734, price: "₹39,50,000", title: "Hill View Cottage in Shimla" },
  ]

  return (
    <div className="relative h-[700px] bg-muted rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
          <p className="text-muted-foreground mb-4">
            This would be an interactive map showing property locations.
            <br />
            (Using Google Maps or Mapbox API in production)
          </p>
          <Button>Load Map</Button>
        </div>
      </div>

      {/* Property markers (would be positioned on the map) */}
      <div className="absolute top-1/4 left-1/4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setSelectedProperty(1)}
        >
          <MapPin className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-1/3 left-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setSelectedProperty(2)}
        >
          <MapPin className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-1/2 left-1/3">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setSelectedProperty(3)}
        >
          <MapPin className="h-4 w-4" />
        </Button>
      </div>

      {/* Property info card (shows when a marker is clicked) */}
      {selectedProperty && (
        <Card className="absolute bottom-4 left-4 w-72">
          <CardContent className="p-4">
            <h3 className="font-semibold">{properties.find((p) => p.id === selectedProperty)?.title}</h3>
            <p className="text-primary font-bold">{properties.find((p) => p.id === selectedProperty)?.price}</p>
            <div className="flex justify-between mt-2">
              <Button variant="outline" size="sm" onClick={() => setSelectedProperty(null)}>
                Close
              </Button>
              <Button size="sm">View Details</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

