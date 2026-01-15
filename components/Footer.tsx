
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const youtubeChannelLink = "https://www.youtube.com/@AntonioAriasSilvaOliveira";

  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-6 text-center text-sm">
        <div className="mb-4">
          <a href={youtubeChannelLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-lg text-white hover:text-red-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
            Nosso Canal no YouTube
          </a>
        </div>
        <p>&copy; {currentYear} | Nossa História de Providência. Todos os direitos reservados.</p>
        <p className="mt-2 text-slate-400">Um testemunho do amor e da fidelidade de Deus.</p>
      </div>
    </footer>
  );
};

export default Footer;
