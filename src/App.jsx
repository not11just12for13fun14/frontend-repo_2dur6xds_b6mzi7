import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Approach from './components/Approach'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(14,165,233,0.06),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Approach />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Sentinel Security. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
