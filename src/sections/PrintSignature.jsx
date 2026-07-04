import ReceiptTicket from "../components/ReceiptTicket";

export default function PrintSignature() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-x-8 -top-4 h-8 bg-ink/90 rounded-t-md" />
            <div className="absolute inset-x-10 -top-6 h-4 bg-ink/70 rounded-t-md" />
            <ReceiptTicket className="relative z-10" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Impressão térmica</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
            O pedido aceito já sai pronto pra cozinha.
          </h2>
          <p className="text-ink-soft mt-5 text-lg leading-relaxed">
            Chega de copiar pedido de tela em tela. Ao aceitar, o Delivroo manda o cupom direto pra
            sua impressora térmica: itens, observações do cliente, endereço de entrega e forma de
            pagamento — tudo organizado, do mesmo jeito que sua equipe já está acostumada a ler.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Observações do cliente destacadas em cada item",
              "Endereço completo pra quem vai entregar",
              "Reimpressão com um clique, direto do painel web",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-ink">
                <span className="text-mint font-bold mt-0.5">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
