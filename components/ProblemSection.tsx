import { Card, CardContent } from "@/components/ui/card"
import { Ban } from "lucide-react"
import Image from "next/image"
import moneyBagImage from "@/public/money-bag.png"
import alarmClockImage from "@/public/alarm-clock.png"
import faceSweatImage from "@/public/face-sweat.png"
import bombImage from "@/public/bomb.png"
import chartDecreasingImage from "@/public/chart-decreasing.png"
import aiHelperImage from "@/public/ai-helper.webp"


const problems = [
  {
    icon: <Image src={moneyBagImage} alt="Money bag" width={48} height={48} />,
    title: "5,000 - 50,000€ par mois",
    description: "Budget inaccessible pour 90% des entreprises",
  },
  {
    icon: <Image src={alarmClockImage} alt="Alarm clock" width={48} height={48} />,
    title: "Disponibilité limitée",
    description: "8h/jour maximum, weekends off, vacances",
  },
  {
    icon: <Image src={faceSweatImage} alt="Face sweat" width={48} height={48} />,
    title: "Inconsistance",
    description: "Humeur variable, fatigue, erreurs humaines",
  },
  {
    icon: <Image src={bombImage} alt="Bomb" width={48} height={48} />,
    title: "Risque réputation",
    description: "Scandales personnels impactent votre marque",
  },
  {
    icon: <Image src={chartDecreasingImage} alt="Chart decreasing" width={48} height={48} />,
    title: "Engagement variable",
    description: "Performance dépend de l'algorithme et motivation",
  },
  {
    icon: <Ban className="w-12 h-12 text-primary" />,
    title: "Hors budget PME",
    description: "Les petites entreprises sont exclues de ce canal",
  },
]

export function ProblemSection() {
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header - French text copy-pasted exactly */}
        <div className="relative text-center mb-16 px-8 md:px-16 lg:px-24">
          {/* Image on the left side, overlapping the heading */}
          <div className="absolute left-0 top-1/2 -translate-y-[430px] -translate-x-[50px] z-10 lg:-translate-y-[360px] lg:-translate-x-[-50px] xl:-translate-y-[260px] xl:-translate-x-[180px]">
            <Image
              src={aiHelperImage}
              alt="AI Helper"
              width={300}
              height={447}
              className="object-contain"
              priority
              fetchPriority="high"
            />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative z-20">Le Problème</h2>
          <h3 className="text-xl sm:text-2xl text-[#EDEDED] relative z-20">Les Influenceurs Humains Coûtent Une Fortune</h3>
        </div>

        {/* Problem cards grid - 2x3 on desktop, stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-[#0A0A0A] border-border hover:border-primary transition-colors duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {problem.icon}
                  {/* <problem.icon className="w-12 h-12 text-[#C84C2F]" /> */}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{problem.title}</h4>
                <p className="text-[#888888]">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
