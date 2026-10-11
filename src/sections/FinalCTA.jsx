import { SIGNUP_URL, WHATSAPP_URL } from "../config";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink text-balance">
          Bora tirar seu cardápio do papel e do <span className="text-orange">WhatsApp?</span>
        </h2>
        <p className="text-ink-soft mt-6 text-lg max-w-xl mx-auto leading-relaxed">
          Crie sua conta, teste grátis por 14 dias e coloque seu cardápio online em poucos minutos. Precisa de ajuda para montar o cardápio inicial? Fale com a gente.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <a
            href={SIGNUP_URL}
            className="bg-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-deep transition-colors shadow-lg shadow-orange/30"
          >
            Criar minha loja grátis
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-ink px-8 py-4 rounded-full border-2 border-ink/10 hover:border-ink/30 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
