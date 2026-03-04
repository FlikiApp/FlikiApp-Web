interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`font-serif italic text-accent ${className}`}>
      {children}
    </span>
  )
}
