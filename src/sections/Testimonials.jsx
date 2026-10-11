import { FaStar } from "react-icons/fa";

/**
 * Seção "Depoimentos" — 4 depoimentos de clientes (donos de loja) usando o Delivroo.
 *
 * Sem fotos reais por enquanto: usamos um avatar com as iniciais do nome,
 * com uma cor de fundo consistente por pessoa. Assim que houver fotos reais
 * (com autorização do cliente), basta trocar o <div> do avatar por uma <img />
 * — ver comentário "TROCAR POR FOTO" abaixo.
 *
 * TODO: substituir os depoimentos de exemplo por depoimentos reais de clientes.
 */
const TESTIMONIALS = [
  {
    name: "Marcos Silva",
    store: "Fast Burguer",
    rating: 5,
    quote:
      "Antes eu pagava comissão pra cada pedido em outros apps. Com o Delivroo pago uma mensalidade fixa e meu lucro aumentou muito. O cardápio digital também ficou muito mais profissional.",
    color: "bg-orange-400",
  },
  {
    name: "Juliana Costa",
    store: "Açaí da Praia",
    rating: 5,
    quote:
      "Depois que comecei a usar o Delivroo, meu faturamento aumentou, meus clientes fazem seus pedidos sem precisar se cadastrar, tudo muito simples e prático.",
    color: "bg-purple-400",
  },
  {
    name: "Roberto Almeida",
    store: "Pizzaria do Beto",
    rating: 5,
    quote:
      "Como não tenho computador, gerencio tudo pelo app no celular mesmo É simples de usar e o suporte responde rápido quando preciso.",
    color: "bg-emerald-500",
  },
  {
    name: "Daniela Silva",
    store: "Doce Ponto Confeitaria",
    rating: 4,
    quote:
      "Migrei de outro sistema de delivery e a diferença no valor da mensalidade foi enorme. Recomendo pra quem quer parar de perder dinheiro com comissão por pedido.",
    color: "bg-rose-400",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 flex flex-col h-full">
      {/* Estrelas */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < testimonial.rating ? "text-[#FF6B35]" : "text-neutral-200"}
            size={14}
          />
        ))}
      </div>

      {/* Comentário */}
      <p className="text-neutral-700 text-sm leading-relaxed flex-1">
        “{testimonial.quote}”
      </p>

      {/* Autor */}
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/5">
        {/* TROCAR POR FOTO: quando houver foto real, substituir o div abaixo por
            <img src="..." alt={testimonial.name} className="w-11 h-11 rounded-full object-cover shrink-0" /> */}
        <div
          className={`w-11 h-11 shrink-0 rounded-full ${testimonial.color} text-white font-bold text-sm flex items-center justify-center`}
        >
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="font-semibold text-neutral-900 text-sm leading-tight">
            {testimonial.name}
          </p>
          <p className="text-xs text-neutral-500">{testimonial.store}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#FAF7F1] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">
          Depoimentos
        </p>
        <h2 className="font-['Baloo_2'] text-3xl md:text-4xl font-bold text-neutral-900">
          Quem usa, recomenda
        </h2>
        <p className="text-neutral-500 mt-3 max-w-xl mx-auto">
          Donos de loja que trocaram comissão por pedido por uma mensalidade fixa e simples.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
