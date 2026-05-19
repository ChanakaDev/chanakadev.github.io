import React from 'react'
import { writingIntro, writingPosts } from '../data/writing'

export default function FeaturedWriting() {
  return (
    <section id="writing" className="container-page py-12 md:py-16">
      <div className="grid-12 mb-8">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-2">Blog</p>
          <h2 className="section-title">Featured writing</h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p
            className="text-body text-sub max-w-prose"
            dangerouslySetInnerHTML={{ __html: writingIntro }}
          />
        </div>
      </div>

      <ul className="grid-12">
        {writingPosts.map((p, i) => (
          <li key={i} className="col-span-12 md:col-span-6">
            <a
              href="#"
              className="card p-4 flex items-start gap-3 h-full no-underline hover:shadow-card hover:border-hairlineStrong transition-all group"
            >
              <span className="num pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div className="min-w-0 flex-1">
                <p className="text-caption font-medium text-sub tabular-nums mb-0.5">{p.date}</p>
                <span className="text-small text-ink leading-snug group-hover:text-link transition-colors">
                  {p.title}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
