"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Users, TrendingUp, Shield, ArrowRight, Star, Award, Target, Zap, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "./components/header"
import Footer from "./components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full opacity-20">
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e7b8c]/10 via-slate-100 to-[#0ea5e9]/10">
                <div
                  className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#1e7b8c]/20 rounded-lg animate-bounce"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="absolute top-1/2 right-1/4 w-12 h-12 bg-[#0ea5e9]/20 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-[#1e7b8c]/15 rounded-full animate-ping"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#1e7b8c]/10 text-[#1e7b8c] border-[#1e7b8c]/20">
                  Transparent • Reliable • Exclusive
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Helping Insurance Agents <span className="text-[#1e7b8c]">Grow</span> with Scalable Call Traffic
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We provide performance-based call traffic for Health, Life & Medicare insurance agents. Get quality
                  leads that convert with our transparent and reliable approach.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#1e7b8c] hover:bg-[#1e7b8c]/90 text-white px-8">
                  Start Getting Leads
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#1e7b8c] text-[#1e7b8c] hover:bg-[#1e7b8c]/10 bg-transparent w-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1e7b8c]">500+</div>
                  <div className="text-sm text-slate-600">Active Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1e7b8c]">98%</div>
                  <div className="text-sm text-slate-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1e7b8c]">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-insurance-success.jpg"
                alt="Insurance Success Visualization"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Live Traffic</div>
                    <div className="text-sm text-slate-600">Real-time qualified leads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Lead Generation Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We help businesses with quality leads through our comprehensive suite of services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e7b8c] transition-colors">
                  <Phone className="h-8 w-8 text-[#1e7b8c] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Live Transfer Financial Leads</h3>
                <p className="text-slate-600">
                  Get connected with pre-qualified prospects ready to discuss their insurance needs
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e7b8c] transition-colors">
                  <TrendingUp className="h-8 w-8 text-[#1e7b8c] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Website Traffic</h3>
                <p className="text-slate-600">
                  Drive targeted traffic to your website with our proven marketing strategies
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e7b8c] transition-colors">
                  <Users className="h-8 w-8 text-[#1e7b8c] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Caliber Leads</h3>
                <p className="text-slate-600">
                  High-quality leads that match your specific criteria and target demographics
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e7b8c] transition-colors">
                  <Shield className="h-8 w-8 text-[#1e7b8c] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Inbound Calls</h3>
                <p className="text-slate-600">
                  Receive qualified inbound calls from prospects actively seeking insurance
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-[#1e7b8c] hover:bg-[#1e7b8c]/90 text-white px-8">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c]/5 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Expert Media?</h2>
              <p className="text-xl text-slate-600 mb-8">
                We've helped hundreds of insurance agents scale their businesses with our proven lead generation system.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-[#1e7b8c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Proven Track Record</h3>
                    <p className="text-slate-600">
                      Over 5 years of experience helping insurance agents grow their business with quality leads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-[#1e7b8c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Targeted Approach</h3>
                    <p className="text-slate-600">
                      We focus specifically on Health, Life, and Medicare leads that convert.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-[#1e7b8c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Real-Time Results</h3>
                    <p className="text-slate-600">
                      Get live transfers and immediate connections with qualified prospects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#1e7b8c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Support</h3>
                    <p className="text-slate-600">
                      Our dedicated support team is available around the clock to help you succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/growth-analytics.jpg"
                alt="Business Growth Analytics"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our simple 4-step process gets you connected with quality leads fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e7b8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sign Up</h3>
              <p className="text-slate-600">
                Create your account and tell us about your target market and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e7b8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Get Matched</h3>
              <p className="text-slate-600">Our system matches you with qualified prospects in your area and niche.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e7b8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Receive Leads</h3>
              <p className="text-slate-600">
                Get live transfers, inbound calls, and high-quality leads delivered to you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e7b8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Close Deals</h3>
              <p className="text-slate-600">Convert qualified prospects into customers and grow your business.</p>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/images/team-meeting.jpg"
              alt="Professional Team Meeting"
              width={800}
              height={400}
              className="rounded-2xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Agents Say</h2>
            <p className="text-xl text-slate-600">Real results from real insurance professionals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "Expert Media has transformed my business. The quality of leads is exceptional, and the live transfers
                  are exactly what I needed to scale my agency."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/images/agent-lisa.jpg"
                    alt="Sarah Johnson"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Sarah Johnson</div>
                    <div className="text-sm text-slate-600">Health Insurance Agent</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "The transparency and reliability of Expert Media is unmatched. I know exactly what I'm getting, and
                  the ROI speaks for itself."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/images/agent-mike.jpg"
                    alt="Mike Rodriguez"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Mike Rodriguez</div>
                    <div className="text-sm text-slate-600">Life Insurance Specialist</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "As a Medicare specialist, finding quality leads was always a challenge. Expert Media delivers
                  consistent, high-converting prospects."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/images/agent-lisa.jpg"
                    alt="Lisa Chen"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Lisa Chen</div>
                    <div className="text-sm text-slate-600">Medicare Advisor</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Scale Your Insurance Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful insurance agents who trust Expert Media for their lead generation needs. Get
              started today and see the difference quality leads can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1e7b8c] hover:bg-slate-100 px-8">
                  Start Getting Leads Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
