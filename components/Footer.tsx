import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Content - Centered since links were removed */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl font-bold tracking-tight text-white">
              Play<span className="text-gold-gradient">Dolar</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-8">
            Redefinindo o padrão de automação financeira global. Tecnologia de ponta, design intuitivo e segurança de nível institucional para traders exigentes.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/play.dolar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-all"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Copyright & Status */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600 font-medium">
            © {new Date().getFullYear()} PlayDolar Technology. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
             <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></span>
             <span className="text-xs text-gray-500 font-medium tracking-wide">SYSTEM OPERATIONAL</span>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-dark-800/30 rounded-lg text-[10px] text-gray-600 text-justify border border-white/5 leading-relaxed">
          <p>
            <strong>AVISO DE RISCO:</strong> Negociar instrumentos financeiros envolve um alto nível de risco e pode não ser adequado para todos os investidores. O alto grau de alavancagem pode trabalhar contra você, bem como a seu favor. Antes de decidir investir, você deve considerar cuidadosamente seus objetivos de investimento, nível de experiência e apetite ao risco. Existe a possibilidade de que você possa sustentar uma perda de parte ou de todo o seu investimento inicial. A PlayDolar é uma fornecedora de tecnologia e não uma corretora financeira.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;