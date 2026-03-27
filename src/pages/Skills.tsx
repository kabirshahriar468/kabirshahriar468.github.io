
import Navigation from '../components/Navigation';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Assembly', level: 75 },
        { name: 'Shell Scripting', level: 70 },
        { name: 'OpenGL', level: 65 }
      ]
    },
    {
      title: 'Web Stack',
      icon: '🌐',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Spring Boot', level: 80 },
        { name: 'EJS', level: 85 }
      ]
    },
    {
      title: 'Python & Data Science',
      icon: '📊',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 90 },
        { name: 'Matplotlib', level: 85 }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Oracle Database', level: 75 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Linux/Unix', level: 85 },
        { name: 'Postman', level: 85 },
        { name: 'Jupyter', level: 90 }
      ]
    },
    {
      title: 'Hardware & Systems',
      icon: '⚡',
      skills: [
        { name: 'Logisim', level: 85 },
        { name: 'ATmega32 (AVR)', level: 80 },
        { name: 'Assembly Programming', level: 75 },
        { name: 'Digital Logic Design', level: 85 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
            <p className="text-xl text-gray-300">
              Technologies and tools I work with to build modern applications and solve complex problems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Continuous Learning</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm constantly exploring new technologies and frameworks to stay current with industry trends.
                Currently diving deeper into advanced machine learning techniques, cloud technologies, and modern web development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
