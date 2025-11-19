import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Enterprise-grade cybersecurity
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Minimal protection. Maximum security.
            </h1>
            <p className="mt-6 text-slate-300 text-lg max-w-xl">
              A clean, modern security platform that quietly shields your business. Real-time detection, automated response, and zero-trust by default.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition-colors">Start free</a>
              <a href="#features" className="px-5 py-3 rounded-lg text-slate-200 hover:text-white border border-white/10 hover:border-white/20">Learn more</a>
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

export default Hero
