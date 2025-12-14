export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="280"
      height="75"
      viewBox="0 0 280 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* SHIR text */}
      <text
        x="10"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        fill="#CC0000"
      >
        SHIR
      </text>
      
      {/* Globe as O - aligned with SHIRO baseline */}
      <g transform="translate(118, 21)">
        <circle cx="0" cy="0" r="17" fill="#CC0000" stroke="#990000" strokeWidth="2" />
        
        {/* Vertical lines */}
        <line x1="0" y1="-17" x2="0" y2="17" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="-12" y1="-12" x2="-12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="12" y1="-12" x2="12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        {/* Horizontal lines */}
        <line x1="-17" y1="0" x2="17" y2="0" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="17" ry="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="17" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        
        <circle cx="7" cy="-7" r="3" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Technologies text with underline */}
      <text
        x="140"
        y="64"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#333333"
        textAnchor="middle"
      >
        Technologies
      </text>
      
      {/* Underline under "Technologies" - from T to g */}
      <line x1="92" y1="66" x2="188" y2="66" stroke="#CC0000" strokeWidth="2" />
    </svg>
  )
}
