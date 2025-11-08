import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { initSlider } from "./Slider";
import historia1 from "../Imagens/Historia 1.jpg";
import historia2 from "../Imagens/Historia 2.jpg";
import historia3 from "../Imagens/Historia 3.jpg";

export default function SobreNos() {
  const histRef = useRef(null);
  useEffect(() => {
    if (!histRef.current || typeof initSlider !== "function") return;
    const destroy = initSlider(histRef.current, { auto: true, interval: 5000 });
    return () => {
      if (typeof destroy === "function") destroy();
    };
  }, []);
  return (
    <main className="min-h-screen bg-[var(--clr-bg)] text-[var(--clr-text)] px-[5%] py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="absolute top-6 left-6">
        <Link to="/clubes" className="text-[var(--clr-destaque)] font-semibold hover:underline transition-all">← Voltar</Link>
      </div>
      <div ref={histRef} className="relative w-full h-[28rem] md:h-[32rem] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-[var(--clr-border)]">
        <div className="slider"><img src={historia1} alt="História 1" className="object-cover w-full h-full rounded-2xl" /></div>
        <div className="slider"><img src={historia2} alt="História 2" className="object-cover w-full h-full rounded-2xl" /></div>
        <div className="slider"><img src={historia3} alt="História 3" className="object-cover w-full h-full rounded-2xl" /></div>
        <button type="button" aria-label="Anterior" className="prev-button absolute left-3 top-1/2 -translate-y-1/2 bg-[var(--clr-destaque)] text-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform shadow-md">‹</button>
        <button type="button" aria-label="Próximo" className="next-button absolute right-3 top-1/2 -translate-y-1/2 bg-[var(--clr-destaque)] text-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform shadow-md">›</button>
      </div>
      <div className="space-y-6 leading-relaxed text-[1.05rem] bg-[var(--clr-panel)] p-8 rounded-2xl border border-[var(--clr-border)] shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
        <h1 className="text-3xl font-bold text-[var(--clr-destaque)] mb-4">Sobre o Passa a Bola</h1>
        <p className="text-[var(--clr-text)] text-opacity-90">O <strong>Passa a Bola</strong> é um projeto criado por <span className="text-[var(--clr-destaque)] font-medium">Luana Maluf</span> e <span className="text-[var(--clr-destaque)] font-medium">Alê Xavier</span> que nasceu como um coletivo de mulheres reunidas para jogar futebol e, com o tempo, se transformou em um veículo de mídia digital dedicado ao futebol feminino.</p>
        <p className="text-[var(--clr-text)] text-opacity-90">Do encontro semanal entre amigas, onde o jogo e a conversa aconteciam lado a lado, surgiu a percepção de que havia histórias e debates que precisavam ganhar espaço e voz.</p>
        <p className="text-[var(--clr-text)] text-opacity-90">A partir de <strong>2021</strong>, o Passa a Bola consolidou essa virada: deixou de ser apenas a bola rolando na quadra para se tornar uma plataforma de conteúdo que circula por Instagram, podcasts, colunas e vídeos, com o objetivo de dar visibilidade às mulheres no esporte.</p>
        <p className="text-[var(--clr-text)] text-opacity-90">O projeto se pauta por ampliar vozes de jogadoras, torcedoras e profissionais e por produzir narrativas que vão além das quatro linhas — abordando cultura, bastidores, trajetórias e debates que atravessam o universo do futebol.</p>
        <p className="text-[var(--clr-text)] text-opacity-90">Hoje, o Passa a Bola é uma das referências em mídia independente sobre futebol feminino no Brasil. Mantém presença forte nas redes e soma parcerias com marcas, eventos e iniciativas ligadas ao esporte, reforçando a missão de construir um ecossistema mais diverso, visível e potente para as mulheres que vivem e fazem o futebol.</p>
      </div>
    </main>
  );
}
