import React from 'react'
import { talks } from '../data/talks'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-ink translate-x-[1px]" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function TalkCard({ talk }) {
  const thumb = `https://i.ytimg.com/vi/${talk.videoId}/hqdefault.jpg`
  const href = `https://www.youtube.com/watch?v=${talk.videoId}`
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block no-underline hover:no-underline">
      <div className="relative aspect-video rounded-md overflow-hidden ring-1 ring-hairline bg-surface">
        <img
          src={thumb}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-bg/95 flex items-center justify-center shadow-card transition-transform duration-200 group-hover:scale-110">
            <PlayIcon />
          </div>
        </div>
        {talk.duration && (
          <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-medium tabular-nums">
            {talk.duration}
          </span>
        )}
      </div>
      <div className="mt-2 text-small font-medium text-ink leading-snug group-hover:text-link transition-colors">
        {talk.title}
      </div>
      <div className="text-caption text-sub mt-0.5">{talk.venue}</div>
    </a>
  )
}

export default function FeaturedTalks() {
  return (
    <section id="talks" className="container-page py-12 md:py-16">
      <div className="grid-12 mb-8 items-end">
        <div className="col-span-12 md:col-span-7">
          <p className="eyebrow mb-2">Speaking</p>
          <h2 className="section-title">Research talks</h2>
        </div>
        <div className="col-span-12 md:col-span-5 md:text-right">
          <a href="#" className="text-small font-medium text-link hover:text-linkHover no-underline">
            See all talks →
          </a>
        </div>
      </div>

      <div className="grid-12">
        {talks.map((t, i) => (
          <div key={i} className="col-span-6 md:col-span-4 lg:col-span-3">
            <TalkCard talk={t} />
          </div>
        ))}
      </div>
    </section>
  )
}
