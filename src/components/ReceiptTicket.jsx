function zigzagClipPath(teeth = 16) {
  const points = ["0% 0%", "100% 0%", "100% 96%"];
  for (let i = teeth; i >= 0; i--) {
    const x = (i / teeth) * 100;
    const y = i % 2 === 0 ? 100 : 92;
    points.push(`${x}% ${y}%`);
  }
  return `polygon(${points.join(", ")})`;
}

export default function ReceiptTicket({ className = "" }) {
  return (
    <div className={`relative w-[260px] ${className}`}>
      <div className="bg-amber-50 rounded-lg px-5 pt-6 pb-6 font-mono text-ink relative">
        <div className="text-center space-y-0.5 mb-3">
          <p className="text-[11px] font-bold">Top Burguer</p>
          <p className="text-[10px]">Pedido: 2-1701112637</p>
          <p className="text-[9px] text-ink-soft">27/06/2026 20:17</p>
          <p className="text-[9px] font-bold">*** Delivery ***</p>
        </div>
        <div className="border-t border-dashed border-ink/30 my-2" />
        <div className="text-[9px] space-y-0.5 mb-2">
          <p className="font-bold text-[10px]">Cliente</p>
          <p>Paulo Cesar</p>
          <p>(35) 99123-4563</p>
        </div>
        <div className="border-t border-dashed border-ink/30 my-2" />
        <div className="text-[9px] space-y-0.5 mb-2">
          <p className="font-bold text-[10px]">Endereço para Entrega</p>
          <p>Rua Esperança, 25</p>
          <p>Centro - Brazópolis</p>
        </div>
        <div className="border-t border-dashed border-ink/30 my-2" />
        <p className="font-bold text-[10px] text-center mb-1">Itens do Pedido</p>
        <div className="text-[9.5px] space-y-1">
          <div className="flex justify-between">
            <span>1 Cheese Bacon</span>
            <span>R$ 17,00</span>
          </div>
          <p className="text-[8.5px] text-ink-soft pl-1">Ponto da Carne: Ao Ponto / +Ovo: 2,00</p>
          <div className="flex justify-between">
            <span>1 Hot Dog Simples</span>
            <span>R$ 5,00</span>
          </div>
          <p className="text-[8.5px] text-ink-soft pl-1">Obs.: caprichar na mostarda</p>
          <div className="flex justify-between">
            <span>1 Coca-Cola 2L</span>
            <span>R$ 8,00</span>
          </div>
          <div className="flex justify-between">
            <span>2 Pudim Chocolate</span>
            <span>R$ 20,00</span>
          </div>
        </div>
        <div className="border-t border-dashed border-ink/30 my-2" />
        <div className="text-[9.5px] space-y-0.5">
          <div className="flex justify-between">
            <span>Total dos Produtos</span>
            <span>R$ 50,00</span>
          </div>
          <div className="flex justify-between">
            <span>Taxa de Entrega</span>
            <span>R$ 3,00</span>
          </div>
          <div className="flex justify-between font-bold text-[11px] pt-1">
            <span>Total a Pagar</span>
            <span>R$ 53,00</span>
          </div>
        </div>
        <div className="border-t border-dashed border-ink/30 my-2" />
        <div className="text-[9px] text-center space-y-0.5">
          <p className="font-bold">Forma de Pagamento</p>
          <p>Cartão de Débito</p>
        </div>
      </div>
    </div>
  );
}
