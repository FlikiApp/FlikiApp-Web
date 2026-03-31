import flikiSvg from './Fliki.svg'

interface FlikiLogoProps {
  className?: string
}

export default function FlikiLogo({ className = '' }: FlikiLogoProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <img src={flikiSvg} alt="" className="h-full" />
      <span className="font-display font-bold tracking-tight text-text-primary text-3xl">Fliki</span>
    </span>
  )
}
