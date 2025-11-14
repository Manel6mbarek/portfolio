import { BookOpen, GraduationCap, Calendar, School } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Diplôme d'Ingénieure en Informatique",
      school: 'Institut Supérieur des Sciences Appliquées et de Technologie de Sousse (ISSAT Sousse)',
      year: '2023 – present',
      icon: GraduationCap,
      color: 'from-emerald-500 to-teal-400',
      bgColor: 'from-emerald-500/20 to-teal-400/20',
    },
    {
      degree: 'Licence en Informatique',
      school: "Institut Supérieur D'Informatique De Mahdia (ISIMA)",
      year: '2020 – 2023',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-400',
      bgColor: 'from-indigo-500/20 to-purple-400/20',
    },
    {
      degree: 'Baccalauréat Scientifique',
      school: 'Lycée Agereb Sfax',
      year: '2019 – 2020',
      icon: School,
      color: 'from-purple-500 to-pink-400',
      bgColor: 'from-yellow-500/20 to-orange-400/20',
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-gradient-to-br min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Parcours Académique
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={i}
                className="group relative"
              >
                {/* Card principale */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/50 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]">
                  
                  {/* Background decoratif animé */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Cercle décoratif en arrière-plan */}
                  <div className={`absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br ${edu.color} opacity-10 rounded-full blur-3xl group-hover:scale-150 group-hover:opacity-20 transition-all duration-700`} />

                  {/* Header avec icône principale */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-start justify-between">
                      {/* Grande icône diplôme */}
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon size={40} className="text-white" />
                      </div>

                      {/* Badge année */}
                      <div className={`bg-gradient-to-r ${edu.color} px-5 py-2.5 rounded-full shadow-lg`}>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-white" />
                          <span className="text-white font-bold text-sm">{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Titre du diplôme */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">
                      {edu.degree}
                    </h3>

                    {/* Séparateur avec animation */}
                    <div className={`h-1 bg-gradient-to-r ${edu.color} rounded-full mb-5 w-20 group-hover:w-full transition-all duration-500`} />

                    {/* École */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${edu.color} opacity-20 flex items-center justify-center`}>
                        <School size={20} className="text-white" />
                      </div>
                      <p className="text-xl text-blue-200 font-semibold">
                        {edu.school}
                      </p>
                    </div>

                    {/* Badge "Diplôme obtenu" */}
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`} />
                      <span className="text-sm text-white/80 font-medium">Diplôme obtenu</span>
                    </div>
                  </div>

                  {/* Décoration coins */}
                  <div className={`absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-br ${edu.color} opacity-10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700`} />
                  
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${edu.color} opacity-10 blur-2xl`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}