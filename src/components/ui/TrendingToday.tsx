import { useEffect, useRef, useState } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import { Star } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import GradientText from './GradientText'
import TrailerModal from './TrailerModal'
import { fetchTrendingMovies, hasTmdbKey, type TrendingMovie } from '../../lib/tmdb'

const HOVER_DWELL_MS = 1000

interface Selection {
  movie: TrendingMovie
  instance: number
}

export default function TrendingToday() {
  const [movies, setMovies] = useState<TrendingMovie[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [selected, setSelected] = useState<Selection | null>(null)
  const keyPresent = hasTmdbKey()

  useEffect(() => {
    if (!keyPresent) return
    let cancelled = false
    fetchTrendingMovies(10)
      .then((list) => {
        if (!cancelled) setMovies(list)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [keyPresent])

  if (!keyPresent || failed) return null

  const items = movies ?? Array.from({ length: 10 }).map(() => null)
  const loopItems = [...items, ...items]

  const sharedLayoutId = selected
    ? `trending-hero-${selected.movie.id}-${selected.instance}`
    : null

  return (
    <LayoutGroup>
      <section className="relative border-t border-border-subtle py-24 md:py-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 40%, rgba(242,106,58,0.10) 0%, rgba(242,106,58,0) 70%)',
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -z-10 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(245,166,35,0.08), transparent)' }}
          initial={{ x: '-10%', y: '20%' }}
          animate={{ x: ['-10%', '20%', '-10%'], y: ['20%', '10%', '20%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <div>
                <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">
                  Trending Today
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  The top 10 right <GradientText>now</GradientText>
                </h2>
              </div>
              <p className="text-text-muted text-xs">Powered by TMDB · refreshed daily</p>
            </div>
          </AnimatedSection>
        </div>

        <div className={`rail-pause relative overflow-hidden ${selected ? 'rail-frozen' : ''}`}>
          <div className="rail-track flex gap-6 md:gap-7 w-max pt-2 pb-12">
            {loopItems.map((movie, i) =>
              movie ? (
                <RailItem
                  key={`${movie.id}-${i}`}
                  movie={movie}
                  index={i % 10}
                  instance={i}
                  isSelected={selected?.instance === i}
                  onOpen={(m) => setSelected({ movie: m, instance: i })}
                />
              ) : (
                <RailSkeleton key={`skeleton-${i}`} />
              ),
            )}
          </div>
        </div>
      </section>

      <TrailerModal
        selection={selected}
        sharedLayoutId={sharedLayoutId}
        onClose={() => setSelected(null)}
      />
    </LayoutGroup>
  )
}

interface RailItemProps {
  movie: TrendingMovie
  index: number
  instance: number
  isSelected: boolean
  onOpen: (m: TrendingMovie) => void
}

function RailItem({ movie, index, instance, isSelected, onOpen }: RailItemProps) {
  const rank = String(index + 1).padStart(2, '0')
  const dwellTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const armDwell = () => {
    clearDwell()
    dwellTimerRef.current = setTimeout(() => onOpen(movie), HOVER_DWELL_MS)
  }
  const clearDwell = () => {
    if (dwellTimerRef.current) {
      clearTimeout(dwellTimerRef.current)
      dwellTimerRef.current = null
    }
  }

  useEffect(() => () => clearDwell(), [])

  return (
    <button
      type="button"
      onClick={() => {
        clearDwell()
        onOpen(movie)
      }}
      onMouseEnter={armDwell}
      onMouseLeave={clearDwell}
      onFocus={armDwell}
      onBlur={clearDwell}
      aria-label={`Watch trailer for ${movie.title}`}
      className="group relative shrink-0 w-[150px] sm:w-[170px] md:w-[190px] text-left cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div className="relative transition-transform duration-500 ease-out will-change-transform group-hover:[transform:rotateY(-5deg)_rotateX(3deg)_translateY(-6px)]">
        <motion.div
          layoutId={isSelected ? `trending-hero-${movie.id}-${instance}` : undefined}
          className="relative aspect-[2/3] rounded-xl overflow-hidden ring-1 ring-border-subtle shadow-[0_20px_40px_-24px_rgba(0,0,0,0.7)] transition-[box-shadow,outline-color] duration-500 group-hover:ring-accent/60 group-hover:shadow-[0_30px_60px_-20px_rgba(242,106,58,0.55)]"
          style={{ visibility: isSelected ? 'hidden' : 'visible' }}
        >
          {movie.posterUrl ? (
            <img
              src={movie.posterUrl}
              alt={movie.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          ) : (
            <div className="w-full h-full bg-surface-secondary flex items-center justify-center">
              <span className="text-text-muted text-xs">No poster</span>
            </div>
          )}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 100%)',
            }}
          />

          {movie.rating > 0 && (
            <div
              className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold text-text-primary"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.15) inset, 0 0 0 1px rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px) saturate(160%)',
                WebkitBackdropFilter: 'blur(12px) saturate(160%)',
              }}
            >
              <Star className="w-2.5 h-2.5 fill-accent text-accent" strokeWidth={0} />
              {movie.rating.toFixed(1)}
            </div>
          )}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
            style={{
              background:
                'linear-gradient(105deg, transparent 42%, rgba(255,255,255,0.14) 50%, transparent 58%)',
            }}
          />
        </motion.div>

        <span
          aria-hidden
          className="font-display pointer-events-none absolute -left-2 -bottom-5 text-[5.5rem] sm:text-[6.5rem] md:text-[7rem] leading-none tracking-tight bg-clip-text text-transparent select-none transition-transform duration-500 ease-out group-hover:-translate-y-1"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #F26A3A 0%, #F5A623 65%, rgba(245,166,35,0.3) 100%)',
            WebkitTextStroke: '1px rgba(245,242,236,0.18)',
            filter: 'drop-shadow(0 6px 20px rgba(242,106,58,0.35))',
          }}
        >
          {rank}
        </span>
      </div>

      <div className="mt-7 pl-1">
        <h3 className="text-sm font-semibold text-text-primary truncate transition-colors duration-300 group-hover:text-accent">
          {movie.title}
        </h3>
        {movie.year && <p className="text-xs text-text-muted mt-0.5">{movie.year}</p>}
      </div>
    </button>
  )
}

function RailSkeleton() {
  return (
    <div className="shrink-0 w-[150px] sm:w-[170px] md:w-[190px]">
      <div className="aspect-[2/3] rounded-xl bg-surface-secondary ring-1 ring-border-subtle animate-pulse" />
      <div className="mt-7 pl-1 space-y-2">
        <div className="h-3 w-4/5 rounded bg-surface-secondary animate-pulse" />
        <div className="h-2 w-1/3 rounded bg-surface-secondary animate-pulse" />
      </div>
    </div>
  )
}
