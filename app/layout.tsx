import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Play Dólar - Ganhe em Dólar Operando de Casa",
  description:
    "Entre para a comunidade Play Dólar e aprenda estratégias comprovadas para operar no mercado internacional. Suporte ao vivo, sinais precisos e comunidade ativa.",
  keywords: "trading, forex, dólar, investimentos, comunidade de traders, sinais de trading",
  openGraph: {
    title: "Play Dólar - Ganhe mais de 5k USD por mês",
    description: "Comunidade ativa • Estratégias testadas • Suporte 24/7",
    images: ["/video-thumbnail.png"],
  },
  icons: {
    icon: [
      {
        url: "/logoic.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logoic.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logoic.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logoic.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} ${outfit.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
