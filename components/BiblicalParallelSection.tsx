
import React from 'react';
import ElegantDivider from './ElegantDivider';

const ParallelCard: React.FC<{ title: string; scripture: string; story: string }> = ({ title, scripture, story }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-2xl font-bold text-blue-800 mb-4">{title}</h3>
    <blockquote className="border-l-4 border-blue-700 pl-4 mb-4">
      <p className="italic text-slate-600">"{scripture}"</p>
      <cite className="block text-right text-sm text-slate-500 mt-2">- Gênesis 24</cite>
    </blockquote>
    <p className="text-slate-700 leading-relaxed">{story}</p>
  </div>
);

const BiblicalParallelSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">O Paralelo Bíblico</h2>
          <p className="mt-4 text-lg text-slate-600">
            Nossa jornada ecoa os passos de fé e providência vistos na união de Isaque e Rebeca.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <ParallelCard
            title="A Oração de Busca"
            scripture="Ó Senhor, Deus do meu senhor Abraão, dá-me neste dia bom êxito..."
            story="Em nossos corações, havia uma oração semelhante: a busca por alguém que compartilhasse não apenas a vida, mas um propósito em Deus. Confiamos que Ele nos guiaria."
          />
          <ParallelCard
            title="O Encontro Guiado"
            scripture="...ela respondeu: 'Bebe, meu senhor' (...) E deu de beber também aos camelos."
            story="O nosso encontro foi marcado por sinais claros da bondade e direção de Deus. Em gestos e palavras, reconhecemos a resposta às nossas orações, uma confirmação de que estávamos no caminho certo."
          />
          <ParallelCard
            title="A Confirmação do Propósito"
            scripture="E Isaque amou-a; e Isaque consolou-se depois da morte de sua mãe."
            story="A nossa união trouxe um profundo senso de paz e propósito. Entendemos que fomos preparados um para o outro, para juntos servirmos a Deus e sermos um testemunho do Seu amor fiel."
          />
        </div>
      </div>
      <ElegantDivider />
    </section>
  );
};

export default BiblicalParallelSection;
