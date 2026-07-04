const categories = ["Burgers Artesanais", "Hot Dogs", "Porções", "Bebidas"];

const products = [
  { name: "Burger", desc: "Pão brioche, hambúrguer, queijo prato e molho.", price: "16,99" },
  { name: "Salada", desc: "Pão brioche, hambúrguer, queijo, alface, tomate, cebola roxa e molho.", price: "19,99" },
  { name: "Cheddar", desc: "Pão brioche, hambúrguer, cheddar, cebola caramelizada e molho.", price: "21,99" },
  { name: "Calabrinho", desc: "Pão brioche, hambúrguer, calabresa, cream cheese e molho.", price: "21,99" },
];

export default function ClientMenuPreview() {
  return (
    <div className="bg-[#FAFAF9] h-[420px] overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-black/5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-ink shrink-0" />
          <div>
            <p className="font-display font-bold text-sm text-ink flex items-center gap-1">
              Brothers Burger <span className="text-mint text-[11px]">✓</span>
            </p>
            <p className="text-[10px] text-ink-soft">📍 Rua Benjamin Constant, 55</p>
          </div>
        </div>
        <span className="bg-mint-light text-mint text-[10px] font-bold px-2.5 py-1 rounded-full">● Aberto</span>
      </div>
      <div className="px-5 py-3">
        <div className="bg-white rounded-full border border-black/10 px-4 py-2 text-[11px] text-ink-soft/70 mb-3">
          🔍 Busque por produtos ou ingredientes
        </div>
        <div className="flex gap-2 mb-4 overflow-hidden">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`text-[10px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${
                i === 0 ? "bg-orange text-white" : "bg-white border border-black/10 text-ink-soft"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
        <p className="text-orange-deep font-display font-bold text-sm mb-2">Burgers Artesanais</p>
        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-xl p-3 flex items-center gap-2.5 shadow-sm">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-ink">{p.name}</p>
                <p className="text-[9px] text-ink-soft line-clamp-2">{p.desc}</p>
                <p className="text-orange-deep font-bold text-[11px] mt-1">R$ {p.price}</p>
              </div>
              <div className="relative w-12 h-12 rounded-lg bg-orange-light shrink-0">
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white shadow flex items-center justify-center text-orange font-bold text-xs">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
