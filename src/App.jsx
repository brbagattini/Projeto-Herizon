// src/App.jsx
import "./App.css";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPerfil, isAuthenticated } from "./utils/auth";

export default function App() {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [logged, setLogged] = useState(false);

  function refreshPerfil() {
    const p = getPerfil();
    setAvatar(p?.avatar || "");
    setName((p?.name || "").trim());
    setLogged(isAuthenticated());
  }

  useEffect(() => {
    refreshPerfil();
    const onStorage = () => refreshPerfil();
    const onFocus = () => refreshPerfil();
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  const avatarSrc = avatar || "/imgs/avatar-placeholder.png";
  const displayName =
    (logged && name ? name.split(" ")[0] : name) || "Entrar"; // mostra o primeiro nome quando logado
  const profileHref = logged ? "/perfil" : "/login";

  return (
    <div className="App">
      <nav>
        <div className="Nav-Link-Div">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "Nav-Link active" : "Nav-Link")}
          >
            Notícias
          </NavLink>
          <NavLink
            to="/clubes"
            className={({ isActive }) => (isActive ? "Nav-Link active" : "Nav-Link")}
          >
            Atletas e Clubes
          </NavLink>
          <NavLink
            to="/sobrenos"
            className={({ isActive }) => (isActive ? "Nav-Link active" : "Nav-Link")}
          >
            História
          </NavLink>
        </div>

        <div className="search-bar-Div">
          <input type="text" className="search-bar" placeholder="Buscar..." />
        </div>

        {/* Avatar + nome: clica e entra direto (perfil se logado, login se não) */}
        <Link to={profileHref} className="PerfilDiv" title={logged ? "Abrir seu perfil" : "Entrar"}>
          <img src={avatarSrc} alt={name || "Avatar"} className="ImgPerfil" />
          <span className="Perfil-Link">{displayName}</span>
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
