import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/expert-media-logo.png"
              alt="Expert Media Logo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-400 mb-4">
              Helping insurance agents grow with scalable, performance-based call traffic.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>(833) 417-1175</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@expertmediateam.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>2414 E Sunrise Blvd, Fort Lauderdale, FL 33304</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Live Transfer Leads
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Website Traffic
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Caliber Leads
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Inbound Calls
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Insurance Types</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Medicare
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Final Expense
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Expert Media. All rights reserved. Transparent • Reliable • Exclusive</p>
        </div>
      </div>
    </footer>
  )
}
