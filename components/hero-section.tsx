import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C84C2F]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C84C2F]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading - French text copy-pasted exactly */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
          Créez Votre <span className="text-[#C84C2F]">Égérie IA</span> En 7 Jours
        </h1>

        {/* Subheading - French text copy-pasted exactly */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#EDEDED] max-w-2xl mx-auto mb-10 text-pretty">
          Donnez un visage, une voix et une personnalité à votre marque dans le monde digital
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#C84C2F] hover:bg-[#D65A31] text-white rounded-[50px] px-8 py-6 text-lg font-semibold transition-all"
          >
            Créer Mon Avatar
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#333333] hover:border-[#C84C2F] bg-transparent text-white rounded-[50px] px-8 py-6 text-lg font-semibold transition-all hover:bg-[#C84C2F]/10"
          >
            Voir la Démo
          </Button>
        </div>
      </div>
    </section>
  )
}
