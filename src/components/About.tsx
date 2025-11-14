export default function About() {
  const keywords = ["Développement", "Design", "Innovation", "problème-solving", "clean code"];

  return (
    <section id="about" className="min-h-screen py-20 relative flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          
          {/* Texte à gauche */}
          <div className="space-y-6">
            <p className="text-white/90 text-lg leading-relaxed">
              Je suis une ingénieure informatique spécialisée en génie logiciel, animée par la création de solutions fiables, performantes et conçues pour évoluer dans le temps. Actuellement étudiante en ingénierie à l'ISSAT Sousse, j'ai développé de solides compétences en développement web, en IoT et dans la mise en place de services backend.
            </p>
            
            <p className="text-white/90 text-lg leading-relaxed">
              Curieuse et passionnée, j'aime explorer les nouvelles technologies, comprendre leur potentiel et imaginer comment elles peuvent améliorer un projet. Pour moi, un bon logiciel naît de l'équilibre entre les exigences techniques, la qualité du code et l'expérience utilisateur.
            </p>
            
            <p className="text-white/90 text-lg leading-relaxed">
              Mon ambition est d'accompagner la transformation d'idées innovantes en systèmes fonctionnels et robustes : applications web modernes, architectures distribuées, microservices ou encore solutions DevOps complètes. J'aime concevoir des outils fiables, maintenables et évolutifs qui répondent réellement aux besoins des utilisateurs et des organisations.
            </p>

            {/* Mots-clés */}
            <div className="flex flex-wrap gap-3 pt-6">
              {keywords.map((word, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Image à droite */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96">
                <img
                  src="/images/rr.png"
                  alt="Photo de profil"
                  className="w-full h-full object-cover rounded-full 
                             shadow-[0_0_40px_rgba(59,130,246,0.5)] 
                             border-2 border-blue-400/30
                             hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]
                             transition-all duration-300"
                />
              </div>
              {/* Effet de fond subtil */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                              w-96 h-96 md:w-[420px] md:h-[420px]
                              bg-gradient-to-br from-blue-500/10 to-cyan-500/10 
                              rounded-full blur-3xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}