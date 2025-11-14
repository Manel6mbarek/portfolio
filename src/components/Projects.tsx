import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
       {
      title: 'Site e-commerce YallaShop', 
      description:'Système e-commerce avec gestion produits, commandes et factures PDF, doté d’une interface responsive et d’une authentification JWT sécurisée.',
      image: '/images/yalashop.png',
      tags: ['React', 'Springboot','MySQL', 'JWT'],
      github: 'https://github.com/Manel6mbarek/yalashop',
      demo: 'https://demo.com',
    },
     {
      title: 'plugin WordPress IA',
      description: 'Création d’un plugin WordPress intégrant l’IA pour générer du contenu SEO, et développement de formulaires interactifs  à des APIs d’IA.',
      image: '/images/plugin.png',
      tags: ['WordPress', 'PHP', 'Python', 'IA'],
      github: 'https://github.com/Manel6mbarek/plugin-personnalis-pour-WordPress-qui-facilite-la-g-n-ration-de-contenu-de-votre-site-web.',
      demo: 'https://demo.com',
    },
      {
      title: 'Plateforme de Surveillance des Examens',
      description: 'Solution d’automatisation des surveillances d’examens : algorithme d’IA pour une distribution optimale des enseignants et génération dynamique de calendriers adaptés.',
      image: '/images/surveillance.png',
      tags: ['React', 'MongoDB', 'Node.js', 'AI'],
      github: 'https://github.com/Manel6mbarek/Surveillance-Examen',
      demo: 'https://demo.com',
    },
    {
      title: 'App Mobile FindMe',
      description: 'FindMe : suivez vos contacts en temps réel, communiquez avec eux et recevez automatiquement leur position à la demande.',
      image: '/images/findfreinds.jpg',
      tags: ['java', 'Android Studio', 'SQLite'],
      github: 'https://github.com/Manel6mbarek/App_Mobile_FindMe',
      demo: 'https://demo.com',
    },
    {
      
      title: 'Site web randonnée',
      description: 'Plateforme web dédiée aux passionnés de randonnée, offrant des itinéraires, des conseils et une communauté active.',
      image: '/images/rendonne.png',
      tags: ['PHP', 'MySQL', 'Symfony'],
      github: 'https://github.com/Manel6mbarek/rendoneeDev',
      demo: 'https://demo.com',
    },

   
    {
      title: 'App Mobile Access Track',
      description: 'Application mobile permettant de localiser les personnes handicapées, de visualiser en temps réel leur environnement via des images, et d’envoyer automatiquement des alertes en cas de danger.',
      image: '/images/acesstrack.jpg',
      tags: ['Dart', 'Flutter', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    
  ];

  return (
    <section id="projets" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-white rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
