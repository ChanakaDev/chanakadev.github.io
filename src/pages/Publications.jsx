import { useState, useMemo } from 'react'
import { publications, publicationFilters, citationMetrics } from '../data/publications'

function AuthorList({ authors }) {
  return (
    <p className="font-body-md text-body-md text-secondary mb-2">
      {authors.map((a, i) => (
        <span key={a.name}>
          {a.self ? <span className="font-semibold text-on-surface">{a.name}</span> : a.name}
          {i < authors.length - 1 && ', '}
        </span>
      ))}
    </p>
  )
}

function PublicationRow({ pub }) {
  return (
    <div className="group py-6 flex flex-col md:flex-row gap-6 border-b border-slate-100 hover:bg-white/50 transition-all rounded-lg px-4 -mx-4">
      <div className="md:w-3/4">
        <div className="flex items-center gap-3 mb-2">
          {pub.featured && (
            <span className="bg-primary-fixed text-on-primary-fixed-variant font-label-caps text-[10px] px-2 py-0.5 rounded tracking-tighter uppercase">
              Featured
            </span>
          )}
          <span className="text-outline font-label-caps text-[10px] tracking-tighter uppercase">
            {pub.type}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-tertiary mb-2 group-hover:text-primary transition-colors">
          {pub.title}
        </h3>
        <AuthorList authors={pub.authors} />
        <p className="font-body-md text-body-md italic text-on-secondary-container">{pub.venue}</p>
      </div>
      <div className="md:w-1/4 flex flex-row md:flex-col justify-start md:items-end gap-3">
        {pub.links.map((link) => (
          <a
            key={link.type}
            href={link.href}
            className="flex items-center gap-2 text-secondary hover:text-primary font-label-caps text-label-caps border border-slate-200 px-3 py-1.5 rounded bg-white shadow-sm transition-all hover:shadow-md"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      if (activeFilter === 'All') return true
      if (activeFilter === 'Featured') return p.featured
      if (activeFilter === 'Journal Articles') return p.type === 'Journal Article'
      if (activeFilter === 'Conference Papers') return p.type === 'Conference Paper'
      return true
    })
  }, [activeFilter])

  const byYear = useMemo(() => {
    const map = {}
    filtered.forEach((p) => {
      if (!map[p.year]) map[p.year] = []
      map[p.year].push(p)
    })
    return Object.entries(map).sort(([a], [b]) => Number(b) - Number(a))
  }, [filtered])

  return (
    <main className="pt-32 pb-20 max-w-[1140px] mx-auto px-6">
      <header className="mb-16">
        <h1 className="font-headline-xl text-headline-xl text-tertiary mb-4">Publications</h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
          A comprehensive record of research output spanning quantum computing architectures,
          distributed systems, and computational ethics.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-200 pb-6">
        {publicationFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
              activeFilter === f
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Publication list grouped by year */}
      <div className="space-y-12">
        {byYear.map(([year, pubs]) => (
          <section key={year}>
            <h2 className="font-label-caps text-label-caps text-outline mb-6 flex items-center gap-4">
              {year}
              <span className="h-[1px] flex-grow bg-slate-200" />
            </h2>
            <div className="space-y-1">
              {pubs.map((pub) => (
                <PublicationRow key={pub.id} pub={pub} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Citation metrics */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
          <p className="font-label-caps text-label-caps text-outline mb-2 uppercase tracking-widest">Total Citations</p>
          <h4 className="font-headline-xl text-headline-xl text-tertiary mb-1">{citationMetrics.total}</h4>
          <p className="text-xs text-on-tertiary-container font-body-md">Google Scholar • Updated Weekly</p>
        </div>
        <div className="md:col-span-1 bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
          <p className="font-label-caps text-label-caps text-outline mb-2 uppercase tracking-widest">h-index</p>
          <h4 className="font-headline-xl text-headline-xl text-tertiary mb-1">{citationMetrics.hIndex}</h4>
          <p className="text-xs text-on-tertiary-container font-body-md">i10-index: {citationMetrics.i10Index}</p>
        </div>
        <div className="md:col-span-1 bg-primary text-on-primary p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
          <p className="font-label-caps text-label-caps text-white/70 mb-4 uppercase tracking-widest">External Profiles</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                alt="Google Scholar"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZw1luwygCCUr03GQG0Mo5wwRfnvUA7wHuRX5AhMY6Tx5r_WXmBgBvaoTH4QRxTS6vDC2tdF4PdfB6psEFRO7W2MokvG9UwHddKlOuiiC0gphzP0C7ajpROMPMP9epuDY89va5_11xVnkqgEnl_T6SijZ91W_JtOgvz9aDYKWWuar2uGbhI1q3O96mmeGRI5ZBsKpgpit2gAT--pcAxTbLbrW3QMeRDvzkYYPULKmRqluVLwkQdY6ZenIZHc7YzlnS-4V4FgFP8qw"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                alt="ORCID"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Egmyps1UDtf9h-mEwXKJi5TTm6kgugEZ2h8U9VkIpsMCVwdm3SEAj3728YiwcRCRVr5ZmQVXlBoIvp72Im3Ko5cqiMGoTNPBOvfJii36nypcCG9JjErDqhCkmxuQnj5ovd5UGY3awZkA1ZTULAXTTplcqCQmaQ7qnkVkO0AIb_lSEv7OI9jCv4T-LlJFO8ompOsgVtJdHsiQ_sGfYOXbYcKz-_3M-0Sj5WbYjiUHFZ-rGBuDL_EfIHqREuWboqNUHwRHsrr-QIM"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                alt="GitHub"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHL04ZRm0JxBjvfaCGpjOZUeWbxk4tfndNX1yvHBFPcQr0tMhs10l3jLj18dO3U4SxYN3NNp4bAnyostWE14o6BDhn4HfzlBH7m76BrfyDjSqR6ACV3-4Ef62IgBvVYVhAvirSjnce3LlqaU_jgjPSLen3YzQDbi6wI1pI75E6LPog3ALWknMNG__fN2TZWb9gti-_qaZNXbApCp-WjwsXmhuf-DHArQdGfqccFo4xy-mRkf_Ik9fcR8uxNA2Ta3m5L-H2H-OodHQ"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
