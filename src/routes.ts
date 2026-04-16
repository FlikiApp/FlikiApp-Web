import { type RouteConfig, index, route, layout } from '@react-router/dev/routes'

export default [
  layout('components/layout/Layout.tsx', [
    index('pages/HomePage.tsx'),
    route('features', 'pages/FeaturesPage.tsx'),
    route('about', 'pages/AboutPage.tsx'),
    route('support', 'pages/SupportPage.tsx'),
    route('privacy', 'pages/PrivacyPage.tsx'),
    route('terms', 'pages/TermsPage.tsx'),
  ]),
] satisfies RouteConfig
