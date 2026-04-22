interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 md:py-32 px-6 sm:px-8 lg:px-12 ${className}`}>
      <div className="max-w-5xl xl:max-w-6xl mx-auto">{children}</div>
    </section>
  )
}
