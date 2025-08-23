"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your API
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-heading text-4xl font-bold mb-4 text-black">Message Sent!</h1>
          <p className="text-xl text-black mb-8">
            Message sent. I'll be in touch within 24 hours to schedule our discovery call.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-gray-300 text-black hover:bg-gray-100"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-black">
            Let's make something electric.
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Tell me the vision, the constraints, and the deadline. I'll respond within 24 hours with next steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold mb-6 text-black">Start a Project</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-black">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-white border-gray-300 text-black placeholder:text-gray-500"
                        placeholder="Who am I building with?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-black">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-white border-gray-300 text-black placeholder:text-gray-500"
                        placeholder="Where should I reply?"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType" className="text-black">
                      Project Type
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="bg-white border-gray-300 text-black">
                        <SelectValue placeholder="Film, Pitch Decks, Worldbuilding" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        <SelectItem value="film-direction">Film & Music Video Direction</SelectItem>
                        <SelectItem value="pitch-deck">Pitch Deck Design</SelectItem>
                        <SelectItem value="ai-creative">Ai Creative Development</SelectItem>
                        <SelectItem value="photography">High-End Photography</SelectItem>
                        <SelectItem value="worldbuilding">Worldbuilding</SelectItem>
                        <SelectItem value="editing">Editing & Post-Production</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget" className="text-black">
                        Budget Range
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="bg-white border-gray-300 text-black">
                          <SelectValue placeholder="Be real—this helps me scope right." />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          <SelectItem value="under-10k">Under $10k</SelectItem>
                          <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                          <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="over-100k">$100k+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="text-black">
                        Timeline
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="bg-white border-gray-300 text-black">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-months-plus">6+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-black">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={6}
                      className="bg-white border-gray-300 text-black placeholder:text-gray-500"
                      placeholder="Tell me the brief, goals, and any references."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-4 text-black">Response Time</h3>
                <p className="text-black text-sm leading-relaxed">
                  I typically respond to project inquiries within 24 hours. For urgent requests, please mention it in
                  your message.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-4 text-black">What's Next?</h3>
                <div className="space-y-3 text-sm text-black">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Initial consultation call</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Project scope & timeline</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Proposal & agreement</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Let's create work that feels inevitable</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
