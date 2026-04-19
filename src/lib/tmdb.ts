export interface TrendingMovie {
  id: number
  title: string
  posterUrl: string | null
  backdropUrl: string | null
  year: string
  rating: number
  overview: string
}

interface TmdbMovie {
  id: number
  title: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string | null
  vote_average: number | null
  overview: string | null
}

interface TmdbTrendingResponse {
  results: TmdbMovie[]
}

const POSTER_BASE = 'https://image.tmdb.org/t/p/w342'
const BACKDROP_BASE = 'https://image.tmdb.org/t/p/w780'

export function hasTmdbKey(): boolean {
  return Boolean(import.meta.env.VITE_TMDB_API_KEY)
}

export async function fetchTrendingMovies(limit = 10): Promise<TrendingMovie[]> {
  const key = import.meta.env.VITE_TMDB_API_KEY
  if (!key) throw new Error('Missing VITE_TMDB_API_KEY')

  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`TMDB request failed: ${res.status}`)

  const data: TmdbTrendingResponse = await res.json()

  return data.results.slice(0, limit).map((m) => ({
    id: m.id,
    title: m.title,
    posterUrl: m.poster_path ? `${POSTER_BASE}${m.poster_path}` : null,
    backdropUrl: m.backdrop_path ? `${BACKDROP_BASE}${m.backdrop_path}` : null,
    year: m.release_date ? m.release_date.slice(0, 4) : '',
    rating: m.vote_average ?? 0,
    overview: m.overview ?? '',
  }))
}

interface TmdbVideo {
  key: string
  site: string
  type: string
  official: boolean
}

interface TmdbVideosResponse {
  results: TmdbVideo[]
}

// Returns the YouTube video key of the best available trailer, or null.
export async function fetchMovieTrailerKey(movieId: number): Promise<string | null> {
  const key = import.meta.env.VITE_TMDB_API_KEY
  if (!key) return null

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`,
  )
  if (!res.ok) return null

  const data: TmdbVideosResponse = await res.json()
  const youtube = data.results.filter((v) => v.site === 'YouTube')

  const pick =
    youtube.find((v) => v.type === 'Trailer' && v.official) ??
    youtube.find((v) => v.type === 'Trailer') ??
    youtube.find((v) => v.type === 'Teaser') ??
    youtube[0]

  return pick ? pick.key : null
}
