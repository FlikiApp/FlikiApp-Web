interface FlikiLogoProps {
  className?: string
}

export default function FlikiLogo({ className = '' }: FlikiLogoProps) {
  return (
    <span className={`font-serif font-bold tracking-tight text-text-primary ${className}`}>
      fliki
    </span>
  )
}
