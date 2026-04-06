
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Award, BookOpen, FolderOpen, House, Mail, Menu, Sparkles, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about', icon: House },
    { name: 'Projects', path: '/projects', icon: FolderOpen },
    { name: 'Achievements', path: '/achievements', icon: Award },
    { name: 'Research', path: '/research', icon: BookOpen },
    { name: 'Skills', path: '/skills', icon: Sparkles },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/about') {
      return location.pathname === '/' || location.pathname === '/about';
    }

    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-emerald-500/40 bg-slate-950/90 backdrop-blur-md">
      <div className="terminal-shell">
        <div className="flex items-center justify-between py-5">
          <Link to="/" className="text-base font-bold text-cyan-300 transition-colors hover:text-emerald-300 sm:text-3xl">
            &gt;. kabir@portfolio:~$
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={`group flex items-center gap-2 rounded-md px-3 py-2 text-base font-semibold transition-all duration-200 ${isActive(item.path) ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/50' : 'text-emerald-400/80 hover:bg-emerald-500/10 hover:text-emerald-300'}`}>
                <item.icon size={15} className="shrink-0" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-300 md:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
            <span>Available</span>
          </div>

          <button onClick={() => setIsOpen((open) => !open)} className="rounded-md border border-emerald-500/40 bg-slate-900/80 p-2 text-emerald-300 md:hidden" aria-label="Toggle navigation menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="space-y-2 border-t border-emerald-500/30 pb-4 pt-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${isActive(item.path) ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/50' : 'text-emerald-400/80 hover:bg-emerald-500/10 hover:text-emerald-300'}`}
              >
                <item.icon size={15} />
                {item.name}
              </Link>
            ))}

            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
              Available
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
