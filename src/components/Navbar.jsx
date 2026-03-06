import { profile } from '../data/profile'

const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50">
      <nav className="glass mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-xl px-5 py-3">
        <a href="#home" className="font-mono text-sm text-slate-200">
          {profile.name}
        </a>
        <div className="flex items-center gap-5 text-sm text-slate-300">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="transition hover:text-accent">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
