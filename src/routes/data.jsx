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
import TamiresFace from './imgs/jogadoras/tamires.jpg';
import CristianeFace from './imgs/jogadoras/cristiane.jpg';
import DudaFace from './imgs/jogadoras/duda-sampaio.jpg';

export const clubes = [ 
  { id: "3b",   nome: "3B da Amazônia",      escudo: AmazoniaEscudo,    estadio: "Ismael Benigno (Colina)",     fundacao: "2017", cidade: "Manaus/AM" },
  { id: "ame",  nome: "América Mineiro",     escudo: AmericaEscudo,     estadio: "Independência",               fundacao: "1912", cidade: "Belo Horizonte/MG" },
  { id: "bah",  nome: "Bahia",               escudo: BahiaEscudo,       estadio: "Arena Fonte Nova",            fundacao: "1931", cidade: "Salvador/BA" },
  { id: "cor",  nome: "Corinthians",         escudo: CorinthiansEscudo, estadio: "Neo Química Arena",           fundacao: "1910", cidade: "São Paulo/SP" },
  { id: "cru",  nome: "Cruzeiro",            escudo: CruzeiroEscudo,    estadio: "Mineirão",                    fundacao: "1921", cidade: "Belo Horizonte/MG" },
  { id: "fer",  nome: "Ferroviária",         escudo: FerroviáriaEscudo, estadio: "Fonte Luminosa",              fundacao: "1950", cidade: "Araraquara/SP" },
  { id: "fla",  nome: "Flamengo",            escudo: FlamengoEscudo,    estadio: "Maracanã",                    fundacao: "1895", cidade: "Rio de Janeiro/RJ" },
  { id: "flu",  nome: "Fluminense",          escudo: FluminenseEscudo,  estadio: "Maracanã",                    fundacao: "1902", cidade: "Rio de Janeiro/RJ" },
  { id: "gre",  nome: "Grêmio",              escudo: GrêmioEscudo,      estadio: "Arena do Grêmio",             fundacao: "1903", cidade: "Porto Alegre/RS" },
  { id: "int",  nome: "Internacional",       escudo: InterEscudo,       estadio: "Beira-Rio",                   fundacao: "1909", cidade: "Porto Alegre/RS" },
  { id: "juv",  nome: "Juventude",           escudo: JuventudeEscudo,   estadio: "Alfredo Jaconi",              fundacao: "1913", cidade: "Caxias do Sul/RS" },
  { id: "pal",  nome: "Palmeiras",           escudo: PalmeirasEscudo,   estadio: "Allianz Parque",              fundacao: "1914", cidade: "São Paulo/SP" },
  { id: "rea",  nome: "Real Brasília",       escudo: RealEscudo,        estadio: "Defelê",                      fundacao: "1996 (como Real FC) / 2016 (atual nome)", cidade: "Brasília/DF" },
  { id: "rbb",  nome: "Red Bull Bragantino", escudo: RedBullEscudo,     estadio: "Nabi Abi Chedid",             fundacao: "1928", cidade: "Bragança Paulista/SP" },
  { id: "sao",  nome: "São Paulo",           escudo: SaoPauloEscudo,    estadio: "Morumbi",                     fundacao: "1930", cidade: "São Paulo/SP" },
  { id: "spo",  nome: "Sport",               escudo: SportEscudo,       estadio: "Ilha do Retiro",              fundacao: "1905", cidade: "Recife/PE" },
];



export const jogadoras = [
  {id: "tamires",nome: "Tamires Cássia Dias",foto: TamiresFace,posicao: "Lateral-esquerda",time: "Corinthians",idade: 37,jogos: 0,gols: 0,assistencias: 0,nacionalidade: "Brasil",numero: 37,altura: "1,61 m"},
  {id: "duda-sampaio",nome: "Duda Sampaio",foto: CristianeFace,posicao: "Meia",time: "Corinthians",idade: 24,jogos: 0,gols: 0,assistencias: 0,nacionalidade: "Brasil",numero: 27,altura: "1,69 m"},
  {id: "cristiane",nome: "Cristiane Rozeira",foto: DudaFace,posicao: "Atacante",time: "Flamengo",idade: 40,jogos: 0,gols: 0,assistencias: 0,nacionalidade: "Brasil",numero: 11,altura: "1,70 m"}
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
