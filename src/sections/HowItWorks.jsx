const steps = [
  {
    n: "01",
    title: "Cliente abre o link do cardápio",
    text: "Sem baixar aplicativo. Ele monta o pedido, informa apenas nome e telefone e escolhe entre entrega ou retirada.",
  },
  {
    n: "02",
    title: "Você recebe o pedido na hora",
    text: "O pedido cai no app Gestor Delivroo no seu celular ou no painel web, com um alerta sonoro e os itens, observações e endereço completos.",
  },
  {
    n: "03",
    title: "Aceita, imprime e despacha",
    text: "Um toque envia o pedido pra impressora térmica no formato de cupom, pronto pra cozinha. Depois é só atualizar o status até a entrega.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Como funciona</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
            Do link ao cupom impresso, em três passos.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-white rounded-2xl p-7 border border-ink/5 shadow-sm">
              <span className="font-display font-extrabold text-5xl text-orange-light block">{s.n}</span>
              <h3 className="font-display font-bold text-xl text-ink mt-4">{s.title}</h3>
              <p className="text-ink-soft mt-3 leading-relaxed">{s.text}</p>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-3 text-orange/40 text-2xl">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
