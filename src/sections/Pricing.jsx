const included = [
  "Cardápio digital ilimitado, com seu link próprio",
  "App Gestor Delivroo para Android",
  "Painel administrativo web completo",
  "Impressão térmica dos pedidos",
  "Categorias, adicionais e itens selecionáveis",
  "Taxas de entrega e formas de pagamento configuráveis",
  "Relatório de vendas e pedidos por dia",
  "Suporte direto com o desenvolvedor",
];

export default function Pricing() {
  return (
    <section id="preco" className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange/10 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-orange font-bold text-sm uppercase tracking-wide">Preço</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3 text-balance">
            Uma assinatura. Zero taxa por pedido.
          </h2>
          <p className="text-white/60 mt-5 text-lg leading-relaxed">
            Muita plataforma de delivery cobra uma comissão em cima de cada venda: quanto mais você
            vende, mais você paga. No Delivroo o valor é fixo — o quanto sua loja crescer, o custo
            continua o mesmo.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 grid md:grid-cols-[1fr_1.3fr] gap-10">
          <div className="flex flex-col">
            <p className="font-display font-bold text-ink text-lg">Plano Delivroo</p>
            <div className="flex items-end gap-2 mt-3">
              <span className="font-display font-extrabold text-5xl text-ink">R$ 99,90</span>
              <span className="text-ink-soft font-semibold mb-1.5">/mês</span>
            </div>
            <p className="text-ink-soft mt-2 text-sm">Sem taxa por pedido, sem comissão, sem letras miúdas.</p>
            <a
              href="https://www.delivroo.app.br"
              target="_blank"
              rel="noreferrer"
              className="mt-8 bg-orange text-white font-bold text-center px-6 py-4 rounded-full hover:bg-orange-deep transition-colors"
            >
              Assinar o Delivroo
            </a>
            <p className="text-ink-soft/70 text-xs mt-3 text-center">Cancele quando quiser.</p>
          </div>
          <div>
            <p className="font-bold text-ink mb-4">O que está incluso:</p>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
              {included.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-ink">
                  <span className="text-mint font-bold mt-0.5 shrink-0">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
