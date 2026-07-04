
import { MdLunchDining } from 'react-icons/md';
export default function Logo2({ className = "", dark = false, size = "md" }) {
  const textSize = size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl";
  const markSize = size === "lg" ? 44 : size === "sm" ? 26 : 34;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="bg-orange-light rounded-full p-1 flex items-center justify-center" style={{ width: markSize, height: markSize }}>
        <MdLunchDining 
        size={24} 
        className="text-primary" 
        color="var(--color-orange-deep)"
      />
    </div>    
     
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
