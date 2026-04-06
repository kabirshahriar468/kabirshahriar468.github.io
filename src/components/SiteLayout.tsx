import { ReactNode } from 'react';
import Navigation from './Navigation';
import SiteFooter from './SiteFooter';

type SiteLayoutProps = {
  command: string;
  heading: string;
  description: string;
  children: ReactNode;
};

const SiteLayout = ({ command, heading, description, children }: SiteLayoutProps) => {
  return (
    <div className="terminal-page">
      <Navigation />

      <main className="terminal-shell pb-20 pt-32">
        <p className="terminal-prompt">kabir@portfolio:~$ {command}</p>

        <section className="mt-12 animate-terminal-enter">
          <h1 className="terminal-title">{heading}</h1>
          <p className="terminal-lede mt-6">{description}</p>
        </section>

        <section className="mt-12 space-y-8">{children}</section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
