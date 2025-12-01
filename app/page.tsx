import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

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
