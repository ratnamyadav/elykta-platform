import { HeroSection } from "@/components/HeroSection"
import { ProblemSection } from "@/components/ProblemSection"
import { SolutionSection } from "@/components/SolutionSection"
import { PricingSection } from "@/components/PricingSection"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
