"use client"

import { BookOpen, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      icon: BookOpen,
      title: "Aprenda",
      description: "Cursos rápidos e sinais simples para você começar do zero.",
    },
    {
      icon: Users,
      title: "Pratique",
      description: "Sala da comunidade com operadores experientes te apoiando.",
    },
    {
      icon: TrendingUp,
      title: "Opere",
      description: "Entre com segurança e acompanhe seus resultados em tempo real.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Como <span className="text-[#FFC107]">funciona</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-zinc-900 border-zinc-800 hover:border-[#FFC107] transition-all">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFC107]/10 mb-6">
                    <Icon className="h-8 w-8 text-[#FFC107]" />
                  </div>
                  <h3 className="font-bold text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-[#F5F5F5] leading-relaxed">{step.description}</p>
                </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#cta-final"
            className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            Quero começar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
