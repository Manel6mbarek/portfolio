export default function Skills() {
  const skillCategories = [
    {
      category: "Langages de programmation",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 75 },
        
      ],
    },
    {
      category: "Frameworks Backend",
      skills: [
        { name: "Node.js", level: 85 },
         { name: "Django", level: 80 },
        { name: "Spring Boot", level: 85 },
       
        
      ],
    },
    {
      category: "Frameworks Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Flutter", level: 75 },
      ],
    },
    {
      category: "Bases de données",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      category: "DevOps & Outils",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Jenkins", level: 70 },
        { name: "GitHub", level: 90 },
      ],
    },
    {
      category: "Méthodologies & Collaboration",
      skills: [
        { name: "Scrum/Agile", level: 85 },
        { name: "Jira", level: 80 },
        { name: "UML", level: 75 },
        { name: "Microsoft Teams", level: 90 },
      ],
    },
    {
      category: "Design & Prototypage",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Canva", level: 90 },
      ],
    },
    {
      category: "IA & IoT",
      skills: [
        { name: "API d’IA", level: 80 },
        { name: "Raspberry Pi", level: 75 },
        { name: "Capteurs IoT", level: 70 },
      ],
    },
  ];

  const cardColors = [
    "from-blue-500/20 to-blue-700/30",
    "from-green-500/20 to-green-700/30",
    "from-purple-500/20 to-purple-700/30",
    "from-pink-500/20 to-pink-700/30",
    "from-yellow-500/20 to-yellow-700/30",
    "from-red-500/20 to-red-700/30",
    "from-teal-500/20 to-teal-700/30",
  ];

  return (
    <section id="competences" className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Mes Compétences
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full mb-12" />

        {/* Scroll centré */}
        <div className="overflow-hidden relative max-w-4xl mx-auto">
          <div className="flex animate-scroll gap-6 justify-center">
            {skillCategories.concat(skillCategories).map((category, idx) => (
              <div
                key={idx}
                className={`min-w-[250px] p-4 rounded-xl border-2 flex-shrink-0 bg-gradient-to-br ${cardColors[idx % cardColors.length]} border-white/30`}
              >
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/90 text-sm">{skill.name}</span>
                        <span className="text-white font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-white/70 to-white/90 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animation CSS */}
        <style jsx>{`
          .animate-scroll {
            display: flex;
            gap: 1.5rem;
            animation: scroll 20s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
