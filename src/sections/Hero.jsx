import phone from "../assets/tela-cliente-mobile.webp";
import { SIGNUP_URL, TRIAL_DAYS } from "../config";

export default function Hero() {
  return (
    <section id="topo" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-light/60 via-cream to-cream" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-white border border-ink/10 rounded-full px-3.5 py-1.5 text-xs font-bold text-orange-deep shadow-sm">
            🛵 Um sistema só para qualquer tipo de delivery
          </span>
          <h1 className="font-display font-extrabold text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.03] text-ink mt-5 text-balance">
            Seu delivery online, <br />
            do <span className="text-orange">seu jeito</span>
          </h1>
          <p className="text-lg text-ink-soft mt-6 max-w-lg leading-relaxed">
            Hamburgueria, pizzaria, açaí, restaurante, doceria ou padaria. Monte seu cardápio com os
            tamanhos e adicionais que o seu negócio precisa. O cliente pede pelo link, sem baixar nada, e você
            recebe na hora no painel web. Sem taxa ou comissão por pedido.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={SIGNUP_URL}
              className="bg-orange text-white font-bold px-7 py-4 rounded-full hover:bg-orange-deep transition-colors shadow-lg shadow-orange/30"
            >
              Criar minha loja grátis
            </a>
            <a
              href="#como-funciona"
              className="font-bold text-ink px-7 py-4 rounded-full border-2 border-ink/10 hover:border-ink/30 transition-colors"
            >
              Ver como funciona
            </a>
          </div>
          <p className="text-sm text-ink-soft mt-4">
            {TRIAL_DAYS} dias de teste grátis.
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[260px] sm:w-[290px]">
            <div className="rounded-[2.8rem] bg-ink p-2.5 shadow-2xl shadow-ink/30">
              <div className="rounded-[2.3rem] overflow-hidden bg-white aspect-[9/19]">
                <img
                  src={phone}
                  alt="Cardápio digital da loja no celular do cliente"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -left-[3px] top-28 w-[3px] h-9 bg-ink/80 rounded-l" />
            <div className="absolute -left-[3px] top-44 w-[3px] h-14 bg-ink/80 rounded-l" />
            <div className="absolute -right-[3px] top-36 w-[3px] h-16 bg-ink/80 rounded-r" />
          </div>
        </div>
      </div>
    </section>
  );
}
