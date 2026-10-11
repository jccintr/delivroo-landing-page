import { SIGNUP_URL } from "../config";

const segments = [
  { icon: "🍔", name: "Hamburgueria", hint: "ponto da carne, adicionais, combos" },
  { icon: "🍕", name: "Pizzaria", hint: "tamanhos, sabores e bordas" },
  { icon: "🍧", name: "Açaí e sorvetes", hint: "tamanhos e coberturas à escolha" },
  { icon: "🍱", name: "Marmitaria", hint: "prato do dia, acompanhamentos" },
  { icon: "🍰", name: "Doceria e confeitaria", hint: "encomendas e kits" },
  { icon: "🥖", name: "Padaria e cafeteria", hint: "salgados, bebidas, cestas" },
  { icon: "🍣", name: "Japonês e restaurantes", hint: "combinados, porções" },
  { icon: "🍺", name: "Bebidas e conveniência", hint: "adegas, mercearias, lanches" },
  { icon: "🐾", name: "Pet shop, farmácia e mais", hint: "se vende e entrega, cabe aqui" },
];

const flex = [
  "Vários tamanhos e preços por produto",
  "Grupos de adicionais e itens obrigatórios, com regras de mínimo e máximo",
  "Preço do adicional diferente para cada tamanho",
  "Entrega com taxa por bairro, retirada no balcão ou os dois",
  "Horários de funcionamento e formas de pagamento do seu jeito",
];

export default function Segments() {
  return (
    <section id="segmentos" className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-[500px] h-[300px] bg-orange/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="max-w-2xl mb-14">
          <span className="text-orange font-bold text-sm uppercase tracking-wide">Flexível de verdade</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3 text-balance">
            Se você vende e entrega, o Delivroo se adapta ao seu negócio
          </h2>
          <p className="text-white/60 mt-5 text-lg leading-relaxed">
            Nada de sistema engessado para um tipo de loja. Você monta o cardápio do seu jeito, com os tamanhos,
            adicionais e regras que o seu produto pede. E para começar rápido, escolha um modelo pronto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {segments.map((s) => (
            <div key={s.name} className="bg-navy-2 border border-white/5 rounded-2xl p-5 flex items-start gap-4">
              <span className="text-3xl">{s.icon}</span>
              <div>
                <h3 className="font-display font-bold text-white">{s.name}</h3>
                <p className="text-white/50 text-sm mt-0.5">{s.hint}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
          <ul className="bg-white rounded-3xl p-7 sm:p-9 space-y-3">
            {flex.map((t) => (
              <li key={t} className="flex items-start gap-3 text-ink">
                <span className="text-mint font-bold mt-0.5">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="bg-orange rounded-3xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <p className="font-display font-extrabold text-2xl text-white">Comece com um modelo pronto</p>
              <p className="text-white/90 mt-2">
                Hamburgueria, pizzaria, açaí ou cardápio em branco. Já vem com categorias, produtos e adicionais de
                exemplo para você só ajustar.
              </p>
            </div>
            <a
              href={SIGNUP_URL}
              className="mt-6 self-start bg-white text-orange-deep font-bold px-6 py-3 rounded-full hover:bg-cream transition-colors"
            >
              Criar minha loja grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
