export default function PhoneFrame({ children, className = "", statusBarLabel = "15:10", battery = "88%" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[2.6rem] bg-ink p-2.5 shadow-2xl shadow-ink/30">
        <div className="relative rounded-[2.1rem] overflow-hidden bg-white w-[248px] h-[500px] flex flex-col">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink rounded-b-2xl z-20" />
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-2 pb-1 text-[10px] font-semibold text-ink/70 shrink-0">
            <span>{statusBarLabel}</span>
            <span className="flex items-center gap-1">
              <span>{battery}</span>
            </span>
          </div>
          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-ink/80 rounded-l" />
      <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-ink/80 rounded-l" />
      <div className="absolute -right-[3px] top-28 w-[3px] h-16 bg-ink/80 rounded-r" />
    </div>
  );
}
