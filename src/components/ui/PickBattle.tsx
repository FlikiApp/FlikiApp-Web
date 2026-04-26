import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SectionKicker from './SectionKicker'
import GradientText from './GradientText'
import Tilt from './Tilt'
import { fetchPopularMovies, hasTmdbKey, type TrendingMovie } from '../../lib/tmdb'

type PickSide = 'a' | 'b'

export default function PickBattle() {
  const [movies, setMovies] = useState<TrendingMovie[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [pairIndex, setPairIndex] = useState(0)
  const [winner, setWinner] = useState<PickSide | null>(null)
  const [matchups, setMatchups] = useState(0)
  const keyPresent = hasTmdbKey()

  useEffect(() => {
    if (!keyPresent) return
    let cancelled = false
    fetchPopularMovies(20)
      .then((list) => {
        if (!cancelled) setMovies(list.filter((m) => m.posterUrl))
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [keyPresent])

  // Fresh random seed per page load so visitors get different matchups
  const seed = useMemo(() => Math.floor(Math.random() * 100000) + 1, [])

  // Build pairs by zipping a shuffled top-half with a shuffled bottom-half
  // of the popularity list, so every pair spans different popularity tiers
  // (e.g. #1 might face #17 instead of just #1 vs #2).
  const pairs = useMemo<[number, number][]>(() => {
    if (!movies || movies.length < 2) return []
    const mid = Math.floor(movies.length / 2)
    const top: number[] = []
    const bot: number[] = []
    for (let i = 0; i < movies.length; i++) {
      if (i < mid) top.push(i)
      else bot.push(i)
    }
    let s = seed
    const rand = () => {
      s = (s * 9301 + 49297) % 233280
      return s / 233280
    }
    const shuffle = (arr: number[]) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    shuffle(top)
    shuffle(bot)
    const result: [number, number][] = []
    const n = Math.min(top.length, bot.length)
    for (let i = 0; i < n; i++) result.push([top[i], bot[i]])
    return result
  }, [movies, seed])

  const ready = Boolean(movies && pairs.length > 0)

  // Arrow keys pick when nothing else has focus
  useEffect(() => {
    if (!ready) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      const target = e.target as HTMLElement | null
      if (target && (target.matches('input, textarea, select, [contenteditable]') || target.isContentEditable)) return
      if (winner) return
      e.preventDefault()
      const side: PickSide = e.key === 'ArrowLeft' ? 'a' : 'b'
      setWinner(side)
      setMatchups((n) => n + 1)
      window.setTimeout(() => {
        setWinner(null)
        setPairIndex((i) => i + 1)
      }, 900)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [ready, winner])

  if (!keyPresent || failed) return null

  const pair = ready ? pairs[pairIndex % pairs.length] : null
  const a = pair ? movies![pair[0]] : null
  const b = pair ? movies![pair[1]] : null

  const handlePick = (side: PickSide) => {
    if (winner) return
    setWinner(side)
    setMatchups((n) => n + 1)
    window.setTimeout(() => {
      setWinner(null)
      setPairIndex((i) => i + 1)
    }, 900)
  }

  return (
    <section className="relative border-t border-border-subtle py-24 md:py-32 overflow-hidden">
      {/* Warm ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 45%, rgba(242,106,58,0.10) 0%, rgba(242,106,58,0) 70%)',
        }}
      />

      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionKicker align="center">Try it yourself</SectionKicker>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Which do you <GradientText>prefer</GradientText>?
            </h2>
            <p className="text-text-secondary text-sm">
              One matchup at a time. No stars. Just pick.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8 md:gap-12 max-w-3xl mx-auto">
          {a && (
            <BattleCard
              key={`a-${pairIndex}`}
              movie={a}
              side="a"
              winner={winner}
              onPick={handlePick}
            />
          )}

          <div className="flex items-center justify-center">
            <motion.span
              key={pairIndex}
              initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, #F26A3A 0%, #F5A623 60%, rgba(245,166,35,0.4) 100%)',
                filter: 'drop-shadow(0 6px 20px rgba(242,106,58,0.35))',
              }}
            >
              vs
            </motion.span>
          </div>

          {b && (
            <BattleCard
              key={`b-${pairIndex}`}
              movie={b}
              side="b"
              winner={winner}
              onPick={handlePick}
            />
          )}
        </div>

        <motion.div
          key={matchups}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-10 text-text-muted text-xs uppercase tracking-widest"
        >
          {matchups === 0
            ? 'Tap a poster'
            : `${matchups} matchup${matchups === 1 ? '' : 's'} ranked`}
        </motion.div>
      </div>
    </section>
  )
}

interface BattleCardProps {
  movie: TrendingMovie
  side: PickSide
  winner: PickSide | null
  onPick: (side: PickSide) => void
}

function BattleCard({ movie, side, winner, onPick }: BattleCardProps) {
  const isWinner = winner === side
  const isLoser = winner !== null && winner !== side
  const fromX = side === 'a' ? -48 : 48
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, scale: 0.96 }}
      animate={{
        opacity: isLoser ? 0.25 : 1,
        x: 0,
        scale: isLoser ? 0.92 : isWinner ? 1.04 : 1,
        filter: isLoser ? 'grayscale(60%)' : 'grayscale(0%)',
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt maxTilt={8} lift={3} glare>
        <button
          type="button"
          onClick={() => onPick(side)}
          disabled={winner !== null}
          aria-label={`Pick ${movie.title}`}
          className="relative block w-full group disabled:cursor-default rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface-primary"
        >
          <div
            className={`relative aspect-[2/3] rounded-2xl overflow-hidden ring-1 ring-border-subtle transition-all duration-500 ${
              isWinner
                ? 'ring-accent shadow-[0_30px_70px_-15px_rgba(242,106,58,0.7)]'
                : 'shadow-[0_25px_50px_-20px_rgba(0,0,0,0.7)] group-hover:ring-accent/70 group-hover:shadow-[0_30px_60px_-18px_rgba(242,106,58,0.55)]'
            }`}
          >
            {movie.posterUrl && (
              <>
                <div
                  aria-hidden
                  className={`absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
                  style={{
                    background:
                      'linear-gradient(135deg, #1a1a20 0%, #121216 50%, #17171c 100%)',
                  }}
                />
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setLoaded(true)}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${loaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transition: 'opacity 500ms ease-out, transform 700ms ease-out' }}
                />
              </>
            )}

            {/* Top/bottom gradient for legibility */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
              }}
            />

            {/* Winner overlay — orange wash + check */}
            <AnimatePresence>
              {isWinner && (
                <motion.div
                  key="win"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(242,106,58,0.35) 0%, rgba(242,106,58,0) 70%)',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.08,
                      type: 'spring',
                      stiffness: 360,
                      damping: 22,
                    }}
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-accent text-surface-primary shadow-[0_10px_30px_-8px_rgba(242,106,58,0.8)]"
                  >
                    <Check className="w-7 h-7" strokeWidth={3} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Specular sweep on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
              style={{
                background:
                  'linear-gradient(105deg, transparent 42%, rgba(255,255,255,0.14) 50%, transparent 58%)',
              }}
            />

            {/* Title pinned to bottom */}
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold text-text-primary text-left truncate">
                {movie.title}
              </p>
              {movie.year && (
                <p className="text-[10px] sm:text-xs text-text-muted text-left">{movie.year}</p>
              )}
            </div>
          </div>
        </button>
      </Tilt>
    </motion.div>
  )
}
