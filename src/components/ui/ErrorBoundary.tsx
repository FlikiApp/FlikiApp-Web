import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  label?: string
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error(`[ErrorBoundary${this.props.label ? `: ${this.props.label}` : ''}]`, error, info)
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children
    if (this.props.fallback !== undefined) return this.props.fallback
    return (
      <div
        role="alert"
        className="mx-auto max-w-md text-center px-6 py-10 text-text-secondary text-sm"
      >
        Something went wrong loading this section. Please refresh and try again.
      </div>
    )
  }
}
