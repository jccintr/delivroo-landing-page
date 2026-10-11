import { useState } from "react";
import BrowserFrame from "../components/BrowserFrame";
import AdminDashboard from "../components/mockups/AdminDashboard";
import { ADMIN_HOST, LOGIN_URL, SIGNUP_URL, TRIAL_DAYS } from "../config";

const tabs = [
  { key: "pedidos", label: "Pedidos", path: "pedidos" },
  { key: "cardapio", label: "Cardápio", path: "cardapio" },
  { key: "resumo", label: "Resumo", path: "resumo" },
];

const points = [
  "Pedidos em tempo real, com aviso sonoro e vários aparelhos ao mesmo tempo",
  "Cardápio, cores, bairros, horários e pagamentos configurados por você",
  "Resumo de vendas e histórico de pedidos por período",
  "Funciona no computador, tablet e celular. Nada para instalar",
];

export default function AdminShowcase() {
  const [tab, setTab] = useState("pedidos");
  const current = tabs.find((t) => t.key === tab);

  return (
    <section id="painel" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Painel web da loja</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
              Toda a sua operação em um só painel
            </h2>
            <p className="text-ink-soft mt-5 text-lg leading-relaxed">
              Receba e acompanhe pedidos, edite o cardápio, ajuste taxas e horários e veja quanto vendeu, direto do
              navegador. Crie sua conta e comece a testar agora mesmo.
            </p>
            <ul className="mt-6 space-y-3">
              {points.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink">
                  <span className="text-mint font-bold mt-0.5">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={SIGNUP_URL}
                className="bg-orange text-white font-bold px-7 py-4 rounded-full hover:bg-orange-deep transition-colors shadow-lg shadow-orange/30"
              >
                Cadastrar minha loja
              </a>
              <a href={LOGIN_URL} className="font-bold text-ink hover:text-orange transition-colors">
                Já tenho conta. Entrar →
              </a>
            </div>
            <p className="text-sm text-ink-soft mt-3">{TRIAL_DAYS} dias de teste grátis.</p>
          </div>

          <div>
            <div className="flex gap-2 mb-4">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`text-sm font-bold px-4 py-2.5 rounded-full transition-colors ${
                    tab === t.key ? "bg-ink text-white" : "bg-white text-ink-soft border border-ink/10"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <BrowserFrame url={`${ADMIN_HOST}/${current.path}`}>
              <AdminDashboard view={tab} />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
