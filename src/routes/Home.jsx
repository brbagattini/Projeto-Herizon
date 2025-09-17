import '../App.css'
import clock from '../Imagens/clock.svg';
import mappin from '../Imagens/map-pin.svg';
import { jogadoras } from "./data";
import { clubes } from "./data";
import { useEffect, useRef } from 'react';
import { initSlider } from './Slider'
import Propaganda1 from '../Imagens/Propaganda 1.jpg'
import Propaganda2 from '../Imagens/Propaganda 2.jpg'
import Propaganda3 from '../Imagens/Propaganda 3.jpg'

const ads = [
  { src: "/ads/ad1.jpg", alt: "Patrocinador 1", href: "https://exemplo1.com" },
  { src: "/ads/ad2.jpg", alt: "Patrocinador 2", href: "https://exemplo2.com" },
  { src: "/ads/ad3.jpg", alt: "Patrocinador 3", href: "https://exemplo3.com" },
];

const Amazonia = clubes[0];
const America = clubes[1];
const Bahia = clubes[2];
const Corinthians = clubes[3];
const Cruzeiro = clubes[4];
const Ferroviária = clubes[5];
const Flamengo = clubes[6];
const Fluminense = clubes[7];
const Grêmio = clubes[8];
const Inter = clubes[9];
const Juventude = clubes[10];
const Palmeiras = clubes[11];
const Real = clubes[12];
const RedBull = clubes[13];
const SaoPaulo = clubes[14];
const Sport = clubes[15];

