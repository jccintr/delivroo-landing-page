import AppBottomNav from "./AppBottomNav";

const statusStyles = {
  "EM PREPARAÇÃO": "bg-butter text-ink",
  "A CAMINHO": "bg-orange text-white",
  "PRONTO": "bg-[#2E6BFF] text-white",
  "NOVO": "bg-[#FFE24D] text-ink",
  "CANCELADO": "bg-cherry text-white",
  "RETIRADO": "bg-mint text-white",
  "ENTREGUE": "bg-[#2FA84F] text-white",
};

const orders = [
  { name: "Claudia Bernardes", type: "Delivery", status: "EM PREPARAÇÃO", value: "R$ 41,00" },
  { name: "Julio Gomes", type: "Retirar no Balcão", status: "EM PREPARAÇÃO", value: "R$ 20,00" },
  { name: "Carla Maria Pereira", type: "Delivery", status: "A CAMINHO", value: "R$ 91,00" },
  { name: "João Carlos de Sá", type: "Retirar no Balcão", status: "PRONTO", value: "R$ 16,00" },
  { name: "Daniela Oliveira", type: "Delivery", status: "NOVO", value: "R$ 63,00" },
];

export default function AppOrdersScreen() {
  return (
    <div className="h-full flex flex-col bg-[#F5F6F8]">
      <div className="bg-orange px-4 py-3 flex items-center justify-between shrink-0">
        <span className="text-white font-display font-bold text-sm">Pedidos</span>
        <div className="flex gap-2 text-white/90 text-xs">⚲ ↻</div>
      </div>
      <div className="p-2.5 space-y-2 flex-1 overflow-hidden">
        {orders.map((o) => (
          <div key={o.name} className="bg-white rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-ink truncate pr-2">{o.name}</span>
              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${statusStyles[o.status]} shrink-0`}>
                {o.status}
              </span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[9px] text-ink-soft flex items-center gap-1">
                {o.type === "Delivery" ? "🛵" : "🛍️"} {o.type}
              </span>
              <span className="text-[10px] font-bold text-ink">{o.value}</span>
            </div>
          </div>
        ))}
      </div>
      <AppBottomNav active="pedidos" />
    </div>
  );
}
