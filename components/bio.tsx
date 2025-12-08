"use client"

import { Button } from "@/components/ui/button"
import { 
  ExternalLink, 
  MessageCircle, 
  Video, 
  Users, 
  DollarSign,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  ArrowRight
} from "lucide-react"
import Image from "next/image"

interface LinkItem {
  id: string
  title: string
  url: string
  icon?: React.ReactNode
  variant?: "default" | "primary" | "secondary"
}

interface BioProps {
  name?: string
  username?: string
  bio?: string
  avatar?: string
  links?: LinkItem[]
}

const getIcon = (iconName?: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    telegram: <MessageCircle className="w-5 h-5" />,
    whatsapp: <MessageCircle className="w-5 h-5" />,
    youtube: <Youtube className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    facebook: <Facebook className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    video: <Video className="w-5 h-5" />,
    community: <Users className="w-5 h-5" />,
    trading: <DollarSign className="w-5 h-5" />,
    default: <Globe className="w-5 h-5" />,
  }
  return iconMap[iconName?.toLowerCase() || "default"] || <ExternalLink className="w-5 h-5" />
}

export function Bio({
  name = "Steh Giovana",
  username = "@stehgiovana",
  bio = "Comunidade de traders que lucram em dólar operando de casa. Estratégias testadas, suporte ao vivo e sinais precisos.",
  avatar = "/587608550_18111863461608360_3755551491441497024_n.jpg",
  links = [
    {
      id: "1",
      title: "Comece Aqui",
      url: "/",
      icon: "trading",
      variant: "primary"
    },
    {
      id: "2",
      title: "Siga no Instagram",
      url: "https://instagram.com/stehgiovana",
      icon: "instagram",
      variant: "default"
    },
    {
      id: "3",
      title: "Entre na Comunidade Telegram",
      url: "https://t.me/+nYINBrccrtk1YmEx",
      icon: "telegram",
      variant: "default"
    },
    {
      id: "4",
      title: "Fale Conosco no WhatsApp",
      url: "https://chat.whatsapp.com/HCrBfuKJ1Mw3dgA6lyQROP",
      icon: "whatsapp",
      variant: "default"
    },
  ]
}: BioProps) {
  return (
    <div className="min-h-screen relative flex flex-col items-center p-4 pt-20 pb-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/Parcelamos.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-6 animate-fade-in">
        {/* Logo Section - Compacta no topo */}
        <div className="flex flex-col items-center gap-3 mb-8 animate-fade-in-up">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#FFC107] shadow-lg shadow-[#FFC107]/30 animate-pulse-subtle">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-white font-sans drop-shadow-lg">
              {name}
            </h1>
            <p className="text-[#FFC107] text-sm font-medium mt-1">
              {username}
            </p>
          </div>
        </div>

        {/* Bio Text */}
        {bio && (
          <div className="text-center mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-[#F5F5F5] text-sm leading-relaxed drop-shadow-md">
              {bio}
            </p>
          </div>
        )}

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link, index) => {
            const icon = link.icon ? getIcon(link.icon) : <ExternalLink className="w-5 h-5" />
            const isPrimary = link.variant === "primary"
            
            return (
              <Button
                key={link.id}
                asChild
                variant={isPrimary ? "default" : "outline"}
                size="lg"
                className={`
                  group w-full justify-between h-auto py-4 px-6 rounded-lg
                  transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl
                  ${isPrimary 
                    ? "bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold border-0 shadow-lg hover:shadow-[#FFC107]/50" 
                    : "bg-[#0a0a0a]/90 backdrop-blur-sm border-[#27272a] text-white hover:bg-[#1a1a1a] hover:text-[#FFC107] hover:border-[#FFC107] hover:shadow-lg hover:shadow-[#FFC107]/30"
                  }
                  animate-fade-in-up
                `}
                style={{
                  animationDelay: `${(index + 2) * 0.1}s`
                }}
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={`transition-colors duration-300 ${isPrimary ? "text-black" : "text-[#FFC107]"}`}>
                      {icon}
                    </span>
                    <span className={`text-left font-medium transition-colors duration-300 ${isPrimary ? "" : ""}`}>
                      {link.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-colors duration-300 ${isPrimary ? "text-black" : "text-[#FFC107]"}`} />
                </a>
              </Button>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-6 animate-fade-in-up" style={{ animationDelay: `${(links.length + 2) * 0.1}s` }}>
          <p className="text-[#808080] text-xs drop-shadow-md">
            © {new Date().getFullYear()} Play Dólar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}

