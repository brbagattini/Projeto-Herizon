// ======== IMPORTS ========
import AmazoniaEscudo from './imgs/clubes/3b.png';
import AmericaEscudo from './imgs/clubes/AmericaMineiro.png';
import BahiaEscudo from './imgs/clubes/Bahia.png'; 
import CorinthiansEscudo from './imgs/clubes/Corinthians.png';
import CruzeiroEscudo from './imgs/clubes/Cruzeiro.png';
import FerroviariaEscudo from './imgs/clubes/Ferroviaria.png';
import FlamengoEscudo from './imgs/clubes/Flamengo.png';
import FluminenseEscudo from './imgs/clubes/Fluminense.png';
import GremioEscudo from './imgs/clubes/Grêmio.png';
import InterEscudo from './imgs/clubes/Internacional.png';
import JuventudeEscudo from './imgs/clubes/Juventude.png'; 
import PalmeirasEscudo from './imgs/clubes/Palmeiras.png'; 
import RealEscudo from './imgs/clubes/realBrasilia.avif'; 
import RedBullEscudo from './imgs/clubes/RedBull.png'; 
import SaoPauloEscudo from './imgs/clubes/SãoPaulo.png'; 
import SportEscudo from './imgs/clubes/Sport.png';

// Jogadoras
import TamiresFace from './imgs/jogadoras/tamires.jpg';
import CristianeFace from './imgs/jogadoras/cristiane.jpg';
import DudaFace from './imgs/jogadoras/duda-sampaio.jpg';


// ======== CLUBES ========
export const clubes = [ 
  { id: "3b", nome: "3B da Amazônia", escudo: AmazoniaEscudo, estadio: "Ismael Benigno (Colina)", fundacao: "2017", cidade: "Manaus/AM", pontos: 7, jogos: 15, vitorias: 2, empates: 1, derrotas: 12, gm: 11, gc: 53, sg: -42 },
  { id: "ame", nome: "América Mineiro", escudo: AmericaEscudo, estadio: "Independência", fundacao: "1912", cidade: "Belo Horizonte/MG", pontos: 19, jogos: 15, vitorias: 5, empates: 4, derrotas: 6, gm: 18, gc: 20, sg: -2 },
  { id: "bah", nome: "Bahia", escudo: BahiaEscudo, estadio: "Arena Fonte Nova", fundacao: "1931", cidade: "Salvador/BA", pontos: 24, jogos: 15, vitorias: 7, empates: 3, derrotas: 5, gm: 26, gc: 22, sg: 4 },
  { id: "cor", nome: "Corinthians", escudo: CorinthiansEscudo, estadio: "Neo Química Arena", fundacao: "1910", cidade: "São Paulo/SP", pontos: 34, jogos: 15, vitorias: 10, empates: 4, derrotas: 1, gm: 46, gc: 12, sg: 34 },
  { id: "cru", nome: "Cruzeiro", escudo: CruzeiroEscudo, estadio: "Mineirão", fundacao: "1921", cidade: "Belo Horizonte/MG", pontos: 36, jogos: 15, vitorias: 11, empates: 3, derrotas: 1, gm: 35, gc: 15, sg: 20 },
  { id: "fer", nome: "Ferroviária", escudo: FerroviariaEscudo, estadio: "Fonte Luminosa", fundacao: "1950", cidade: "Araraquara/SP", pontos: 25, jogos: 15, vitorias: 7, empates: 4, derrotas: 4, gm: 24, gc: 16, sg: 8 },
  { id: "fla", nome: "Flamengo", escudo: FlamengoEscudo, estadio: "Maracanã", fundacao: "1895", cidade: "Rio de Janeiro/RJ", pontos: 27, jogos: 15, vitorias: 8, empates: 3, derrotas: 4, gm: 31, gc: 19, sg: 12 },
  { id: "flu", nome: "Fluminense", escudo: FluminenseEscudo, estadio: "Maracanã", fundacao: "1902", cidade: "Rio de Janeiro/RJ", pontos: 18, jogos: 15, vitorias: 4, empates: 6, derrotas: 5, gm: 18, gc: 20, sg: -2 },
  { id: "gre", nome: "Grêmio", escudo: GremioEscudo, estadio: "Arena do Grêmio", fundacao: "1903", cidade: "Porto Alegre/RS", pontos: 17, jogos: 15, vitorias: 3, empates: 8, derrotas: 4, gm: 23, gc: 21, sg: 2 },
  { id: "int", nome: "Internacional", escudo: InterEscudo, estadio: "Beira-Rio", fundacao: "1909", cidade: "Porto Alegre/RS", pontos: 14, jogos: 15, vitorias: 3, empates: 5, derrotas: 7, gm: 17, gc: 29, sg: -12 },
  { id: "juv", nome: "Juventude", escudo: JuventudeEscudo, estadio: "Alfredo Jaconi", fundacao: "1913", cidade: "Caxias do Sul/RS", pontos: 10, jogos: 15, vitorias: 2, empates: 4, derrotas: 9, gm: 10, gc: 27, sg: -17 },
  { id: "pal", nome: "Palmeiras", escudo: PalmeirasEscudo, estadio: "Allianz Parque", fundacao: "1914", cidade: "São Paulo/SP", pontos: 30, jogos: 15, vitorias: 9, empates: 3, derrotas: 3, gm: 38, gc: 20, sg: 18 },
  { id: "rea", nome: "Real Brasília", escudo: RealEscudo, estadio: "Defelê", fundacao: "1996 (Real FC) / 2016 (atual nome)", cidade: "Brasília/DF", pontos: 12, jogos: 15, vitorias: 3, empates: 3, derrotas: 9, gm: 15, gc: 36, sg: -21 },
  { id: "rbb", nome: "Red Bull Bragantino", escudo: RedBullEscudo, estadio: "Nabi Abi Chedid", fundacao: "1928", cidade: "Bragança Paulista/SP", pontos: 20, jogos: 15, vitorias: 5, empates: 5, derrotas: 5, gm: 20, gc: 16, sg: 4 },
  { id: "sao", nome: "São Paulo", escudo: SaoPauloEscudo, estadio: "Morumbi", fundacao: "1930", cidade: "São Paulo/SP", pontos: 33, jogos: 15, vitorias: 10, empates: 3, derrotas: 2, gm: 31, gc: 10, sg: 21 },
  { id: "spo", nome: "Sport", escudo: SportEscudo, estadio: "Ilha do Retiro", fundacao: "1905", cidade: "Recife/PE", pontos: 3, jogos: 15, vitorias: 0, empates: 3, derrotas: 12, gm: 9, gc: 36, sg: -27 },
];


