import { Award, Calendar, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: 'Certificat MERN Stack',
      issuer: 'Orange Digital Center',
      year: '2025',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'from-blue-500/20 to-cyan-400/20',
    },
    {
      title: 'Certification Entrepreneuriat',
      issuer: 'BADER TECH, Pépinière Mahdia',
      year: '2023',
      color: 'from-orange-500 to-yellow-400',
      bgColor: 'from-orange-500/20 to-yellow-400/20',
    },
    {
      title: ' Certificat Développement Web',
      issuer: 'LinkedIn Learning',
      year: '2022',
      color: 'from-purple-500 to-pink-400',
      bgColor: 'from-purple-500/20 to-pink-400/20',
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Card principale */}
              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                
                {/* Background decoratif */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Badge vérifié en haut à droite */}
                <div className="absolute top-6 right-6 z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="relative z-10">
                  {/* Icône principale */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-xl mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                    <Award size={32} className="text-white" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Séparateur avec gradient */}
                  <div className={`w-16 h-1 bg-gradient-to-r ${cert.color} rounded-full mb-4 group-hover:w-full transition-all duration-500`} />

                  {/* Émetteur */}
                  <p className="text-blue-200 font-medium mb-3 text-lg">
                    {cert.issuer}
                  </p>

                  {/* Date avec icône */}
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                    <Calendar size={16} />
                    <span className="text-sm">{cert.year}</span>
                  </div>
                </div>

                {/* Décoration en coin */}
                <div className={`absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br ${cert.color} opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                
                {/* Bordure animée */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cert.color} opacity-20 blur-xl`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}