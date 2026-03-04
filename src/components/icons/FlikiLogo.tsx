interface FlikiLogoProps {
  className?: string
}

export default function FlikiLogo({ className = '' }: FlikiLogoProps) {
  return (
    <span
      className={`font-extrabold tracking-tight bg-gradient-to-r from-fliki-cyan via-fliki-blue to-fliki-purple bg-clip-text text-transparent ${className}`}
    >
      fliki
    </span>
  )
}
