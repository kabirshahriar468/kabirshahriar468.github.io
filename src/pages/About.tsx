
import SiteLayout from '../components/SiteLayout';
import SocialLinks from '../components/SocialLinks';

const engineerInfo = [
  ['Name', 'Shahriar Kabir'],
  ['Based in', 'Dhaka, Bangladesh'],
  ['Current Role', 'Final-year CSE student @ BUET'],
  ['Availability', 'Open to internships, research, and freelance work'],
];

const education = [
  {
    title: 'Bangladesh University of Engineering and Technology',
    degree: 'B.Sc. in Computer Science and Engineering',
    period: 'Nov 2021 - Present',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Notre Dame College',
    degree: 'Higher Secondary Certificate (Science) | GPA 5.00 / 5.00',
    period: 'Completed 2020',
    location: 'Dhaka, Bangladesh',
  },
];

const About = () => {
  return (
    <SiteLayout
      command="about"
      heading="About Shahriar Kabir"
      description="I focus on ML systems, full-stack engineering, and production-grade software, alongside research in AI, machine learning, computer vision, NLP, and large language models."
    >
      <div className="terminal-card animate-terminal-enter">
        <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start">
          <div>
            <p className="mb-5 text-xl font-bold text-cyan-300">Engineer Information:</p>
            <div className="space-y-3 text-base text-slate-200 sm:text-lg">
              {engineerInfo.map(([label, value]) => (
                <p key={label}>
                  <span className="font-bold text-cyan-200">{label}:</span>{' '}
                  <span className="text-slate-300">{value}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-lg border border-emerald-500/45 bg-slate-900/80">
            <img
              src="/profilepic.JPG"
              alt="Portrait of Shahriar Kabir"
              className="h-full w-full object-cover object-[60%_center]"
            />
          </div>
        </div>
      </div>

      {/* <section className="rounded-lg border border-cyan-500/35 bg-cyan-950/10 p-6">
        <p className="text-2xl font-bold leading-relaxed text-emerald-300 sm:text-3xl">
          I build practical AI and software systems that connect research with real-world impact - from computer vision and NLP workflows to full-stack applications people can actually use.
        </p>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-300 sm:text-lg">
          As a final-year CSE student at BUET, I focus on machine learning, computer vision, and language technologies while building production-minded products. I care about correctness, performance, and a clean developer experience in every project.
        </p>
      </section> */}

      <section>
        <p className="mb-4 text-lg font-semibold text-slate-400">$ ls ~/links</p>
        <SocialLinks />
      </section>

      <section>
        <p className="mb-4 text-lg font-semibold text-slate-400">$ cat /etc/education</p>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.title} className="terminal-card">
              <h2 className="text-lg font-bold text-cyan-200">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-200">{item.degree}</p>
              <p className="mt-3 text-sm font-semibold text-emerald-300">{item.period}</p>
              <p className="text-sm text-slate-400">{item.location}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
