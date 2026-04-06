import SiteLayout from '../components/SiteLayout';

const experiences = [
  {
    role: 'ML Engineer and Full-Stack Builder',
    company: 'Academic and Personal Projects',
    period: '2023 - Present',
    points: [
      'Built end-to-end ML and web systems including intent-based search, healthcare software, and real-time applications.',
      'Designed project architectures with CI/CD mindset and reproducible development workflows.',
      'Focused on practical deployment constraints, latency, and maintainable code organization.',
    ],
  },
  {
    role: 'Research Contributor',
    company: 'Computer Vision and NLP Projects',
    period: '2024 - Present',
    points: [
      'Worked on multimodal segmentation, long-form ASR, and evaluation-driven experimentation.',
      'Implemented data pipelines and model training loops for research and prototype delivery.',
      'Documented findings and converted prototype ideas into publishable engineering artifacts.',
    ],
  },
  {
    role: 'Team Lead and Competitor',
    company: 'Datathons and Engineering Competitions',
    period: '2024 - Present',
    points: [
      'Led teams in national and international challenges with focus on rapid experimentation.',
      'Balanced model quality and deadline constraints across multiple competition tracks.',
      'Built collaboration flow for feature ownership, submission strategy, and post-mortem analysis.',
    ],
  },
];

const skillCategories = [
  {
    title: 'Programming',
    items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java'],
  },
  {
    title: 'ML and Data',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Backend and Infra',
    items: ['Node.js', 'Spring Boot', 'Docker', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Workflow',
    items: ['Git', 'Linux', 'Postman', 'Jupyter', 'CI/CD'],
  },
];

const Experience = () => {
  return (
    <SiteLayout
      command="experience"
      heading="Experience"
      description="From product-oriented engineering to research-heavy problem solving, I work at the intersection of machine learning and software delivery."
    >
      <p className="text-lg font-semibold text-slate-400">$ cat ~/experience/full-time.json</p>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <article key={experience.role} className="terminal-card">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-cyan-200">{experience.role}</h2>
                <p className="text-base text-emerald-300">{experience.company}</p>
              </div>
              <p className="terminal-chip">{experience.period}</p>
            </div>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              {experience.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section>
        <p className="mb-4 text-lg font-semibold text-slate-400">$ cat /etc/skills-proficiency</p>
        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article key={category.title} className="terminal-card">
              <h3 className="text-base font-bold uppercase tracking-wide text-cyan-200">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="terminal-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Experience;
