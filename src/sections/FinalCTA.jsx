export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink text-balance">
          Bora tirar seu cardápio do papel e do <span className="text-orange">WhatsApp?</span>
        </h2>
        <p className="text-ink-soft mt-6 text-lg max-w-xl mx-auto leading-relaxed">
          Em poucos minutos colocamos o seu cardápio online. Fale conosco que nós lhe ajudamos a montar o seu cardápio inicial.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <a
            href="#contato"
            //target="_blank"
            rel="noreferrer"
            className="bg-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-deep transition-colors shadow-lg shadow-orange/30"
          >
            Quero meu cardápio online
          </a>
          <a
            href="https://wa.me/5535984522324"
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
