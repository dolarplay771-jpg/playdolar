"use client"

import { DollarSign, GraduationCap, Users, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Ganhos em dólar",
      description: "Opere no mercado internacional e receba em dólar.",
    },
    {
      icon: GraduationCap,
      title: "Estratégias para todos os níveis",
      description: "Do iniciante ao avançado, temos conteúdo para você.",
    },
    {
      icon: Users,
      title: "Comunidade ativa",
      description: "Milhares de membros compartilhando experiências diariamente.",
    },
    {
      icon: MessageCircle,
      title: "Suporte direto",
      description: "Tire suas dúvidas com nossa equipe especializada.",
    },
  ]

  return (
    <section id="por-que-escolher" className="relative py-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/video-thumbnail.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(4px)",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>
      {/* Gradient dividers */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-[3]" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-[3]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Por que escolher o <span className="text-[#FFC107]">Play Dólar</span>?
        </motion.h2>
        <motion.p
          className="text-center text-[#F5F5F5] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mais que uma comunidade, um ecossistema completo para sua evolução financeira
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFC107] mb-4">
                  <Icon className="h-10 w-10 text-black" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{benefit.title}</h3>
                <p className="text-[#F5F5F5] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
