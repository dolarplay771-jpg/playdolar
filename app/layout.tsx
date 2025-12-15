import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1180077463699646');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1180077463699646&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
