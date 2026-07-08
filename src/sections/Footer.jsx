import Logo from "../components/Logo";
import Logo2 from "../components/Logo2";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <Logo2 dark />
            <p className="mt-3 text-sm max-w-xs">
              Seu cardápio digital com impressão de pedidos, assinatura fixa e sem taxas ou comissões por pedidos.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-sm">
            
            <a href="https://wa.me/5535984522324" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors">
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Delivroo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
