import { useMemo, useRef, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { clubes, jogadoras } from './routes/data';
import { ClubModal, PlayerModal } from './routes/modal'; // <-- ajuste o path se precisar

function App() {
  const [q, setQ] = useState('');
  const [showList, setShowList] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [openClub, setOpenClub] = useState(null);
  const [openPlayer, setOpenPlayer] = useState(null);

  const inputRef = useRef(null);
  const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const results = useMemo(() => {
    const query = norm(q.trim());
    if (query.length < 2) return [];
    const clubMatches = clubes
      .filter(c => norm(c.nome).includes(query))
      .map(c => ({ type: 'club', id: c.id, label: c.nome, sub: 'Clube', thumb: c.escudo, data: c }));
    const playerMatches = jogadoras
      .filter(p => norm(p.nome).includes(query))
      .map(p => ({ type: 'player', id: p.id, label: p.nome, sub: p.time, thumb: p.foto, data: p }));
    return [...clubMatches, ...playerMatches].slice(0, 10);
  }, [q]);

  const openByItem = (item) => {
    if (!item) return;
    setShowList(false);
    setQ(''); // opcional: limpar busca ao abrir
    if (item.type === 'club') setOpenClub(item.data);
    else setOpenPlayer(item.data);
  };

  const onKeyDown = (e) => {
    if (!showList || results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      openByItem(results[activeIndex] || results[0]);
    } else if (e.key === 'Escape') {
      setShowList(false);
    }
  };

  return (
    <>
      <div className='App'>
        <nav>
          <div className='Nav-Link-Div'>
            <a href="/home" className='Nav-Link'>Notícias</a>
            <a href="/clubes" className='Nav-Link'>Atletas e Clubes</a>
            <a href="/sobrenos" className='Nav-Link'>História</a>
          </div>

          {/* ===== Busca ===== */}
          <div
            className='search-bar-Div'
            style={{ position: 'relative' }} // necessário p/ dropdown
          >
            <input
              ref={inputRef}
              type="text"
              className='search-bar'
              placeholder='Pesquisar clubes e jogadoras...'
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setShowList(true);
                setActiveIndex(0);
              }}
              onFocus={() => q.length >= 2 && setShowList(true)}
              onBlur={() => setTimeout(() => setShowList(false), 120)} // dá tempo do clique
              onKeyDown={onKeyDown}
              aria-autocomplete="list"
              aria-expanded={showList}
              aria-controls="search-results"
            />

            {showList && results.length > 0 && (
              <ul id="search-results" className="search-results">
                {results.map((r, i) => (
                  <li
                    key={`${r.type}-${r.id}`}
                    className={`search-item ${i === activeIndex ? 'is-active' : ''}`}
                    onMouseDown={(e) => e.preventDefault()} // evita blur antes do click
                    onClick={() => openByItem(r)}
                  >
                    <img src={r.thumb} alt="" />
                    <div className="search-item__text">
                      <span className="search-item__label">{r.label}</span>
                      <span className="search-item__sub">
                        {r.type === 'club' ? 'Clube' : 'Jogadora'}{r.sub ? ` · ${r.sub}` : ''}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className='PerfilDiv'>
            <img src="" alt="" className='ImgPerfil'/>
            <a href="/" className='Perfil-Link'>perfil</a>
          </div>
        </nav>

        <Outlet />
        <ClubModal  open={!!openClub}   onClose={() => setOpenClub(null)}   club={openClub} />
        <PlayerModal open={!!openPlayer} onClose={() => setOpenPlayer(null)} player={openPlayer} />
      </div>
    </>
  );
}

export default App;
