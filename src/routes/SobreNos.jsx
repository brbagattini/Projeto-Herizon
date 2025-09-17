// import { useState } from 'react'
import '../App.css'
import FerroviáriaEscudo from './imgs/clubes/Ferroviaria.png';
import FlamengoEscudo from './imgs/clubes/Flamengo.png';
import clock from '../Imagens/clock.svg';
import mappin from '../Imagens/map-pin.svg';
import { useEffect, useRef } from 'react';
import { initSlider } from './Slider';

function SobreNos() {
  const histRef = useRef(null);

  useEffect(() => {
    const destroy = initSlider(histRef.current, { auto: true, interval: 5000 });
    return destroy;
  }, []);
  return (
    <>
    <main className="SobreNosMain">
      <div className="header">
        <a href="/clubes"><p>Voltar</p></a>
      </div>

      <div className="HistoriaSlideshow" ref={histRef}>
        <div className="slider"><img src="/history/1.jpg" alt="História 1" /></div>
        <div className="slider"><img src="/history/2.jpg" alt="História 2" /></div>
        <div className="slider"><img src="/history/3.jpg" alt="História 3" /></div>

        <button className="prev-button" aria-label="Anterior">‹</button>
        <button className="next-button" aria-label="Próximo">›</button>
      </div>

      <div className="TextHistoria">
        <p>O Passa a Bola é um projeto criado por Luana Maluf e Alê Xavier que nasceu como um coletivo de mulheres reunidas para jogar futebol e, com o tempo, se transformou em um veículo de mídia digital dedicado ao futebol feminino. Do encontro semanal entre amigas onde o jogo, a conversa e a troca de experiências aconteciam lado a lado surgiu a percepção de que havia histórias, debates e referências que precisavam ganhar espaço e voz. <br /> <br />

A partir de 2021, o Passa a Bola consolidou essa virada: deixou de ser apenas a bola rolando na quadra para se tornar uma plataforma de conteúdo que circula por Instagram, podcast, colunas, entrevistas e vídeos, com o objetivo explícito de dar visibilidade às mulheres no esporte. O projeto se pauta por ampliar vozes de jogadoras, torcedoras e profissionais e por produzir narrativas que vão além das quatro linhas, abordando cultura, bastidores, trajetórias e debates que atravessam o universo do futebol. A prática e a comunicação caminham juntas: jogar é ponto de partida, informar e inspirar são a continuidade. <br /> <br />

Hoje, o Passa a Bola é uma das referências em mídia independente sobre futebol feminino no Brasil. Mantém presença forte nas redes, como Instagram e Twitter, e soma parcerias com marcas, eventos e iniciativas ligadas ao esporte, reforçando a missão de construir um ecossistema mais diverso, visível e potente para as mulheres que vivem e fazem o futebol.</p>
      </div>
    </main>
    </>
  )
}

export default SobreNos
