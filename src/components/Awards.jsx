import React from 'react'
import { awards, awardsIntro } from '../data/awards'

function AwardCard({ a }) {
  return (
    <a
      href={a.href}
      className="group block no-underline hover:no-underline"
    >
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-hairline bg-surface shadow-card group-hover:shadow-cardHover group-hover:ring-hairlineStrong transition-all">
        <img
          src={a.image}
          alt={a.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-small font-semibold text-ink leading-snug group-hover:text-link transition-colors">
          {a.title}
        </h3>
        <p className="text-caption text-sub mt-0.5">{a.issuer}</p>
      </div>
    </a>
  )
}

export default function Awards() {
  return (
    <section id="awards" className="container-page py-12 md:py-16">
      <div className="grid-12 mb-8">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-2">Recognition</p>
          <h2 className="section-title">Awards</h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-body text-sub max-w-prose">{awardsIntro}</p>
        </div>
      </div>

      <div className="grid-12">
        {awards.map((a, i) => (
          <div key={i} className="col-span-6 md:col-span-4">
            <AwardCard a={a} />
          </div>
        ))}
      </div>
    </section>
  )
}
