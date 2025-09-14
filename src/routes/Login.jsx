// src/routes/Perfil.jsx
import { useState, useEffect } from "react";
import "../App.css";

export default function Perfil() {
  const [tab, setTab] = useState("perfil");
  const [form, setForm] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("perfil") || "{}");
    return {
      name: saved.name || "",
      email: saved.email || "",
      birth: saved.birth || "",
      gender: saved.gender || "",
      team: saved.team || "",
      location: saved.location || "",
      bio: saved.bio || "",
      avatar: saved.avatar || "",
      notifyNews: saved.notifyNews ?? true,
      notifyMatches: saved.notifyMatches ?? false,
      theme: saved.theme || "dark",
    };
  });
  const [avatarPreview, setAvatarPreview] = useState(form.avatar || "");

   useEffect(() => {
    document.documentElement.setAttribute("data-theme", form.theme || "dark");
  }, [form.theme]);

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
      setAvatarPreview(dataUrl);
      setForm((f) => ({ ...f, avatar: dataUrl }));
    };
    reader.readAsDataURL(file);
  }

  function save(msg = "Perfil salvo!") {
    if (!form.name || !form.email) {
      alert("Preencha ao menos Nome e Email.");
      return;
    }
    localStorage.setItem("perfil", JSON.stringify(form));
    alert(msg);
  }

  return (
    <main className="PerfilMain">
      <section className="PerfilCard">
        {/* Cabeçalho com capa + avatar */}
        <div className="PerfilHeader">
          <div className="PerfilCover" />
          <div className="PerfilAvatar">
            <img
              src={avatarPreview || "/imgs/avatar-placeholder.png"}
              alt="Avatar"
            />
            <label className="PerfilAvatarBtn">
              Trocar foto
              <input type="file" accept="image/*" onChange={onAvatar} />
            </label>
          </div>
          <div className="PerfilBasic">
            <h1>{form.name || "Seu nome"}</h1>
            <p className="muted">{form.email || "seu@email.com"}</p>
          </div>
        </div>

        {/* Abas */}
        <div className="PerfilTabs">
          <button
            className={tab === "perfil" ? "active" : ""}
            onClick={() => setTab("perfil")}
          >
            Perfil
          </button>
          <button
            className={tab === "preferencias" ? "active" : ""}
            onClick={() => setTab("preferencias")}
          >
            Preferências
          </button>
          <button
            className={tab === "seguranca" ? "active" : ""}
            onClick={() => setTab("seguranca")}
          >
            Segurança
          </button>
        </div>

        {/* Conteúdo das abas */}
        {tab === "perfil" && (
          <form
            className="PerfilForm"
            onSubmit={(e) => {
              e.preventDefault();
              save();
            }}
          >
            <div className="field">
              <label>Nome completo</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Ex.: Amanda Silva"
              />
            </div>

            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="voce@email.com"
              />
            </div>

            <div className="field grid2">
              <div>
                <label>Data de nascimento</label>
                <input
                  type="date"
                  name="birth"
                  value={form.birth}
                  onChange={onChange}
                />
              </div>
              <div>
                <label>Gênero</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={onChange}
                >
                  <option value="">Selecione</option>
                  <option>Feminino Cisgênero</option>
                  <option>Masculino Cisgênero</option>
                  <option>Transfeminino / Mulher trans</option>
                  <option>Transmasculino / Homem trans</option>
                  <option>Travesti</option>
                  <option>Não binário</option>
                  <option>Prefiro não informar</option>
                </select>
              </div>
            </div>

            <div className="field grid2">
              <div>
                <label>Time favorito</label>
                <input
                  name="team"
                  value={form.team}
                  onChange={onChange}
                  placeholder="Ex.: Corinthians"
                />
              </div>
              <div>
                <label>Cidade/Estado</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={onChange}
                  placeholder="Ex.: São Paulo/SP"
                />
              </div>
            </div>

            <div className="field">
              <label>Bio</label>
              <textarea
                name="bio"
                rows={3}
                value={form.bio}
                onChange={onChange}
                placeholder="Conte um pouco sobre você…"
              />
            </div>

            <div className="actions">
              <button type="submit" className="btnPrimary">
                Salvar mudanças
              </button>
            </div>
          </form>
        )}

        {tab === "preferencias" && (
  <div className="PerfilForm">
    <div className="field">
      <label>Tema</label>
      <select
        name="theme"
        value={form.theme}
        onChange={onChange}
      >
        <option value="dark">Escuro</option>
        <option value="light">Claro</option>
      </select>
    </div>

    <div className="field">
      <label>Notificações</label>

      <div className="switchList">
        {/* Toggle: Novidades */}
        <label className="switchItem">
          <input
            type="checkbox"
            checked={!!form.notifyNews}
            onChange={(e) =>
              setForm((f) => ({ ...f, notifyNews: e.target.checked }))
            }
          />
          <span className="switchVisual" aria-hidden="true"></span>
          <span className="switchLabel">Novidades</span>
        </label>

        {/* Toggle: Jogos e resultados */}
        <label className="switchItem">
          <input
            type="checkbox"
            checked={!!form.notifyMatches}
            onChange={(e) =>
              setForm((f) => ({ ...f, notifyMatches: e.target.checked }))
            }
          />
          <span className="switchVisual" aria-hidden="true"></span>
          <span className="switchLabel">Jogos e resultados</span>
        </label>
      </div>
    </div>

    <div className="actions">
      <button
        className="btnPrimary"
        onClick={() => save("Preferências salvas!")}
      >
        Salvar preferências
      </button>
    </div>
  </div>
)}


        {tab === "seguranca" && (
          <form
            className="PerfilForm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Senha atualizada (exemplo)");
            }}
          >
            <div className="field grid2">
              <div>
                <label>Nova senha</label>
                <input type="password" name="newPass" placeholder="••••••••" />
              </div>
              <div>
                <label>Confirmar nova senha</label>
                <input
                  type="password"
                  name="confirmPass"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="actions">
              <button type="submit" className="btnPrimary">
                Atualizar senha
              </button>
            </div>

            <div className="danger">
              <h4>Zona de risco</h4>
              <button
                type="button"
                className="btnDanger"
                onClick={() =>
                  confirm("Tem certeza?") &&
                  alert("Conta desativada (exemplo)")
                }
              >
                Desativar conta
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
