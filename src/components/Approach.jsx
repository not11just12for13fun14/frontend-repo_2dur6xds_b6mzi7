import { motion } from 'framer-motion'

function Approach() {
  return (
    <section id="approach" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          Security that gets out of the way
        </motion.h2>
        <p className="mt-4 text-slate-300">
          Built on a minimalist philosophy: less noise, more signal. We combine strong defaults with elegant visibility so your team stays focused on what matters.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          {["Hardened defaults", "Observability-first", "Human-in-the-loop"].map((title, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-slate-400">0{i+1}</div>
              <div className="mt-2 text-white font-medium">{title}</div>
              <p className="mt-2 text-slate-300 text-sm">We bake best practices into every layer and make expert workflows feel effortless.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
