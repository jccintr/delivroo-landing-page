import ReceiptTicket from "../components/ReceiptTicket";

export default function PrintSignature() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <ReceiptTicket className="relative z-10  border-2 border-ink/30 rounded-lg shadow-lg shadow-ink/50" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Impressão de Pedidos</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
            Da tela, direto pra cozinha
          </h2>
          <p className="text-ink-soft mt-5 text-lg leading-relaxed">
            Chega de anotar o pedido em um bloco de notas. O cupom tem tudo para a cozinha e para a entrega:
            itens, adicionais com o valor ao lado, observações, endereço, forma de pagamento e troco. Funciona
            em impressora térmica de 58 mm e se vê de longe se é para entregar ou retirar.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Entregar ou retirada em destaque no topo do cupom",
              "Adicionais com o preço ao lado e observações do cliente destacadas",
              "Endereço completo pra quem vai entregar",
              "Troco calculado para o entregador, sem fazer conta",
              "Reimprima quantas vezes precisar",
              "Elimina os erros de comunicação entre o caixa e a cozinha",
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
