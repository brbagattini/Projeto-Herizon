import cor from './imgs/clubes/Corinthians.png';
import cruze from './imgs/clubes/Cruzeiro.png';
import pal from './imgs/clubes/Palmeiras.png';
import sao from './imgs/clubes/SãoPaulo.png';
import ame from './imgs/clubes/AmericaMineiro.png';
import bah from './imgs/clubes/Bahia.png';
import fla from './imgs/clubes/Flamengo.png';
import flu from './imgs/clubes/Fluminense.png';
import fer from './imgs/clubes/Ferroviaria.png';
import gre from './imgs/clubes/Grêmio.png';
import int from './imgs/clubes/Internacional.png';
import rea from './imgs/clubes/realBrasilia.avif';
import rbb from './imgs/clubes/RedBull.png';
import spo from './imgs/clubes/Sport.png';
import juv from './imgs/clubes/Juventude.png';
import amz from './imgs/clubes/3b.png';

import tamires from './imgs/jogadoras/tamires.jpg';
import dudaSampaio from './imgs/jogadoras/duda-sampaio.jpg';
import cristiane from './imgs/jogadoras/cristiane.jpg';
import gabiPortilho from './imgs/jogadoras/gabi-portilho.jpg';
import leticia from './imgs/jogadoras/leticia.jpg';
import biaZaneratto from './imgs/jogadoras/bia-zaneratto.jpg';
import ariBorges from './imgs/jogadoras/ari-borges.jpg';
import anaVitoria from './imgs/jogadoras/ana-vitoria.jpg';
import carolBaiana from './imgs/jogadoras/carol-baiana.jpg';
import dudaSantos from './imgs/jogadoras/duda-santos.jpg';
import brunaBenites from './imgs/jogadoras/bruna-benites.jpg';
import karlaAlves from './imgs/jogadoras/karla-alves.jpg';
import luanaBertolucci from './imgs/jogadoras/luana-bertolucci.jpg';
import anaCarolina from './imgs/jogadoras/ana-carolina.jpg';
import yasmin from './imgs/jogadoras/yasmin.jpg';
import amanda from './imgs/jogadoras/amanda.jpg';

export const escudos = {
  "Corinthians": cor,
  "Cruzeiro": cruze,
  "Palmeiras": pal,
  "São Paulo": sao,
  "América Mineiro": ame,
  "Bahia": bah,
  "Flamengo": fla,
  "Fluminense": flu,
  "Ferroviária": fer,
  "Grêmio": gre,
  "Internacional": int,
  "Real Brasília": rea,
  "Red Bull Bragantino": rbb,
  "Sport": spo,
  "Juventude": juv,
  "3B da Amazônia": amz
};

export const fotosJogadoras = {
  "Tamires Cássia Dias": tamires,
  "Duda Sampaio": dudaSampaio,
  "Cristiane Rozeira": cristiane,
  "Gabi Portilho": gabiPortilho,
  "Letícia Izidoro": leticia,
  "Bia Zaneratto": biaZaneratto,
  "Ari Borges": ariBorges,
  "Ana Vitória": anaVitoria,
  "Carol Baiana": carolBaiana,
  "Duda Santos": dudaSantos,
  "Bruna Benites": brunaBenites,
  "Karla Alves": karlaAlves,
  "Luana Bertolucci": luanaBertolucci,
  "Ana Carolina": anaCarolina,
  "Yasmim Assis Ribeiro": yasmin,
  "Amanda Gutierres": amanda
};

export async function fetchClubes() {
  const res = await fetch('https://690d2f51a6d92d83e850b780.mockapi.io/soccerapi/api/v1/times');
  if (!res.ok) throw new Error('Erro ao buscar clubes');
  const data = await res.json();

  return data.map((clube) => ({
    ...clube,
    escudo: escudos[clube.nome] || '/imgs/clubes/placeholder.png',
  }));
}

export async function fetchJogadoras() {
  const res = await fetch('https://690d2f51a6d92d83e850b780.mockapi.io/soccerapi/api/v1/jogadoras');
  if (!res.ok) throw new Error('Erro ao buscar jogadoras');
  const data = await res.json();

  return data.map((jogadora) => ({...jogadora, foto: fotosJogadoras[jogadora.nome] || jogadora.foto || '/imgs/jogadoras/placeholder.png' }));
}

export function initSlider(container, { auto = true, interval = 4000 } = {}) {
  if (!container) return;
  const slides = container.querySelectorAll('.slider');
  const btnPrev = container.querySelector('.prev-button');
  const btnNext = container.querySelector('.next-button');

  let current = 0;
  function hideSlides() {
    slides.forEach((s) => s.classList.remove('on'));
  }
  function showSlide(i) {
    if (!slides.length) return;
    slides[i].classList.add('on');
  }
  function goTo(n) {
    if (!slides.length) return;
    current = (n + slides.length) % slides.length;
    hideSlides();
    showSlide(current);
  }
  function nextSlide() {
    goTo(current + 1);
  }
  function prevSlide() {
    goTo(current - 1);
  }

  btnNext?.addEventListener('click', nextSlide);
  btnPrev?.addEventListener('click', prevSlide);
  showSlide(current);

  let timer;
  if (auto) timer = setInterval(nextSlide, interval);
  return () => clearInterval(timer);
}