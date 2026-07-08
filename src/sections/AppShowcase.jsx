import PhoneFrame from "../components/PhoneFrame";
import AppHomeScreen from "../components/mockups/AppHomeScreen";
import AppOrdersScreen from "../components/mockups/AppOrdersScreen";
import AppMenuScreen from "../components/mockups/AppMenuScreen";

const screens = [
  { comp: <AppHomeScreen />, label: "Movimentação do dia" },
  { comp: <AppOrdersScreen />, label: "Pedidos com status" },
  { comp: <AppMenuScreen />, label: "Cardápio editável" },
];

export default function AppShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="max-w-xl mb-16">
          <span className="text-orange font-bold text-sm uppercase tracking-wide">App Gestor Delivroo</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3 text-balance">
            O controle de sua loja na palma da sua mão.
          </h2>
          <p className="text-white/60 mt-5 text-lg leading-relaxed">
            Você não precisa de um computador, apenas do seu celular. O aplicativo gestor avisa quando você recebe um novo pedido,
            mostra o faturamento em tempo real e deixa o cardápio pronto para você editar quando quiser.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 justify-items-center">
          {screens.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-5">
              <PhoneFrame>{s.comp}</PhoneFrame>
              <p className="text-white/70 text-sm font-medium text-center max-w-[200px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
