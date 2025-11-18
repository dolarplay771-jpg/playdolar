"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const [videoStarted, setVideoStarted] = useState(false)

  useEffect(() => {
    setVideoStarted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/candlestick-dollar-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[95vw] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left animate-slide-in-left">
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white mb-6 text-balance leading-tight">
              Sabia que você pode <span className="text-[#FFC107]">lucrar em dólar</span> operando de dentro do conforto da sua casa?
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#F5F5F5] mb-8 text-pretty leading-relaxed">
              Entre para a comunidade <span className="text-[#FFC107] font-semibold">Play Dólar</span>, aprenda
              estratégias e comece a operar com suporte ao vivo.
            </p>

            <div className="mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold text-base sm:text-lg px-12 sm:px-16 py-4 sm:py-6 h-auto rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-[#FFC107]/50 w-full sm:w-auto min-w-[280px]"
              >
                <a href="https://t.me/+JQAUWrqRrw8xYjAx" target="_blank" rel="noopener noreferrer">
                  Opere agora <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right w-full">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-[#FFC107]/30 hover:border-[#FFC107] transition-all w-full max-w-2xl mx-auto lg:max-w-none relative cursor-pointer group">
              {!videoStarted ? (
                <>
                  {/* Thumbnail */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/video-thumbnail.png')`,
                    }}
                  />
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  {/* Botão de play */}
                  <button
                    onClick={() => setVideoStarted(true)}
                    className="absolute inset-0 flex items-center justify-center z-10 group-hover:scale-110 transition-transform"
                    aria-label="Reproduzir vídeo"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFC107] flex items-center justify-center shadow-2xl group-hover:bg-[#FFB300] transition-colors">
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 text-black ml-1" />
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/oPz-pys_2Hs?autoplay=1&mute=1&playsinline=1"
                  title="Play Dólar - Como Funciona"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 bg-black/60 border border-[#FFC107]/40 text-[#FFC107] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⚠️ Primeira e ÚNICA turma • Vagas limitadas • Encerra a qualquer momento
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
