"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">About Expert Media</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Transforming Insurance Lead Generation Since 2019</h1>
            <p className="text-xl opacity-90">
              We've helped over 500 insurance agents scale their businesses with our proven, performance-based approach
              to lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Expert Media was founded with a simple mission: to help insurance agents grow their businesses through
                high-quality, performance-based lead generation. We saw too many agents struggling with low-quality
                leads and unreliable providers.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our founders, with over 15 years of combined experience in insurance and digital marketing, decided to
                create a company that would be different - transparent, reliable, and exclusively focused on results.
              </p>
              <p className="text-lg text-slate-600">
                Today, we're proud to be the trusted partner for hundreds of insurance agents across the country,
                helping them achieve consistent growth and success.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/office-building.jpg"
                alt="Expert Media Office Building"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-[#1e7b8c]" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Transparency</h3>
                <p className="text-slate-600">
                  We believe in complete transparency in our processes, pricing, and results. No hidden fees, no
                  surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-[#1e7b8c]" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Reliability</h3>
                <p className="text-slate-600">
                  Our agents can count on us for consistent, high-quality leads delivered when promised, every time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-[#1e7b8c]" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Exclusivity</h3>
                <p className="text-slate-600">
                  We provide exclusive leads that aren't shared with multiple agents, giving you the best chance to
                  convert.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Image
                  src="/images/Raphael.jpeg"
                  alt="Raphael – Director of Business Development"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Raphael </h3>
                <p className="text-[#1e7b8c] font-medium mb-4">Director of Business Development</p>
                
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Image
                  src="/images/Leonardo.jpeg"
                  alt="Sarah Davis - CTO"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Leonardo Lupe </h3>
                <p className="text-[#1e7b8c] font-medium mb-4">Lead Qualification & Intake Analyst</p>
                
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Image
                  src="/images/Slava.jpeg"
                  alt="Mike Johnson - VP Sales"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Slava  Morgenstein</h3>
                <p className="text-[#1e7b8c] font-medium mb-4">Director of Partner Relations </p>
                
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Image
                  src="/images/team-leader-male.jpg"
                  alt="Raphael – Director of Business Development"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Michael </h3>
                <p className="text-[#1e7b8c] font-medium mb-4">Director of IT & Platform Infrastructure</p>
                
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Image
                  src="/images/Samantha.jpeg"
                  alt="Sarah Davis - CTO"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Samantha </h3>
                <p className="text-[#1e7b8c] font-medium mb-4">Director of Billing & Client Support</p>
                
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Image
                  src="/images/Steven.jpeg"
                  alt="Sarah Davis - CTO"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Steven</h3>
                <p className="text-[#1e7b8c] font-medium mb-4">Client relation, and on boarding</p>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c]/5 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-slate-600">Real results that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1e7b8c] mb-2">500+</div>
              <div className="text-lg text-slate-600">Active Insurance Agents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1e7b8c] mb-2">50K+</div>
              <div className="text-lg text-slate-600">Leads Delivered Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1e7b8c] mb-2">98%</div>
              <div className="text-lg text-slate-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1e7b8c] mb-2">5+</div>
              <div className="text-lg text-slate-600">Years of Experience</div>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/images/success-celebration.jpg"
              alt="Success Celebration"
              width={600}
              height={300}
              className="rounded-2xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the hundreds of successful insurance agents who trust Expert Media for their growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1e7b8c] hover:bg-slate-100 px-8">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  View Our Services
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
