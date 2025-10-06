import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.145] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="font-bold text-xl">Qualitem</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/metadata-checker" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Metadata Checker
            </Link>
            <Link 
              href="/solutions" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Solutions
            </Link>
            <Link 
              href="/case-studies" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Case Studies
            </Link>
            <Link 
              href="/about" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-dark transition-colors"
            >
              Try Free Scan
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              aria-label="Open mobile menu"
              title="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}