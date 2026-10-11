const features = [
  {
    icon: "🛎️",
    title: "Pedidos em tempo real",
    text: "O pedido aparece na hora no painel, com aviso sonoro, em quadro por etapa: novos, em preparo, prontos e finalizados. Funciona em vários aparelhos ao mesmo tempo.",
  },
  {
    icon: "🧩",
    title: "Cardápio do seu jeito",
    text: "Categorias, fotos, vários tamanhos e preços, grupos de adicionais e itens obrigatórios, com preço por tamanho. Serve para pizza, lanche, açaí, marmita e o que mais você vender.",
  },
  {
    icon: "🎨",
    title: "Com a cara da sua loja",
    text: "Logo e cores da sua marca no cardápio e na página de acompanhamento do pedido. Seu cliente reconhece você, não o sistema.",
  },
  {
    icon: "🖨️",
    title: "Impressão de pedidos",
    text: "Cupom para impressora térmica (bobina de 58 mm) com itens, adicionais, observações, endereço, troco e forma de pagamento. Menos erro entre o caixa, a cozinha e a entrega.",
  },
  {
    icon: "🛵",
    title: "Entrega ou retirada",
    text: "Seu cliente escolhe receber em casa ou retirar no balcão. Taxa de entrega por bairro, tempos de espera e horários de funcionamento configuráveis.",
  },
  {
    icon: "💬",
    title: "Status no WhatsApp",
    text: "A cada mudança de status, um clique abre o WhatsApp com a mensagem pronta para o cliente. Você personaliza o texto de cada etapa.",
  },
  {
    icon: "📍",
    title: "Cliente acompanha o pedido",
    text: "Depois de pedir, o cliente vê em que etapa está o pedido, sem precisar ficar perguntando no WhatsApp.",
  },
  {
    icon: "💳",
    title: "Formas de pagamento livres",
    text: "Pix, cartão, dinheiro (com troco) e o que mais sua loja aceitar. Sua chave Pix aparece para o cliente na página do pedido.",
  },
  {
    icon: "📊",
    title: "Resumo de vendas",
    text: "Faturamento, ticket médio, pedidos por hora, mais vendidos e comparativo entre entrega e retirada. Hoje, ontem, 7 ou 30 dias e mês.",
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
