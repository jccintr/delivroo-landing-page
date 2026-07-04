export default function BrowserFrame({ children, url = "admin.delivroo.app.br", className = "" }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl shadow-ink/20 border border-ink/10 bg-white ${className}`}>
      <div className="flex items-center gap-3 bg-[#EDEBE6] px-4 py-2.5 border-b border-ink/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white/80 rounded-md px-3 py-1 text-[11px] text-ink-soft font-mono truncate">
          {url}
        </div>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
