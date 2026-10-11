const steps = [
  {
    n: "1",
    title: "Crie sua loja e monte o cardápio",
    text: "Cadastre-se grátis, escolha um modelo pronto (hamburgueria, pizzaria, açaí ou em branco) e ajuste produtos, preços, cores e bairros atendidos.",
  },
  {
    n: "2",
    title: "Seu cliente pede pelo link",
    text: "Sem baixar aplicativo. Ele monta o pedido, escolhe entrega ou retirada e acompanha o andamento numa página com as cores da sua loja.",
  },
  {
    n: "3",
    title: "Receba, imprima e despache",
    text: "O pedido aparece na hora no painel web, com aviso sonoro. Imprima o cupom, prepare e avance o status até a entrega ou retirada.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Como funciona</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
            Da criação da loja à entrega, só três passos
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-white rounded-2xl p-7 border border-ink/5 shadow-sm">
              <span className="font-display font-extrabold text-5xl text-orange block">{s.n}</span>
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
