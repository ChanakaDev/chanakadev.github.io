import React, { useEffect, useState } from 'react'

const iconClass = 'w-4 h-4'

const Icons = {
  GitHub: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M18.244 2H21l-6.54 7.47L22.5 22h-6.79l-5.32-6.95L4.3 22H1.54l7.01-8L1.5 2h6.94l4.82 6.36L18.244 2zm-2.38 18h1.88L8.22 4H6.24l9.624 16z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  Medium: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M13.54 12a6.8 6.8 0 1 1-13.6 0 6.8 6.8 0 1 1 13.6 0zm7.46 0c0 3.54-.84 6.4-1.88 6.4-1.04 0-1.88-2.86-1.88-6.4s.84-6.4 1.88-6.4c1.04 0 1.88 2.86 1.88 6.4zm3 0c0 3.17-.3 5.74-.66 5.74-.36 0-.66-2.57-.66-5.74 0-3.17.3-5.74.66-5.74.36 0 .66 2.57.66 5.74z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.11-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.39.52A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.13c1.9.52 9.39.52 9.39.52s7.5 0 9.39-.52A3 3 0 0 0 23.5 17.8 31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.57V8.43L15.82 12 9.6 15.57z" />
    </svg>
  ),
  ORCID: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 17.85H5.83V7.62h1.54v10.23zM6.6 6.34a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9zm11.36 7.36c0 2.96-2.13 4.15-4.83 4.15h-3.41V7.62h3.41c2.7 0 4.83 1.19 4.83 4.15v1.93zm-1.55-1.93c0-1.92-1.22-2.75-3.28-2.75h-1.86v7.43h1.86c2.06 0 3.28-.83 3.28-2.75v-1.93z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
}

const socialLinks = [
  { label: 'GitHub', href: '#', icon: Icons.GitHub },
  { label: 'Twitter', href: '#', icon: Icons.Twitter },
  { label: 'LinkedIn', href: '#', icon: Icons.LinkedIn },
  { label: 'Medium', href: '#', icon: Icons.Medium },
  { label: 'YouTube', href: '#', icon: Icons.YouTube },
  { label: 'ORCID', href: '#', icon: Icons.ORCID },
  { label: 'Email', href: '#', icon: Icons.Email },
]

function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch (_) {}
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-bg border border-hairline text-ink hover:border-hairlineStrong hover:bg-surface transition-colors"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

export default function Header() {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <div className="sticky top-0 z-40 bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70 border-b border-hairline">
        <div className="container-page py-3.5 flex items-center justify-between">
          <a href="#" className="text-small font-semibold text-ink no-underline tracking-tight">
            chanaka.bandara
          </a>
          <nav className="hidden md:flex items-center gap-6 text-small text-sub">
            <a href="#timeline" className="text-sub no-underline hover:text-ink">Timeline</a>
            <a href="#talks" className="text-sub no-underline hover:text-ink">Talks</a>
            <a href="#teaching" className="text-sub no-underline hover:text-ink">Lecturing</a>
            <a href="#writing" className="text-sub no-underline hover:text-ink">Writing</a>
            <a href="#projects" className="text-sub no-underline hover:text-ink">Projects</a>
            <a href="#publications" className="text-sub no-underline hover:text-ink">Publications</a>
          </nav>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>

      <header className="border-b border-hairline">
        <div className="container-page pt-10 md:pt-14 pb-10 md:pb-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full ring-1 ring-hairline overflow-hidden bg-surface shrink-0">
            <img
              src="/avatar.jpg"
              alt="Chanaka Bandara"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="eyebrow mb-2.5">AI researcher · educator</p>
            <h1 className="text-h1 md:text-display font-bold tracking-tight text-ink">
              Chanaka Bandara
            </h1>
            <p className="mt-3 text-body-lg text-sub italic max-w-prose">
              “The best way to understand a system is to build one,
              <br />
              and the best way to keep it, is to teach it to someone else.”
            </p>

            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-bg border border-hairline text-ink no-underline transition-colors hover:no-underline hover:bg-ink hover:text-bg hover:border-ink"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  )
}
