"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Dynamic Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#1e7b8c] via-[#0ea5e9] to-[#1e7b8c]">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full animate-pulse"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute top-1/3 right-20 w-24 h-24 bg-white/20 rounded-lg rotate-45 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/25 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-8 text-lg px-6 py-2">
              🚀 Explosive Lead Generation
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transform Your Insurance Business with
              <span className="block text-yellow-300">EXPLOSIVE GROWTH</span>
            </h1>
            <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
              Join 500+ successful agents who've scaled their businesses with our premium lead generation system. Get
              ready for the growth explosion you've been waiting for!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-12 py-4 text-xl font-bold"
                >
                  🔥 START YOUR EXPLOSION
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-12 py-4 text-xl bg-transparent"
                >
                  See Success Stories
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-300 mb-2">500+</div>
                <div className="text-xl">Agents Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-300 mb-2">400%</div>
                <div className="text-xl">Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-xl">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Visual Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6">
                Watch Your Business
                <span className="text-[#1e7b8c]">EXPLODE</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Our dynamic lead generation system doesn't just grow your business - it creates an explosion of
                opportunities that transforms struggling agents into industry leaders.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Lightning-Fast Results</h3>
                    <p className="text-slate-600">See explosive growth within 30 days</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Exponential Scaling</h3>
                    <p className="text-slate-600">Scale from hundreds to thousands of leads</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1e7b8c] to-[#0ea5e9] rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Premium Quality</h3>
                    <p className="text-slate-600">Only the highest converting prospects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Explosive+Business+Growth+Splash+Visual"
                alt="Explosive Business Growth Splash"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-slate-900 p-4 rounded-xl shadow-lg font-bold">
                <div className="text-2xl">🚀</div>
                <div className="text-sm">EXPLOSIVE!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Explosion Gallery */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-[#1e7b8c] to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">SUCCESS EXPLOSION GALLERY</h2>
            <p className="text-xl opacity-90">Real agents, real results, real explosions of growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Agent+Success+Explosion+1"
                  alt="Agent Success Explosion"
                  width={400}
                  height={300}
                  className="rounded-lg mb-6 mx-auto"
                />
                <div className="text-3xl font-bold text-yellow-300 mb-2">400% GROWTH</div>
                <div className="text-lg">Sarah's Health Insurance Explosion</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Agent+Success+Explosion+2"
                  alt="Agent Success Explosion"
                  width={400}
                  height={300}
                  className="rounded-lg mb-6 mx-auto"
                />
                <div className="text-3xl font-bold text-yellow-300 mb-2">$1M+ REVENUE</div>
                <div className="text-lg">Mike's Medicare Empire</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Agent+Success+Explosion+3"
                  alt="Agent Success Explosion"
                  width={400}
                  height={300}
                  className="rounded-lg mb-6 mx-auto"
                />
                <div className="text-3xl font-bold text-yellow-300 mb-2">15 AGENTS</div>
                <div className="text-lg">Lisa's Agency Explosion</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Explosion */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full animate-pulse"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute top-1/3 right-20 w-24 h-24 bg-white/20 rounded-lg rotate-45 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl lg:text-7xl font-bold mb-8">
              READY FOR YOUR
              <span className="block">EXPLOSION?</span>
            </h2>
            <p className="text-2xl mb-12 opacity-90">
              Don't wait another day to transform your insurance business. The explosion starts NOW!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-12 py-6 text-2xl font-bold">
                  🚀 IGNITE MY EXPLOSION
                  <ArrowRight className="ml-3 h-8 w-8" />
                </Button>
              </Link>
              <div className="text-center">
                <div className="text-lg font-bold">Call Now:</div>
                <div className="text-2xl font-bold">(833) 417-1175</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
