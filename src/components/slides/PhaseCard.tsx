interface PhaseCardProps {
  color: "blue" | "green" | "purple";
  title: string;
  timeline: string;
  description: string;
}

const colorClasses = {
  blue: {
    border: "border-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950",
    title: "text-blue-900 dark:text-blue-100",
    timeline: "text-blue-600 dark:text-blue-400",
    desc: "text-blue-800 dark:text-blue-200",
  },
  green: {
    border: "border-green-500",
    bg: "bg-green-50 dark:bg-green-950",
    title: "text-green-900 dark:text-green-100",
    timeline: "text-green-600 dark:text-green-400",
    desc: "text-green-800 dark:text-green-200",
  },
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950",
    title: "text-purple-900 dark:text-purple-100",
    timeline: "text-purple-600 dark:text-purple-400",
    desc: "text-purple-800 dark:text-purple-200",
  },
};

export default function PhaseCard({
  color,
  title,
  timeline,
  description,
}: PhaseCardProps) {
  const classes = colorClasses[color];

  return (
    <div
      className={`rounded-lg border-l-4 ${classes.border} ${classes.bg} p-6`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className={`text-2xl font-semibold ${classes.title}`}>{title}</h3>
        <span className={`text-sm font-semibold ${classes.timeline}`}>
          {timeline}
        </span>
      </div>
      <p className={`text-xl ${classes.desc}`}>{description}</p>
    </div>
  );
}