function Home() {
  const placaRef = useRef(null);

  useEffect(() => {
    const destroy = initSlider(placaRef.current, { auto: true, interval: 4000 });
    return destroy;
  }, []);

  return (
    <>
    <main className='IndexMain'>
      <div className='header'>
        <a href="/clubes"><p>Avançar</p></a>
      </div>

      <div className="placa" ref={placaRef}>
        {/* SLIDES: classe .slider */}
        <div className="slider"><img src={Propaganda1} alt="Anúncio 1" /></div>
        <div className="slider"><img src={Propaganda2} alt="Anúncio 2" /></div>
        <div className="slider"><img src={Propaganda3} alt="Anúncio 3" /></div>

        {/* BOTÕES: suas classes */}
        <button className="prev-button" aria-label="Anterior">‹</button>
        <button className="next-button" aria-label="Próximo">›</button>
      </div>
        <div className='ultimoJogo'>
          <div className='UltimoJogoContainer'>
              <img src={Corinthians?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Corinthians?.nome || 'Corinthians'}`}/>
              <h1 id='ultimoJogoGolsA'>1</h1>
            <h1>X</h1>
              <h1 id='ultimoJogoGolsB'>0</h1>
              <img src={Cruzeiro?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Cruzeiro?.nome || 'Cruzeiro'}`}/>
          </div>
        </div>
        <div className='thumbnail'>
          <div className='thumbnailtext'>
            <div className='thumbnailtimeA'>
              <img src={Corinthians?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Corinthians?.nome || 'Corinthians'}`}/>
              <h1>Corinthians</h1>
              <h2>VS</h2>
            </div>
            <div className='thumbnailtimeB'>
              <h1>Cruzeiro</h1>
              <img src={Cruzeiro?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Cruzeiro?.nome || 'Cruzeiro'}`}/>
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src={mappin} alt="" />
                <p>Morumbi</p>
              </div>
              <div className='Hora'>
                <img src={clock} alt="" />
                <p>Morumbi</p>
              </div>
            </div>
          </div>
        </div>
        <div className='liga'>
          <div className="LigaScroll">
            <div className='LegendaLiga'>
              <p>Clubes</p><p className='Pontos'>Pts</p><p>Pj</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Cruzeiro?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Cruzeiro?.nome || 'Cruzeiro'}`}/>
                <p>Cruzeiro</p>
              </div>
              <p className='Pontos'>36</p><p>15</p><p>11</p><p>3</p><p>1</p><p>35</p><p>15</p><p>20</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Corinthians?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Corinthians?.nome || 'Corinthians'}`}/>
                <p>Corinthians</p>
              </div>
              <p className='Pontos'>34</p><p>15</p><p>10</p><p>4</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={SaoPaulo?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${SaoPaulo?.nome || 'SaoPaulo'}`}/>
                <p>São Paulo</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>10</p><p>3</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Palmeiras?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Palmeiras?.nome || 'Palmeiras'}`}/>
                <p>Palmeiras</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Flamengo?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Flamengo?.nome || 'Flamengo'}`}/>
                <p>Flamengo</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Ferroviária?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Ferroviária?.nome || 'Ferroviária'}`}/>
                <p>Ferroviária</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Bahia?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Bahia?.nome || 'Bahia'}`}/>
                <p>Bahia</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={RedBull?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${RedBull?.nome || 'RedBull'}`}/>
                <p>Bragantino</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={America?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${America?.nome || 'America'}`}/>
                <p>América-MG</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Fluminense?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Fluminense?.nome || 'Fluminense'}`}/>
                <p>Fluminense</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Grêmio?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Grêmio?.nome || 'Grêmio'}`}/>
                <p>Grêmio</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Inter?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Inter?.nome || 'Inter'}`}/>
                <p>Internacional</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Real?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Real?.nome || 'Real'}`}/>
                <p>Real Brasília</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Juventude?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Juventude?.nome || 'Juventude'}`}/>
                <p>Juventude</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Amazonia?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Amazonia?.nome || 'Amazonia'}`}/>
                <p>3B Amazônia</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
            <div className='LegendaLiga'>
              <div className='Clube'>
                <img src={Sport?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Sport?.nome || 'Sport'}`}/>
                <p>Sport</p>
              </div>
              <p className='Pontos'>Pts</p><p>15</p><p>V</p><p>E</p><p>D</p><p>GM</p><p>GC</p><p>SG</p>
            </div>
          </div>
        </div>
        <div className='proximasPartidas'>
          <div className='proximascontainer'>
            <div className='clubeproximas'>
              <img src={Corinthians?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Corinthians?.nome || 'Corinthians'}`}/>
              <p>Corinthians</p>
              <p>VS</p>
              <p>Cruzeiro</p>
              <img src={Cruzeiro?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Cruzeiro?.nome || 'Cruzeiro'}`}/>
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src={mappin} alt="" />
                <p>Neo Quimica Arena</p>
              </div>
              <div className='Hora'>
                <img src={clock} alt="" />
                <p>14/09 10:30</p>
              </div>
            </div>
          </div>
          <div className='proximascontainer'>
            <div className='clubeproximas'>
              <img src={Cruzeiro?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Cruzeiro?.nome || 'Cruzeiro'}`}/>
              <p>Cruzeiro</p>
              <p>VS</p>
              <p>Corinthians</p>
              <img src={Corinthians?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Corinthians?.nome || 'Corinthians'}`}/>
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src={mappin} alt="" />
                <p>Independência</p>
              </div>
              <div className='Hora'>
                <img src={clock} alt="" />
                <p>07/09 10:30</p>
              </div>
            </div>
          </div>
          <div className='proximascontainer'>
            <div className='clubeproximas'>
              <img src={Cruzeiro?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Cruzeiro?.nome || 'Cruzeiro'}`}/>
              <p>Cruzeiro</p>
              <p>VS</p>
              <p>Palmeiras</p>
              <img src={Palmeiras?.escudo || '/imgs/clubes/placeholder.png'}alt={`Escudo do ${Palmeiras?.nome || 'Palmeiras'}`}/>
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src={mappin} alt="" />
                <p>Independência</p>
              </div>
              <div className='Hora'>
                <img src={clock} alt="" />
                <p>31/08 10:30</p>
              </div>
            </div>
          </div>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/to-Ry1utIlE?si=SmLgAR74zgTPs7he" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
    </main>
    </>
  )
}

export default Home