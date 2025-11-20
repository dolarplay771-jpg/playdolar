import { Instagram, Send, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Social */}
        <div className="text-center mb-8">
          <h3 className="font-sans font-extrabold text-2xl text-[#FFC107] mb-6">Play Dólar</h3>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/stehgiovana?igsh=MTloZWMwNzlqbWt0Mg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FFC107] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://t.me/+B0Lwxo4_Ong5OGQx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FFC107] transition-colors"
              aria-label="Telegram"
            >
              <Send className="h-6 w-6" />
            </a>
            <a
              href="https://chat.whatsapp.com/HCrBfuKJ1Mw3dgA6lyQROP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FFC107] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="text-center border-t border-zinc-900 pt-8">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Play Dólar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
