
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navigation />
      
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Profile Image */}
          <div className="mb-10 text-center">
            <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 p-[2px]">
              <div className="w-full h-full rounded-full bg-neutral-900 overflow-hidden">
                <img 
                  src="/profilepic.JPG" 
                  alt="Shahriar Kabir" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-neutral-400">Shahriar Kabir</span>
            </h1>
            <p className="text-lg text-neutral-300 mb-2 font-medium">
              Final-year CSE student at BUET
            </p>
            
            <div className="w-12 h-px bg-neutral-700 mx-auto my-6" />

            <p className="text-base text-neutral-400 mb-6 leading-relaxed max-w-2xl mx-auto">
              My research interests include natural language processing, computer vision, machine learning,
              and AI for health. I'm passionate about building robust, user-friendly applications
              and solving complex problems with modern technologies.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Education Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-neutral-500 rounded-full" />
              Education
            </h2>
            
            <div className="space-y-5">
              {/* BUET */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Bangladesh University of Engineering & Technology
                    </h3>
                    <p className="text-neutral-400 text-sm mb-1">B.Sc. in Computer Science & Engineering</p>
                    <p className="text-neutral-500 text-sm">📍 Dhaka, Bangladesh</p>
                  </div>
                  <div className="text-neutral-500 text-sm mt-2 md:mt-0 shrink-0">
                    Nov 2021 – Present
                  </div>
                </div>
              </div>

              {/* Notre Dame College */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Notre Dame College</h3>
                    <p className="text-neutral-400 text-sm mb-1">Higher Secondary Certificate (Science)</p>
                    <p className="text-white text-sm mb-1">GPA 5.00 / 5.00 · General Scholarship</p>
                    <p className="text-neutral-500 text-sm">📍 Dhaka, Bangladesh</p>
                  </div>
                  <div className="text-neutral-500 text-sm mt-2 md:mt-0 shrink-0">
                    Completed 2020
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
