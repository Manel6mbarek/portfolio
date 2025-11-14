import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fadeInUp" style={{ animationDelay: '0s' }}>
          <div className="mb-6 inline-block">
            
            {/* 
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl font-bold text-white">
                MM
              </div>
            </div>
             */}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Bonjour, je suis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_100%] animate-gradient">
             Manel Mbarek
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Ingénieure Informatique
          </p>

          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            Passionné par la création d'applications web modernes et performantes.
            Je transforme vos idées en solutions digitales innovantes.
          </p>

          <div className="flex gap-4 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:scale-105 transition-all duration-300"
            >
              Me Contacter
            </a>
            <a
              href="#projets"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Voir Mes Projets
            </a>
          </div>

          <div className="flex gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com/Manel6mbarek"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/manel-mbarek-8231a9205/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manelmbarek011@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </div>
    </section>
  );
}