// ======== JOGADORAS ========
export const jogadoras = [
  { id: "tamires", nome: "Tamires Cássia Dias", foto: TamiresFace, posicao: "Lateral-esquerda", time: "Corinthians", idade: 37, jogos: 12, gols: 3, assistencias: 5, nacionalidade: "Brasil", numero: 37, altura: "1,61 m" },
  { id: "duda-sampaio", nome: "Duda Sampaio", foto: DudaFace, posicao: "Meia", time: "Corinthians", idade: 24, jogos: 14, gols: 4, assistencias: 7, nacionalidade: "Brasil", numero: 27, altura: "1,69 m" },
  { id: "cristiane", nome: "Cristiane Rozeira", foto: CristianeFace, posicao: "Atacante", time: "Flamengo", idade: 40, jogos: 13, gols: 9, assistencias: 2, nacionalidade: "Brasil", numero: 11, altura: "1,70 m" }
];


// ======== PARTIDAS (últimos e próximos jogos) ========
export const partidas = [
  {
    id: 1,
    mandante: "Corinthians",
    visitante: "Cruzeiro",
    local: "Neo Química Arena",
    data: "2025-10-26",
    hora: "10:30",
    resultado: "1x0",
    status: "encerrado"
  },
  {
    id: 2,
    mandante: "Cruzeiro",
    visitante: "Palmeiras",
    local: "Independência",
    data: "2025-11-02",
    hora: "10:30",
    resultado: null,
    status: "agendado"
  },
  {
    id: 3,
    mandante: "São Paulo",
    visitante: "Flamengo",
    local: "Morumbi",
    data: "2025-11-09",
    hora: "15:00",
    resultado: null,
    status: "agendado"
  }
];


// ======== SLIDER ========
const slides = document.querySelectorAll('.slider');
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
