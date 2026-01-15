
import React from 'react';
import ElegantDivider from './ElegantDivider';

const VideoStorySection: React.FC = () => {
  return (
    <>
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">De Geração em Geração: Nossa História em Vídeo</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            A história de Isaque e Rebeca foi contada e recontada, inspirando fé através dos séculos. Hoje, usamos a tecnologia que Deus nos deu para compartilhar nosso testemunho. Cada vídeo é um capítulo da nossa jornada, criado para que a fidelidade de Deus também inspire a sua história.
          </p>
        </div>
        
        <div className="relative z-10 w-full mx-auto shadow-2xl rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-slate-800">
            <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo ID do seu vídeo
                title="Nossa História em Vídeo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
            ></iframe>
            </div>
        </div>
      </div>
    </section>
    <ElegantDivider />
    </>
  );
};

export default VideoStorySection;
