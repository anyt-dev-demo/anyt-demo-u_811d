interface FeatureCardProps {
  color: "blue" | "green" | "purple" | "orange" | "red";
  title: string;
  description: string;
}

const colorClasses = {
  blue: {
    border: "border-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950",
    title: "text-blue-900 dark:text-blue-100",
    desc: "text-blue-700 dark:text-blue-300",
  },
  green: {
    border: "border-green-500",
    bg: "bg-green-50 dark:bg-green-950",
    title: "text-green-900 dark:text-green-100",
    desc: "text-green-700 dark:text-green-300",
  },
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950",
    title: "text-purple-900 dark:text-purple-100",
    desc: "text-purple-700 dark:text-purple-300",
  },
  orange: {
    border: "border-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950",
    title: "text-orange-900 dark:text-orange-100",
    desc: "text-orange-700 dark:text-orange-300",
  },
  red: {
    border: "border-red-300",
    bg: "bg-red-50 dark:bg-red-950",
    title: "text-red-900 dark:text-red-100",
    desc: "text-red-700 dark:text-red-300",
  },
};

export default function FeatureCard({
  color,
  title,
  description,
}: FeatureCardProps) {
  const classes = colorClasses[color];

  return (
    <div
      className={`rounded-lg border-l-4 ${classes.border} ${classes.bg} p-4`}
    >
      <p className={`font-semibold ${classes.title}`}>{title}</p>
      <p className={`text-sm ${classes.desc}`}>{description}</p>
    </div>
  );
}
