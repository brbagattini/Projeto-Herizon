import { useState, useEffect } from "react";
import { ClubModal, PlayerModal } from "./modal";
import Amanda from "./imgs/jogadoras/Amanda.png";

export default function Clubes() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [clubes, setClubes] = useState([]);
  const [jogadoras, setJogadoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        const [resTimes, resJogadoras] = await Promise.all([
          fetch("https://690d2f51a6d92d83e850b780.mockapi.io/soccerapi/api/v1/times"),
          fetch("https://690d2f51a6d92d83e850b780.mockapi.io/soccerapi/api/v1/jogadoras"),
        ]);
        if (!resTimes.ok || !resJogadoras.ok) {
          throw new Error("Erro ao carregar dados da API");
        }
        setClubes(await resTimes.json());
        setJogadoras(await resJogadoras.json());
      } catch (err) {
        console.error(err);
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, []);

  if (loading)
    return <div className="text-center py-10 text-white">Carregando...</div>;
  if (erro)
    return <div className="text-center py-10 text-red-500">{erro}</div>;

  return (
    <main className="ClubeMain grid w-full min-h-screen text-white px-[5%] py-4 gap-4">
      {/* HEADER */}
      <div className="header flex justify-between items-center mb-4">
        <a href="/home" className="text-pink-500 font-semibold hover:underline">
          Voltar
        </a>
        <a href="/sobrenos" className="text-pink-500 font-semibold hover:underline">
          Avançar
        </a>
      </div>

      {/* THUMBNAIL JOGADORA */}
      <div className="ThumbnailJogadoras flex items-center justify-between bg-[radial-gradient(ellipse_at_center,var(--clr-destaque),var(--clr-bg))] rounded-[var(--radius)] px-[20%] py-4 gap-[30%]">
        <div className="textThumbnailJogadoras flex flex-col items-center text-center">
          <h1 className="text-3xl font-semibold">Amanda Gutierres</h1>
          <p className="text-[var(--clr-muted)] text-base">17 gols em 15 partidas</p>
        </div>
        <img src={Amanda} alt="Amanda Gutierres" className="h-full max-h-40 object-contain" />
      </div>

      <div className="Jogadoras w-full bg-[var(--clr-panel)] rounded-[var(--radius)] border border-[var(--clr-border)] overflow-hidden">
        <div className="sticky top-0 grid grid-cols-[1fr_4fr_1fr_2fr_2fr_1fr] bg-[var(--clr-surface)] text-[var(--clr-destaque)] font-semibold text-sm py-2 px-3 border-b border-[var(--clr-border)]">
          <h1></h1>
          <h1>Nome</h1>
          <h1>Idade</h1>
          <h1>Posição</h1>
          <h1>Time</h1>
          <h1>Jogos</h1>
        </div>

        <div className="max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--clr-destaque)] scrollbar-track-[var(--clr-bg)]">
          {jogadoras.map((j) => (
            <div
              key={j.id}
              className="grid grid-cols-[1fr_4fr_1fr_2fr_2fr_1fr] items-center py-3 px-3 border-b border-[var(--clr-border)] bg-[var(--clr-surface)] hover:bg-[rgba(238,77,155,0.1)] cursor-pointer transition-colors"
              onClick={() => setSelectedPlayer(j)}
            >
              <img
                src={j.foto}
                alt={j.nome}
                className="w-12 h-12 object-cover rounded-full"
              />
              <h1>{j.nome}</h1>
              <h1>{j.idade}</h1>
              <h1>{j.posicao}</h1>
              <h1>{j.time}</h1>
              <h1>{j.jogos}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* CLUBES GRID */}
      <div className="Clubestitle w-full">
        <h1 className="text-xl font-bold mb-2">Clubes</h1>
        <div className="grid grid-cols-3 gap-3 max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--clr-muted)] scrollbar-track-[var(--clr-bg)] border border-[var(--clr-border)] rounded-xl p-2">
          {clubes.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedClub(c)}
              className="flex flex-col items-center justify-center bg-transparent text-center cursor-pointer hover:scale-[1.03] transition-transform"
            >
              <img
                src={c.escudo}
                alt={c.nome}
                className="w-20 h-20 object-contain"
              />
              <p className="text-sm mt-1">{c.nome}</p>
            </button>
          ))}
        </div>
      </div>

      {/* MODAIS */}
      <ClubModal
        open={!!selectedClub}
        onClose={() => setSelectedClub(null)}
        club={selectedClub}
      />
      <PlayerModal
        open={!!selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        player={selectedPlayer}
      />
    </main>
  );
}
