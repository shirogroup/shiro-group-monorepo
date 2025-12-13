export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="300"
      height="100"
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text x="55" y="40" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="bold" fill="#CC0000">
        SHIR
      </text>
      
      <g transform="translate(147, 22)">
        <circle cx="0" cy="0" r="17" fill="#CC0000" stroke="#990000" strokeWidth="2" />
        <line x1="0" y1="-17" x2="0" y2="17" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="-12" y1="-12" x2="-12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="12" y1="-12" x2="12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="-17" y1="0" x2="17" y2="0" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="17" ry="8" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="17" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        <circle cx="7" cy="-7" r="3" fill="#ffffff" opacity="0.4" />
      </g>
      
      <text x="150" y="67" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="600" fill="#333333" textAnchor="middle">
        Technologies
      </text>
      
      <text x="150" y="86" fontFamily="Arial, sans-serif" fontSize="8" fill="#666666" textAnchor="middle" fontStyle="italic">
        Bringing your concepts and ideas to life
      </text>
    </svg>
  )
}
