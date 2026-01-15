
import React from 'react';

const TestimonySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="https://picsum.photos/seed/couple/600/800" 
              alt="Nosso Retrato" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Nossa Jornada: O Testemunho</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
              <p>
                Nossa história não é um conto de acasos, mas uma tapeçaria tecida com fios de oração, fé e intervenção divina. Cada passo, cada desencontro que parecia um fim, era, na verdade, Deus realinhando nossos caminhos para o encontro perfeito que Ele havia planejado.
              </p>
              <p>
                Vimos Sua mão em cada detalhe: nas conversas que confirmavam valores, nos desafios que fortaleciam nossa fé e na paz que inundava nossos corações, assegurando-nos de que este amor vinha do céu. Nosso canal é o relato de como Ele nos encontrou, nos moldou e nos uniu para um propósito maior que nós mesmos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
