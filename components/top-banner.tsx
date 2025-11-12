import { Users, Headphones } from "lucide-react"

export function TopBanner() {
  return (
    <section className="bg-[#FFC107] py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 text-black text-sm sm:text-base">
          <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Users className="h-5 w-5 text-black" />
            <span className="font-semibold">Comunidade ativa</span>
          </div>
          <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Headphones className="h-5 w-5 text-black" />
            <span className="font-semibold">Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}

