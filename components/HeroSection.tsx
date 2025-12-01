"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading - French text copy-pasted exactly */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
          Créez Votre <span className="text-primary">Égérie IA</span> En 7 Jours
        </h1>

        {/* Subheading - French text copy-pasted exactly */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#EDEDED] max-w-2xl mx-auto mb-10 text-pretty">
          Donnez un visage, une voix et une personnalité à votre marque dans le monde digital
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/signup">Créer Mon Avatar</Link>
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToPricing}>
            Voir la Démo
          </Button>
        </div>
      </div>
    </section>
  )
}
