export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="300"
      height="80"
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* SHIR text */}
      <text
        x="20"
        y="42"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="#CC0000"
      >
        SHIR
      </text>
      
      {/* Globe as O - same size, not overlapping */}
      <g transform="translate(145, 22)">
        {/* Main circle */}
        <circle cx="0" cy="0" r="18" fill="#CC0000" stroke="#990000" strokeWidth="2" />
        
        {/* Vertical lines (longitude) */}
        <line x1="0" y1="-18" x2="0" y2="18" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="-13" y1="-13" x2="-13" y2="13" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="13" y1="-13" x2="13" y2="13" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        {/* Horizontal lines (latitude) */}
        <line x1="-18" y1="0" x2="18" y2="0" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        
        {/* Highlight */}
        <circle cx="7" cy="-7" r="3" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Technologies text - centered below */}
      <text
        x="150"
        y="68"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="600"
        fill="#333333"
        textAnchor="middle"
      >
        Technologies
      </text>
    </svg>
  )
}
