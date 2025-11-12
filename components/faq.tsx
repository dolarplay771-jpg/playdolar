"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FAQ() {
  const faqs = [
    {
      question: "É garantido que vou lucrar?",
      answer:
        "Não. Resultados variam de pessoa para pessoa. Oferecemos estratégias comprovadas e suporte, mas o mercado financeiro envolve riscos. O sucesso depende de dedicação, estudo e gestão de risco adequada.",
    },
    {
      question: "Quanto custa para entrar?",
      answer:
        "A entrada para os grupos de WhatsApp e Telegram é gratuita. Queremos que você conheça nossa comunidade antes. Serviços extras e mentorias personalizadas podem ser cobrados no futuro.",
    },
    {
      question: "Como faço meu primeiro depósito?",
      answer:
        "Após entrar na comunidade, você receberá um guia completo sobre como abrir conta em corretoras confiáveis e fazer seu primeiro depósito com segurança. Nossa equipe está disponível para tirar todas as dúvidas.",
    },
    {
      question: "Preciso ter experiência prévia?",
      answer:
        "Não! Aceitamos membros de todos os níveis. Temos conteúdo desde o básico até estratégias avançadas. O importante é estar disposto a aprender e praticar.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Varia muito. Alguns membros veem resultados em semanas, outros levam meses. O importante é seguir as estratégias, gerenciar o risco e ter paciência. Trading não é enriquecimento rápido.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Perguntas <span className="text-[#FFC107]">Frequentes</span>
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-6 data-[state=open]:border-[#FFC107]"
              >
              <AccordionTrigger className="text-white hover:text-[#FFC107] text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#F5F5F5] leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
