import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: 'Stagiaire – Développement web',
      company: ' HNC&D',
      location: 'Tunis, Tunisie',
      date: 'Juillet – Sept 2025',
      description:
        "Développement du module de facturation dans le cadre d’un site web, développement d’APIs RESTful et intégration de logique métier complexe",
      color: 'from-blue-500 to-cyan-400',
    },
    {
      role: 'Stagiaire - Plugin WordPress IA',
      company: ' VISS Tunisie',
      location: 'Sfax, Tunisie',
      date: 'Juin – Août 2024',
      description:
        ' Création d’un plugin WordPress utilisant l’IA pour la génération de contenu web optimisé SEO et développement de formulaires interactifs avec Python pour l’intégration d’APIs d’IA',
      color: 'from-purple-500 to-pink-400',
    },
     {
      role: 'Stage de Fin d’Études',
      company: ' QuetraTech',
      location: 'Mahdia, Tunisie',
      date: 'Février – Juin 2023',
      description: '  Développement d’un système IoT d’assistance pour personnes à mobilité réduite, intégrant le contrôle vocal avec Python, la détection d’obstacles et une application mobile en temps réel pour la surveillance et la gestion des alertes.',
      color: 'from-purple-500 to-pink-400',
    },
    {
      role: 'Stage de Perfectionnement',
      company: 'Cartago Ceramic',
      location: 'Sfax, Tunisie',
      date: 'Juillet – Août 2023',
      description: 'Faire une étude sur les Robots TGV qui supporte un logiciel en utilisant des algorithmes d\'optimisation  et Calculer le court chemin .',
      color: 'from-orange-500 to-yellow-400',
    },
    
    
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expérience Professionnelle
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Ligne verticale timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative animate-fadeInUp"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-2xl border-4 border-slate-900`}>
                    <Briefcase size={28} className="text-white" />
                  </div>
                </div>

                {/* Card - alignée à droite de la ligne sur mobile, alternée sur desktop */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                    {/* Effet glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-4">
                        <Calendar size={16} />
                        <span>{exp.date}</span>
                      </div>

                      {/* Titre */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                        {exp.role}
                      </h3>
                      
                      {/* Entreprise */}
                      <p className="text-xl text-blue-200 font-semibold mb-3">
                        {exp.company}
                      </p>

                      {/* Localisation */}
                      <div className="flex items-center gap-2 text-white/60 mb-4">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>

                      {/* Séparateur */}
                      <div className={`w-16 h-1 bg-gradient-to-r ${exp.color} rounded-full mb-4`} />

                      {/* Description */}
                      <p className="text-white/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Décoration */}
                    <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}