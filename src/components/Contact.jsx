import { Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'
import SectionReveal from './SectionReveal'

export default function Contact() {
  return (
    <SectionReveal id="contact" className="mx-auto w-[92%] max-w-6xl py-14 pb-20">
      <div className="glass rounded-2xl border border-slate-800 p-7">
        <h2 className="mb-3 text-3xl font-bold text-white">Let&apos;s build something impactful</h2>
        <p className="mb-6 text-slate-300">Open to collaborations in AI data operations, quality pipelines, and modern frontend products.</p>

        <div className="flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-xl border border-accent/40 px-4 py-2 text-accent" href={`mailto:${profile.contacts.email}`}>
            <Mail size={16} /> {profile.contacts.email}
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-accent hover:text-accent"
            href={profile.contacts.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-accent hover:text-accent"
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </SectionReveal>
  )
}
