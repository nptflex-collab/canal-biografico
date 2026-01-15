
import React from 'react';
import ElegantDivider from './ElegantDivider';

const CtaSection: React.FC = () => {
  const youtubeSubscriptionLink = "https://www.youtube.com/@AntonioAriasSilvaOliveira?sub_confirmation=1";

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Acompanhe Nossa Jornada</h2>
          <p className="mt-4 text-lg text-slate-600">
            Não perca nenhum vídeo! Inscreva-se para ser notificado sobre novos testemunhos e reflexões que postamos em nosso canal.
          </p>

          <div className="mt-10">
            <a
              href={youtubeSubscriptionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-lg text-lg hover:bg-red-700 transition-colors shadow-lg transform hover:scale-105"
            >
              Inscreva-se no nosso Canal Biográfico
            </a>
          </div>
        </div>
      </section>
      <ElegantDivider />
    </>
  );
};

export default CtaSection;
