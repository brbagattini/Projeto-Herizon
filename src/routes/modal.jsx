import { useEffect } from "react";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose} aria-hidden="true" style={{ position: "fixed", inset: 0, display: "grid", placeItems: "center", background: "rgba(0,0,0,.6)", zIndex: 1000 }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()} style={{ width: "min(600px, 92vw)", maxHeight: "85vh", overflow: "auto", background: "var(--clr-panel, #101010)", color: "var(--clr-text, #fff)", border: "1px solid var(--clr-border, #565656)", borderRadius: "1rem", padding: "1rem 1.25rem", boxShadow: "0 10px 40px rgba(0,0,0,.5)", animation: "modalPop .15s ease-out" }}>
        <button onClick={onClose} aria-label="Fechar" autoFocus style={{ position: "sticky", top: 0, marginLeft: "auto", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "2rem", height: "2rem", border: "1px solid var(--clr-border, #565656)", borderRadius: ".5rem", background: "transparent", color: "inherit", cursor: "pointer" }}>×</button>
        {title && <h2 id="modal-title" style={{ margin: "0 0 .75rem", fontWeight: 700 }}>{title}</h2>}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export function ClubModal({ open, onClose, club }) {
  if (!open || !club) return null;
  return (
    <Modal open={open} onClose={onClose} title={club.nome}>
      <div className="clube-modal" style={{ display: "grid", gridTemplateColumns: "4rem 1fr", gap: "1rem", alignItems: "start", lineHeight: 1.6 }}>
        <img src={club.escudo} alt="" style={{ width: "4rem", height: "4rem", objectFit: "contain" }} />
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          {club.cidade && <li><strong>Cidade:</strong> {club.cidade}</li>}
          {club.estadio && <li><strong>Estádio:</strong> {club.estadio}</li>}
          {club.fundacao && <li><strong>Fundação:</strong> {club.fundacao}</li>}
          {club.cores && <li><strong>Cores:</strong> {club.cores}</li>}
        </ul>
      </div>
    </Modal>
  );
}

export function PlayerModal({ open, onClose, player }) {
  if (!open || !player) return null;
  return (
    <Modal open={open} onClose={onClose} title={player.nome}>
      <div className="player-modal" style={{ display: "grid", gridTemplateColumns: "5rem 1fr", gap: "1rem", alignItems: "start", lineHeight: 1.6 }}>
        <img src={player.foto} alt="" style={{ width: "5rem", height: "5rem", objectFit: "cover", borderRadius: "50%" }} />
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          {player.posicao && <li><strong>Posição:</strong> {player.posicao}</li>}
          {player.time && <li><strong>Time:</strong> {player.time}</li>}
          {player.idade && <li><strong>Idade:</strong> {player.idade}</li>}
          {player.jogos != null && <li><strong>Jogos:</strong> {player.jogos}</li>}
          {player.gols != null && <li><strong>Gols:</strong> {player.gols}</li>}
          {player.assistencias != null && <li><strong>Assistências:</strong> {player.assistencias}</li>}
          {player.nacionalidade && <li><strong>Nacionalidade:</strong> {player.nacionalidade}</li>}
          {player.numero && <li><strong>Número:</strong> {player.numero}</li>}
          {player.altura && <li><strong>Altura:</strong> {player.altura}</li>}
        </ul>
      </div>
    </Modal>
  );
}
