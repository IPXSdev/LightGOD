"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Copy } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    projectType: "",
    budget: "",
    timeline: "",
    websiteLink: "",
    assetLink: "",
    message: "",
  })

  const isFormValid =
    formData.name && formData.email && formData.contactNumber && formData.projectType && formData.message

  const buildEmailBody = () => {
    return `Hello LightGod,

Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.contactNumber}
Project Type: ${formData.projectType}
Budget: ${formData.budget || "—"}
Deadline: ${formData.timeline || "—"}
Website/Portfolio: ${formData.websiteLink || "—"}
Assets/References: ${formData.assetLink || "—"}
Message:
${formData.message}

Sent from lightgod.fyi/contact`
  }

  const buildEmailSubject = () => {
    return `Inquiry: ${formData.projectType}`
  }

  const handleGmailCompose = () => {
    if (!isFormValid) return

    const subject = encodeURIComponent(buildEmailSubject())
    const body = encodeURIComponent(buildEmailBody())
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ipxsdev@gmail.com&su=${subject}&body=${body}`

    const newWindow = window.open(gmailUrl, "_blank")
    if (!newWindow) {
      window.location.href = gmailUrl
    }
    setIsSubmitted(true)
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ipxsdev@gmail.com")
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleCopyQuestionnaire = async () => {
    if (!isFormValid) return

    const questionnaire = `Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.contactNumber}
Project Type: ${formData.projectType}
Budget: ${formData.budget || "—"}
Timeline: ${formData.timeline || "—"}
Website/Portfolio: ${formData.websiteLink || "—"}
Assets/References: ${formData.assetLink || "—"}
Message: ${formData.message}`

    try {
      await navigator.clipboard.writeText(questionnaire)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy questionnaire:", err)
    }
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
          <h1 className="font-heading text-4xl font-bold mb-4 text-black">Email Compose Opened!</h1>
          <p className="text-xl text-black mb-8">
            Your email client should have opened with your message pre-filled. Send it when you're ready!
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
                <form className="space-y-6">
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
                    <Label htmlFor="contactNumber" className="text-black">
                      Contact Number *
                    </Label>
                    <Input
                      id="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                      required
                      className="bg-white border-gray-300 text-black placeholder:text-gray-500"
                      placeholder="Best number to reach you"
                    />
                  </div>

                  <div>
                    <Label htmlFor="projectType" className="text-black">
                      Project Type *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="bg-white border-gray-300 text-black">
                        <SelectValue placeholder="Film, Pitch Decks, Worldbuilding" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        <SelectItem value="Film & Music Video Direction">Film & Music Video Direction</SelectItem>
                        <SelectItem value="Pitch Deck Design">Pitch Deck Design</SelectItem>
                        <SelectItem value="Ai Creative Development">Ai Creative Development</SelectItem>
                        <SelectItem value="High-End Photography">High-End Photography</SelectItem>
                        <SelectItem value="Worldbuilding">Worldbuilding</SelectItem>
                        <SelectItem value="Editing & Post-Production">Editing & Post-Production</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
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
                          <SelectItem value="Under $10k">Under $10k</SelectItem>
                          <SelectItem value="$10k - $25k">$10k - $25k</SelectItem>
                          <SelectItem value="$25k - $50k">$25k - $50k</SelectItem>
                          <SelectItem value="$50k - $100k">$50k - $100k</SelectItem>
                          <SelectItem value="$100k+">$100k+</SelectItem>
                          <SelectItem value="Let's discuss">Let's discuss</SelectItem>
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
                          <SelectItem value="ASAP">ASAP</SelectItem>
                          <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                          <SelectItem value="2-3 months">2-3 months</SelectItem>
                          <SelectItem value="3-6 months">3-6 months</SelectItem>
                          <SelectItem value="6+ months">6+ months</SelectItem>
                          <SelectItem value="Flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="websiteLink" className="text-black">
                        Website/Portfolio (Optional)
                      </Label>
                      <Input
                        id="websiteLink"
                        type="url"
                        value={formData.websiteLink}
                        onChange={(e) => handleInputChange("websiteLink", e.target.value)}
                        className="bg-white border-gray-300 text-black placeholder:text-gray-500"
                        placeholder="Your website or portfolio link"
                      />
                    </div>
                    <div>
                      <Label htmlFor="assetLink" className="text-black">
                        Assets/References (Optional)
                      </Label>
                      <Input
                        id="assetLink"
                        type="url"
                        value={formData.assetLink}
                        onChange={(e) => handleInputChange("assetLink", e.target.value)}
                        className="bg-white border-gray-300 text-black placeholder:text-gray-500"
                        placeholder="Drive folder, mood board, etc."
                      />
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

                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-semibold text-black">Reach out using:</h3>

                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
                      <Button
                        type="button"
                        onClick={handleGmailCompose}
                        disabled={!isFormValid}
                        className="bg-white hover:bg-gray-50 text-gray-700 border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed w-full shadow-sm"
                        aria-label="Open Gmail compose with your message"
                      >
                        <div className="w-4 h-4 mr-2 relative">
                          <svg viewBox="0 0 24 24" className="w-full h-full">
                            <path
                              fill="#4285f4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34a853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#fbbc05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                              fill="#ea4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                          </svg>
                        </div>
                        Gmail
                      </Button>

                      <Button
                        type="button"
                        onClick={handleCopyEmail}
                        className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 w-full"
                        aria-label="Copy email address to clipboard"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        {copySuccess ? "Email Copied!" : "Copy my email"}
                      </Button>

                      <Button
                        type="button"
                        onClick={handleCopyQuestionnaire}
                        disabled={!isFormValid}
                        className="bg-green-600 hover:bg-green-700 text-white border-green-600 disabled:opacity-50 disabled:cursor-not-allowed w-full"
                        aria-label="Copy inquiry data to clipboard"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Inquiry
                      </Button>
                    </div>

                    <p className="text-sm text-gray-600">Buttons activate after you complete the form.</p>
                  </div>
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
