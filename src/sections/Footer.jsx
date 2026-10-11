import Logo2 from "../components/Logo2";
import { LOGIN_URL, SIGNUP_URL, WHATSAPP_URL } from "../config";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <Logo2 dark />
            <p className="mt-3 text-sm max-w-xs">
              Cardápio digital e gestão de pedidos para qualquer tipo de delivery. Assinatura fixa, sem taxas ou comissões por pedido.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-sm">
            <a href={SIGNUP_URL} className="hover:text-orange transition-colors">Criar minha loja</a>
            <a href={LOGIN_URL} className="hover:text-orange transition-colors">Entrar no painel</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-orange transition-colors">
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
