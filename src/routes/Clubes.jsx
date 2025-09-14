import { useState } from "react";
import "../App.css";
import { ClubModal, PlayerModal } from "./modal";
import { Link } from "react-router-dom";

function Clubes() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const clubes = [
    {
      id: "fig",
      nome: "Figueirense",
      escudo: "/imgs/figueirense.png",
      estadio: "Orlando Scarpelli",
      fundacao: "1921",
      cidade: "Florianópolis/SC",
      cores: "Preto e branco",
    },
    {
      id: "fer",
      nome: "Ferroviária",
      escudo: "/imgs/ferroviaria.png",
      estadio: "Fonte Luminosa",
      fundacao: "1950",
      cidade: "Araraquara/SP",
      cores: "Grená",
    },
    {
      id: "cor",
      nome: "Corinthians",
      escudo: "/imgs/corinthians.png",
      estadio: "Neo Química Arena",
      fundacao: "1910",
      cidade: "São Paulo/SP",
      cores: "Preto e branco",
    },
  ];

  const jogadoras = [
    {
      id: "j1",
      nome: "Amanda Silva",
      idade: 24,
      posicao: "Atacante",
      time: "Ferroviária",
      jogos: 31,
      gols: 12,
      assistencias: 7,
      foto: "/imgs/jogadoras/amanda.jpg",
      nacionalidade: "Brasil",
      numero: 9,
      altura: "1,68 m",
    },
    {
      id: "j2",
      nome: "Bianca Souza",
      idade: 27,
      posicao: "Meia",
      time: "Corinthians",
      jogos: 29,
      gols: 5,
      assistencias: 10,
      foto: "/imgs/jogadoras/bianca.jpg",
      nacionalidade: "Brasil",
      numero: 10,
      altura: "1,64 m",
    },
    {
      id: "j3",
      nome: "Carla Mendes",
      idade: 22,
      posicao: "Zagueira",
      time: "Figueirense",
      jogos: 25,
      gols: 2,
      assistencias: 1,
      foto: "/imgs/jogadoras/carla.jpg",
      nacionalidade: "Brasil",
      numero: 3,
      altura: "1,75 m",
    },
  ];

  return (
    <>
      <main className="ClubeMain">
        <div className="header">
          <Link to="/home"><p>Voltar</p></Link>
          <Link to="/sobrenos"><p>Avançar</p></Link>
        </div>

        <div className="ThumbnailJogadoras">
          <div className="textThumbnailJogadoras">
            <h1>JOGADORA</h1>
            <p>31 jogos em 40 partidas</p>
          </div>
          <img src="" alt="" />
        </div>

        <div className="Jogadoras">
          <div className="JogadorasLegenda">
            <h1></h1>
            <h1>Nome</h1>
            <h1>Idade</h1>
            <h1>Posição</h1>
            <h1>Time</h1>
            <h1>Jogos</h1>
          </div>

          {jogadoras.map((j) => (
            <div
              key={j.id}
              className="JogadorasTemplate"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedPlayer(j)}
              onKeyDown={(e) => e.key === "Enter" && setSelectedPlayer(j)}
              style={{ cursor: "pointer" }}
            >
              <img src={j.foto} alt={`Foto de ${j.nome}`} />
              <h1>{j.nome}</h1>
              <h1>{j.idade}</h1>
              <h1>{j.posicao}</h1>
              <h1>{j.time}</h1>
              <h1>{j.jogos}</h1>
            </div>
          ))}
        </div>

        <div className="Clubestitle">
          <h1>Clubes</h1>
          <div className="Clubes">
            {clubes.map((c) => (
              <button
                key={c.id}
                type="button"
                className="clubeicon"
                onClick={() => setSelectedClub(c)}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <img src={c.escudo} alt={`Escudo do ${c.nome}`} />
                <p>{c.nome}</p>
              </button>
            ))}
          </div>
        </div>

        <ClubModal open={!!selectedClub} onClose={() => setSelectedClub(null)} club={selectedClub} />
        <PlayerModal
          open={!!selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          player={selectedPlayer}
        />
      </main>
    </>
  );
}

export default Clubes;
