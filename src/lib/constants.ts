import {
  Trophy,
  TrendingUp,
  Users,
  MessageCircle,
  Compass,
  Share2,
  ArrowRightLeft,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'

export const APP_STORE_URL = '#' // Replace with real App Store link

export const NAV_LINKS = [
  { label: 'Features', path: '/features' },
  { label: 'About', path: '/about' },
] as const

export const FOOTER_PRODUCT_LINKS = [
  { label: 'Features', path: '/features' },
  { label: 'About', path: '/about' },
] as const

export const FOOTER_LEGAL_LINKS = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
] as const

export interface HowItWorksStep {
  icon: LucideIcon
  title: string
  description: string
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    icon: ArrowRightLeft,
    title: 'Compare',
    description:
      'Pick your winner in quick head-to-head matchups between movies and TV shows.',
  },
  {
    icon: BarChart3,
    title: 'Rank',
    description:
      'Your choices build a personalized Elo ranking — no star ratings needed.',
  },
  {
    icon: Share2,
    title: 'Share',
    description:
      'Show off your rankings, compare with friends, and spark debates.',
  },
]

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    icon: Trophy,
    title: 'Elo Rankings',
    description:
      'A battle-tested algorithm builds your rankings through simple head-to-head picks. More accurate than star ratings.',
  },
  {
    icon: TrendingUp,
    title: 'Predictions',
    description:
      'Predict box-office outcomes, award winners, and more. Compete on leaderboards with other cinephiles.',
  },
  {
    icon: Users,
    title: 'Social',
    description:
      'Follow friends, compare rankings side-by-side, and discover what your circle is watching.',
  },
  {
    icon: MessageCircle,
    title: 'Discussions',
    description:
      'Debate spoiler-free or dive deep. Threaded conversations on every title.',
  },
  {
    icon: Compass,
    title: 'Discovery',
    description:
      'Get personalized recommendations powered by your unique ranking profile — not generic algorithms.',
  },
  {
    icon: Share2,
    title: 'Sharing',
    description:
      'Generate beautiful ranking cards and share your top picks across social media.',
  },
]

export interface DetailedFeature {
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  bullets: string[]
}

export const DETAILED_FEATURES: DetailedFeature[] = [
  {
    icon: Trophy,
    title: 'Ranking System',
    tagline: 'Elo-powered precision',
    description:
      'Forget 5-star ratings. Our Elo algorithm learns your true preferences through quick head-to-head matchups.',
    bullets: [
      'Battle-tested Elo algorithm adapts to every choice',
      'Rankings get sharper the more you compare',
      'Separate rankings for movies and TV shows',
      'Track how your rankings evolve over time',
    ],
  },
  {
    icon: Users,
    title: 'Social',
    tagline: 'Rankings are better together',
    description:
      'See how your taste stacks up. Follow friends, compare lists, and discover through people you trust.',
    bullets: [
      'Side-by-side ranking comparisons with friends',
      'Follow cinephiles with similar (or wildly different) taste',
      'Activity feed shows what your circle is ranking',
      'Compatibility scores between you and friends',
    ],
  },
  {
    icon: Compass,
    title: 'Discovery',
    tagline: 'Find your next favorite',
    description:
      'Recommendations powered by your unique ranking profile, not generic popularity metrics.',
    bullets: [
      'Personalized picks based on your Elo data',
      'Explore curated collections and trending titles',
      'Filter by genre, decade, streaming platform',
      'Watchlist synced across your devices',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Discussions',
    tagline: 'Every title deserves a conversation',
    description:
      'Threaded discussions on every movie and show. Go spoiler-free or deep dive — your choice.',
    bullets: [
      'Spoiler-free and spoiler zones per title',
      'Threaded conversations with upvotes',
      'Pin your hot takes to your profile',
      'Reply notifications keep you in the loop',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Predictions',
    tagline: 'Put your knowledge to the test',
    description:
      'Predict award winners, box-office hits, and more. Climb the leaderboard and prove you know film.',
    bullets: [
      'Predict Oscars, Emmys, and box-office results',
      'Earn points for correct predictions',
      'Global and friend-group leaderboards',
      'Seasonal prediction challenges',
    ],
  },
]

export const STATS = [
  { value: '99.7%', label: 'Ranking Precision' },
  { value: '500K+', label: 'Movies & Shows' },
  { value: 'Elo', label: 'Comparison Engine' },
  { value: '100%', label: 'Social' },
] as const

export const TEAM_MEMBERS = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Film nerd and algorithm enthusiast. Previously built recommendation systems at a major streaming platform.',
  },
  {
    name: 'Jordan Park',
    role: 'Lead Designer',
    bio: 'Obsessed with crafting delightful mobile experiences. Believes great design is invisible.',
  },
  {
    name: 'Sam Rivera',
    role: 'Head of Engineering',
    bio: 'Full-stack builder with a passion for real-time systems. Watches three movies a week, minimum.',
  },
] as const

export const VALUES = [
  {
    title: 'Authentic Rankings',
    description:
      'No sponsored placements. No algorithmic manipulation. Your rankings are yours alone.',
  },
  {
    title: 'Community First',
    description:
      'We build for cinephiles, not advertisers. Every feature starts with the question: does this make ranking more fun?',
  },
  {
    title: 'Privacy by Default',
    description:
      'Your data belongs to you. We never sell personal information or viewing habits to third parties.',
  },
] as const
