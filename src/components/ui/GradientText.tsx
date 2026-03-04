interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-fliki-cyan via-fliki-blue to-fliki-purple bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
