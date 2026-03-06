import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'

const ROTATING_ROLES = ['AI Data Trainer', 'Frontend Developer']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const currentRole = useMemo(() => ROTATING_ROLES[roleIndex], [roleIndex])

  useEffect(() => {
    let timeout

    if (!deleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }, 90)
    } else if (!deleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1200)
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      }, 45)
    } else {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [currentRole, deleting, displayText.length])

  return (
    <section id="home" className="mx-auto grid w-[92%] max-w-6xl gap-8 py-20 md:grid-cols-[1.2fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="mb-3 font-mono text-sm text-accent">{profile.education}</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">{profile.name}</h1>
        <p className="mb-6 text-xl text-slate-300 md:text-2xl">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="max-w-2xl text-slate-400">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-2 text-accent transition hover:bg-accent/20"
          >
            View Experience <ArrowRight size={16} />
          </a>
          <a href="#contact" className="rounded-xl border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-accent hover:text-accent">
            Let&apos;s Collaborate
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="glass rounded-2xl border border-slate-700/60 p-6 shadow-glowTeal"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400">Role Snapshot</p>
        <p className="mt-4 text-lg text-slate-200">{profile.role}</p>
      </motion.div>
    </section>
  )
}
