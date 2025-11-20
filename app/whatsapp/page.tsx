import { TopBanner } from "@/components/top-banner"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { SocialProof } from "@/components/social-proof"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"

const WHATSAPP_URL = "https://chat.whatsapp.com/HCrBfuKJ1Mw3dgA6lyQROP"

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


