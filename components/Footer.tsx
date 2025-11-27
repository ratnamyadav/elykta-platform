import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-extrabold text-xl mb-2 text-[#00FF88]" style={{ fontFamily: 'var(--font-heading)' }}>
              ELYKTA
            </h3>
            <p className="text-sm text-[#B0B0B0]">
              L'usine à êtres numériques
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-[#E0E0E0]">
            <Link href="/#features" className="hover:text-[#0066FF] transition-colors">
              Produit
            </Link>
            <span className="text-[#B0B0B0]">|</span>
            <Link href="/#pricing" className="hover:text-[#0066FF] transition-colors">
              Pricing
            </Link>
            <span className="text-[#B0B0B0]">|</span>
            <Link href="/blog" className="hover:text-[#0066FF] transition-colors">
              Blog
            </Link>
            <span className="text-[#B0B0B0]">|</span>
            <Link href="/#contact" className="hover:text-[#0066FF] transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-[#B0B0B0]">
            © 2025 Elykta. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
