
import { Github, Linkedin, Mail, MessageCircle, BarChart3 } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/kabirshahriar468', label: 'GitHub' },
    { name: 'Email', icon: Mail, url: 'mailto:kabirshahriar468@gmail.com', label: 'Email' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/shahriar-kabir-810509251/', label: 'LinkedIn' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/+8801756062263', label: 'WhatsApp' },
    { name: 'Kaggle', icon: BarChart3, url: 'https://www.kaggle.com/shahriarkabirrazin', label: 'Kaggle' },
  ];

  return (
    <div className="flex flex-wrap justify-start gap-3">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md border border-emerald-500/35 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-200 hover:border-emerald-400/70 hover:bg-emerald-500/10 hover:text-emerald-300"
          >
            <IconComponent size={16} className="text-emerald-300/90 transition-transform duration-200 group-hover:scale-110" />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
