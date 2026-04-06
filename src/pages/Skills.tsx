
import SiteLayout from '../components/SiteLayout';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java'],
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
      skills: ['PostgreSQL', 'MongoDB', 'Oracle Database'],
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
    <SiteLayout
      command="skills"
      heading="Skills"
      description="Core technologies and tools I use for software engineering, machine learning, and systems-focused work."
    >
      <p className="text-lg font-semibold text-slate-400">$ cat /etc/skills-proficiency</p>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <article key={category.title} className="terminal-card">
            <h2 className="text-base font-bold uppercase tracking-wide text-cyan-200">
              {category.title}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="terminal-chip">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
};

export default Skills;
