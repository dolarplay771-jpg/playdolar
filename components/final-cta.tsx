"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface FinalCTAProps {
  ctaUrl?: string
}

export function FinalCTA({ ctaUrl = "https://t.me/+JQAUWrqRrw8xYjAx" }: FinalCTAProps) {
  return (
    <section
      id="cta-final"
      className="relative py-24 px-4 overflow-hidden min-h-[500px] flex items-center"
    >
      {/* Background Image */}
      <img 
        src="/fundodinheiro.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: 'none', filter: 'blur(4px)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />
      {/* Section dividers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-[#FFC107] via-[#FFC107]/50 to-transparent z-[2]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-[2]"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <motion.h2
          className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Pronto para começar a <span className="text-[#FFC107]">lucrar em dólar</span>?
        </motion.h2>
        <motion.p
          className="text-xl text-[#F5F5F5] mb-12 max-w-2xl mx-auto text-pretty"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Junte-se a milhares de pessoas que já estão transformando sua vida financeira com o Play Dólar
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold text-xl px-10 py-7 h-auto rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-[#FFC107]/20"
          >
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
              <span className="mr-2 text-2xl font-bold">$</span>
              Comece a lucrar agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
