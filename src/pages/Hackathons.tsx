import SiteLayout from '../components/SiteLayout';

const wonHackathons = [
  {
    title: 'IEEE VIP Cup 2025',
    result: 'World Finalist and 2nd Runners-up',
    team: 'BUET_SKYSentinel',
    note: 'Global video and image processing competition under IEEE ICIP 2025.',
    link: 'https://2025.ieeeicip.org/ieee-sps-video-and-image-processing-cup/',
  },
  {
    title: 'Televerse 1.0 - Shobdotori',
    result: '1st Place (Public) and 3rd Place (Private)',
    team: 'Null Hypothesis',
    note: 'Bangla dialect translation challenge hosted on Kaggle.',
    link: 'https://www.kaggle.com/competitions/shobdotori/',
  },
  {
    title: 'CUET CSE FEST 2025 Datathon',
    result: '1st Place (Public) and 5th Place (Private)',
    team: '3W1B',
    note: 'Data competition focused on practical modeling and leaderboard strategy.',
    link: 'https://www.kaggle.com/competitions/poli-meme-decode-cuet-cse-fest',
  },
];

const otherParticipation = [
  'Poridhi AI Hackathon - Top 10',
  'BITFest Datathon 2025 - Top 30',
  'AI Mathematical Olympiad - Competitor',
  'Bangladesh Mathematical Olympiad - Participant',
];

const Hackathons = () => {
  return (
    <SiteLayout
      command="hackathons"
      heading="Hackathons"
      description="From competition finals to engineering-heavy datathons, these experiences sharpened my speed, experimentation discipline, and ability to ship under pressure."
    >
      <p className="text-lg font-semibold text-slate-400">$ cat ~/hackathons/won.json</p>

      <div className="space-y-4">
        {wonHackathons.map((hackathon) => (
          <article key={hackathon.title} className="terminal-card">
            <h2 className="text-xl font-bold text-cyan-200">{hackathon.title}</h2>
            <p className="mt-2 text-base font-semibold text-emerald-300">{hackathon.result}</p>
            <p className="mt-1 text-sm text-slate-300">Team: {hackathon.team}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{hackathon.note}</p>
            <a href={hackathon.link} target="_blank" rel="noopener noreferrer" className="terminal-link mt-3 inline-block text-sm font-semibold">
              View competition details
            </a>
          </article>
        ))}
      </div>

      <section>
        <p className="mb-4 text-lg font-semibold text-slate-400">$ cat ~/hackathons/participated.json</p>
        <div className="terminal-card">
          <ul className="space-y-2 text-sm text-slate-300 sm:text-base">
            {otherParticipation.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Hackathons;
