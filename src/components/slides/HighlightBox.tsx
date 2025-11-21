import type { ReactNode } from "react";

interface HighlightBoxProps {
  children: ReactNode;
  variant?: "gradient-purple" | "gradient-blue" | "gray";
}

export default function HighlightBox({
  children,
  variant = "gray",
}: HighlightBoxProps) {
  if (variant === "gradient-purple") {
    return (
      <div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
        {children}
      </div>
    );
  }

  if (variant === "gradient-blue") {
    return (
      <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
        {children}
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
      {children}
    </div>
  );
}
