interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span
      className={`font-serif italic bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(105deg, #F26A3A 0%, #F5A623 60%, #FFD39B 100%)',
      }}
    >
      {children}
    </span>
  )
}
