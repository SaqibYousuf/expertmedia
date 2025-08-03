"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/expert-media-logo.png"
              alt="Expert Media Logo"
              width={250}
              height={200}
              className="h-12 w-auto headerlogo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-[#1e7b8c] hover:bg-[#1e7b8c]/90 text-white">Get Started</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
                About
              </Link>
              <Link href="/services" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
                Services
              </Link>
              <Link href="/case-studies" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-[#1e7b8c] transition-colors">
                Contact
              </Link>
              <Link href="/contact">
                <Button className="bg-[#1e7b8c] hover:bg-[#1e7b8c]/90 text-white w-full">Get Started</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
