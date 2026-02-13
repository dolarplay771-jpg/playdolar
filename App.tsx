import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Activity, 
  Lock, 
  Smartphone,
  MousePointerClick,
  ArrowRight,
  TrendingUp,
  Globe2,
  CheckCircle2,
  Bell
} from 'lucide-react';
import { Feature, Mode, Testimonial } from './types';

// Data Mock
const features: Feature[] = [
  {
    id: '1',
    title: 'IA Neural',
    description: 'Processamento de dados em tempo real com redes neurais adaptativas.',
    icon: Cpu
  },
  {
    id: '2',
    title: 'Blindagem de Capital',
    description: 'Protocolos de segurança institucional para gestão de risco automatizada.',
    icon: ShieldCheck
  },
  {
    id: '3',
    title: 'Baixa Latência',
    description: 'Execução de ordens em milissegundos através de servidores dedicados.',
    icon: Zap
  },
  {
    id: '4',
    title: 'Analytics Pro',
    description: 'Dashboard completo com métricas avançadas de performance e ROI.',
    icon: BarChart3
  }
];

const modes: Mode[] = [
  { id: 'white', title: 'Branco', description: 'Alta volatilidade e multiplicadores exponenciais.', visualType: 'chart' },
  { id: 'dollar', title: 'Dólar Futuro', description: 'Operações baseadas na flutuação cambial.', visualType: 'game' },
  { id: 'candle', title: 'Price Action', description: 'Reconhecimento de padrões de velas em tempo real.', visualType: 'grid' },
  { id: 'colors', title: 'Probabilidade', description: 'Análise estatística de ciclos de cores.', visualType: 'cards' }
];

