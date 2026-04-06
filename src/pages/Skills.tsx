
import Navigation from '../components/Navigation';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java', 'Assembly', 'Shell Scripting', 'OpenGL'],
    },
    {
      title: 'Web Stack',
      skills: ['React', 'Node.js', 'TailwindCSS', 'Spring Boot', 'EJS'],
    },
    {
      title: 'ML & Data Science',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Oracle Database', 'Redis'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'Linux/Unix', 'Postman', 'Jupyter'],
    },
    {
      title: 'Hardware & Systems',
      skills: ['Logisim', 'ATmega32 (AVR)', 'Assembly Programming', 'Digital Logic Design'],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navigation />
      
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-white mb-3">Skills</h1>
            <p className="text-base text-neutral-400 max-w-2xl mx-auto">
              Technologies and tools I work with to build modern applications and solve complex problems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 transition-all duration-300 hover:border-neutral-600"
              >
                <h2 className="text-base font-semibold text-white mb-4 uppercase tracking-wide">
                  {category.title}
                </h2>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-neutral-800 border border-neutral-700/50 rounded-md text-sm text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
