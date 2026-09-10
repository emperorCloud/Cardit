"use client";

import Image from "next/image";

interface LogoProps {
  src?: string;
  alt?: string;
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({
  src = "/images/Cardit1.png",
  alt = "CARDIT",
  className = "",
}: LogoProps) {
  return (
    <div className={`relative h-10 w-36 shrink-0 md:h-11 md:w-40 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 144px, 160px"
        className="object-contain object-left"
        priority
      />
    </div>
  );
}