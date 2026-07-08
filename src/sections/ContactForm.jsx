import { useState } from "react";

const WHATSAPP_NUMBER = "5535984522324"; // TODO: troque pelo número oficial do Delivroo

const initialForm = { nome: "", loja: "", telefone: "", mensagem: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) {
      setError("Preenche seu nome e telefone pra gente conseguir te responder.");
      return;
    }
    setError("");

    const linhas = [
      `Olá! Quero saber mais sobre o Delivroo.`,
      `Nome: ${form.nome}`,
      form.loja ? `Loja: ${form.loja}` : null,
      `Telefone: ${form.telefone}`,
      form.mensagem ? `Mensagem: ${form.mensagem}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank", "noreferrer");
    setSent(true);
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div>
          <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Contato</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
            Quer colocar sua loja no Delivroo?
          </h2>
          <p className="text-ink-soft mt-5 text-lg leading-relaxed">
            Preencha o formulário com seus dados que o nosso SAC entrará em contato com você no WhatsApp pra te ajudar a
            montar o cardápio e tirar sua loja do papel.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink font-semibold hover:text-orange transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-mint-light flex items-center justify-center shrink-0">
                💬
              </span>
              Falar direto no WhatsApp
            </a>
            
          </div>
        </div>

        <div className="bg-cream rounded-3xl p-7 sm:p-9 border border-ink/5">
          {sent ? (
            <div className="flex flex-col items-center text-center py-10">
              <span className="text-4xl mb-4">🎉</span>
              <p className="font-display font-bold text-xl text-ink">Mandamos você pro WhatsApp!</p>
              <p className="text-ink-soft mt-2 max-w-xs">
                Se a conversa não abriu automaticamente, confira se seu navegador bloqueou o pop-up.
              </p>
              <button
                onClick={() => {
                  setForm(initialForm);
                  setSent(false);
                }}
                className="mt-6 text-sm font-bold text-orange-deep hover:text-orange transition-colors"
              >
                ← Enviar outro contato
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-ink block mb-1.5" htmlFor="nome">
                    Seu nome *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={form.nome}
                    onChange={update("nome")}
                    placeholder="Como podemos te chamar"
                    className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-ink block mb-1.5" htmlFor="loja">
                    Nome da loja
                  </label>
                  <input
                    id="loja"
                    type="text"
                    value={form.loja}
                    onChange={update("loja")}
                    placeholder="Ex: Top Burger"
                    className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-ink block mb-1.5" htmlFor="telefone">
                  WhatsApp *
                </label>
                <input
                  id="telefone"
                  type="tel"
                  value={form.telefone}
                  onChange={update("telefone")}
                  placeholder="(35) 99999-9999"
                  className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-ink block mb-1.5" htmlFor="mensagem">
                  Conte um pouco do seu negócio
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={form.mensagem}
                  onChange={update("mensagem")}
                  placeholder="Tipo de comida, quantos pedidos por dia, se já usa algum sistema..."
                  className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all resize-none"
                />
              </div>
              {error && <p className="text-sm font-semibold text-cherry">{error}</p>}
              <button
                type="submit"
                className="w-full bg-orange text-white font-bold px-6 py-4 rounded-full hover:bg-orange-deep transition-colors shadow-lg shadow-orange/20"
              >
                Enviar pelo WhatsApp
              </button>
              <p className="text-xs text-ink-soft/70 text-center">
                Ao enviar, você abre uma conversa no WhatsApp com seus dados preenchidos. A gente não guarda essas informações em nenhum servidor.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
