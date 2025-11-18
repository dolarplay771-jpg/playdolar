"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function SocialProof() {
  const [startedVideos, setStartedVideos] = useState<{ [key: number]: boolean }>({})
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  const testimonials = [
    {
      videoId: "qvEF5O2Qu3g",
      title: "Depoimento 1",
    },
    {
      videoId: "myFRjIJpwCw",
      title: "Depoimento 1",
    },
    {
      videoId: "vPc4TdLfGs0",
      title: "Depoimento 2",
    },
    {
      videoId: "6Z5Haa_tcEU",
      title: "Depoimento 3",
    },
  ]

  const screenshots = [
    encodeURI("/WhatsApp Image 2025-11-17 at 15.34.57.jpeg"),
    encodeURI("/WhatsApp Image 2025-11-17 at 15.34.57(1).jpeg"),
    encodeURI("/WhatsApp Image 2025-11-17 at 15.34.57(2).jpeg"),
    encodeURI("/WhatsApp Image 2025-11-17 at 15.34.58.jpeg"),
  ]

  const handleVideoStart = (index: number) => {
    setStartedVideos((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section className="relative py-24 px-4 bg-[#FFC107] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-black via-black/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-black via-black/70 to-transparent"
      />
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-center text-black mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Pessoas que estão <span className="text-white">vivendo do mercado</span>
        </motion.h2>
        <motion.p
          className="text-center text-zinc-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Depoimentos reais de quem já está operando
        </motion.p>

        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white border-0 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all p-0">
              <CardContent className="p-0 m-0">
                <div className="relative aspect-[9/16] overflow-hidden cursor-pointer group w-full h-full">
                  {!startedVideos[index] ? (
                    <>
                      {/* Thumbnail do YouTube */}
                      <img
                        src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                        alt={testimonial.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay escuro */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      {/* Botão de play */}
                      <button
                        onClick={() => handleVideoStart(index)}
                        className="absolute inset-0 flex items-center justify-center z-10 group-hover:scale-110 transition-transform"
                        aria-label={`Reproduzir ${testimonial.title}`}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFC107] flex items-center justify-center shadow-2xl group-hover:bg-[#FFB300] transition-colors">
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black ml-1" />
                        </div>
                      </button>
                    </>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
                      title={testimonial.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <div className="hidden md:grid grid-cols-4 gap-6">
            {screenshots.map((shot, index) => (
              <motion.div
                key={shot}
                className="rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-black/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={shot} alt={`Comprovante ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="md:hidden flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
              className="p-3 rounded-full bg-black/70 text-white hover:bg-black transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="w-64 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-black/10 aspect-[9/16] bg-black">
              <img
                src={screenshots[currentScreenshot]}
                alt={`Comprovante ${currentScreenshot + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <button
              onClick={() => setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)}
              className="p-3 rounded-full bg-black/70 text-white hover:bg-black transition"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="md:hidden flex justify-center gap-2">
            {screenshots.map((_shot, index) => (
              <button
                key={index}
                onClick={() => setCurrentScreenshot(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  currentScreenshot === index ? "bg-black" : "bg-black/40"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
