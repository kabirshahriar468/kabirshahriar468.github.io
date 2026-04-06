
import Navigation from '../components/Navigation';

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

  const tierBorder = {
    gold: 'border-amber-600/30 hover:border-amber-500/50',
    silver: 'border-neutral-600/30 hover:border-neutral-500/50',
    bronze: 'border-neutral-700/30 hover:border-neutral-600/50',
  };

  const resultBadge = {
    gold: 'bg-amber-900/20 text-amber-400 ring-1 ring-amber-600/30',
    silver: 'bg-neutral-800/40 text-neutral-300 ring-1 ring-neutral-600/30',
    bronze: 'bg-neutral-800/30 text-neutral-400 ring-1 ring-neutral-700/30',
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navigation />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-white mb-3">
              Competitions & Achievements
            </h1>
            <p className="text-base text-neutral-400 max-w-2xl mx-auto">
              Highlights from machine-learning contests, datathons, and
              academic recognition.
            </p>
          </div>

          {/* ── Competitions ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-neutral-500 rounded-full" />
              Competitions
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {competitions.map((c, i) => (
                <div
                  key={i}
                  className={`group bg-neutral-900/80 border rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5 ${tierBorder[c.tier]}`}
                >
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {c.title}
                    </h3>
                    {c.teamName && (
                      <p className="text-sm text-neutral-500 mt-0.5">
                        Team: <span className="text-neutral-400">{c.teamName}</span>
                        {c.role && (
                          <span className="ml-1.5 text-neutral-300">
                            · {c.role}
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${resultBadge[c.tier]}`}
                    >
                      {c.result}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-500 leading-relaxed mb-3">
                    {c.description}
                  </p>

                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      View Competition
                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Academic Awards ── */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-neutral-500 rounded-full" />
              Academic Awards
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {academicAwards.map((a, i) => (
                <div
                  key={i}
                  className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 transition-all duration-300 hover:border-neutral-600 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
                >
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-0.5 mb-3">
                    {a.institution}
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
