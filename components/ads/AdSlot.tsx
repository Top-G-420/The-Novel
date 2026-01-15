import { Link } from "react-router-dom";

interface AdSlotProps {
  type: "banner" | "sidebar" | "in-article";
  className?: string;
}

const AdSlot = ({ type, className = "" }: AdSlotProps) => {
  const sizes = {
    banner: "h-24 md:h-32",
    sidebar: "h-64",
    "in-article": "h-20",
  };

  return (
    <div className={`bg-secondary/50 border border-dashed border-border rounded-lg flex items-center justify-center ${sizes[type]} ${className}`}>
      <div className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Advertisement</p>
        <p className="text-sm text-muted-foreground">Ad Space • {type}</p>
      </div>
    </div>
  );
};

export default AdSlot;
