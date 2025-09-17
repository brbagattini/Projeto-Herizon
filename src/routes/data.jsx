import AmazoniaEscudo from './imgs/clubes/3b.png';
import AmericaEscudo from './imgs/clubes/AmericaMineiro.png';
import BahiaEscudo from './imgs/clubes/Bahia.png'; 
import CorinthiansEscudo from './imgs/clubes/Corinthians.png';
import CruzeiroEscudo from './imgs/clubes/Cruzeiro.png';
import FerroviáriaEscudo from './imgs/clubes/Ferroviaria.png';
import FlamengoEscudo from './imgs/clubes/Flamengo.png';
import FluminenseEscudo from './imgs/clubes/Fluminense.png';
import GrêmioEscudo from './imgs/clubes/Grêmio.png';
import InterEscudo from './imgs/clubes/Internacional.png';
import JuventudeEscudo from './imgs/clubes/Juventude.png'; 
import PalmeirasEscudo from './imgs/clubes/Palmeiras.png'; 
import RealEscudo from './imgs/clubes/realBrasilia.avif'; 
import RedBullEscudo from './imgs/clubes/RedBull.png'; 
import SaoPauloEscudo from './imgs/clubes/SãoPaulo.png'; 
import SportEscudo from './imgs/clubes/Sport.png';

export const clubes = [
  { id: "3b",   nome: "3B da Amazônia",     escudo: AmazoniaEscudo,            estadio: "", fundacao: "", cidade: "Manaus/AM",           },
  { id: "ame",  nome: "América Mineiro",    escudo: AmericaEscudo,    estadio: "", fundacao: "", cidade: "Belo Horizonte/MG",   },
  { id: "bah",  nome: "Bahia",              escudo: BahiaEscudo,         estadio: "", fundacao: "", cidade: "Salvador/BA",         },
  { id: "cor",  nome: "Corinthians",        escudo: CorinthiansEscudo,   estadio: "", fundacao: "", cidade: "São Paulo/SP",        },
  { id: "cru",  nome: "Cruzeiro",           escudo: CruzeiroEscudo,      estadio: "", fundacao: "", cidade: "Belo Horizonte/MG",   },
  { id: "fer",  nome: "Ferroviária",        escudo: FerroviáriaEscudo,   estadio: "", fundacao: "", cidade: "Araraquara/SP",       },
  { id: "fla",  nome: "Flamengo",           escudo: FlamengoEscudo,      estadio: "", fundacao: "", cidade: "Rio de Janeiro/RJ",   },
  { id: "flu",  nome: "Fluminense",         escudo: FluminenseEscudo,    estadio: "", fundacao: "", cidade: "Rio de Janeiro/RJ",   },
  { id: "gre",  nome: "Grêmio",             escudo: GrêmioEscudo,        estadio: "", fundacao: "", cidade: "Porto Alegre/RS",     },
  { id: "int",  nome: "Internacional",      escudo: InterEscudo, estadio: "", fundacao: "", cidade: "Porto Alegre/RS",     },
  { id: "juv",  nome: "Juventude",          escudo: JuventudeEscudo,     estadio: "", fundacao: "", cidade: "Caxias do Sul/RS",    },
  { id: "pal",  nome: "Palmeiras",          escudo: PalmeirasEscudo,     estadio: "", fundacao: "", cidade: "São Paulo/SP",        },
  { id: "rea",  nome: "Real Brasília",      escudo: RealEscudo, estadio: "", fundacao: "", cidade: "Brasília/DF",         },
  { id: "rbb",  nome: "Red Bull Bragantino",escudo: RedBullEscudo,       estadio: "", fundacao: "", cidade: "Bragança Paulista/SP",},
  { id: "sao",  nome: "São Paulo",          escudo: SaoPauloEscudo,      estadio: "", fundacao: "", cidade: "São Paulo/SP",        },
  { id: "spo",  nome: "Sport",              escudo: SportEscudo,         estadio: "", fundacao: "", cidade: "Recife/PE",           },
];


export const jogadoras = [
  { id: "j1", nome: "Amanda Silva",   foto: "/imgs/jogadoras/amanda.jpg",   posicao: "Atacante", time: "Santos",      idade: 24, jogos: 31, gols: 12, assistencias: 7,  nacionalidade: "Brasil", numero: 9,  time: "" },
  { id: "j2", nome: "Bianca Souza",   foto: "/imgs/jogadoras/bianca.jpg",   posicao: "Meia",     time: "Barcelona",   idade: 27, jogos: 29, gols: 5,  assistencias: 10, nacionalidade: "Brasil", numero: 10, time: "" },
  { id: "j3", nome: "Carla Mendes",   foto: "/imgs/jogadoras/carla.jpg",    posicao: "Zagueira", time: "Real Madrid", idade: 22, jogos: 25, gols: 2,  assistencias: 1,  nacionalidade: "Brasil", numero: 3,  time: "" },
];

const slides  = document.querySelectorAll('.slider');
const btnPrev = document.querySelector('.prev-button');
const btnNext = document.querySelector('.next-button');

let current = 0;

function hideSlides() {
  slides.forEach(s => s.classList.remove('on'));
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

function nextSlide() { goTo(current + 1); }
function prevSlide() { goTo(current - 1); }


btnNext?.addEventListener('click', nextSlide);
btnPrev?.addEventListener('click', prevSlide);

showSlide(current);
