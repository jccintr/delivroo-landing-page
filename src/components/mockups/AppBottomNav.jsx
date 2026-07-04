const items = [
  { key: "home", label: "Home", icon: "⌂" },
  { key: "pedidos", label: "Pedidos", icon: "🛒" },
  { key: "cardapio", label: "Cardápio", icon: "🍽" },
  { key: "ajustes", label: "Ajustes", icon: "⚙" },
];

export default function AppBottomNav({ active = "home" }) {
  return (
    <div className="flex items-center justify-around border-t border-black/5 bg-white py-1.5 shrink-0">
      {items.map((i) => (
        <div
          key={i.key}
          className={`flex flex-col items-center gap-0.5 text-[8px] ${
            i.key === active ? "text-orange font-bold" : "text-ink-soft/60"
          }`}
        >
          <span className="text-[13px] leading-none">{i.icon}</span>
          {i.label}
        </div>
      ))}
    </div>
  );
}
