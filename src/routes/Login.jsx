import { useState, useEffect } from "react";

export default function Perfil() {
  const [form, setForm] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("perfil") || "{}");
    return { name: saved.name || "", email: saved.email || "", birth: saved.birth || "", gender: saved.gender || "", team: saved.team || "", location: saved.location || "", bio: saved.bio || "", avatar: saved.avatar || "", theme: saved.theme || "dark" };
  });
  const [avatarPreview, setAvatarPreview] = useState(form.avatar || "");
  useEffect(() => { document.documentElement.setAttribute("data-theme", form.theme || "dark"); }, [form.theme]);
  function onChange(e) { const { name, value } = e.target; setForm((f) => ({ ...f, [name]: value })); }
  function onAvatar(e) { const file = e.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { const dataUrl = reader.result; setAvatarPreview(dataUrl); setForm((f) => ({ ...f, avatar: dataUrl })); }; reader.readAsDataURL(file); }
  function save() { if (!form.name || !form.email) { alert("Preencha pelo menos Nome e Email."); return; } localStorage.setItem("perfil", JSON.stringify(form)); alert("Perfil salvo!"); }
  return (
    <main className="flex justify-center items-start px-4 sm:px-8 md:px-12 py-16 min-h-screen bg-[var(--clr-bg)] text-[var(--clr-text)]">
      <section className="w-full max-w-6xl bg-[var(--clr-panel)] border border-[var(--clr-border)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="relative">
          <div className="h-56 sm:h-64 bg-gradient-to-r from-[rgba(238,77,155,0.4)] to-[rgba(0,0,0,0.5)]" />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="relative">
              <img src={avatarPreview || "/imgs/avatar-placeholder.png"} alt="Avatar" className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-[var(--clr-bg)] object-cover shadow-xl" />
              <label className="absolute bottom-2 right-2 bg-[var(--clr-surface)] border border-[var(--clr-border)] text-xs text-white px-2 py-1 rounded-md cursor-pointer hover:bg-[var(--clr-destaque)] hover:text-black transition-all">
                Trocar
                <input type="file" accept="image/*" onChange={onAvatar} className="absolute inset-0 opacity-0 cursor-pointer" />
              </label>
            </div>
            <div className="text-center mt-6">
              <h1 className="text-3xl font-bold">{form.name || "Seu nome"}</h1>
              <p className="text-[var(--clr-muted)] text-base">{form.email || "seu@email.com"}</p>
            </div>
          </div>
        </div>
        <div className="pt-24 sm:pt-28 px-10 sm:px-16 md:px-20 pb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">Informações do Perfil</h2>
          <form className="grid gap-8" onSubmit={(e) => { e.preventDefault(); save(); }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-[var(--clr-muted)] mb-1">Nome completo</label>
                <input name="name" value={form.name} onChange={onChange} placeholder="Ex.: Amanda Silva" className="w-full bg-[#141414] border border-[var(--clr-border)] text-white rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[var(--clr-destaque)] outline-none" />
              </div>
              <div>
                <label className="block text-sm text-[var(--clr-muted)] mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="voce@email.com" className="w-full bg-[#141414] border border-[var(--clr-border)] text-white rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[var(--clr-destaque)] outline-none" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-[var(--clr-muted)] mb-1">Data de nascimento</label>
                <input type="date" name="birth" value={form.birth} onChange={onChange} className="w-full bg-[#141414] border border-[var(--clr-border)] text-white rounded-md px-4 py-2.5" />
              </div>
              <div>
                <label className="block text-sm text-[var(--clr-muted)] mb-1">Gênero</label>
                <select name="gender" value={form.gender} onChange={onChange} className="w-full bg-[#141414] border border-[var(--clr-border)] text-white rounded-md px-4 py-2.5">
                  <option value="">Selecione</option>
                  <option>Feminino Cisgênero</option>
                  <option>Masculino Cisgênero</option>
                  <option>Transfeminino / Mulher trans</option>
                  <option>Transmasculino / Homem trans</option>
                  <option>Não binário</option>
                  <option>Prefiro não informar</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-[var(--clr-muted)] mb-1">Time favorito</label>
                <input name="team" value={form.team} onChange={onChange} placeholder="Ex.: Corinthians" className="w-full bg-[#141414] border border-[var(--clr-border)] text-white rounded-md px-4 py-2.5" />
              </div>
              <div>
                <label className="block text-sm text-[var(--clr-muted)] mb-1">Cidade / Estado</label>
                <input name="location" value={form.location} onChange={onChange} placeholder="Ex.: São Paulo/SP" className="w-full bg-[#141414] border border-[var(--clr-border)] text-white rounded-md px-4 py-2.5" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-[var(--clr-muted)] mb-1">Bio</label>
              <textarea name="bio" rows={4} value={form.bio} onChange={onChange} placeholder="Conte um pouco sobre você…" className="w-full bg-[#141414] border border-[var(--clr-border)] text-white rounded-md px-4 py-2.5 resize-none" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-[var(--clr-destaque)] text-black font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all">Salvar perfil</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
