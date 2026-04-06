
import Navigation from '../components/Navigation';

const Projects = () => {
  const projects = [
    {
      title: 'PulseIQ',
      category: 'Web Development',
      description: 'A full stack hospital management system following DevOps principles. Features appointment scheduling, report access, billing, EHR management, and AI-based healthcare suggestions.',
      tags: ['Microservice', 'Spring Boot', 'React', 'Langchain', 'AWS', 'PostgreSQL', 'CI/CD'],
      image: '/pulseiq.jpg',
      codeUrl: 'https://github.com/kabirshahriar468/PulseIQ'
    },
    {
      title: 'Intent Based AI Search',
      category: 'Machine Learning',
      description: 'An AI-powered search system for e-commerce that leverages intent-based retrieval, query expansion, and vector databases for accurate results.',
      tags: ['Flask', 'FAISS', 'Python', 'Langgraph', 'RAG'],
      image: '/intend-search.png',
      codeUrl: 'https://github.com/kabirshahriar468/Intend-based-ai-search'
    },
    {
      title: 'Books for Books',
      category: 'Web Development',
      description: 'A comprehensive book exchange platform connecting readers, authors, and publishers for buying, selling, and exchanging books.',
      tags: ['Node.js', 'Express.js', 'HTML', 'CSS', 'EJS', 'Oracle', 'JavaScript'],
      image: '/books-for-books.png',
      codeUrl: 'https://github.com/kabirshahriar468/Books-for-Books'
    },
    {
      title: 'Ninja Jump Game',
      category: 'Games',
      description: 'A 2D side-scrolling platformer with custom character physics, collision detection, sprite-based animations, and dynamic obstacles.',
      tags: ['C', 'iGraphics'],
      image: '/ninja-jump.png',
      codeUrl: 'https://github.com/kabirshahriar468/Ninja-Jump-Game'
    },
    {
      title: 'Movie Database (JavaFX)',
      category: 'Desktop Applications',
      description: 'A JavaFX application with modules for animations, controls, user authentication, movie management, search/filter, and multi-threaded operations.',
      tags: ['JavaFX', 'Java 17', 'Maven', 'FXML', 'JUnit'],
      image: '/movie-database.png',
      codeUrl: 'https://github.com/kabirshahriar468/Movie-Database'
    },
    {
      title: 'End-to-End Chat App',
      category: 'Web Development',
      description: 'A real-time chat application with user authentication, message broadcasting, private chats, and message history using WebSockets.',
      tags: ['Node.js', 'Express.js', 'React.js', 'WebSocket', 'MongoDB', 'JWT'],
      image: '/chat-app.png',
      codeUrl: 'https://github.com/kabirshahriar468/chat-app'
    },
    {
      title: 'Image Steganography Decoder',
      category: 'Systems Programming',
      description: 'Decodes hidden messages in PPM image files using LSB technique. Processes the blue channel to extract hidden information and produce revealing images.',
      tags: ['C Programming'],
      image: '/decipher-image.png',
      codeUrl: 'https://github.com/kabirshahriar468/Deciphering-Image-Project'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navigation />
      
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-white mb-3">Projects</h1>
            <p className="text-base text-neutral-400 max-w-2xl mx-auto">
              A curated collection of academic projects and personal explorations across
              web development, machine learning, and systems programming.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neutral-600 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-0.5 group"
              >
                <div className="h-44 bg-neutral-800 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-neutral-300 text-xs font-medium rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-neutral-800 text-neutral-400 text-xs rounded border border-neutral-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors group/link"
                  >
                    <span>View Code</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
