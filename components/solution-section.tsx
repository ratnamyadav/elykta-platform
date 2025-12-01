import { Sparkles, MessageSquare, Database, User, Clock } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Créé en 7 jours",
    description: "Votre marque, votre style unique",
  },
  {
    icon: MessageSquare,
    title: "Conversations naturelles",
    description: "Powered by Claude 4 + GPT-4",
  },
  {
    icon: Database,
    title: "Mémoire infaillible",
    description: "Se souvient de chaque interaction",
  },
  {
    icon: User,
    title: "Apparence cohérente",
    description: "Même visage, même style (LoRA 90%)",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Jamais fatiguée, toujours on-brand",
  },
]

export function SolutionSection() {
  return (
    <section className="px-4 py-20 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        {/* Section header - French text copy-pasted exactly */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Notre Solution</h2>
          <h3 className="text-xl sm:text-2xl text-[#EDEDED]">Elykta : Votre Employé IA Personnalisé</h3>
        </div>

        {/* Features list - vertical layout with icon on left */}
        <div className="space-y-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#1A1A1A]/50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C84C2F]/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-[#C84C2F]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-[#888888]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight box - French text copy-pasted exactly */}
        <div className="glass border-2 border-[#C84C2F] rounded-2xl p-8 text-center">
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2">299€/mois</h3>
          <p className="text-xl text-[#EDEDED] mb-4">au lieu de 5,000€+</p>
          <span className="inline-block bg-[#C84C2F] text-white px-4 py-2 rounded-full font-semibold">
            95% d'économies
          </span>
        </div>
      </div>
    </section>
  )
}
