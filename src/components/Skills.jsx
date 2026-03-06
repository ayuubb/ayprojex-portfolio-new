import { profile } from '../data/profile'
import SectionReveal from './SectionReveal'

function SkillCard({ title, items }) {
  return (
    <div className="glass rounded-2xl border border-slate-800 p-5">
      <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <SectionReveal id="skills" className="mx-auto w-[92%] max-w-6xl py-14">
      <h2 className="mb-8 text-3xl font-bold text-white">Skills & Certifications</h2>

      <div className="grid gap-5 md:grid-cols-2">
        <SkillCard title="Technical" items={profile.skills.technical} />
        <SkillCard title="Data" items={profile.skills.data} />
        <SkillCard title="Tools" items={profile.skills.tools} />
        <SkillCard title="Licenses" items={profile.licenses} />
      </div>
    </SectionReveal>
  )
}
