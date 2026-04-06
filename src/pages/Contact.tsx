
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';

const Contact = () => {
  const contactChannels = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kabirshahriar468@gmail.com',
      href: 'mailto:kabirshahriar468@gmail.com',
      description: 'Best for professional inquiries',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+880 1756 062263',
      href: 'https://wa.me/+8801756062263',
      description: 'Quick replies & casual chats',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Shahriar Kabir',
      href: 'https://www.linkedin.com/in/shahriar-kabir-810509251/',
      description: 'Connect professionally',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'kabirshahriar468',
      href: 'https://github.com/kabirshahriar468',
      description: 'Check out my projects & code',
    },
  ];

  return (
    <SiteLayout
      command="contact"
      heading="Contact Information"
      description="If you are building something meaningful in ML, software, or product engineering, I would be happy to collaborate."
    >
      <p className="text-lg font-semibold text-slate-400">$ cat ~/contact/channels.json</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {contactChannels.map((ch) => {
          const Icon = ch.icon;

          return (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group terminal-card block transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400/70"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-md border border-emerald-500/40 bg-emerald-950/30 p-2.5 text-emerald-300 transition-colors group-hover:border-emerald-400/70 group-hover:bg-emerald-500/10">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{ch.label}</p>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">{ch.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{ch.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <section className="terminal-card">
        <p className="text-sm font-semibold text-slate-400">$ echo $LOCATION</p>
        <p className="mt-2 text-lg font-bold text-cyan-200">Titumir Hall, Polashi, BUET</p>
        <p className="text-sm text-slate-300">Dhaka, Bangladesh</p>
      </section>
    </SiteLayout>
  );
};

export default Contact;
