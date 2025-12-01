import type React from "react"
import type { Metadata, Viewport } from "next"
// <CHANGE> Import Elykta fonts: Playfair Display, Inter, JetBrains Mono
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/LayoutClient"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Elykta - Créez Votre Égérie IA En 7 Jours",
  description:
    "Donnez un visage, une voix et une personnalité à votre marque dans le monde digital. L'usine à êtres numériques.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <CHANGE> Set lang to French, force dark mode
    <html lang="fr" className="dark">
      <body className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
