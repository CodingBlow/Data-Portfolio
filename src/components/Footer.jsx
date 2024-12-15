import { useState } from 'react';

function Footer() {
  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Data Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourprofile',
      icon: 'M24 4.557c-.883.392-1.832.656-2.828.775a4.927 4.927 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.197 4.916 4.916 0 0 0-8.38 4.482c-4.083-.2-7.699-2.158-10.123-5.128a4.822 4.822 0 0 0-.666 2.475 4.915 4.915 0 0 0 2.188 4.1 4.903 4.903 0 0 1-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.933 4.933 0 0 1-2.224.084 4.92 4.92 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.395 0-.786-.023-1.17-.067a13.941 13.941 0 0 0 7.548 2.213c9.056 0 14.01-7.507 14.01-14.01 0-.213-.005-.425-.014-.636a9.99 9.99 0 0 0 2.457-2.548z',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight text-[#34D399]">
              Farhan Raza
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Transforming data into insights. Specializing in Azure Data Engineering 
              and Enterprise Analytics Solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#34D399] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-[#34D399] transition-colors">
                <a href="mailto:farhan.dev001@gmail.com">farhan.dev001@gmail.com</a>
              </li>
              <li className="hover:text-[#34D399] transition-colors">
                <a href="tel:+91705008050">+91 (705) 068-050</a>
              </li>
              <li>Delhi, India</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Connect</h3>
            <div className="flex gap-5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-white/70 hover:text-[#34D399] transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-sm text-center border-t border-white/10 text-white/50">
          © {new Date().getFullYear()} Farhan Raza | Transforming Data into Value
        </div>
      </div>
    </footer>
  );
}

export default Footer;
