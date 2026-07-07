const features = [
  {
    icon: "🛎️",
    title: "Pedidos em tempo real",
    text: "Seu cliente faz o pedido e você recebe na hora. Daí é só prepearar e notificar o cliente quando estiver pronto.",
  },
  {
    icon: "🍔",
    title: "Cardápio do seu jeito",
    text: "Categorias, foto, adicionais e itens selecionáveis configuráveis para cada produto.",
  },
  {
    icon: "🖨️",
    title: "Impressão de pedidos",
    text: "O pedido impresso tem todas as informações para o pessoal da cozinha e de entrega. Tudo para facilitar sua operação e evitar erros.",
  },
  {
    icon: "🛵",
    title: "Entrega ou retirada",
    text: "Seu cliente escolhe se quer receber em casa ou retirar no balcão. As taxas de entrega são diferenciadas por bairro.",
  },
  {
    icon: "💳",
    title: "Formas de pagamento livres",
    text: "Cadastre pix, cartão, dinheiro e o que mais sua loja aceitar como forma de pagamento.",
  },
  {
    icon: "📊",
    title: "Relatório de vendas",
    text: "Relatório de vendas mensal completo com faturamento por dia. Acompanhe o desempenho do seu negócio e tome decisões estratégicas.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Recursos</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
            Tudo que a sua operação de delivery precisa0
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-7 rounded-2xl border border-ink/5 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5 transition-all bg-cream/40"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-display font-bold text-lg text-ink mt-4">{f.title}</h3>
              <p className="text-ink-soft mt-2 leading-relaxed text-[0.95rem]">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
