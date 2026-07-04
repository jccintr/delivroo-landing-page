const navItems = [
  "Dashboard",
  "Pedidos",
  "Pedidos por Dia",
  "Cardápio",
  "Categorias",
  "Taxas de Entrega",
  "Formas de Pagamento",
];

const products = [
  { name: "Burger", desc: "Pão brioche, hambúrguer, queijo prato e molho.", price: "R$ 16,99" },
  { name: "Salada", desc: "Pão brioche, hambúrguer, queijo, alface, tomate.", price: "R$ 19,99" },
  { name: "Cheddar", desc: "Pão brioche, hambúrguer, cheddar, cebola.", price: "R$ 21,99" },
  { name: "Calabrinho", desc: "Pão brioche, hambúrguer, calabresa, cream cheese.", price: "R$ 21,99" },
];

const orders = [
  { id: "#5-1782691415", cliente: "Julio Cesar", tipo: "Retirar", tipoColor: "text-cherry", total: "36,98" },
  { id: "#5-1782686271", cliente: "João Bôsco de Sá Neto", tipo: "Entregar", tipoColor: "text-mint", total: "76,98" },
  { id: "#5-1782685562", cliente: "Thiago Martins", tipo: "Entregar", tipoColor: "text-mint", total: "59,97" },
  { id: "#5-1782684391", cliente: "Maria Cristina Machado", tipo: "Entregar", tipoColor: "text-mint", total: "27,99" },
];

export default function AdminDashboard({ view = "cardapio" }) {
  return (
    <div className="flex h-[420px] bg-white text-left">
      <aside className="w-40 bg-navy shrink-0 py-4 hidden sm:flex flex-col">
        <div className="px-4 pb-4 flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full bg-orange" />
          <span className="text-white font-display font-bold text-sm">Delivroo</span>
        </div>
        <nav className="flex-1 space-y-0.5">
          {navItems.map((item) => {
            const active =
              (view === "cardapio" && item === "Cardápio") ||
              (view === "pedidos" && item === "Pedidos por Dia");
            return (
              <div
                key={item}
                className={`px-4 py-1.5 text-[10.5px] ${
                  active ? "bg-white/10 text-white font-semibold border-l-2 border-orange" : "text-white/50"
                }`}
              >
                {item}
              </div>
            );
          })}
        </nav>
        <div className="px-4 pt-3 border-t border-white/10 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange/60 shrink-0" />
          <span className="text-white/70 text-[10px]">Brothers Burger</span>
        </div>
      </aside>

      <div className="flex-1 p-5 overflow-hidden bg-[#FAFAF9]">
        {view === "cardapio" ? (
          <>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-display font-bold text-lg text-ink">Cardápio</h4>
                <p className="text-[11px] text-ink-soft">Gerencie as categorias e produtos da sua loja</p>
              </div>
              <span className="bg-orange text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg shrink-0">
                + Novo Produto
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
                    Ativo
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-3">
              <h4 className="font-display font-bold text-lg text-ink">Pedidos por Dia</h4>
              <p className="text-[11px] text-ink-soft">Visualize os pedidos de um dia específico</p>
            </div>
            <div className="bg-white rounded-xl border border-black/5 overflow-hidden">
              <div className="grid grid-cols-[1fr_1.4fr_0.8fr_0.6fr] gap-2 px-4 py-2 border-b border-black/5 text-[9.5px] font-bold text-ink-soft">
                <span>Pedido</span>
                <span>Cliente</span>
                <span>Entrega</span>
                <span>Total</span>
              </div>
              {orders.map((o) => (
                <div
                  key={o.id}
                  className="grid grid-cols-[1fr_1.4fr_0.8fr_0.6fr] gap-2 px-4 py-2 border-b border-black/5 last:border-0 items-center"
                >
                  <span className="text-[9.5px] font-mono text-ink-soft truncate">{o.id}</span>
                  <span className="text-[10.5px] text-ink truncate">{o.cliente}</span>
                  <span className={`text-[10px] font-semibold ${o.tipoColor}`}>{o.tipo}</span>
                  <span className="text-[10.5px] font-bold text-ink">R$ {o.total}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
