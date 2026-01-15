
import React from 'react';
import ElegantDivider from './ElegantDivider';

const MissionSection: React.FC = () => {
  return (
    <>
      <ElegantDivider />
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">A Missão do Canal</h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Criar este canal é mais do que um desejo de compartilhar nossas memórias. É uma missão.
            Nosso objetivo é glorificar a Deus, mostrando Sua fidelidade e soberania na vida de dois de Seus filhos.
            Desejamos que nosso testemunho em vídeo encoraje outros casais e solteiros a confiarem plenamente no tempo, no cuidado e no plano perfeito de Deus para suas vidas.
          </p>
        </div>
      </section>
    </>
  );
};

export default MissionSection;
