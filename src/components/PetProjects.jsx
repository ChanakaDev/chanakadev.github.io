import React from 'react'
import { projectsIntro, projects } from '../data/projects'

const tints = [
  'bg-tileBlue',
  'bg-tilePurple',
  'bg-tileYellow',
  'bg-tilePink',
  'bg-tileGreen',
  'bg-tileIndigo',
]

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

function ProjectCard({ p, idx }) {
  return (
    <article className="card h-full p-4 flex items-center gap-4 hover:shadow-cardHover hover:border-hairlineStrong transition-all relative">
      <a
        href={p.link || '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${p.title} on GitHub`}
        title="View on GitHub"
        className="absolute top-3 right-3 inline-flex w-8 h-8 items-center justify-center rounded-full text-muted no-underline hover:text-ink hover:bg-surface transition-colors"
      >
        <GitHubIcon />
      </a>
      <div
        className={`shrink-0 w-24 sm:w-28 aspect-square ${tints[idx % tints.length]} flex items-center justify-center overflow-hidden rounded-lg ring-1 ring-hairline`}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <span aria-hidden className="text-3xl">{p.icon}</span>
        )}
      </div>
      <div className="min-w-0 flex-1 pr-8">
        <h3 className="text-h4 font-semibold text-ink mb-1.5">{p.title}</h3>
        <p
          className="text-body text-ink/80 leading-[1.7] line-clamp-3"
          dangerouslySetInnerHTML={{ __html: p.body }}
        />
      </div>
    </article>
  )
}

export default function PetProjects() {
  return (
    <section id="projects" className="bg-surface border-y border-hairline">
      <div className="container-page py-12 md:py-16">
        <div className="grid-12 mb-8">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-2">Code</p>
            <h2 className="section-title">Pet projects</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p
              className="text-body text-sub max-w-prose"
              dangerouslySetInnerHTML={{ __html: projectsIntro }}
            />
          </div>
        </div>

        <div className="grid-12">
          {projects.map((p, i) => (
            <div key={i} className="col-span-12 md:col-span-6">
              <ProjectCard p={p} idx={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
