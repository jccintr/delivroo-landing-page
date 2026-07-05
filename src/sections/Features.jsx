const features = [
  {
    icon: "🛎️",
    title: "Pedidos em tempo real",
    text: "Cada pedido novo aparece na hora, com status de em preparação, a caminho, pronto ou entregue.",
  },
  {
    icon: "🍔",
    title: "Cardápio do seu jeito",
    text: "Categorias, fotos, adicionais e itens selecionáveis (ponto da carne, sabor, tamanho) sem depender de ninguém.",
  },
  {
    icon: "🖨️",
    title: "Impressão térmica automática",
    text: "O pedido sai formatado como cupom, pronto pra grudar na cozinha, com endereço, observações e forma de pagamento.",
  },
  {
    icon: "🛵",
    title: "Entrega ou retirada",
    text: "Configure suas taxas de entrega por região e deixe claro pro cliente quando o pedido é retirado no balcão.",
  },
  {
    icon: "💳",
    title: "Formas de pagamento livres",
    text: "Cadastre pix, cartão, dinheiro e o que mais sua loja aceitar — sem intermediar o pagamento.",
  },
  {
    icon: "📊",
    title: "Relatório de vendas",
    text: "Veja o faturamento do dia, consulte pedidos por data e entenda o que mais vende no seu cardápio.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <span className="text-orange-deep font-bold text-sm uppercase tracking-wide">Recursos</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-3 text-balance">
            Tudo que a sua operação de delivery precisa
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
