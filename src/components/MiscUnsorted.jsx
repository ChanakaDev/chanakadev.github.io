import React from 'react'
import { miscItems } from '../data/misc'

export default function MiscUnsorted() {
  return (
    <section id="misc" className="bg-surface border-t border-hairline">
      <div className="container-page py-12 md:py-16">
        <div className="grid-12 mb-8">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-2">More</p>
            <h2 className="section-title">Misc unsorted</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-sub max-w-prose">
              Interviews, articles, side notes, and other links worth keeping around.
            </p>
          </div>
        </div>

        <ul className="grid-12">
          {miscItems.map((m, i) => (
            <li key={i} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <a
                href={m.href}
                className="card p-4 flex items-start gap-3 h-full no-underline hover:shadow-card hover:border-hairlineStrong transition-all"
              >
                <span className="num pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-small text-ink leading-snug">{m.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
