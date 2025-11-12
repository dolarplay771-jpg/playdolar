"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

export function SocialProof() {
  const [startedVideos, setStartedVideos] = useState<{ [key: number]: boolean }>({})

  const testimonials = [
    {
      videoId: "dQw4w9WgXcQ",
      thumbnail: "/video-thumbnail.png",
      title: "Depoimento 1",
    },
    {
      videoId: "dQw4w9WgXcQ",
      thumbnail: "/video-thumbnail.png",
      title: "Depoimento 2",
    },
    {
      videoId: "dQw4w9WgXcQ",
      thumbnail: "/video-thumbnail.png",
      title: "Depoimento 3",
    },
  ]

  const handleVideoStart = (index: number) => {
    setStartedVideos((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section className="py-20 px-4 bg-[#FFC107]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-center text-black mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          O que nossos <span className="text-white">membros</span> dizem
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white border-zinc-300 hover:border-black transition-all overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group">
                  {!startedVideos[index] ? (
                    <>
                      {/* Thumbnail */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${testimonial.thumbnail}')`,
                        }}
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
      </div>
    </section>
  )
}
