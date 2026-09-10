import Image from "next/image";
import { partners } from "@/lib/data";

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-charcoal/10 bg-charcoal/10 sm:grid-cols-3 lg:grid-cols-6">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex aspect-square items-center justify-center bg-sand p-6 grayscale transition-all hover:grayscale-0"
        >
          {partner.logo && (
            <div className="relative h-full w-full">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
