
import Navigation from '../components/Navigation';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-neutral-950">
      <Navigation />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-white mb-3">Contact</h1>
            <p className="text-base text-neutral-400 max-w-xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, and potential collaborations. Feel free to reach out
              through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactChannels.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center shrink-0 group-hover:border-neutral-500 transition-colors">
                      <Icon size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-0.5">
                        {ch.label}
                      </p>
                      <p className="text-white font-medium text-sm truncate group-hover:text-neutral-200 transition-colors">
                        {ch.value}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">
                        {ch.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Location */}
          <div className="mt-10 text-center">
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6">
              <p className="text-sm text-neutral-500 uppercase tracking-wider font-medium mb-1">
                Location
              </p>
              <p className="text-white font-medium">
                Titumir Hall, Polashi, BUET
              </p>
              <p className="text-neutral-500 text-sm mt-0.5">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
