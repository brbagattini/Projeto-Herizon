// src/App.jsx
import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <div className="Nav-Link-Div">
          <NavLink to="/home" className={({isActive}) => isActive ? "Nav-Link active" : "Nav-Link"}>
            Notícias
          </NavLink>
          <NavLink to="/clubes" className="Nav-Link">Atletas e Clubes</NavLink>
          <NavLink to="/sobrenos" className="Nav-Link">História</NavLink>
        </div>

        <div className="search-bar-Div">
          <input type="text" className="search-bar" />
        </div>

        <div className="PerfilDiv">
          <img src="" alt="" className="ImgPerfil" />
          <NavLink to="/perfil" className="Perfil-Link">perfil</NavLink>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
