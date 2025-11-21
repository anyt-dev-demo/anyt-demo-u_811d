import type { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Slide({
  children,
  className = "",
  title,
  subtitle,
}: SlideProps) {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center bg-white p-8 dark:bg-black ${className}`}
    >
      <div className="flex w-full max-w-5xl flex-col gap-8">
        {title && (
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold text-black dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
