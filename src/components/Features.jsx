import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Zap, Activity } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Zero-Trust Architecture', desc: 'Identity-first controls that assume breach and verify every request.' },
  { icon: Activity, title: 'Real-time Detection', desc: 'Stream processing surfaces anomalies instantly across your stack.' },
  { icon: Lock, title: 'Encrypted by Default', desc: 'End-to-end encryption with modern ciphers and automatic key rotation.' },
  { icon: Zap, title: 'Automated Response', desc: 'Playbooks that isolate threats and remediate with one click.' },
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7.5 transition-colors"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-400/20 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
