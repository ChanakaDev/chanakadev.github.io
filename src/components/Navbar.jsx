import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'About', end: true },
  { to: '/publications', label: 'Publications' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const activeCls = 'text-slate-900 border-b-2 border-slate-900 pb-1 font-headline-md tracking-tight transition-colors duration-200'
const inactiveCls = 'text-slate-500 hover:text-slate-900 font-headline-md tracking-tight transition-colors duration-200'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-white/90 backdrop-blur-md border-slate-200">
      <div className="max-w-[1140px] mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-semibold text-slate-900 font-headline-md tracking-tight">
          Chanaka Bandara
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => isActive ? activeCls : inactiveCls}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="#"
            className="ml-4 px-5 py-2 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-slate-900">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-slate-900 font-semibold font-headline-md'
                  : 'text-slate-500 font-headline-md'
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="#"
            className="w-fit px-5 py-2 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  )
}
