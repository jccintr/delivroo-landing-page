function Sep() {
  return <div className="border-t border-dashed border-ink/30 my-2" />;
}

function Row({ a, b, bold = false }) {
  return (
    <div className={`flex justify-between gap-2 ${bold ? "font-bold" : ""}`}>
      <span>{a}</span>
      <span className="whitespace-nowrap">{b}</span>
    </div>
  );
}

export default function ReceiptTicket({ className = "" }) {
  return (
    <div className={`relative w-[260px] ${className}`}>
      <div className="bg-yellow-100 rounded-lg px-5 pt-6 pb-6 font-mono text-ink relative">
        <div className="text-center space-y-0.5 mb-3">
          <p className="text-[12px] font-bold">Top Burguer</p>
          <p className="text-[10px]">
            Pedido: <b>#27</b>
          </p>
          <p className="text-[9px] text-ink-soft">10/10/2026 20:17</p>
          <p className="text-[11px] font-bold pt-1">*** ENTREGAR ***</p>
        </div>

        <p className="font-bold text-[9.5px] text-center">CLIENTE</p>
        <div className="text-[9px] text-center mb-1">
          <p>Paulo Cesar</p>
          <p>(35) 99123-4563</p>
        </div>
        <Sep />
        <p className="font-bold text-[9.5px] text-center">FORMA DE PAGAMENTO</p>
        <div className="text-[9px] text-center mb-1">
          <p>Dinheiro</p>
          <p>Troco para R$ 100,00 <b>(troco R$ 47,00)</b></p>
        </div>
        <Sep />
        <p className="font-bold text-[9.5px] text-center">ENDEREÇO DE ENTREGA</p>
        <div className="text-[9px] text-center mb-1">
          <p>Rua Esperança, 25</p>
          <p>Centro</p>
        </div>
        <Sep />
        <p className="font-bold text-[9.5px] text-center mb-1">ITENS DO PEDIDO</p>
        <div className="text-[9.5px] space-y-1.5">
          <div>
            <Row a={<b>1x Cheese Bacon (Duplo)</b>} b="R$ 27,00" />
            <p className="text-[8.5px] pl-1.5">Ponto da carne: Ao ponto</p>
            <p className="text-[8.5px] pl-1.5">+ Ovo: R$ 2,00</p>
            <p className="text-[8.5px] pl-1.5">+ Cheddar: R$ 3,00</p>
          </div>
          <div>
            <Row a={<b>1x Hot Dog</b>} b="R$ 5,00" />
            <p className="text-[8.5px] font-bold pl-1.5">Obs.: caprichar na mostarda</p>
          </div>
          <Row a={<b>1x Coca-Cola 2L</b>} b="R$ 8,00" />
        </div>
        <Sep />
        <div className="text-[9.5px] space-y-0.5">
          <Row a="Total dos produtos:" b="R$ 45,00" />
          <Row a="Taxa de entrega:" b="R$ 3,00" />
          <div className="pt-1 text-[11px]">
            <Row a="Total a pagar:" b="R$ 48,00" bold />
          </div>
        </div>
        <p className="text-[9px] text-center mt-3">Obrigado pela preferência!</p>
      </div>
    </div>
  );
}
