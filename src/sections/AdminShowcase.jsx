import { useState } from "react";
import BrowserFrame from "../components/BrowserFrame";
import AdminDashboard from "../components/mockups/AdminDashboard";

const tabs = [
  { key: "cardapio", label: "Cardápio" },
  { key: "pedidos", label: "Pedidos por Dia" },
];

export default function AdminShowcase() {
  const [tab, setTab] = useState("cardapio");

  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Painel Admin Web</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
              Prefere o computador? O painel web faz tudo também.
            </h2>
            <p className="text-ink-soft mt-5 text-lg leading-relaxed">
              Cadastre categorias, produtos, adicionais e formas de pagamento. Consulte os pedidos
              de qualquer dia e reimprima um cupom quando precisar — direto do navegador, sem instalar nada.
            </p>
            <div className="flex gap-2 mt-8">
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
          </div>
          <BrowserFrame url={tab === "cardapio" ? "admin.delivroo.app.br/cardapio" : "admin.delivroo.app.br/pedidos-dia"}>
            <AdminDashboard view={tab} />
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
