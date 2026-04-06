
import { ExternalLink, Github } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  codeUrl: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'PulseIQ',
      category: 'Web Development',
      description: 'A full stack hospital management system following DevOps principles. Features appointment scheduling, report access, billing, EHR management, and AI-based healthcare suggestions.',
      tags: ['Microservice', 'Spring Boot', 'React', 'Langchain', 'AWS', 'PostgreSQL', 'CI/CD'],
      image: '/pulseiq.jpg',
      codeUrl: 'https://github.com/kabirshahriar468/PulseIQ',
    },
    {
      title: 'Intent Based AI Search',
      category: 'Machine Learning',
      description: 'An AI-powered search system for e-commerce that leverages intent-based retrieval, query expansion, and vector databases for accurate results.',
      tags: ['Flask', 'FAISS', 'Python', 'Langgraph', 'RAG'],
      image: '/intend-search.png',
      codeUrl: 'https://github.com/kabirshahriar468/Intend-based-ai-search',
    },
    {
      title: 'Books for Books',
      category: 'Web Development',
      description: 'A comprehensive book exchange platform connecting readers, authors, and publishers for buying, selling, and exchanging books.',
      tags: ['Node.js', 'Express.js', 'HTML', 'CSS', 'EJS', 'Oracle', 'JavaScript'],
      image: '/books-for-books.png',
      codeUrl: 'https://github.com/kabirshahriar468/Books-for-Books',
    },
    {
      title: 'Ninja Jump Game',
      category: 'Games',
      description: 'A 2D side-scrolling platformer with custom character physics, collision detection, sprite-based animations, and dynamic obstacles.',
      tags: ['C', 'iGraphics'],
      image: '/ninja-jump.png',
      codeUrl: 'https://github.com/kabirshahriar468/Ninja-Jump-Game',
    },
    {
      title: 'Movie Database (JavaFX)',
      category: 'Desktop Applications',
      description: 'A JavaFX application with modules for animations, controls, user authentication, movie management, search/filter, and multi-threaded operations.',
      tags: ['JavaFX', 'Java 17', 'Maven', 'FXML', 'JUnit'],
      image: '/movie-database.png',
      codeUrl: 'https://github.com/kabirshahriar468/Movie-Database',
    },
    {
      title: 'End-to-End Chat App',
      category: 'Web Development',
      description: 'A real-time chat application with user authentication, message broadcasting, private chats, and message history using WebSockets.',
      tags: ['Node.js', 'Express.js', 'React.js', 'WebSocket', 'MongoDB', 'JWT'],
      image: '/chat-app.png',
      codeUrl: 'https://github.com/kabirshahriar468/chat-app',
    },
    {
      title: 'Image Steganography Decoder',
      category: 'Systems Programming',
      description: 'Decodes hidden messages in PPM image files using LSB technique. Processes the blue channel to extract hidden information and produce revealing images.',
      tags: ['C Programming'],
      image: '/decipher-image.png',
      codeUrl: 'https://github.com/kabirshahriar468/Deciphering-Image-Project',
    },
  ];

  return (
    <SiteLayout
      command="projects"
      heading="Selected Projects"
      description="A curated collection of projects across ML systems, web applications, and systems programming. Built with a focus on practical delivery, maintainability, and measurable outcomes."
    >
      <p className="text-lg font-semibold text-slate-400">
        $ cat ~/projects/selected.json
      </p>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-lg border border-emerald-500/35 bg-slate-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/65 hover:shadow-[0_0_32px_rgba(16,95,78,0.45)]"
          >
            <div className="relative h-44 overflow-hidden border-b border-emerald-500/20">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-md border border-emerald-500/45 bg-slate-900/80 px-2 py-1 text-xs font-semibold text-emerald-300">
                {project.category}
              </span>
            </div>

            <div className="space-y-4 p-5">
              <h2 className="text-lg font-bold text-cyan-200">{project.title}</h2>
              <p className="line-clamp-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="terminal-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-emerald-300"
              >
                <Github size={15} />
                View Project
                <ExternalLink size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
};

export default Projects;
