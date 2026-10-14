// Moldura de iPhone (estilo 15 Pro): titânio escuro, bisel preto, Dynamic Island,
// barra de status, indicador de home e botões laterais.
// Todas as medidas derivam de --phone-w, então a moldura escala sem distorcer.
// Proporção da tela: 1179 x 2556 (a mesma do iPhone 15 Pro).

const k = (n) => `calc(var(--phone-w) * ${n})`;

const TITANIUM =
  "linear-gradient(145deg, #6b665f 0%, #2e2a26 24%, #57524c 50%, #27231f 76%, #67625b 100%)";

const BUTTON =
  "linear-gradient(90deg, #1b1815 0%, #4c4741 45%, #2a2622 100%)";

function SideButton({ side, top, height }) {
  const isLeft = side === "left";
  return (
    <span
      aria-hidden="true"
      className="absolute"
      style={{
        top: `${top}%`,
        height: `${height}%`,
        width: k(0.014),
        [isLeft ? "left" : "right"]: k(-0.0085),
        background: isLeft ? BUTTON : "linear-gradient(270deg, #1b1815 0%, #4c4741 45%, #2a2622 100%)",
        borderRadius: isLeft ? `${k(0.01)} 0 0 ${k(0.01)}` : `0 ${k(0.01)} ${k(0.01)} 0`,
        boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.12)",
      }}
    />
  );
}

function StatusIcons() {
  return (
    <span className="flex items-center" style={{ gap: k(0.014) }}>
      {/* Sinal */}
      <svg viewBox="0 0 18 12" style={{ height: k(0.034) }} fill="currentColor" aria-hidden="true">
        <rect x="0" y="8" width="3" height="4" rx="0.8" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
        <rect x="10" y="3" width="3" height="9" rx="0.8" />
        <rect x="15" y="0" width="3" height="12" rx="0.8" />
      </svg>
      {/* Wi-Fi */}
      <svg viewBox="0 0 17 12" style={{ height: k(0.034) }} fill="currentColor" aria-hidden="true">
        <path d="M8.5 2.3c2.4 0 4.6.9 6.3 2.5.1.1.3.1.4 0l1-1c.1-.1.1-.3 0-.4C14.2 1.2 11.5 0 8.5 0S2.8 1.2.8 3.4c-.1.1-.1.3 0 .4l1 1c.1.1.3.1.4 0 1.7-1.6 3.9-2.5 6.3-2.5z" />
        <path d="M8.5 6.2c1.3 0 2.5.5 3.4 1.3.1.1.3.1.4 0l1-1c.1-.1.1-.3 0-.4a7.1 7.1 0 0 0-9.6 0c-.1.1-.1.3 0 .4l1 1c.1.1.3.1.4 0 .9-.8 2.1-1.3 3.4-1.3z" />
        <path d="M8.5 10.1c.5 0 1-.2 1.4-.5.1-.1.1-.3 0-.4L8.7 8c-.1-.1-.3-.1-.4 0L7.1 9.2c-.1.1-.1.3 0 .4.4.3.9.5 1.4.5z" />
      </svg>
      {/* Bateria */}
      <svg viewBox="0 0 27 13" style={{ height: k(0.034) }} aria-hidden="true">
        <rect x="0.5" y="0.5" width="22" height="12" rx="3.6" fill="none" stroke="currentColor" opacity="0.4" />
        <rect x="2" y="2" width="19" height="9" rx="2.4" fill="currentColor" />
        <path d="M24 4.4v4.2c.9-.3 1.6-1.2 1.6-2.1S24.9 4.7 24 4.4z" fill="currentColor" opacity="0.45" />
      </svg>
    </span>
  );
}

export default function IPhoneFrame({ src, alt = "", className = "", time = "9:41" }) {
  return (
    <div
      className={`relative [--phone-w:260px] sm:[--phone-w:290px] ${className}`}
      style={{ width: "var(--phone-w)" }}
    >
      {/* Botões laterais (atrás do corpo, só a ponta aparece) */}
      <SideButton side="left" top={12.6} height={4.4} />
      <SideButton side="left" top={21.5} height={7.6} />
      <SideButton side="left" top={31} height={7.6} />
      <SideButton side="right" top={28.5} height={12.2} />

      {/* Corpo em titânio */}
      <div
        className="relative"
        style={{
          borderRadius: k(0.165),
          padding: k(0.012),
          background: TITANIUM,
          boxShadow: [
            "0 40px 80px -24px rgba(33,26,18,0.5)",
            "0 18px 36px -18px rgba(33,26,18,0.4)",
            "inset 0 0 0 1px rgba(255,255,255,0.16)",
            "inset 0 1px 0 rgba(255,255,255,0.28)",
          ].join(", "),
        }}
      >
        {/* Bisel preto */}
        <div
          style={{
            borderRadius: k(0.153),
            padding: k(0.026),
            background: "#050505",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Tela */}
          <div
            className="relative overflow-hidden bg-white"
            style={{ borderRadius: k(0.127), aspectRatio: "1179 / 2556" }}
          >
            <img
              src={src}
              alt={alt}
              draggable="false"
              className="absolute inset-0 w-full h-full object-cover object-top select-none"
            />

            {/* Barra de status */}
            <div
              className="absolute inset-x-0 flex items-center justify-between text-white"
              style={{
                top: k(0.026),
                height: k(0.0868),
                paddingInline: k(0.092),
                fontSize: k(0.04),
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              <span style={{ fontFeatureSettings: '"tnum"' }}>{time}</span>
              <StatusIcons />
            </div>

            {/* Dynamic Island */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 bg-black"
              style={{
                top: k(0.026),
                width: "32%",
                aspectRatio: "126 / 37",
                borderRadius: "999px",
              }}
            />

            {/* Indicador de home */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 bg-ink/90"
              style={{
                bottom: k(0.02),
                width: "36%",
                height: k(0.0135),
                borderRadius: "999px",
              }}
            />

            {/* Reflexo sutil do vidro */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 32%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
