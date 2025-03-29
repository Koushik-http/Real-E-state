import Image from "next/image"
import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Homeowner",
      quote:
        "EstateHub made finding our dream home in Mumbai so easy. The search tools were intuitive, and our agent was incredibly helpful throughout the entire process.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "First-time Buyer",
      quote:
        "As a first-time buyer in Bangalore, I was nervous about the process, but EstateHub guided me every step of the way. I couldn't be happier with my new apartment!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 3,
      name: "Neha Reddy",
      role: "Property Investor",
      quote:
        "I've used many real estate platforms for my investments in Delhi, but EstateHub stands out for its comprehensive listings and excellent customer service. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
  ]

  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
          EstateHub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

