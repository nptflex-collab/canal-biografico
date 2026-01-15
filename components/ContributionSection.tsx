
import React from 'react';

const ContributionSection: React.FC = () => {
  const youtubeSubscriptionLink = "https://www.youtube.com/@AntonioAriasSilvaOliveira?sub_confirmation=1";

  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Seja um Pilar Desta Obra</h2>
          <p className="mt-4 text-lg text-slate-600">
            Este canal é um ministério, e você pode fazer parte dele. Sua ajuda é fundamental para que esta mensagem de fé e providência alcance mais corações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-center">
          {/* Coluna de Apoio Criativo */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-800 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Apoio Criativo</h3>
            <p className="text-slate-600 mb-6 flex-grow">
              Você tem dons na área de edição de vídeo, roteiro, ou design de miniaturas? Sua habilidade pode ser um presente valioso para a excelência do nosso conteúdo.
            </p>
            <a href="mailto:contato@nossahistoria.com?subject=Apoio Criativo para o Canal" className="mt-auto inline-block w-full sm:w-auto px-6 py-3 border-2 border-blue-800 text-blue-800 font-bold rounded-md hover:bg-blue-800 hover:text-white transition-colors">
              Oferecer Ajuda
            </a>
          </div>

          {/* Coluna de Apoio Financeiro */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-800 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Apoio Financeiro</h3>
            <p className="text-slate-600 mb-6 flex-grow">
              A forma mais direta de nos apoiar é fortalecendo nossa comunidade. Ao se inscrever, você nos ajuda a levar esta mensagem de esperança ainda mais longe.
            </p>
            <a
              href={youtubeSubscriptionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block w-full sm:w-auto px-8 py-3 bg-blue-800 text-white font-bold rounded-md hover:bg-blue-900 transition-colors shadow-lg"
            >
              Inscreva-se no nosso Canal Biográfico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionSection;
