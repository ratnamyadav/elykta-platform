import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#333333] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo and tagline - French text copy-pasted exactly */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">ELYKTA</h3>
            <p className="text-[#888888]">L'usine à êtres numériques</p>
          </div>

          {/* Navigation links - French text */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#features" className="text-[#888888] hover:text-primary transition-colors">
              Produit
            </Link>
            <Link href="#pricing" className="text-[#888888] hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-[#888888] hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-[#888888] hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright - French text copy-pasted exactly */}
          <p className="text-[#888888] text-sm">© 2025 Elykta. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
