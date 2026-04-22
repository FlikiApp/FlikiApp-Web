import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, X } from 'lucide-react'
import { fetchMovieTrailerKey, type TrendingMovie } from '../../lib/tmdb'

interface Selection {
  movie: TrendingMovie
  instance: number
}

interface TrailerModalProps {
  selection: Selection | null
  sharedLayoutId: string | null
  onClose: () => void
}

export default function TrailerModal({ selection, sharedLayoutId, onClose }: TrailerModalProps) {
  const movie = selection?.movie ?? null
  const [trailerKey, setTrailerKey] = useState<string | null>(null)
  const [trailerLoading, setTrailerLoading] = useState(false)
  const [trailerReady, setTrailerReady] = useState(false)

  useEffect(() => {
    if (!movie) {
      setTrailerKey(null)
      setTrailerLoading(false)
      setTrailerReady(false)
      return
    }
    let cancelled = false
    setTrailerLoading(true)
    setTrailerKey(null)
    setTrailerReady(false)
    fetchMovieTrailerKey(movie.id)
      .then((key) => {
        if (!cancelled) {
          setTrailerKey(key)
          setTrailerLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) setTrailerLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [movie])

  useEffect(() => {
    if (!movie) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [movie, onClose])

  return (
    <AnimatePresence>
      {movie && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Darkening + blurred backdrop (fades in/out independently of the morph) */}
          <div aria-hidden className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* The shared hero — this is what morphs from the clicked poster.
              We let FM handle layout; contents inside cross-fade. */}
          <motion.div
            layoutId={sharedLayoutId ?? undefined}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black"
            style={{
              boxShadow:
                '0 40px 80px -20px rgba(0,0,0,0.9), 0 0 80px -20px rgba(242,106,58,0.35)',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Poster / backdrop — shown during and just after the morph, cross-fades out when trailer mounts */}
            <motion.img
              src={movie.backdropUrl ?? movie.posterUrl ?? undefined}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 1 }}
              animate={{ opacity: trailerReady ? 0 : 1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Dim overlay while waiting, for loading label legibility */}
            {!trailerKey && (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(11,11,13,0) 30%, rgba(11,11,13,0.6) 100%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-text-muted text-sm">
                    {trailerLoading ? 'Loading trailer…' : 'No trailer available'}
                  </p>
                </div>
              </>
            )}
            {/* Trailer iframe — fades in once it's in the DOM; sized over the morph target */}
            {trailerKey && (
              <motion.iframe
                title={`${movie.title} trailer`}
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&modestbranding=1&rel=0&playsinline=1`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                onLoad={() => setTrailerReady(true)}
              />
            )}
          </motion.div>

          {/* Metadata panel — anchored beneath the hero, fades in after the morph settles */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 mx-auto max-w-4xl px-6 sm:px-8"
            style={{ top: 'calc(50% + min(40vh, 25rem) / 2 + 1.25rem)' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, delay: 0.25 }}
          >
            <div
              className="pointer-events-auto rounded-2xl p-5 sm:p-6"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(255,255,255,0.06)',
                backdropFilter: 'blur(18px) saturate(160%)',
                WebkitBackdropFilter: 'blur(18px) saturate(160%)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{movie.title}</h3>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  {movie.year && <span>{movie.year}</span>}
                  {movie.rating > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-accent text-accent" strokeWidth={0} />
                      {movie.rating.toFixed(1)}
                    </span>
                  )}
                </div>
              </div>
              {movie.overview && (
                <p className="text-text-secondary text-sm leading-relaxed max-w-3xl line-clamp-3 sm:line-clamp-none">
                  {movie.overview}
                </p>
              )}
            </div>
          </motion.div>

          {/* Close button — fades in on top */}
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Close trailer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.25 }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center text-text-primary transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)',
              boxShadow:
                '0 1px 0 rgba(255,255,255,0.15) inset, 0 0 0 1px rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px) saturate(160%)',
              WebkitBackdropFilter: 'blur(12px) saturate(160%)',
            }}
          >
            <X className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
