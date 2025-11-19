import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to simplify your security?</h3>
          <p className="mt-3 text-slate-300">Start with a lightweight trial. No credit card, deploy in minutes.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="px-5 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition-colors">Request demo</a>
            <a href="#" className="px-5 py-3 rounded-lg text-slate-200 hover:text-white border border-white/10 hover:border-white/20">Contact sales</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
