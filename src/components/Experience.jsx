import { BriefcaseBusiness } from 'lucide-react'
import { profile } from '../data/profile'
import SectionReveal from './SectionReveal'

const tagStyle = {
  ai: 'border-accent/40 bg-accent/10 text-accent shadow-glowTeal',
  frontend: 'border-slate-500 bg-slate-700/30 text-slate-200',
}

export default function Experience() {
  return (
    <SectionReveal id="experience" className="mx-auto w-[92%] max-w-6xl py-14">
      <h2 className="mb-8 text-3xl font-bold text-white">Professional Experience</h2>

      <div className="relative ml-2 border-l border-slate-700 pl-7">
        {profile.experience.map((item) => (
          <article key={item.company} className="relative mb-10">
            <span className="absolute -left-[38px] top-1 rounded-full border border-slate-700 bg-slate-900 p-2">
              <BriefcaseBusiness size={14} className="text-slate-300" />
            </span>

            <div className="glass rounded-2xl border border-slate-700/70 p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${tagStyle[item.focus]}`}>
                  {item.focus === 'ai' ? 'AI / Data' : 'Frontend'}
                </span>
              </div>
              <p className="mb-3 font-mono text-sm text-slate-400">{item.period}</p>
              <ul className="space-y-2 text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  )
}
