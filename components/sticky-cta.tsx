"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { fbqEvent } from "@/lib/fbq"

interface StickyCTAProps {
  ctaUrl?: string
}

export function StickyCTA({ ctaUrl = "https://t.me/+nYINBrccrtk1YmEx" }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px down
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isClosed || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black to-transparent md:hidden">
      <div className="relative bg-zinc-900 border border-[#FFC107] rounded-lg p-4 shadow-2xl">
        <button
          onClick={() => setIsClosed(true)}
          className="absolute -top-2 -right-2 bg-zinc-800 rounded-full p-1 text-zinc-400 hover:text-white"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <Button asChild className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold py-6 rounded-lg">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => fbqEvent("Lead", { source: "sticky_cta" })}
          >
            <span className="mr-2 text-xl font-bold">$</span>
            Comece a lucrar agora
          </a>
        </Button>
      </div>
    </div>
  )
}
