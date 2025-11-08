import '../App.css';
import clock from '../Imagens/clock.svg';
import mappin from '../Imagens/map-pin.svg';
import { useEffect, useRef, useState } from 'react';
import { fetchClubes, fetchJogadoras, initSlider, escudos } from './data';
import Propaganda1 from '../Imagens/Propaganda 1.jpg';
import Propaganda2 from '../Imagens/Propaganda 2.jpg';
import Propaganda3 from '../Imagens/Propaganda 3.jpg';

function Home() {
  const placaRef = useRef(null);
  const [clubes, setClubes] = useState([]);
  const [jogadoras, setJogadoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (placaRef.current) {
      const destroy = initSlider(placaRef.current, { auto: true, interval: 4000 });
      return destroy;
    }
  }, []);

  useEffect(() => {
    async function carregar() {
      try {
        const [times, jogs] = await Promise.all([fetchClubes(), fetchJogadoras()]);
        setClubes(times);
        setJogadoras(jogs);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  if (loading) return <div className="text-center py-10 text-white">Carregando...</div>;
  if (erro) return <div className="text-center py-10 text-red-500">{erro}</div>;

  const Corinthians = clubes.find(c => c.nome === "Corinthians");
  const Cruzeiro = clubes.find(c => c.nome === "Cruzeiro");
  const Palmeiras = clubes.find(c => c.nome === "Palmeiras");

  return (
    <main className="IndexMain">
      <header className="header flex justify-end items-center w-full h-16 px-8 text-white">
        <a href="/clubes" className="text-pink-500 font-bold hover:underline">Avançar</a>
      </header>
      <div className="placa relative w-full overflow-hidden" ref={placaRef}>
        <div className="slider"><img src={Propaganda1} alt="Anúncio 1" className="w-full object-cover" /></div>
        <div className="slider"><img src={Propaganda2} alt="Anúncio 2" className="w-full object-cover" /></div>
        <div className="slider"><img src={Propaganda3} alt="Anúncio 3" className="w-full object-cover" /></div>
        <button className="prev-button" aria-label="Anterior">‹</button>
        <button className="next-button" aria-label="Próximo">›</button>
      </div>
      <section className="ultimojogo flex items-center justify-center py-8">
        <div className="flex items-center justify-center border-2 border-pink-500 rounded-2xl px-8 py-5 gap-6 bg-zinc-800 text-white shadow-lg">
          <img src={Corinthians?.escudo} alt="Corinthians" className="w-14 h-14" />
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">1</h1>
            <h1 className="text-xl font-bold">X</h1>
            <h1 className="text-3xl font-bold">0</h1>
          </div>
          <img src={Cruzeiro?.escudo} alt="Cruzeiro" className="w-14 h-14" />
        </div>
      </section>
      <div className="thumbnail bg-pink-600 text-white rounded-3xl mx-auto my-6 py-8 px-10 max-w-5xl text-center shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <img src={Corinthians?.escudo} alt={Corinthians?.nome} className="w-20 h-20 mb-2" />
            <h1 className="text-2xl font-bold">{Corinthians?.nome}</h1>
          </div>
          <div className="flex flex-col items-center"><h2 className="text-3xl font-extrabold">VS</h2></div>
          <div className="flex flex-col items-center">
            <img src={Cruzeiro?.escudo} alt={Cruzeiro?.nome} className="w-20 h-20 mb-2" />
            <h1 className="text-2xl font-bold">{Cruzeiro?.nome}</h1>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-5 text-sm md:text-base">
          <div className="flex items-center gap-2"><img src={mappin} alt="" className="w-4" /> Morumbi</div>
          <div className="flex items-center gap-2"><img src={clock} alt="" className="w-4" /> 14/09 10:30</div>
        </div>
      </div>
      <div className="liga">
        <div className="LigaScroll">
          <div className="LegendaLiga LegendaLiga--header">
            <p>Clubes</p><p className="Pontos">Pts</p><p>PJ</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
          </div>
          {[...clubes].sort((a, b) => b.pontos - a.pontos || b.sg - a.sg || b.gm - a.gm).map((time, index) => (
            <div key={time.id} className={`LegendaLiga ${index < 4 ? "border-l-4 border-yellow-500 bg-yellow-50/5" : index >= clubes.length - 4 ? "border-l-4 border-red-600 bg-red-50/5" : "border-l-4 border-transparent"}`}>
              <div className="Clube flex items-center gap-2">
                <p className="text-gray-400 w-6 text-right">{index + 1}</p>
                <img src={time.escudo || "/imgs/clubes/placeholder.png"} alt={`Escudo do ${time.nome}`} className="w-6 h-6" />
                <p>{time.nome}</p>
              </div>
              <p className="Pontos font-semibold">{time.pontos}</p>
              <p>{time.jogos}</p>
              <p>{time.vitorias}</p>
              <p>{time.empates}</p>
              <p>{time.derrotas}</p>
              <p>{time.gm}</p>
              <p>{time.gc}</p>
              <p className={`${time.sg > 0 ? "text-green-400" : time.sg < 0 ? "text-red-400" : "text-gray-300"}`}>{time.sg > 0 ? `+${time.sg}` : time.sg}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="proximasPartidas flex flex-col gap-4 py-4">
        {[{ timeA: Corinthians, timeB: Cruzeiro, local: 'Neo Química Arena', data: '14/09 10:30' }, { timeA: Cruzeiro, timeB: Palmeiras, local: 'Independência', data: '31/08 10:30' }, { timeA: Palmeiras, timeB: Corinthians, local: 'Allianz Parque', data: '05/10 15:00' }].map((p, i) => (
          <div key={i} className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"><img src={p.timeA?.escudo} className="w-8 h-8" alt={p.timeA?.nome} /><p>{p.timeA?.nome}</p></div>
              <p className="text-pink-500 font-semibold">VS</p>
              <div className="flex items-center gap-2"><p>{p.timeB?.nome}</p><img src={p.timeB?.escudo} className="w-8 h-8" alt={p.timeB?.nome} /></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span className="flex items-center gap-1"><img src={mappin} className="w-4" /> {p.local}</span>
              <span className="flex items-center gap-1"><img src={clock} className="w-4" /> {p.data}</span>
            </div>
          </div>
        ))}
      </section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/to-Ry1utIlE?si=SmLgAR74zgTPs7he" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="video rounded-lg overflow-hidden shadow-lg border border-zinc-700"></iframe>
    </main>
  );
}
export default Home;
