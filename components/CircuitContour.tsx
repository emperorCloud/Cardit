export default function CircuitContour({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g opacity="0.9">
        {[
          "M-100,120 C 200,60 400,180 700,110 S 1200,40 1560,140",
          "M-100,220 C 220,170 420,270 720,210 S 1180,150 1560,240",
          "M-100,320 C 240,300 460,360 740,300 S 1160,260 1560,340",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#0FB4C4"
            strokeOpacity={0.5 - i * 0.13}
            strokeWidth="1.4"
            strokeDasharray="1200"
            className="animate-trace-draw"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </g>

      {/* Traces de circuit : segments orthogonaux avec noeuds, prolongement du relief */}
      <g stroke="#5B6774" strokeWidth="1" opacity="0.35">
        <path d="M700,110 L820,110 L820,180 L940,180 L940,120 L1080,120" strokeDasharray="4 4" />
        <path d="M720,210 L800,210 L800,150 L900,150" strokeDasharray="4 4" />
        <circle cx="820" cy="110" r="3" fill="#0FB4C4" />
        <circle cx="940" cy="180" r="3" fill="#0FB4C4" />
        <circle cx="1080" cy="120" r="3" fill="#5B6774" />
        <circle cx="900" cy="150" r="3" fill="#5B6774" />
      </g>
    </svg>
  );
}
