
import Navigation from '../components/Navigation';

const Research = () => {
  const researchAreas = [
    {
      title: 'Natural Language Processing',
      description: 'Developing Bengali-first solutions for mathematical problem solving and text analysis',
      icon: '🔤'
    },
    {
      title: 'Software Automation & Testing',
      description: 'Building intelligent frameworks that convert natural language into actionable test procedures',
      icon: '🤖'
    },
    {
      title: 'Autonomous Transportation Systems',
      description: 'Researching pedestrian trajectory analysis and clustering algorithms for vehicle simulation',
      icon: '🚗'
    },
    {
      title: 'Bioinformatics & Computational Biology',
      description: 'Applying computational methods to solve complex biological problems',
      icon: '🧬'
    }
  ];

  const publications = [
    {
      title: 'Autonomous Vehicle Simulation Models Using Knot-Based String Clustering',
      venue: 'BUET CSE Fest 2024 - Poster Presentation',
      date: 'April 2024',
      status: 'Champion',
      description: 'Research on pedestrian trajectory clustering that identified 31 distinct movement patterns, revealing that 42% of pedestrian paths deviate from straight-line motion.',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Research</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My research focuses on the intersection of artificial intelligence, software engineering, and computational biology,
              with a particular emphasis on developing practical solutions to real-world problems.
            </p>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Research Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{area.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {area.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications & Presentations */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Publications & Presentations</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {pub.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <span className="text-blue-400 font-medium">{pub.venue}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{pub.date}</span>
                        {pub.status && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 text-sm rounded-full">
                              {pub.status}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {pub.description}
                  </p>
                  
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <span>View Research</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Current Research */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Current Research</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I am currently working on advancing natural language processing techniques for mathematical problem solving,
                with a focus on developing robust solutions that can handle complex Bengali mathematical expressions and reasoning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
