import AppBottomNav from "./AppBottomNav";

const stat = (label, value, bg, text = "text-white") => ({ label, value, bg, text });

const stats = [
  stat("Pedidos recebidos", "8", "bg-[#FF6B7A]"),
  stat("Pedidos entregues", "1", "bg-cherry"),
  stat("Pedidos retirados", "1", "bg-mint"),
  stat("Faturamento", "R$ 53,00", "bg-[#2E6BFF]"),
];

export default function AppHomeScreen() {
  return (
    <div className="h-full flex flex-col bg-[#F5F6F8]">
      <div className="bg-orange px-4 py-3 flex items-center justify-between shrink-0">
        <span className="text-white font-display font-bold text-sm">Gestor Delivroo</span>
        <div className="flex gap-2 text-white/90 text-xs">↻ ⏻</div>
      </div>
      <div className="p-3 space-y-3 flex-1 overflow-hidden">
        <div className="bg-white rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm">
          <div className="w-9 h-9 rounded-full bg-ink shrink-0" />
          <span className="text-[11px] font-bold text-ink">BROTHERS BURGER</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-mint rounded-xl p-2.5 text-white">
            <p className="text-[10px] opacity-90">Status da loja</p>
            <p className="text-xs font-bold mt-1">Loja Aberta</p>
          </div>
          <div className="bg-butter rounded-xl p-2.5 text-ink">
            <p className="text-[10px] opacity-70">Tempo de espera</p>
            <p className="text-xs font-bold mt-1">15 a 30min</p>
          </div>
          {stats.map((s) => (
            <div key={s.label} className={`${s.bg} rounded-xl p-2.5 ${s.text}`}>
              <p className="text-[10px] opacity-90 leading-tight">{s.label}</p>
              <p className="text-lg font-display font-extrabold mt-1">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
      <AppBottomNav active="home" />
    </div>
  );
}
