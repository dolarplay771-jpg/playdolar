import { TopBanner } from "@/components/top-banner"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { SocialProof } from "@/components/social-proof"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"

const WHATSAPP_URL = "https://wa.me/5518981107751?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20aprender%20a%20faturar%20em%20d%C3%B3lar!"

export default function PlayDolarWhatsApp() {
  return (
    <div className="min-h-screen bg-black">
      <TopBanner />
      <Hero ctaUrl={WHATSAPP_URL} />
      <HowItWorks />
      <Benefits />
      <SocialProof />
      <FinalCTA ctaUrl={WHATSAPP_URL} />
      <FAQ />
      <Footer />
      <StickyCTA ctaUrl={WHATSAPP_URL} />
    </div>
  )
}