const testimonials: Testimonial[] = [
  { id: 1, name: "Ricardo Mendes", role: "Trader Quantitativo", text: "A precisão algorítmica da PlayDolar eliminou o ruído emocional do meu trading. É a ferramenta definitiva." },
  { id: 2, name: "Ana Paiva", role: "Investidora", text: "Design impecável e performance robusta. Finalmente uma plataforma que trata o mercado com a seriedade necessária." },
  { id: 3, name: "Carlos Eduardo", role: "Empresário", text: "Automatizei 100% das minhas operações. O sistema trabalha enquanto foco na expansão dos meus negócios." }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      {/* Increased bottom padding to prevent phone cutoff */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-40 md:pb-60 overflow-hidden">
        {/* Abstract Background - Added transform-gpu for performance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none transform-gpu will-change-transform" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-5xl">
            Domine o Mercado com <br />
            <span className="text-gold-gradient">Inteligência Artificial</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-light">
            A PlayDolar une algoritmos de alta frequência e design premium para oferecer uma experiência de automação financeira sem precedentes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto min-w-[200px] shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] transform-gpu"
              href="https://playdolar.com.br/register?affiliate=AQ5YLY5Y"
            >
              Criar Conta Gratuita
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto min-w-[200px] transform-gpu"
              href="https://playdolar.com.br/register?affiliate=AQ5YLY5Y"
            >
              Entrar
            </Button>
          </div>
          
          {/* Mobile Phone Mockup Placeholder */}
          {/* Added transform-gpu and will-change-transform for smooth animation */}
          <div className="mt-24 relative z-10 animate-float transform-gpu will-change-transform">
             {/* Glow behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-gold-500/20 blur-[80px] rounded-full pointer-events-none"></div>
             
             {/* Phone Frame */}
             <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-dark-900 border-[8px] border-dark-800 rounded-[3rem] shadow-2xl overflow-hidden mx-auto transform-gpu">
                {/* Screen Content */}
                <div className="w-full h-full bg-dark-950 relative flex flex-col">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark-800 rounded-b-xl z-20"></div>
                   
                   {/* App Header */}
                   <div className="mt-8 px-6 flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Saldo Total</span>
                        <span className="text-2xl font-bold text-white">$ 14,820.50</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center relative">
                         <Bell size={14} className="text-white" />
                         <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-dark-950"></div>
                      </div>
                   </div>

                   {/* Chart Area */}
                   <div className="mt-10 px-0 h-48 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent opacity-50"></div>
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                         <path d="M0 100 L0 60 Q 10 50 20 65 T 40 50 T 60 40 T 80 20 L 100 10 L 100 100 Z" fill="url(#grad)" className="text-gold-500/20" />
                         <path d="M0 60 Q 10 50 20 65 T 40 50 T 60 40 T 80 20 L 100 10" fill="none" stroke="#D4AF37" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                         <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                               <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                               <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                            </linearGradient>
                         </defs>
                      </svg>
                      
                      {/* Active Trade Dot */}
                      <div className="absolute top-[10%] right-0 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"></div>
                   </div>

                   {/* Action Cards */}
                   <div className="px-4 mt-6 flex gap-3">
                      <div className="flex-1 bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
                         <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                            <TrendingUp size={14} className="text-green-400" />
                         </div>
                         <div className="text-xs text-gray-400">Lucro Hoje</div>
                         <div className="text-lg font-bold text-green-400">+ $842.00</div>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
                         <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                            <Activity size={14} className="text-blue-400" />
                         </div>
                         <div className="text-xs text-gray-400">Win Rate</div>
                         <div className="text-lg font-bold text-blue-400">94.2%</div>
                      </div>
                   </div>

                   {/* Active Signals List */}
                   <div className="mt-6 px-6 flex-1">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Sinais Recentes</div>
                      <div className="space-y-3">
                         {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                               <div className="flex items-center gap-3">
                                  <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                                  <span className="text-sm font-medium">EUR/USD</span>
                               </div>
                               <span className={`text-sm font-bold ${i === 1 ? 'text-green-400' : 'text-gray-400'}`}>
                                  {i === 1 ? '+ $124.50' : 'Finalizado'}
                               </span>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>

             {/* Floating Elements around Phone - Added transform-gpu */}
             <div className="absolute top-1/4 -right-12 p-4 glass-panel rounded-xl animate-float hidden md:block transform-gpu will-change-transform" style={{animationDelay: '1s'}}>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                       <CheckCircle2 size={20} className="text-green-500" />
                    </div>
                    <div>
                       <div className="text-xs text-gray-400 font-medium uppercase">Ordem Executada</div>
                       <div className="text-sm font-bold text-white">Compra @ 1.0842</div>
                    </div>
                 </div>
             </div>

             <div className="absolute bottom-1/3 -left-16 p-4 glass-panel rounded-xl animate-float hidden md:block transform-gpu will-change-transform" style={{animationDelay: '2s'}}>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                       <Zap size={20} className="text-gold-500" />
                    </div>
                    <div>
                       <div className="text-xs text-gray-400 font-medium uppercase">IA Analysis</div>
                       <div className="text-sm font-bold text-white">Tendência de Alta</div>
                    </div>
                 </div>
             </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="sobre" className="py-32 bg-dark-900 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Visual Column */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 to-blue-500/20 blur-3xl opacity-30 pointer-events-none transform-gpu" />
              <div className="relative glass-panel rounded-2xl p-1 aspect-square md:aspect-video lg:aspect-square flex items-center justify-center overflow-hidden transform-gpu">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark-800 to-dark-950 opacity-90"></div>
                
                {/* Tech Circle Animation */}
                <div className="relative z-10 w-64 h-64">
                   <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] will-change-transform"></div>
                   <div className="absolute inset-4 border border-gold-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] will-change-transform"></div>
                   <div className="absolute inset-12 border-2 border-dashed border-white/10 rounded-full animate-[spin_30s_linear_infinite] will-change-transform"></div>
                   
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold text-white tracking-tighter">99.8<span className="text-gold-500 text-3xl">%</span></span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-2">Precisão</span>
                   </div>
                </div>

                {/* Floating Cards - Added transform-gpu */}
                <div className="absolute top-10 right-10 p-4 glass-panel rounded-lg animate-float transform-gpu will-change-transform">
                   <Activity className="text-gold-400" size={24} />
                </div>
                <div className="absolute bottom-20 left-10 p-4 glass-panel rounded-lg animate-float transform-gpu will-change-transform" style={{animationDelay: '2s'}}>
                   <Globe2 className="text-blue-400" size={24} />
                </div>
              </div>
            </div>
            
            {/* Text Column */}
            <div className="order-1 lg:order-2">
              <h2 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 pl-1">Ecossistema PlayDolar</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">O Futuro da Automação <br />é <span className="text-white">Agora</span></h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                Esqueça o trading manual. A PlayDolar é um ecossistema completo onde algoritmos de elite trabalham para você. Nossa infraestrutura de nuvem processa milhões de pontos de dados para identificar anomalias e oportunidades de lucro em milissegundos.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Sem Viés Emocional", desc: "A IA executa a estratégia sem medo ou ganância." },
                  { title: "Gestão de Risco 24/7", desc: "Monitoramento constante de suas posições." },
                  { title: "Estratégias Adaptativas", desc: "O algoritmo aprende com a volatilidade do mercado." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                      <CheckCircle2 size={12} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-gold-200 transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                 <a href="#" className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors border-b border-gold-500/30 hover:border-gold-500 pb-0.5 text-sm uppercase tracking-wider font-medium">
                    Explorar Tecnologia <ArrowRight size={16} className="ml-2" />
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES */}
      <section id="funcionalidades" className="py-32 bg-dark-950 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 transform-gpu will-change-transform" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
               <h2 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 pl-1">Funcionalidades</h2>
               <h3 className="text-4xl md:text-5xl font-bold mb-4">Engenharia de <br />Alta Performance</h3>
            </div>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed text-right md:text-left">
               Cada ferramenta foi desenhada para oferecer a vantagem competitiva que os grandes bancos possuem, agora acessível a você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="group p-8 bg-white/[0.02] border border-white/5 hover:border-gold-500/30 transition-all duration-500 rounded-2xl hover:bg-white/[0.04] flex flex-col items-start hover:-translate-y-1 transform-gpu"
              >
                <div className="w-14 h-14 rounded-xl bg-dark-800 flex items-center justify-center mb-8 border border-white/5 group-hover:border-gold-500/20 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-500">
                  <feature.icon size={26} className="text-white group-hover:text-gold-400 transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-gold-100 transition-colors tracking-tight">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODES */}
      <section id="modos" className="py-32 bg-dark-900 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <h2 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Modos de Operação</h2>
             <h3 className="text-4xl md:text-5xl font-bold mb-6">Diversifique sua Estratégia</h3>
             <p className="text-gray-400">Escolha o algoritmo que melhor se adapta ao seu perfil de risco e objetivos financeiros.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modes.map((mode) => (
              <div key={mode.id} className="relative group overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer border border-white/5 hover:border-gold-500/40 transition-all duration-500 bg-dark-800 transform-gpu">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 group-hover:to-gold-900/40 transition-colors duration-500"></div>
                
                {/* Icon/Visual */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 group-hover:text-gold-500/10 transition-colors duration-500 transform group-hover:scale-110 will-change-transform">
                   {mode.visualType === 'chart' && <Activity size={120} strokeWidth={1} />}
                   {mode.visualType === 'game' && <Smartphone size={120} strokeWidth={1} />}
                   {mode.visualType === 'grid' && <BarChart3 size={120} strokeWidth={1} />}
                   {mode.visualType === 'cards' && <Cpu size={120} strokeWidth={1} />}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center justify-between mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 will-change-transform">
                     <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Ativo</span>
                     <ArrowRight size={16} className="text-gold-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-gold-100 transition-colors">{mode.title}</h4>
                  <p className="text-gray-400 text-sm leading-snug transform group-hover:-translate-y-1 transition-transform duration-500 will-change-transform">
                    {mode.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS - BENTO GRID STYLE */}
      <section id="beneficios" className="py-32 bg-dark-950">
        <div className="container mx-auto px-6 md:px-12">
           <div className="mb-20">
              <h2 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 pl-1">Por que PlayDolar?</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Vantagem Desleal</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
              
              {/* Large Card */}
              <div className="md:col-span-2 md:row-span-2 bg-dark-900 rounded-3xl p-10 border border-white/5 relative overflow-hidden group hover:border-gold-500/30 transition-all duration-500">
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-gold-500/10 transform-gpu" />
                 
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                       <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-gold-500">
                          <TrendingUp size={24} />
                       </div>
                       <h4 className="text-3xl font-bold mb-4">Maximização de Retorno</h4>
                       <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
                          Nossos algoritmos monitoram 14 indicadores simultaneamente para garantir entradas precisas. O resultado é uma eficiência matemática impossível de replicar manualmente.
                       </p>
                    </div>
                    
                    {/* Mock Graph */}
                    <div className="w-full h-32 mt-8 flex items-end gap-1 opacity-50">
                       {[40, 65, 50, 80, 55, 90, 70, 85, 95, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-gold-500/20 rounded-t-sm transition-all duration-500 group-hover:bg-gold-500/40 will-change-transform" style={{height: `${h}%`}}></div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Security Card */}
              <div className="bg-dark-900 rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-gold-500/30 transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <Lock className="text-gold-500 mb-6" size={32} />
                 <h4 className="text-xl font-bold mb-2">Criptografia Militar</h4>
                 <p className="text-sm text-gray-500">Seus dados protegidos por camadas de segurança bancária.</p>
              </div>

              {/* Control Card */}
              <div className="bg-gold-gradient rounded-3xl p-8 border border-transparent relative overflow-hidden group">
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                 <MousePointerClick className="text-black mb-6" size={32} />
                 <h4 className="text-xl font-bold mb-2 text-black">Controle Total</h4>
                 <p className="text-sm text-black/70 font-medium">Configure seu Stop Loss e Take Profit com um clique.</p>
              </div>

           </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section className="py-32 bg-dark-900 border-t border-white/5">
         <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-20">A Escolha dos <span className="text-gold-gradient">High Stakes</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {testimonials.map((t) => (
                  <div key={t.id} className="bg-dark-950 p-10 rounded-2xl border border-white/5 relative hover:-translate-y-2 transition-transform duration-500 shadow-xl transform-gpu will-change-transform">
                     <div className="absolute top-8 right-8 text-gold-500/10 text-8xl font-serif leading-none select-none">"</div>
                     <div className="relative z-10 flex flex-col h-full justify-between">
                        <p className="text-gray-300 italic mb-8 text-lg font-light leading-relaxed">"{t.text}"</p>
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center font-bold text-black text-sm">
                              {t.name.charAt(0)}
                           </div>
                           <div>
                              <div className="text-white font-bold">{t.name}</div>
                              <div className="text-gold-500 text-xs uppercase tracking-widest font-semibold">{t.role}</div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-40 bg-black relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark-800 via-dark-950 to-black opacity-80" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse-slow pointer-events-none" />

         <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
               O Próximo Nível <br />
               <span className="text-gold-gradient">Começa Aqui</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-12 text-xl font-light">
               Não opere contra o mercado. Opere com a vantagem tecnológica que apenas a PlayDolar oferece.
            </p>
            
            <div className="flex justify-center">
               <Button 
                  variant="primary" 
                  className="px-16 py-6 text-lg shadow-[0_0_60px_rgba(212,175,55,0.4)]"
                  href="https://playdolar.com.br/register?affiliate=AQ5YLY5Y"
               >
                 Começar Agora
               </Button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
