
import SiteLayout from '../components/SiteLayout';

const Achievements = () => {
  const competitions = [
    {
      title: 'IEEE VIP Cup 2025',
      result: 'World Finalist & 2nd Runners-up',
      teamName: 'BUET_SKYSentinel',
      role: 'Team Leader',
      description:
        'IEEE Signal Processing Society Video and Image Processing Cup — a prestigious global competition under IEEE ICIP 2025.',
      link: 'https://2025.ieeeicip.org/ieee-sps-video-and-image-processing-cup/',
      tier: 'gold' as const,
    },
    {
      title: "BUET Deep Learning Sprint",
      result: 'Finalist',
      teamName: null,
      role: null,
      description:
        "Reached the finals of BUET's Deep Learning Sprint, competing on advanced neural-network challenges.",
      link: null,
      tier: 'silver' as const,
    },
    {
      title: 'Televerse 1.0 — Dialect Translation',
      result: '1st Place (Public) · 3rd Place (Private)',
      teamName: 'Null Hypothesis',
      role: null,
      description:
        'Shobdotori — a Bangla dialect translation competition on Kaggle, part of Televerse 1.0.',
      link: 'https://www.kaggle.com/competitions/shobdotori/',
      tier: 'gold' as const,
    },
    {
      title: 'CUET CSE FEST 2025 Datathon',
      result: '1st Place (Public) · 5th Place (Private)',
      teamName: '3W1B',
      role: null,
      description:
        'PoliMemeDecode — a datathon competition held at CUET CSE Fest 2025 on Kaggle.',
      link: 'https://www.kaggle.com/competitions/poli-meme-decode-cuet-cse-fest',
      tier: 'gold' as const,
    },
    {
      title: 'Poridhi AI Hackathon',
      result: 'Top 10',
      teamName: null,
      role: null,
      description:
        'Placed in the Top 10 at the Poridhi AI Hackathon organized by BrainStation23.',
      link: null,
      tier: 'silver' as const,
    },
    {
      title: 'BITFest Datathon 2025',
      result: 'Top 30',
      teamName: 'BUET_data_dummies',
      role: null,
      description:
        'Competed in the BITFest Datathon Contest 2025 on Kaggle.',
      link: 'https://www.kaggle.com/competitions/bitfest-datathon-2025',
      tier: 'bronze' as const,
    },
    {
      title: 'AI Mathematical Olympiad',
      result: 'Competitor',
      teamName: null,
      role: null,
      description:
        'Competed in the AI Mathematical Olympiad, solving complex mathematical problems using AI approaches.',
      link: null,
      tier: 'bronze' as const,
    },
    {
      title: 'Bangladesh Mathematical Olympiad',
      result: 'Participant',
      teamName: null,
      role: null,
      description:
        'Participated at the national level, showcasing problem-solving skills in advanced mathematics.',
      link: null,
      tier: 'bronze' as const,
    },
  ];

  const academicAwards = [
    {
      title: "Dean's List Award",
      institution: 'BUET',
      description:
        'Recognized for outstanding academic performance at Bangladesh University of Engineering & Technology.',
    },
    {
      title: 'Talent Pool Scholarship',
      institution: 'Government of Bangladesh (HSC)',
      description:
        'Awarded by the Government of Bangladesh for academic excellence in the Higher Secondary Certificate examination.',
    },
  ];

  const tierBadge = {
    gold: 'border-amber-300/70 bg-amber-500/10 text-amber-200',
    silver: 'border-slate-400/70 bg-slate-400/10 text-slate-200',
    bronze: 'border-orange-300/70 bg-orange-500/10 text-orange-200',
  };

  return (
    <SiteLayout
      command="achievements"
      heading="Competitions and Achievements"
      description="Highlights from research competitions, datathons, and academic milestones."
    >
      <section>
        <p className="mb-4 text-lg font-semibold text-slate-400">$ cat ~/achievements/competitions.json</p>
        <div className="grid gap-4 md:grid-cols-2">
          {competitions.map((c) => (
            <article key={c.title} className="terminal-card">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${tierBadge[c.tier]}`}>
                  {c.result}
                </span>
              </div>

              <h2 className="mt-3 text-lg font-bold text-cyan-200">{c.title}</h2>
              {c.teamName && (
                <p className="mt-1 text-sm text-slate-300">
                  Team: {c.teamName}
                  {c.role ? ` · ${c.role}` : ''}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{c.description}</p>

              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="terminal-link mt-3 inline-block text-sm font-semibold">
                  View competition
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-4 text-lg font-semibold text-slate-400">$ cat ~/achievements/awards.json</p>
        <div className="grid gap-4 md:grid-cols-2">
          {academicAwards.map((a) => (
            <article key={a.title} className="terminal-card">
              <h2 className="text-lg font-bold text-cyan-200">{a.title}</h2>
              <p className="mt-1 text-sm font-semibold text-emerald-300">{a.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{a.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Achievements;
