import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#070709]/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-heading text-xl font-bold tracking-tight">
              <span className="text-black">Light</span>
              <span className="text-black">God</span>
            </Link>
            <p className="mt-2 text-sm text-black">
              Creative technologist and director shaping worlds across film, Ai, design, and photography.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-black mb-4">Contact</h3>
            <div className="flex space-x-4">
              <Link href="/contact" className="text-black hover:text-[#FF1A2D] transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-black mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-black hover:text-[#FF1A2D] transition-colors">
                Press Kit
              </Link>
              <Link href="/contact" className="block text-sm text-black hover:text-[#FF1A2D] transition-colors">
                Commission Work
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-black">© {currentYear} LightGod. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
