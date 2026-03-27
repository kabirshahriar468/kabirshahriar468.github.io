
import { Github, Linkedin, Mail, MessageCircle, BarChart3 } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/kabirshahriar468', label: 'GitHub' },
  { name: 'Email', icon: Mail, url: 'mailto:kabirshahriar468@gmail.com', label: 'Email' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/shahriar-kabir-810509251/', label: 'LinkedIn' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/+8801756062263', label: 'WhatsApp' },
  { name: 'Kaggle', icon: BarChart3, url: 'https://www.kaggle.com/shahriarkabirrazin', label: 'Kaggle' }
];


  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
          >
            <IconComponent size={20} />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
