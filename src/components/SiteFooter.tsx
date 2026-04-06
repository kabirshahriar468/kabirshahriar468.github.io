import { Github, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/kabirshahriar468',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shahriar-kabir-810509251/',
    icon: Linkedin,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/+8801756062263',
    icon: MessageCircle,
  },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-emerald-500/40 bg-slate-950/85">
      <div className="terminal-shell flex flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold text-slate-300">
          &copy; Shahriar Kabir | {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-emerald-500/35 bg-slate-900/70 p-2 text-emerald-300 transition-colors hover:border-emerald-400/70 hover:bg-emerald-500/10"
                aria-label={link.name}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
