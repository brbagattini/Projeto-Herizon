import { useState } from "react";
import "../App.css";
import { ClubModal, PlayerModal } from "./modal";
import { jogadoras } from "./data";
import { clubes } from "./data";

function Clubes() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);


  return (
    <>
      <main className="ClubeMain">
        <div className="header">
          <a href="/home">
            <p>Voltar</p>
          </a>
          <a href="/sobrenos">
            <p>Avançar</p>
          </a>
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
  <div className="Clubes Clubes--scrollY">
    {clubes.map((c) => (
      <button
        key={c.id}
        type="button"
        className="clubeicon"
        onClick={() => setSelectedClub(c)}
        style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", textAlign: "center" }}
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