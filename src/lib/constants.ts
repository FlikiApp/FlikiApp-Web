import {
  Trophy,
  TrendingUp,
  Users,
  Compass,
  Film,
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
  { label: 'Support', path: '/support' },
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
    title: 'Watch',
    description:
      'Watch your favorite movies and TV shows, then come back to rank them.',
  },
  {
    icon: BarChart3,
    title: 'Rank',
    description:
      'Rank what you\'ve watched through quick head-to-head comparisons.',
  },
  {
    icon: Trophy,
    title: 'Lead',
    description:
      'Climb the leaderboard by ranking more titles and see how you stack up against friends.',
  },
]

export interface Feature {
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    title: 'Head-to-Head Rankings',
    description:
      'Our algorithm builds your rankings through simple head-to-head picks. More accurate than star ratings.',
  },
  {
    title: 'Leaderboard',
    description:
      'Rank more titles to climb the leaderboard. See how you stack up against friends and the wider community.',
  },
  {
    title: 'Social',
    description:
      'Follow friends to see their rankings, explore their watchlists, and find your next watch through people you trust.',
  },
  {
    title: 'Discussions',
    description:
      'Debate spoiler-free or dive deep. Threaded conversations on every title.',
  },
  {
    title: 'Custom Recommendations',
    description:
      'Tailored suggestions based on your rankings, watchlist, and genre interests — unique to you, not generic algorithms.',
  },
  {
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
    icon: Trophy,
    title: 'Ranking System',
    tagline: 'Algorithm-powered precision',
    description:
      'Forget 5-star ratings. Our algorithm learns your true preferences through quick head-to-head matchups.',
    bullets: [
      'Smart algorithm adapts to every choice',
      'Rankings get sharper the more you compare',
      'Separate rankings for movies and TV shows',
      'Track how your rankings evolve over time',
    ],
  },
  {
    icon: Film,
    title: 'Discover',
    tagline: 'See what\u2019s playing everywhere',
    description:
      'Browse what\u2019s now in theaters and the top movies across Netflix, Disney+, Amazon Prime Video, and more — each with a Fliki Score so you know what\u2019s worth watching.',
    bullets: [
      'Now in Theaters section with current box office releases',
    ],
  },
  {
    icon: Compass,
    title: 'Custom Recommendations',
    tagline: 'Built around how you watch',
    description:
      'Recommendations customized to you — built from your rankings, watchlist, and genre interests for picks that actually match how you watch.',
    bullets: [
      'Suggestions driven by your personal ranking history',
      'Picks shaped by what you add to your watchlist',
      'Genre preferences refine your suggestions over time',
      'Every user gets a completely unique recommendation feed',
    ],
  },
  {
    icon: Trophy,
    title: 'Leaderboard',
    tagline: 'See who ranks the most',
    description:
      'Compete with friends and the community. The more you rank, the higher you climb on the leaderboard.',
    bullets: [
      'Global and friend-group leaderboards',
      'Climb the ranks by ranking more titles',
      'See how you stack up against other cinephiles',
      'Track your ranking activity over time',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Predictions',
    tagline: 'Coming soon',
    description:
      'Predict award winners, box-office hits, and more. Climb the leaderboard and prove you know film. Coming soon.',
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
  { value: '1v1', label: 'Comparison Engine' },
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

export interface SupportFaq {
  question: string
  answer: string
}

export const SUPPORT_FAQS: SupportFaq[] = [
  {
    question: 'How does the ranking system work?',
    answer:
      'Fliki uses a proprietary algorithm powered by head-to-head comparisons to build your rankings. You pick your winner between two titles, and the algorithm adjusts their scores based on your choice. The more comparisons you make, the more accurate your rankings become.',
  },
  {
    question: 'Is Fliki free to use?',
    answer:
      'Yes, Fliki is free to download and use. We may introduce optional premium features in the future, but the core ranking experience will always be free.',
  },
  {
    question: 'Can I delete my account and data?',
    answer:
      'Absolutely. You can request a complete data export or account deletion at any time by contacting support@flikiapp.com. We take privacy seriously.',
  },
  {
    question: 'How do I report a bug?',
    answer:
      'Send us a description of the issue along with your device model and OS version to bugs@flikiapp.com. Screenshots or screen recordings help us fix things faster.',
  },
  {
    question: 'Which platforms is Fliki available on?',
    answer:
      'Fliki is currently available on iOS. Android support is on our roadmap — stay tuned for updates.',
  },
  {
    question: 'How are trending titles determined?',
    answer:
      'Trending charts are based on real engagement metrics across the Fliki community, updated daily. No paid placements or sponsored content.',
  },
]

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
