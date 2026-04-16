import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import useScrollToTop from '../../hooks/useScrollToTop'

export default function Layout() {
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
