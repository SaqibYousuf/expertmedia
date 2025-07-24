"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Get In Touch</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Ready to Start Growing Your Business?</h1>
            <p className="text-xl opacity-90">
              Contact us today to learn how Expert Media can help you generate quality insurance leads and scale your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Hero Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Image
              src="/images/contact-consultation.jpg"
              alt="Professional Business Consultation"
              width={800}
              height={400}
              className="rounded-2xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Request Information</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and one of our lead generation specialists will contact you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                      <Input placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                      <Input placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="Enter your email address" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <Input type="tel" placeholder="Enter your phone number" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Insurance Type</label>
                    <select className="w-full p-3 border border-slate-300 rounded-md">
                      <option value="">Select insurance type</option>
                      <option value="health">Health Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="medicare">Medicare</option>
                      <option value="multiple">Multiple Types</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Monthly Lead Volume</label>
                    <select className="w-full p-3 border border-slate-300 rounded-md">
                      <option value="">Select current volume</option>
                      <option value="0-50">0-50 leads</option>
                      <option value="51-100">51-100 leads</option>
                      <option value="101-200">101-200 leads</option>
                      <option value="200+">200+ leads</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Tell us about your business</label>
                    <textarea
                      className="w-full p-3 border border-slate-300 rounded-md resize-none h-32"
                      placeholder="Tell us about your current lead generation challenges and goals..."
                    />
                  </div>

                  <Button className="w-full bg-[#1e7b8c] hover:bg-[#1e7b8c]/90 text-white py-3">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Ready to start generating quality insurance leads? Our team is here to help you grow your business
                  with our proven lead generation solutions.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-[#1e7b8c]" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Call Us</div>
                        <div className="text-slate-600">(833) 417-1175</div>
                        <div className="text-sm text-slate-500">Available 24/7</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-[#1e7b8c]" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Email Us</div>
                        <div className="text-slate-600">info@expertmediateam.com</div>
                        <div className="text-sm text-slate-500">Response within 2 hours</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-[#1e7b8c]" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Our Location</div>
                        <div className="text-slate-600">2414 E Sunrise Blvd</div>
                        <div className="text-slate-600">Fort Lauderdale, FL 33304</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-[#1e7b8c]" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Business Hours</div>
                        <div className="text-slate-600">24/7 Support Available</div>
                        <div className="text-sm text-slate-500">Always here when you need us</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-[#1e7b8c]/10 to-[#0ea5e9]/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Why Choose Expert Media?</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#1e7b8c] rounded-full mr-3"></div>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#1e7b8c] rounded-full mr-3"></div>
                    <span>Exclusive leads not shared with competitors</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#1e7b8c] rounded-full mr-3"></div>
                    <span>24/7 support and account management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#1e7b8c] rounded-full mr-3"></div>
                    <span>Proven track record with 500+ agents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Get answers to common questions about our services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">How quickly can I start receiving leads?</h3>
                <p className="text-slate-600">
                  Most clients start receiving leads within 24-48 hours of account setup. We work quickly to get your
                  campaigns live and generating results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Are the leads exclusive to me?</h3>
                <p className="text-slate-600">
                  Yes, all our leads are exclusive and not shared with other agents. You're the only one receiving each
                  lead, giving you the best chance to convert.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What if I'm not satisfied with the lead quality?
                </h3>
                <p className="text-slate-600">
                  We offer a satisfaction guarantee. If you're not happy with lead quality, we'll work with you to
                  optimize or provide replacements at no extra cost.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Do you work with new insurance agents?</h3>
                <p className="text-slate-600">
                  We work with agents at all experience levels, from new agents just starting out to established
                  agencies looking to scale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">What's the minimum commitment?</h3>
                <p className="text-slate-600">
                  We offer flexible plans with no long-term contracts. You can start with a monthly commitment and scale
                  up as you see results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">How do you ensure lead quality?</h3>
                <p className="text-slate-600">
                  We use advanced filtering, verification processes, and real-time validation to ensure every lead meets
                  our high-quality standards before delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
