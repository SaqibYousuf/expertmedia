"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Success Stories</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Real Results from Real Agents</h1>
            <p className="text-xl opacity-90">
              See how Expert Media has helped insurance agents across the country scale their businesses and achieve
              remarkable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {/* Case Study 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#1e7b8c]/10 text-[#1e7b8c] border-[#1e7b8c]/20 mb-4">
                  Health Insurance Success
                </Badge>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Sarah Johnson Increased Revenue by 400% in 6 Months
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Sarah was struggling to find quality health insurance leads and was spending too much time on
                  unqualified prospects. After partnering with Expert Media, she transformed her business completely.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">400%</div>
                    <div className="text-sm text-slate-600">Revenue Increase</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">85%</div>
                    <div className="text-sm text-slate-600">Conversion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">150+</div>
                    <div className="text-sm text-slate-600">Monthly Leads</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#1e7b8c] pl-4 italic text-slate-600 mb-6">
                  "Expert Media completely transformed my business. The quality of leads is incredible, and I'm now
                  closing more deals than ever before. I went from struggling to make ends meet to having my best year
                  ever."
                </blockquote>

                <div className="flex items-center">
                  <Image
                    src="/images/agent-sarah.jpg"
                    alt="Sarah Johnson"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Sarah Johnson</div>
                    <div className="text-sm text-slate-600">Health Insurance Agent, California</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/success-celebration.jpg"
                  alt="Success Growth Visualization"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src="/images/business-growth-explosion.jpg"
                  alt="Medicare Analytics Dashboard"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                  Medicare Specialist Success
                </Badge>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Mike Rodriguez Built a 7-Figure Medicare Business
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Mike was a new Medicare agent struggling to find his first clients. With Expert Media's targeted
                  Medicare leads, he built a thriving practice that now generates over $1M annually.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">$1M+</div>
                    <div className="text-sm text-slate-600">Annual Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">300+</div>
                    <div className="text-sm text-slate-600">Active Clients</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">18</div>
                    <div className="text-sm text-slate-600">Months to 7-Figures</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#1e7b8c] pl-4 italic text-slate-600 mb-6">
                  "I went from zero to seven figures in less than two years thanks to Expert Media. Their Medicare leads
                  are incredibly high-quality, and the support team helped me optimize my conversion process."
                </blockquote>

                <div className="flex items-center">
                  <Image
                    src="/images/agent-mike.jpg"
                    alt="Mike Rodriguez"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Mike Rodriguez</div>
                    <div className="text-sm text-slate-600">Medicare Specialist, Texas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">Life Insurance Growth</Badge>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Lisa Chen Scaled Her Agency to 15 Agents</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Lisa started as a solo life insurance agent and used Expert Media's consistent lead flow to build and
                  scale a successful agency with 15 agents under her management.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">15</div>
                    <div className="text-sm text-slate-600">Team Members</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">500+</div>
                    <div className="text-sm text-slate-600">Monthly Leads</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e7b8c]">92%</div>
                    <div className="text-sm text-slate-600">Team Retention</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#1e7b8c] pl-4 italic text-slate-600 mb-6">
                  "Expert Media didn't just help me grow my personal sales - they provided the consistent lead flow I
                  needed to build and scale an entire agency. Now I have 15 agents working under me, all benefiting from
                  these quality leads."
                </blockquote>

                <div className="flex items-center">
                  <Image
                    src="/images/agent-lisa.jpg"
                    alt="Lisa Chen"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Lisa Chen</div>
                    <div className="text-sm text-slate-600">Agency Owner, Florida</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Team Growth Visualization"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Results Across All Verticals</h2>
            <p className="text-xl text-slate-600">Our clients consistently achieve remarkable growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#1e7b8c] mb-2">300%</div>
                <div className="text-lg text-slate-600">Average Revenue Increase</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#1e7b8c] mb-2">85%</div>
                <div className="text-lg text-slate-600">Average Conversion Rate</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#1e7b8c] mb-2">6</div>
                <div className="text-lg text-slate-600">Months to See Results</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#1e7b8c] mb-2">98%</div>
                <div className="text-lg text-slate-600">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful insurance agents who have transformed their businesses with Expert Media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1e7b8c] hover:bg-slate-100 px-8">
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
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
