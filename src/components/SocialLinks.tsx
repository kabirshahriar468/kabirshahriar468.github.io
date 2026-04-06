
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
    <div className="flex flex-wrap gap-3 justify-center">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-neutral-800/60 border border-neutral-700 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-700/60 hover:border-neutral-500 transition-all duration-200"
          >
            <IconComponent size={18} />
            <span className="text-sm font-medium">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
