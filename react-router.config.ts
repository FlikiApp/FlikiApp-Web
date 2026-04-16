import type { Config } from '@react-router/dev/config'

export default {
  // Marketing site: emit static HTML per route at build time, no Node runtime.
  ssr: false,
  prerender: ['/', '/features', '/about', '/support', '/privacy', '/terms'],
  appDirectory: 'src',
} satisfies Config
