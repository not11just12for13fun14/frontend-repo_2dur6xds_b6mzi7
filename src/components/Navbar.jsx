import { useState } from 'react'
import { Shield, Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md border-b border-white/10 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-400/20">
              <Shield className="h-5 w-5" />
            </div>
            <span className="text-white font-semibold tracking-tight">Sentinel</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-3 py-2 text-sm rounded-lg text-slate-300 hover:text-white">Sign in</button>
            <button className="px-4 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition-colors">Get started</button>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-slate-300">
              <a href="#features" className="rounded-lg px-3 py-2 hover:bg-white/5">Features</a>
              <a href="#approach" className="rounded-lg px-3 py-2 hover:bg-white/5">Approach</a>
              <a href="#pricing" className="rounded-lg px-3 py-2 hover:bg-white/5">Pricing</a>
              <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-white/5">Contact</a>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-3 py-2 rounded-lg text-slate-300 hover:text-white">Sign in</button>
                <button className="flex-1 px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400">Get started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
