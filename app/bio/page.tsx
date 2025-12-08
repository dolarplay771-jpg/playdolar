import { Bio } from "@/components/bio"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Play Dólar - Links",
  description: "Acesse todos os links importantes da comunidade Play Dólar",
  openGraph: {
    title: "Play Dólar - Links",
    description: "Acesse todos os links importantes da comunidade Play Dólar",
    images: ["/logoic.png"],
  },
}

export default function BioPage() {
  return <Bio />
}


