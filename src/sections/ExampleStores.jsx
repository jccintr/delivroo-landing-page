import { FiExternalLink, FiMapPin, FiPhone, FiSearch } from "react-icons/fi";

/**
 * Seção "Lojas de exemplo" — mostra duas lojas reais usando o Delivroo,
 * recriadas em código (mesmo padrão dos outros mockups da landing page),
 * cada uma com um link que abre a loja de verdade em nova aba.
 *
 * TODO: substituir os links de exemplo abaixo pelas URLs reais das lojas.
 */
const STORES = [
  {
    url: "delivroo.app.br/acaidapraia",
    href: "https://lojas.delivroo.app.br/acaidapraia",
    name: "Açaí da Praia",
    address: "Rua da Praia, 123",
    phone: "12-99653-3500",
    emoji: "🍧",
    logoFrom: "from-purple-400",
    logoTo: "to-orange-300",
    sectionTitle: "Açaí na Tigela",
    categories: ["Açaí na Tigela", "Açaí Premium", "Combos", "Bebidas"],
    products: [
      { name: "Açaí 300ml", desc: "Açaí tradicional na tigela de 300ml", price: "14,90", emoji: "🍨" },
      { name: "Açaí 500ml", desc: "Açaí tradicional na tigela de 500ml", price: "19,90", emoji: "🍨" },
      { name: "Açaí c/ Nutella", desc: "Açaí 500ml com Nutella", price: "17,90", emoji: "🍫" },
    ],
  },
  {
    url: "delivroo.app.br/fastburguer",
    href: "https://lojas.delivroo.app.br/fastburguer",
    name: "Fast Burguer",
    address: "Av. Cel. Fco Braz, 372",
    phone: "35-98452-2324",
    emoji: "🍔",
    logoFrom: "from-orange-400",
    logoTo: "to-red-400",
    sectionTitle: "Hamburgueres",
    categories: ["Hamburgueres", "Porções", "Bebidas", "Sobremesas"],
    products: [
      { name: "Fast Classic", desc: "Pão brioche, blend bovino 160g, queijo...", price: "19,99", emoji: "🍔" },
      { name: "Fast Bacon", desc: "Pão brioche, blend bovino 160g, bacon...", price: "24,99", emoji: "🥓" },
      { name: "Fast Smash Duplo", desc: "Pão brioche, dois hambúrgueres smash...", price: "22,99", emoji: "🍔" },
    ],
  },
];

function StoreMockup({ store }) {
  return (
    <div className="flex flex-col min-w-0">
      {/* Janela do navegador */}
      <div className="rounded-2xl overflow-hidden border border-black/5 shadow-xl bg-white min-w-0">
        {/* Barra do navegador */}
        <div className="flex items-center gap-2 bg-[#EDE7DD] px-4 py-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 min-w-0 bg-white rounded-md px-3 py-1 text-xs text-neutral-500 font-mono truncate">
            {store.url}
          </div>
        </div>

        {/* Conteúdo recriado da loja */}
        <div className="bg-[#FAF7F1] p-5">
          {/* Cabeçalho da loja */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${store.logoFrom} ${store.logoTo} flex items-center justify-center text-2xl`}
              >
                {store.emoji}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-neutral-900 leading-tight truncate">{store.name}</p>
                <p className="flex items-center gap-1 text-xs text-neutral-500 mt-0.5">
                  <FiMapPin className="shrink-0" />
                  <span className="truncate">{store.address}</span>
                </p>
                <p className="flex items-center gap-1 text-xs text-neutral-500">
                  <FiPhone className="shrink-0" />
                  <span className="truncate">{store.phone}</span>
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Aberto
            </span>
          </div>

          {/* Busca */}
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 mb-3 text-neutral-400 text-xs">
            <FiSearch />
            Busque por produtos ou ingredientes
          </div>

          {/* Categorias */}
          <div className="flex gap-2 mb-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {store.categories.map((cat, i) => (
              <span
                key={cat}
                className={`text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap ${
                  i === 0 ? "bg-[#FF6B35] text-white font-medium" : "bg-white text-neutral-500"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Produtos */}
          <p className="text-[#FF6B35] font-bold text-sm mb-2">{store.sectionTitle}</p>
          <div className="grid grid-cols-3 gap-2">
            {store.products.map((p) => (
              <div key={p.name} className="min-w-0 bg-white rounded-lg p-2 shadow-sm">
                <div className="w-full aspect-square rounded-md bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-xl mb-2">
                  {p.emoji}
                </div>
                <p className="text-[11px] font-semibold text-neutral-800 leading-tight truncate">{p.name}</p>
                <p className="text-[11px] font-bold text-[#FF6B35] mt-1">R$ {p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <a
        href={store.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center gap-2 self-center rounded-full border border-[#FF6B35] text-[#FF6B35] font-semibold text-sm px-5 py-2.5 hover:bg-[#FF6B35] hover:text-white transition-colors"
      >
        Ver cardápio da {store.name} <FiExternalLink />
      </a>
    </div>
  );
}

export default function ExampleStores() {
  return (
    <section className="bg-white py-20 px-6 overflow-x-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">
          Lojas de exemplo
        </p>
        <h2 className="font-['Baloo_2'] text-3xl md:text-4xl font-bold text-neutral-900">
          Veja o Delivroo funcionando de verdade
        </h2>
        <p className="text-neutral-500 mt-3 max-w-xl mx-auto">
          Estes são cardápios reais de clientes Delivroo. Clique para abrir e navegar como um cliente faria.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {STORES.map((store) => (
          <StoreMockup key={store.name} store={store} />
        ))}
      </div>
    </section>
  );
}
