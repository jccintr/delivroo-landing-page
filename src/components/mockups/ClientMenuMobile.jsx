const items = [
  { name: "Burger", price: "16,99" },
  { name: "Salada", price: "19,99" },
  { name: "Cheddar", price: "21,99" },
  { name: "Calabrinho", price: "21,99" },
];

export default function ClientMenuMobile() {
  return (
    <div className="h-full flex flex-col bg-[#FAFAF9]">
      <div className="px-3.5 pt-1 pb-3 shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-ink shrink-0" />
          <div className="min-w-0">
            <p className="font-display font-bold text-[11px] text-ink truncate">Brothers Burger ✓</p>
            <p className="text-[8px] text-ink-soft">📍 Rua Benjamin Constant, 55</p>
          </div>
          <span className="ml-auto bg-mint-light text-mint text-[8px] font-bold px-2 py-1 rounded-full shrink-0">
            ● Aberto
          </span>
        </div>
        <div className="bg-white rounded-full border border-black/10 px-3 py-1.5 text-[9px] text-ink-soft/70">
          🔍 Busque por produtos
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-3.5">
        <div className="flex gap-1.5 mb-2.5">
          <span className="text-[8.5px] font-semibold px-2.5 py-1 rounded-full bg-orange text-white whitespace-nowrap">
            Burgers Artesanais
          </span>
          <span className="text-[8.5px] font-semibold px-2.5 py-1 rounded-full bg-white border border-black/10 text-ink-soft whitespace-nowrap">
            Hot Dogs
          </span>
        </div>
        <div className="space-y-2">
          {items.map((it) => (
            <div key={it.name} className="bg-white rounded-lg p-2 flex items-center gap-2 shadow-sm">
              <div className="w-9 h-9 rounded-md bg-orange-light shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[9.5px] font-bold text-ink">{it.name}</p>
                <p className="text-[9px] font-bold text-orange-deep">R$ {it.price}</p>
              </div>
              <span className="w-5 h-5 rounded-full bg-orange text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                +
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="shrink-0 bg-ink text-white flex items-center justify-between px-4 py-2.5 text-[9px] font-bold">
        <span>2 itens</span>
        <span>Finalizar Pedido →</span>
      </div>
    </div>
  );
}
