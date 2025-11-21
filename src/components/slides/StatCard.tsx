interface StatCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  variant?: "default" | "gradient" | "dashed";
}

export default function StatCard({
  label,
  value,
  subtitle,
  variant = "default",
}: StatCardProps) {
  if (variant === "gradient") {
    return (
      <div className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 p-3 text-white">
        <div className="mb-1 text-3xl font-bold">{value}</div>
        <p className="text-xs">{label}</p>
        {subtitle && <p className="text-xs opacity-90">{subtitle}</p>}
      </div>
    );
  }

  if (variant === "dashed") {
    return (
      <div className="rounded-lg border-2 border-dashed border-blue-300 p-3 dark:border-blue-700">
        <h4 className="mb-1 text-xs font-semibold text-blue-900 dark:text-blue-100">
          {label}
        </h4>
        <p className="text-xs text-blue-700 dark:text-blue-300">{value}</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
      <h4 className="mb-1 text-base font-semibold text-black dark:text-white">
        {label}
      </h4>
      <p className="text-xs text-zinc-600 dark:text-zinc-400">{value}</p>
    </div>
  );
}
