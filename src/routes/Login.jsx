import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, login, register, logout, getPerfil } from "../utils/auth";
import "../App.css";

export default function Login() {
  const nav = useNavigate();
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [preview, setPreview] = useState("");

  // Se já está logado, manda pro perfil
  useEffect(() => {
    if (isAuthenticated()) nav("/perfil", { replace: true });
  }, [nav]);

  // Herdar tema salvo, se houver
  useEffect(() => {
    const perfil = getPerfil();
    const theme = perfil?.theme || "dark";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onAvatar(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setPreview(dataUrl);
      setForm((f) => ({ ...f, avatar: dataUrl }));
    };
    reader.readAsDataURL(file);
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (mode === "signup") {
      if (!form.name || !form.email || !form.password) {
        alert("Preencha Nome, Email e Senha.");
        return;
      }
      try {
        await register({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password,
          avatar: form.avatar || "",
        });
        nav("/perfil", { replace: true });
      } catch (err) {
        console.error(err);
        alert("Falha no cadastro. Tente novamente.");
      }
    } else {
      if (!form.email || !form.password) {
        alert("Informe Email e Senha.");
        return;
      }
      try {
        const ok = await login(form.email.trim().toLowerCase(), form.password);
        if (!ok) {
          alert("Email ou senha inválidos.");
          return;
        }
        nav("/perfil", { replace: true });
      } catch (err) {
        console.error(err);
        alert("Falha no login. Tente novamente.");
      }
    }
  }

  return (
    <main className="AuthMain">
      <section className="AuthCard">
        <header className="AuthHeader">
          <h1>{mode === "login" ? "Entrar" : "Criar conta"}</h1>
          <p className="muted">
            {mode === "login"
              ? "Acesse com seu email e senha."
              : "Crie sua conta local. Sua foto e dados ficam no seu navegador (localhost)."}
          </p>
        </header>

        <form className="AuthForm" onSubmit={onSubmit}>
          {mode === "signup" && (
            <div className="field">
              <label>Nome completo</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Ex.: Amanda Silva"
                autoFocus
              />
            </div>
          )}

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="voce@email.com"
              autoFocus={mode === "login"}
            />
          </div>

          <div className="field">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="••••••••"
            />
          </div>

          {mode === "signup" && (
            <div className="field">
              <label>Foto (opcional)</label>
              <div className="AvatarRow">
                <img
                  src={preview || "/imgs/avatar-placeholder.png"}
                  alt="Prévia"
                  className="AvatarPreview"
                />
                <label className="btnGhost">
                  Selecionar imagem
                  <input type="file" accept="image/*" onChange={onAvatar} hidden />
                </label>
              </div>
              <p className="muted small">
                A imagem será salva no armazenamento local (localStorage) como Data URL.
              </p>
            </div>
          )}

          <div className="actions">
            <button type="submit" className="btnPrimary">
              {mode === "login" ? "Entrar" : "Cadastrar e entrar"}
            </button>
            {isAuthenticated() && (
              <button
                type="button"
                className="btnDanger"
                onClick={() => {
                  logout();
                  alert("Sessão encerrada.");
                }}
              >
                Sair
              </button>
            )}
          </div>
        </form>

        <footer className="AuthFooter">
          {mode === "login" ? (
            <button className="linkBtn" onClick={() => setMode("signup")}>
              Não tem conta? Criar agora
            </button>
          ) : (
            <button className="linkBtn" onClick={() => setMode("login")}>
              Já tem conta? Entrar
            </button>
          )}
        </footer>
      </section>
    </main>
  );
}
