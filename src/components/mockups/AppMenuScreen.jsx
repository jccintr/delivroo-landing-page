import AppBottomNav from "./AppBottomNav";

const categories = [
  {
    name: "Hot Dogs",
    count: 2,
    items: [
      { name: "Hot Dog Simples", desc: "Pão, salsicha, catchup e mostarda.", price: "R$ 5,00" },
      { name: "Hot Dog Especial", desc: "Pão, purê, salsicha, batata-palha.", price: "R$ 8,00" },
    ],
  },
  {
    name: "Lanches",
    count: 5,
    items: [
      { name: "Cheese Bacon", desc: "Pão brioche, hambúrguer, queijo, bacon.", price: "R$ 15,00" },
    ],
  },
];

export default function AppMenuScreen() {
  return (
    <div className="h-full flex flex-col bg-[#F5F6F8]">
      <div className="bg-orange px-4 py-3 flex items-center justify-between shrink-0">
        <span className="text-white font-display font-bold text-sm">Cardápio</span>
        <span className="text-white text-lg leading-none">+</span>
      </div>
      <div className="p-2.5 space-y-2.5 flex-1 overflow-hidden">
        {categories.map((c) => (
          <div key={c.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-2.5 py-2 flex items-center justify-between border-b border-black/5">
              <span className="text-[11px] font-bold text-ink">{c.name} ({c.count})</span>
              <span className="text-ink-soft text-[10px]">⌄</span>
            </div>
            {c.items.map((it) => (
              <div key={it.name} className="flex gap-2 px-2.5 py-2 items-center">
                <div className="w-9 h-9 rounded-md bg-orange-light shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-ink truncate">{it.name}</p>
                  <p className="text-[8.5px] text-ink-soft truncate">{it.desc}</p>
                  <p className="text-[10px] font-bold text-orange-deep">{it.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <AppBottomNav active="cardapio" />
    </div>
  );
}
