
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/profilepic.JPG" 
                  alt="Shahriar Kabir" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hi, I'm <span className="text-blue-400">Shahriar Kabir</span>, a final-year CSE student at BUET.
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              My research interests include natural language processing, software automation and testing, autonomous
              transportation systems, and bioinformatics and computational biology.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              I am passionate about building robust, user-friendly web applications using modern technologies. I enjoy solving
              complex problems, collaborating on innovative projects, and continuously learning new tools and frameworks to
              expand my skill set.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Education Section */}
          <div className="mt-16 text-left">
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            
            <div className="space-y-8">
              {/* BUET */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-900/40 hover:via-slate-800/40 hover:to-purple-900/40 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-300">
                      Bangladesh University of Engineering & Technology
                    </h3>
                    <p className="text-blue-400 mb-2">Bachelor of Science in Computer Science & Engineering</p>
                    <p className="text-gray-400 flex items-center gap-2">
                      📍 Dhaka, Bangladesh
                    </p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">
                    📅 November 2021 – Present
                  </div>
                </div>
              </div>

              {/* Notre Dame College */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-900/40 hover:via-slate-800/40 hover:to-blue-900/40 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300">Notre Dame College</h3>
                    <p className="text-blue-400 mb-2">Higher Secondary Certificate (Science)</p>
                    <p className="text-yellow-400 mb-2">🏆 GPA 5.00 / 5.00</p>
                    <p className="text-gray-400 mb-2">General Scholarship recipient</p>
                    <p className="text-gray-400 flex items-center gap-2">
                      📍 Dhaka, Bangladesh
                    </p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">
                    📅 Completed 2020
                  </div>
                </div>
              </div>

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
