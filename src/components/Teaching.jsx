import React from 'react'
import { teachingVideos } from '../data/teaching'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-ink translate-x-[1px]" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function VideoCard({ v }) {
  const thumb = `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`
  const href = `https://www.youtube.com/watch?v=${v.videoId}`
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block no-underline hover:no-underline group">
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
        {v.duration && (
          <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-medium tabular-nums">
            {v.duration}
          </span>
        )}
      </div>
      <div className="mt-2 text-small font-medium text-ink leading-snug group-hover:text-link transition-colors">
        {v.title}
      </div>
    </a>
  )
}

export default function Teaching() {
  return (
    <section id="teaching" className="bg-surface border-y border-hairline">
      <div className="container-page py-12 md:py-16">
        <div className="grid-12 mb-8">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-2">Education</p>
            <h2 className="section-title">Lecturing</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-sub max-w-prose">
              I have a <a href="#">YouTube channel</a> where I post lectures on LLMs and AI more generally.
            </p>
          </div>
        </div>

        <div className="grid-12 mb-10">
          {teachingVideos.map((v, i) => (
            <div key={i} className="col-span-6 md:col-span-4 lg:col-span-3">
              <VideoCard v={v} />
            </div>
          ))}
        </div>

        <div className="grid-12 pt-8 border-t border-hairline">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-2">SLIIT · Kandy</p>
            <h3 className="text-h4 font-semibold text-ink">AI / ML lectures for Orientation students.</h3>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-3">
            <p className="text-body text-ink/85 leading-[1.7]">
              In 2025 I delivered AI / ML lectures for the Orientation students at{' '}
              <a href="#">SLIIT, Kandy Uni</a> as an Academic Instructor. The sessions introduced incoming
              undergraduates to the foundations of AI search and reasoning, classical machine learning, neural
              networks, and a practical first look at modern deep learning, with hands-on labs in Python.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <a href="#" className="chip hover:border-ink">Session outline</a>
              <a href="#" className="chip hover:border-ink">Lecture slides</a>
              <a href="#" className="chip hover:border-ink">Lab notebooks</a>
              <a href="#" className="chip hover:border-ink">Reading list</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
