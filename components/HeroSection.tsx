
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-slate-100 py-20 px-4">
      <div className="relative z-10 max-w-3xl w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-blue-900">
          Escrito pelas Mãos do Criador
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Assim como Isaque e Rebeca foram unidos por um propósito divino, nossas vidas foram entrelaçadas pela providência de um Deus que cuida dos detalhes.
        </p>
      </div>
      
      {/* YouTube Embed */}
      <div className="relative z-10 mt-12 w-full max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 bg-slate-800">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua 'dQw4w9WgXcQ' pelo ID do seu vídeo
            title="Vídeo de Destaque do YouTube" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

// Adiciona classes de aspect-ratio para compatibilidade com o Tailwind
const style = document.createElement('style');
style.innerHTML = `
  .aspect-w-16 { position: relative; padding-bottom: 56.25%; }
  .aspect-h-9 { height: 0; }
  .aspect-w-16 > iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
`;
document.head.appendChild(style);

export default HeroSection;
