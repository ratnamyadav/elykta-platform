import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      
      <main className="bg-[#0A0A0A]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 py-24 overflow-hidden">
          {/* Animated gradient background - very subtle */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 via-[#7B2CBF]/3 to-[#00FF88]/5"></div>
          
          {/* Floating geometric shapes (SVG) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute top-20 left-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
              <rect x="25" y="25" width="50" height="50" fill="none" stroke="#0066FF" strokeWidth="1" transform="rotate(45 50 50)" />
            </svg>
            <svg className="absolute bottom-20 right-10 w-24 h-24 opacity-20" viewBox="0 0 100 100">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="#00FF88" strokeWidth="1" />
            </svg>
            <svg className="absolute top-1/2 right-1/4 w-16 h-16 opacity-20" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#7B2CBF" strokeWidth="1" />
            </svg>
          </div>
          
          {/* Holographic Figure Visualization */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 opacity-30 pointer-events-none">
            <div className="relative w-full h-full">
              {/* Cylindrical chamber */}
              <div className="absolute inset-0 border-2 border-[#0066FF]/30 rounded-full" style={{
                background: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.1) 0%, transparent 70%)',
                clipPath: 'ellipse(50% 60% at 50% 50%)'
              }}></div>
              {/* Holographic figure */}
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="w-32 h-48 bg-gradient-to-b from-[#0066FF]/20 to-[#7B2CBF]/20 rounded-lg backdrop-blur-sm border border-[#0066FF]/20" style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}></div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ 
                fontFamily: 'var(--font-heading)',
              }}
            >
              <span 
                className="block text-[#00FF88]"
                style={{
                  textShadow: '0 0 20px rgba(0, 255, 136, 0.6), 0 0 40px rgba(0, 255, 136, 0.4)'
                }}
              >
                Créez Votre Égérie IA
              </span>
              <span className="block text-[#00FF88] mt-2">
                En 7 Jours
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] mb-12 leading-relaxed max-w-2xl mx-auto">
              Donnez un visage, une voix et une personnalité à votre marque dans le monde digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-6 text-lg font-semibold h-auto"
              >
                <Link href="/signup">
                  Créer Mon Avatar
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-8 py-6 text-lg h-auto"
              >
                <Link href="#demo-section">
                  Voir la Démo
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="features" className="py-24 px-8 bg-[#1A1A2E]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#00FF88]" style={{ fontFamily: 'var(--font-heading)' }}>
              Le Problème
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#00FF88]">
              Les Influenceurs Humains Coûtent Une Fortune
            </h3>
            
            {/* 2 columns, 3 rows grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Row 1 */}
              <Card className="bg-[#1A1A2E] border-2 border-[#0066FF] rounded-lg p-6 hover:border-[#00FF88] hover:shadow-lg hover:shadow-[#00FF88]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4 text-center" style={{ fontSize: '48px' }}>💰</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">5,000 - 50,000€ par mois</h4>
                <p className="text-base text-[#B0B0B0] text-center">Budget inaccessible pour 90% des entreprises</p>
              </Card>
              
              <Card className="bg-[#1A1A2E] border-2 border-[#0066FF] rounded-lg p-6 hover:border-[#00FF88] hover:shadow-lg hover:shadow-[#00FF88]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4 text-center" style={{ fontSize: '48px' }}>⏰</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">Disponibilité limitée</h4>
                <p className="text-base text-[#B0B0B0] text-center">8h/jour maximum, weekends off, vacances</p>
              </Card>
              
              {/* Row 2 */}
              <Card className="bg-[#1A1A2E] border-2 border-[#0066FF] rounded-lg p-6 hover:border-[#00FF88] hover:shadow-lg hover:shadow-[#00FF88]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4 text-center" style={{ fontSize: '48px' }}>😔</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">Inconsistance</h4>
                <p className="text-base text-[#B0B0B0] text-center">Humeur variable, fatigue, erreurs humaines</p>
              </Card>
              
              <Card className="bg-[#1A1A2E] border-2 border-[#0066FF] rounded-lg p-6 hover:border-[#00FF88] hover:shadow-lg hover:shadow-[#00FF88]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4 text-center" style={{ fontSize: '48px' }}>💣</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">Risque réputation</h4>
                <p className="text-base text-[#B0B0B0] text-center">Scandales personnels impactent votre marque</p>
              </Card>
              
              {/* Row 3 */}
              <Card className="bg-[#1A1A2E] border-2 border-[#0066FF] rounded-lg p-6 hover:border-[#00FF88] hover:shadow-lg hover:shadow-[#00FF88]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4 text-center" style={{ fontSize: '48px' }}>📊</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">Engagement variable</h4>
                <p className="text-base text-[#B0B0B0] text-center">Performance dépend de l&apos;algorithme et motivation</p>
              </Card>
              
              <Card className="bg-[#1A1A2E] border-2 border-[#0066FF] rounded-lg p-6 hover:border-[#00FF88] hover:shadow-lg hover:shadow-[#00FF88]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4 text-center" style={{ fontSize: '48px' }}>🚫</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">Hors budget PME</h4>
                <p className="text-base text-[#B0B0B0] text-center">Les petites entreprises sont exclues de ce canal</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 px-8 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#00FF88] text-2xl">✓</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00FF88]" style={{ fontFamily: 'var(--font-heading)' }}>
                Notre Solution
              </h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-[#00FF88]">
              Elykta : Votre Influenceur IA Personnalisé
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Features in two columns */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#00FF88] text-xl mt-1">@</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Créé en 7 jours</h4>
                      <p className="text-sm text-[#B0B0B0]">Votre marque, votre style unique</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-[#00FF88] text-xl mt-1">🧠</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Mémoire infaillible</h4>
                      <p className="text-sm text-[#B0B0B0]">Se souvient de chaque interaction</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-[#00FF88] text-xl mt-1">⏱️</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Disponible 24/7</h4>
                      <p className="text-sm text-[#B0B0B0]">Jamais fatiguée, toujours on-brand</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#00FF88] text-xl mt-1">💬</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Conversations naturelles</h4>
                      <p className="text-sm text-[#B0B0B0]">Powered by Claude 4 + GPT-4</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-[#00FF88] text-xl mt-1">👤</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Apparence cohérente</h4>
                      <p className="text-sm text-[#B0B0B0]">Même visage, même style (LoRA 90%)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Mockup App */}
              <div className="bg-[#16213E] border border-white/10 rounded-lg p-12 flex items-center justify-center min-h-[400px]">
                <p className="text-[#B0B0B0] text-xl font-mono"># Mockup App</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-8 bg-[#1A1A2E]">
          <div className="max-w-7xl mx-auto">
            {/* Pricing Header in a box */}
            <Card className="bg-[#16213E] border-2 border-[#0066FF] rounded-lg p-8 mb-16 max-w-md mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#00FF88]" style={{ fontFamily: 'var(--font-heading)' }}>
                299€/mois
              </h2>
              <p className="text-xl text-[#B0B0B0] mb-2">
                au lieu de 5,000€+
              </p>
              <p className="text-2xl font-bold text-[#00FF88]">
                95% d&apos;économies
              </p>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <Card className="bg-[#16213E] border-2 border-[#00FF88] rounded-lg p-8 flex flex-col w-full md:w-[320px] min-h-[500px] mx-auto">
                <h3 className="text-xl font-bold mb-2 text-[#00FF88]">Starter</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#00FF88]">49€</span>
                  <span className="text-[#B0B0B0]">/mois</span>
                </div>
                <p className="text-sm text-[#B0B0B0] mb-6">Pour tester le concept</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">1 avatar IA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">100 posts/mois</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Cohérence visuelle 70%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Support email</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">1 plateforme (Instagram)</span>
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white"
                >
                  <Link href="/signup">
                    Commencer
                  </Link>
                </Button>
              </Card>
              
              {/* Pro Plan - Highlighted */}
              <Card className="bg-[#16213E] border-2 border-[#00FF88] rounded-lg p-8 flex flex-col relative w-full md:w-[320px] md:scale-105 min-h-[500px] mx-auto" style={{ 
                boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)'
              }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-[#0066FF] text-white px-4 py-1 text-xs font-bold">
                    POPULAIRE
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0066FF]">Pro</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#0066FF]">99€</span>
                  <span className="text-[#B0B0B0]">/mois</span>
                </div>
                <p className="text-sm text-[#B0B0B0] mb-6">Pour les créateurs sérieux</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">1 avatar IA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">500 posts/mois</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Cohérence visuelle 85%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Support prioritaire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">3 plateformes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Analytics avancés</span>
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white"
                >
                  <Link href="/signup">
                    Essayer Pro
                  </Link>
                </Button>
              </Card>
              
              {/* Agency Plan */}
              <Card className="bg-[#16213E] border-2 border-[#00FF88] rounded-lg p-8 flex flex-col w-full md:w-[320px] min-h-[500px] mx-auto">
                <h3 className="text-xl font-bold mb-2 text-[#00FF88]">Agency</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#00FF88]">2,500€</span>
                  <span className="text-[#B0B0B0]"> setup</span>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#00FF88]">299€</span>
                  <span className="text-[#B0B0B0]">/mois</span>
                </div>
                <p className="text-sm text-[#B0B0B0] mb-6">Pour les marques établies</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Avatar LoRA custom</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Posts illimités</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Cohérence visuelle 95%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Setup en 7 jours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Support dédié</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Toutes plateformes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88] text-lg">✓</span>
                    <span className="text-sm text-[#E0E0E0]">Voice AI (Phase 2)</span>
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white"
                >
                  <Link href="/signup">
                    Nous Contacter
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
