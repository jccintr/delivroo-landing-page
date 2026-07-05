import PhoneFrame from "../components/PhoneFrame";
import ClientMenuMobile from "../components/mockups/ClientMenuMobile";
import ReceiptTicket from "../components/ReceiptTicket";
import phone from "../assets/tela-principal-mobile.png"

export default function Hero() {
  return (
    <section id="topo" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-light/60 via-cream to-cream" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-white border border-ink/10 rounded-full px-3.5 py-1.5 text-xs font-bold text-orange-deep shadow-sm">
            🍔 Perfeito para hamburguerias e similares
          </span>
          <h1 className="font-display font-extrabold text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.03] text-ink mt-5 text-balance">
            O cardápio digital que vira{" "}
            <span className="text-orange">pedido pronto pra imprimir</span>.
          </h1>
          <p className="text-lg text-ink-soft mt-6 max-w-lg leading-relaxed">
            Seu cliente pede pelo link, sem baixar nada e sem cadastro. Você recebe o pedido na hora no
            aplicativo gestor ou no painel web. Tudo muito simples e prático.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="https://www.delivroo.app.br"
              target="_blank"
              rel="noreferrer"
              className="bg-orange text-white font-bold px-7 py-4 rounded-full hover:bg-orange-deep transition-colors shadow-lg shadow-orange/30"
            >
              Quero meu cardápio no ar
            </a>
            <a
              href="#como-funciona"
              className="font-bold text-ink px-7 py-4 rounded-full border-2 border-ink/10 hover:border-ink/30 transition-colors"
            >
              Ver como funciona
            </a>
          </div>
          <div className="flex items-center gap-6 mt-10 text-sm text-ink-soft">
            <div>
              <p className="font-display font-extrabold text-2xl text-ink">R$ 99,90</p>
              <p>assinatura fixa por mês</p>
            </div>
            <div className="w-px h-10 bg-ink/10" />
            <div>
              <p className="font-display font-extrabold text-2xl text-ink">R$ 0</p>
              <p>de taxa por pedido</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img src={phone} alt="Tela principal do aplicativo mobile" className="w-3/4 md:w-7/12" />
        </div>
      </div>
    </section>
  );
}
