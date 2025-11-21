import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  height: number;
}

interface LogoRowProps {
  logos: Logo[];
}

export default function LogoRow({ logos }: LogoRowProps) {
  return (
    <div className="mt-4 flex items-center justify-start gap-8">
      {logos.map((logo) => (
        <div key={logo.src} className="flex h-16 items-center justify-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.height}
            height={logo.height}
            className="object-contain"
            style={{ height: `${logo.height / 4}rem` }}
          />
        </div>
      ))}
    </div>
  );
}
