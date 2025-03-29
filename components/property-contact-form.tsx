"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface PropertyContactFormProps {
  agent: {
    name: string
    phone: string
    email: string
  }
  propertyId: number
}

export default function PropertyContactForm({ agent, propertyId }: PropertyContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Hi ${agent.name}, I'm interested in this property (ID: ${propertyId}). Please contact me with more information.`,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          <a href={`tel:${agent.phone}`} className="hover:text-primary">
            {agent.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <a href={`mailto:${agent.email}`} className="hover:text-primary">
            {agent.email}
          </a>
        </div>
      </div>

      {isSubmitted ? (
        <div className="bg-primary/10 p-4 rounded-md text-center">
          <h3 className="font-semibold text-primary mb-2">Thank You!</h3>
          <p className="text-sm">Your message has been sent to {agent.name}. They will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium mb-1 block">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium mb-1 block">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium mb-1 block">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number (e.g., +91 98765-43210)"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium mb-1 block">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Contact Agent"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      )}
    </div>
  )
}

