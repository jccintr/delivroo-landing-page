const navItems = [
  { key: "pedidos", label: "Pedidos" },
  { key: "resumo", label: "Resumo" },
  { key: "cardapio", label: "Cardápio" },
  { key: "config", label: "Configurações" },
  { key: "assinatura", label: "Assinatura" },
];

const products = [
  { name: "Burger", desc: "Pão brioche, hambúrguer, queijo prato e molho.", price: "R$ 16,99" },
  { name: "Salada", desc: "Pão brioche, hambúrguer, queijo, alface, tomate.", price: "R$ 19,99" },
  { name: "Cheddar", desc: "Pão brioche, hambúrguer, cheddar, cebola.", price: "R$ 21,99" },
  { name: "Calabrinho", desc: "Pão brioche, hambúrguer, calabresa, cream cheese.", price: "R$ 21,99" },
];

const columns = [
  {
    title: "Novos",
    dot: "bg-orange",
    cards: [
      { id: "#12", who: "Ana Paula", tipo: "Entrega", total: "R$ 59,90" },
      { id: "#11", who: "Lucas Santos", tipo: "Retirada", total: "R$ 27,99" },
    ],
  },
  { title: "Em preparo", dot: "bg-butter", cards: [{ id: "#10", who: "João Carlos", tipo: "Entrega", total: "R$ 76,98" }] },
  { title: "A caminho", dot: "bg-mint", cards: [{ id: "#9", who: "Paulo Cesar", tipo: "Entrega", total: "R$ 53,00" }] },
];

const stats = [
  { label: "Faturamento", value: "R$ 1.248,90" },
  { label: "Pedidos", value: "34" },
  { label: "Ticket médio", value: "R$ 36,73" },
];
const bars = [35, 52, 44, 70, 62, 88, 76];

export default function AdminDashboard({ view = "pedidos" }) {
  return (
    <div className="flex h-[420px] bg-white text-left">
      <aside className="w-36 bg-navy shrink-0 py-4 hidden sm:flex flex-col">
        <div className="px-4 pb-4 flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full bg-orange" />
          <span className="text-white font-display font-bold text-sm">Delivroo</span>
        </div>
        <nav className="flex-1 space-y-0.5">
          {navItems.map((item) => (
            <div
              key={item.key}
              className={`px-4 py-1.5 text-[10.5px] ${
                item.key === view ? "bg-white/10 text-white font-semibold border-l-2 border-orange" : "text-white/50"
              }`}
            >
              {item.label}
            </div>
          ))}
        </nav>
        <div className="px-4 pt-3 border-t border-white/10 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange/60 shrink-0" />
          <span className="text-white/70 text-[10px]">Top Burguer</span>
        </div>
      </aside>

      <div className="flex-1 p-5 overflow-hidden bg-[#FAFAF9]">
        {view === "pedidos" && (
          <>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-display font-bold text-lg text-ink">Pedidos</h4>
                <p className="text-[11px] text-ink-soft">Atualizado em tempo real</p>
              </div>
              <span className="bg-mint-light text-mint text-[10px] font-bold px-2.5 py-1.5 rounded-lg shrink-0">
                ● Loja aberta
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {columns.map((c) => (
                <div key={c.title} className="bg-white rounded-xl border border-black/5 p-2 min-h-[280px]">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold text-ink mb-2">
                    <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                    {c.title}
                  </p>
                  <div className="space-y-2">
                    {c.cards.map((o) => (
                      <div key={o.id} className="rounded-lg border border-black/5 bg-cream/60 p-2">
                        <div className="flex justify-between text-[9.5px]">
                          <span className="font-bold text-ink">{o.id}</span>
                          <span className="font-semibold text-orange-deep">{o.tipo}</span>
                        </div>
                        <p className="text-[10px] text-ink mt-0.5 truncate">{o.who}</p>
                        <p className="text-[10px] font-bold text-ink mt-0.5">{o.total}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {view === "cardapio" && (
          <>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-display font-bold text-lg text-ink">Cardápio</h4>
                <p className="text-[11px] text-ink-soft">Produtos, tamanhos e adicionais</p>
              </div>
              <span className="bg-orange text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg shrink-0">
                + Novo produto
              </span>
            </div>
            <div className="bg-white rounded-xl border border-black/5 overflow-hidden">
              <div className="px-4 py-2.5 border-b border-black/5">
                <p className="text-[12px] font-bold text-ink">Burgers Artesanais</p>
                <p className="text-[10px] text-ink-soft">13 produtos</p>
              </div>
              {products.map((p) => (
                <div key={p.name} className="flex items-center gap-3 px-4 py-2 border-b border-black/5 last:border-0">
                  <div className="w-7 h-7 rounded bg-orange-light shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold text-ink truncate">{p.name}</p>
                    <p className="text-[9px] text-ink-soft truncate">{p.desc}</p>
                  </div>
                  <span className="text-[11px] font-bold text-ink shrink-0">{p.price}</span>
                  <span className="text-[9px] bg-mint-light text-mint font-semibold px-1.5 py-0.5 rounded shrink-0">
                    Disponível
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {view === "resumo" && (
          <>
            <div className="mb-3">
              <h4 className="font-display font-bold text-lg text-ink">Resumo</h4>
              <p className="text-[11px] text-ink-soft">Últimos 7 dias</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-black/5 p-3">
                  <p className="text-[9.5px] text-ink-soft">{s.label}</p>
                  <p className="text-[13px] font-bold text-ink mt-1">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-black/5 p-4 mt-2">
              <p className="text-[10px] font-bold text-ink mb-3">Faturamento por dia</p>
              <div className="flex items-end gap-2 h-32">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 bg-orange/80 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
