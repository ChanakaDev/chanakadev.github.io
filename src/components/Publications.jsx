import React from 'react'
import { publicationsIntro, publications } from '../data/publications'

export default function Publications() {
  return (
    <section id="publications" className="container-page py-12 md:py-16">
      <div className="grid-12 mb-8">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-2">Research</p>
          <h2 className="section-title">Publications</h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p
            className="text-body text-sub max-w-prose"
            dangerouslySetInnerHTML={{ __html: publicationsIntro }}
          />
        </div>
      </div>

      <ul className="grid-12">
        {publications.map((p, i) => (
          <li key={i} className="col-span-12 md:col-span-6">
            <article className="card p-5 h-full hover:shadow-cardHover hover:border-hairlineStrong transition-all">
              <div className="flex items-start gap-4">
                <span className="num pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div className="min-w-0">
                  <h3 className="text-body font-semibold text-ink mb-1 leading-snug">
                    <a href="#" className="no-underline text-ink hover:text-link">{p.title}</a>
                  </h3>
                  <p className="text-caption text-sub mb-2 leading-snug">{p.authors}</p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tileBlue text-link text-caption font-semibold">
                      {p.venue}
                    </span>
                    {p.note && <span className="text-caption text-sub">{p.note}</span>}
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
