import { TopBanner } from "@/components/top-banner"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { SocialProof } from "@/components/social-proof"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"

export default function PlayDolarLanding() {
  return (
    <div className="min-h-screen bg-black">
      <TopBanner />
      <Hero />
      <HowItWorks />
      <Benefits />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  )
}
