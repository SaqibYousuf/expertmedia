"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Users, TrendingUp, Shield, CheckCircle, ArrowRight, Star, Clock, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Our Services</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Comprehensive Lead Generation Solutions</h1>
            <p className="text-xl opacity-90">
              Everything you need to scale your insurance business with high-quality, converting leads.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Image
              src="/images/leads-dashboard.jpg"
              alt="Lead Generation Dashboard"
              width={800}
              height={400}
              className="rounded-2xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven lead generation methods that deliver results for insurance agents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-8 w-8 text-[#1e7b8c]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">Live Transfer Financial Leads</h3>
                    <p className="text-[#1e7b8c] font-medium">Real-time connections with qualified prospects</p>
                  </div>
                </div>
                <div className="mb-6">
                  <Image
                    src="/images/phone-leads.jpg"
                    alt="Live Transfer Leads"
                    width={400}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </div>
                <p className="text-slate-600 mb-6">
                  Get connected directly with pre-qualified prospects who are actively seeking insurance coverage. Our
                  live transfer system ensures you're speaking with interested, ready-to-buy customers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Pre-qualified prospects only</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Real-time transfers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Higher conversion rates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Exclusive to you</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-2">Starting at</div>
                  <div className="text-2xl font-bold text-[#1e7b8c]">$45 per transfer</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-8 w-8 text-[#1e7b8c]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">Targeted Website Traffic</h3>
                    <p className="text-[#1e7b8c] font-medium">Drive qualified visitors to your website</p>
                  </div>
                </div>
                <div className="mb-6">
                  <Image
                    src="/images/website-traffic.jpg"
                    alt="Website Traffic Analytics"
                    width={400}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </div>
                <p className="text-slate-600 mb-6">
                  Increase your online presence with targeted traffic campaigns designed specifically for insurance
                  agents. We drive qualified prospects to your website who are actively searching for coverage.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Geo-targeted campaigns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Insurance-focused keywords</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Detailed analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Mobile-optimized traffic</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-2">Starting at</div>
                  <div className="text-2xl font-bold text-[#1e7b8c]">$2.50 per click</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-[#1e7b8c]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">Caliber Lead Generation</h3>
                    <p className="text-[#1e7b8c] font-medium">Premium quality leads that convert</p>
                  </div>
                </div>
                <div className="mb-6">
                  <Image
                    src="/images/insurance-consultation.jpg"
                    alt="Insurance Consultation"
                    width={400}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </div>
                <p className="text-slate-600 mb-6">
                  Our premium lead generation service delivers high-quality prospects that match your specific criteria.
                  These leads are verified, exclusive, and ready for your follow-up.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Verified contact information</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Demographic targeting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Fresh leads (under 24 hours)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Replacement guarantee</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-2">Starting at</div>
                  <div className="text-2xl font-bold text-[#1e7b8c]">$25 per lead</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#1e7b8c]/10 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-8 w-8 text-[#1e7b8c]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">Inbound Call Campaigns</h3>
                    <p className="text-[#1e7b8c] font-medium">Prospects call you directly</p>
                  </div>
                </div>
                <div className="mb-6">
                  <Image
                    src="/images/call-center.jpg"
                    alt="Call Center Operations"
                    width={400}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </div>
                <p className="text-slate-600 mb-6">
                  Generate inbound calls from prospects actively seeking insurance coverage. Our campaigns drive
                  qualified prospects to call your number directly, putting you in control of the conversation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Warm inbound calls</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Call tracking & recording</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Local number routing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Performance analytics</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-2">Starting at</div>
                  <div className="text-2xl font-bold text-[#1e7b8c]">$35 per call</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Specializations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Insurance Specializations</h2>
            <p className="text-xl text-slate-600">We focus on the most profitable insurance verticals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Health Insurance</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Individual & Family Plans</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Short-term Medical</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Critical Illness</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Dental & Vision</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Image
                    src="/images/health-insurance.jpg"
                    alt="Health Insurance Services"
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Life Insurance</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Term Life Insurance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Whole Life Insurance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Final Expense</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Universal Life</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Image
                    src="/images/life-insurance.jpg"
                    alt="Life Insurance Protection"
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Medicare</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Medicare Advantage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Medicare Supplements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Part D Prescription</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Medicare Enrollment</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Image
                    src="/images/medicare.jpg"
                    alt="Medicare Coverage"
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-xl text-slate-600">Complete solutions to support your growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-[#1e7b8c] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">24/7 Support</h3>
                <p className="text-slate-600">Round-the-clock support to help you maximize your lead conversion.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-[#1e7b8c] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Lead Optimization</h3>
                <p className="text-slate-600">
                  Continuous optimization of your lead campaigns for maximum ROI and conversion rates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-[#1e7b8c] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Performance Analytics</h3>
                <p className="text-slate-600">
                  Detailed reporting and analytics to track your lead performance and ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-[#1e7b8c] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Account Management</h3>
                <p className="text-slate-600">
                  Dedicated account managers to help you optimize your lead generation strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-[#1e7b8c] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Compliance Support</h3>
                <p className="text-slate-600">Ensure all leads meet industry compliance standards and regulations.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-[#1e7b8c] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Training & Resources</h3>
                <p className="text-slate-600">Access to training materials and best practices for lead conversion.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose the service that best fits your needs and start generating quality leads today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1e7b8c] hover:bg-slate-100 px-8">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  Schedule Consultation
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
