
import Navigation from '../components/Navigation';

const Projects = () => {
  const projects = [
    {
      title: 'PulseIQ',
      category: 'Web Development',
      description: 'A full stack software development project following DevOps principles, is a hospital management system designed to improve communication and coordination between patients and doctors. It offers a variety of essential healthcare services, including appointment scheduling, report access, billing, and Electronic Health Record (EHR) management, AI based basic healthcare suggestion.',
      tags: ['Microservice', 'Spring Boot', 'React', 'Langchain', 'AWS', 'PostgreSQL', 'CI/CD'],
      image: '/pulseiq.jpg',
      codeUrl: 'https://github.com/kabirshahriar468/PulseIQ'
    },
    {
      title: 'Intent Based AI Search',
      category: 'Machine Learning',
      description: 'An AI-powered search system tailored for e-commerce platforms. The system aims to enhance product search by leveraging intent-based retrieval, query expansion, and vector databases for more accurate and relevant results.',
      tags: ['Flask', 'FAISS', 'Python', 'Langgraph', 'RAG'],
      image: '/intend-search.png',
      codeUrl: 'https://github.com/kabirshahriar468/Intend-based-ai-search'
    },
    {
      title: 'Books for Books',
      category: 'Web Development',
      description: 'A full stack SWE project which developed a comprehensive book exchange platform that connects readers, authors, and publishers in a seamless ecosystem for buying, selling, and exchanging books.',
      tags: ['Node.js', 'Express.js', 'HTML', 'CSS', 'EJS', 'Oracle', 'JavaScript', 'Bootstrap', 'Multer'],
      image: '/books-for-books.png',
      codeUrl: 'https://github.com/kabirshahriar468/Books-for-Books'
    },
    {
      title: 'Ninja Jump Game',
      category: 'Games',
      description: 'Developed a 2D side-scrolling platformer using iGraphics, implementing custom character physics, collision detection, and sprite-based animations. Designed dynamic obstacles, interactive environments, and score tracking for an engaging gameplay experience.',
      tags: ['C', 'iGraphics'],
      image: '/ninja-jump.png',
      codeUrl: 'https://github.com/kabirshahriar468/Ninja-Jump-Game'
    },
    {
      title: 'Movie Database Project Using JavaFX',
      category: 'Desktop Applications',
      description: 'A JavaFX-based application designed to demonstrate the use of various GUI components and architecture. It includes modules for animations, controls, single-scene, and multi-scene movie management systems. The movie management system involves features like user authentication, movie database management, data analysis, search/filter functionality, and multi-threaded operations.',
      tags: ['JavaFX', 'Java 17', 'Maven', 'FXML', 'JUnit 5.8.2'],
      image: '/movie-database.png',
      codeUrl: 'https://github.com/kabirshahriar468/Movie-Database'
    },
    {
      title: 'End-to-End Chat Application',
      category: 'Web Development',
      description: 'A real-time chat application built using Node.js and Express.js for the server-side, React.js for the client-side, and WebSockets for real-time communication. It includes features such as user authentication, message broadcasting, private chats, and message history, providing an interactive and engaging chat experience.',
      tags: ['Node.js', 'Express.js', 'React.js', 'WebSocket', 'MongoDB', 'JWT'],
      image: '/chat-app.png',
      codeUrl: 'https://github.com/kabirshahriar468/chat-app'
    },
    {
      title: 'Image Steganography Decoder',
      category: 'Systems Programming',
      description: 'This project decodes hidden messages in PPM image files using the Least Significant Bit (LSB) technique. It processes the blue channel of the image, checking the least significant bit of each pixel to extract hidden information, and then produces a new black and white image that reveals the message.',
      tags: ['C Programming'],
      image: '/decipher-image.png',
      codeUrl: 'https://github.com/kabirshahriar468/Deciphering-Image-Project'
    }
  ];

  const categories = ['All', 'Web Development', 'Machine Learning', 'Systems Programming', 'Hardware', 'Desktop Applications', 'Games'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A curated collection of my academic projects and personal explorations, showcasing
              innovation across web development, machine learning, and systems programming.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-slate-800/50 border border-slate-600 rounded-full text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-900/40 hover:via-slate-800/40 hover:to-purple-900/40 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/30 text-white text-sm rounded-full group-hover:bg-blue-600/50 transition-all duration-300">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/30 group-hover:bg-blue-800/40 group-hover:border-blue-500/50 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/button"
                  >
                    <span>View Code</span>
                    <svg className="w-4 h-4 transition-transform group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
