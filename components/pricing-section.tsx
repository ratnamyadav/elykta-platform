import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "STARTER",
    price: "49€",
    period: "/mois",
    tagline: "Pour tester le concept",
    features: ["1 avatar IA", "100 posts/mois", "Cohérence visuelle 70%", "Support email", "1 plateforme (Instagram)"],
    cta: "Commencer",
    popular: false,
  },
  {
    name: "PRO",
    price: "99€",
    period: "/mois",
    tagline: "Pour les créateurs sérieux",
    features: [
      "1 avatar IA",
      "500 posts/mois",
      "Cohérence visuelle 85%",
      "Support prioritaire",
      "3 plateformes",
      "Analytics avancés",
    ],
    cta: "Essayer Pro",
    popular: true,
  },
  {
    name: "AGENCY",
    price: "2,500€",
    period: " setup + 299€/mois",
    tagline: "Pour les marques établies",
    features: [
      "Avatar LoRA custom",
      "Posts illimités",
      "Cohérence visuelle 95%",
      "Setup en 7 jours",
      "Support dédié",
      "Toutes plateformes",
      "Voice AI (Phase 2)",
    ],
    cta: "Nous Contacter",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header - French text */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Pricing</h2>
        </div>

        {/* Pricing cards - 3 columns on desktop, stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-[#0A0A0A] border-[#333333] flex flex-col ${
                plan.popular
                  ? "border-[#C84C2F] shadow-[0_0_30px_rgba(200,76,47,0.2)] scale-[1.02] md:scale-105"
                  : "hover:border-[#C84C2F]"
              } transition-all duration-300`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C84C2F] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    ★ POPULAIRE
                  </span>
                </div>
              )}

              <CardHeader className="text-center pt-8 pb-4">
                <h3 className="text-lg font-bold text-[#888888] tracking-wider mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-[#888888]">{plan.period}</span>
                </div>
                <p className="text-[#EDEDED]">{plan.tagline}</p>
              </CardHeader>

              <CardContent className="flex-1 px-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-[#EDEDED]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
