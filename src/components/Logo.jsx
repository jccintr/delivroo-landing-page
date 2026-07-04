export default function Logo({ className = "", dark = false, size = "md" }) {
  const textSize = size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl";
  const markSize = size === "lg" ? 44 : size === "sm" ? 26 : 34;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <circle cx="32" cy="32" r="32" fill="var(--color-orange-light)" />
        <path
          d="M18 24C18 20.6863 20.6863 18 24 18H40C43.3137 18 46 20.6863 46 24C46 24.5523 45.5523 25 45 25H19C18.4477 25 18 24.5523 18 24Z"
          fill="var(--color-orange)"
        />
        <rect x="17" y="29" width="30" height="5" rx="2.5" fill="var(--color-orange)" />
        <rect x="17" y="37" width="30" height="5" rx="2.5" fill="var(--color-orange)" />
        <rect x="20" y="45" width="24" height="4" rx="2" fill="var(--color-orange-deep)" />
      </svg>
      <span
        className={`font-display font-extrabold ${textSize} tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Delivroo
      </span>
    </div>
  );
}
