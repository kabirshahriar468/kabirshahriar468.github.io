
import Navigation from '../components/Navigation';

const Achievements = () => {
  const achievements = [
    {
      title: 'BUET\'s Deep Learning Sprint',
      category: 'Competition',
      date: '2024',
      icon: '🧠',
      badge: 'Participant',
      description: 'Participated in BUET\'s Deep Learning Sprint, focusing on advanced neural network architectures and practical implementations.',
      details: [
        'Worked on cutting-edge deep learning models',
        'Implemented state-of-the-art neural network architectures',
        'Collaborated with peers on complex ML problems'
      ],
      link: 'https://github.com/kabirshahriar468/deep-learning-sprint'
    },
    {
      title: 'AI Mathematical Olympiad',
      category: 'Competition',
      date: '2024',
      icon: '🤖',
      badge: 'Competitor',
      description: 'Competed in the AI Mathematical Olympiad, solving complex mathematical problems using artificial intelligence approaches.',
      details: [
        'Applied AI techniques to solve mathematical problems',
        'Implemented algorithmic solutions for Olympiad-style questions',
        'Demonstrated proficiency in mathematical reasoning with AI'
      ],
      link: 'https://github.com/kabirshahriar468/ai-math-olympiad'
    },
    {
      title: 'Bangladesh Mathematical Olympiad',
      category: 'Competition',
      date: '2023',
      icon: '📐',
      badge: 'Participant',
      description: 'Participated in the Bangladesh Mathematical Olympiad, showcasing problem-solving skills in advanced mathematics.',
      details: [
        'Solved complex mathematical problems',
        'Demonstrated analytical and logical thinking',
        'Competed at national level in mathematics'
      ],
      link: 'https://github.com/kabirshahriar468/bangladesh-math-olympiad'
    },
    {
      title: 'BITFest Programming Contest',
      category: 'Programming Contest',
      date: '2023',
      icon: '💻',
      badge: 'Participant',
      description: 'Engaged in BITFest Programming Contest, solving algorithmic problems and demonstrating competitive programming skills.',
      details: [
        'Solved complex algorithmic challenges',
        'Implemented efficient data structures and algorithms',
        'Competed in timed programming environment'
      ],
      link: 'https://github.com/kabirshahriar468/bitfest-programming'
    },
    {
      title: 'Capture The Flag (CTF) Cybersecurity Challenges',
      category: 'Cybersecurity',
      date: '2023-2024',
      icon: '🔐',
      badge: 'Participant',
      description: 'Participated in Capture The Flag (CTF) cybersecurity challenges, developing skills in ethical hacking and security analysis.',
      details: [
        'Solved cybersecurity puzzles and challenges',
        'Learned penetration testing techniques',
        'Developed expertise in network security'
      ],
      link: 'https://github.com/kabirshahriar468/ctf-challenges'
    },
    {
      title: 'Competitive Programming Platforms',
      category: 'Programming',
      date: 'Ongoing',
      icon: '⚡',
      badge: 'Active',
      description: 'Active participant in competitive programming on Codeforces, AtCoder, and LeetCode platforms.',
      details: [
        'Regular problem solving on multiple platforms',
        'Improved algorithmic thinking and optimization skills',
        'Maintained consistent practice in data structures'
      ],
      link: 'https://github.com/kabirshahriar468/competitive-programming'
    },
    {
      title: 'LLM Fine-tuning, RAG, and Agent AI Applications',
      category: 'Research & Development',
      date: '2024',
      icon: '🤖',
      badge: 'Developer',
      description: 'Worked on LLM fine-tuning, RAG (Retrieval-Augmented Generation), and Agent AI applications for practical use cases.',
      details: [
        'Fine-tuned large language models for specific tasks',
        'Implemented RAG systems for enhanced information retrieval',
        'Developed AI agents for automated workflows'
      ],
      link: 'https://github.com/kabirshahriar468/llm-rag-agents'
    },
    {
      title: 'Talent Pool Scholarship',
      category: 'Academic Achievement',
      date: '2020',
      icon: '🎓',
      badge: 'Awarded',
      description: 'Awarded talent pool scholarship by the government of Bangladesh for academic excellence in Higher Secondary Certificate.',
      details: [
        'Achieved GPA 5.00/5.00 in HSC examination',
        'Recognized for outstanding academic performance',
        'Government scholarship for meritorious students'
      ],
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Achievements</h1>
            <p className="text-xl text-gray-300">
              Recognition in competitions and research presentations showcasing excellence in machine learning,
              deep learning, and research innovation.
            </p>
          </div>

          {/* Achievements List */}
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white mb-2 sm:mb-0">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full">
                          {achievement.category}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {achievement.date}
                        </span>
                      </div>
                    </div>

                    {achievement.badge && (
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 text-sm rounded-full font-medium">
                          {achievement.badge}
                        </span>
                      </div>
                    )}
                    
                    <p className="text-gray-300 mb-4">
                      {achievement.description}
                    </p>
                    
                    {achievement.details.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {achievement.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-gray-400">
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {achievement.link && (
                      <a 
                        href={achievement.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/button"
                      >
                        <span>View Repository</span>
                        <svg className="w-4 h-4 transition-transform group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
