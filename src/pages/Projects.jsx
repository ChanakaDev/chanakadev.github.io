import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects, projectFilters } from '../data/projects'

function ProjectCard({ project }) {
  return (
    <article className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-[0px_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          alt={project.imgAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={project.img}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-[#F1F5F9] text-secondary text-[10px] font-label-caps px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-headline-md text-headline-md text-on-background mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
          {project.description}
        </p>
        <a
          href={project.href}
          className="inline-flex items-center text-sm font-label-caps text-primary group-hover:underline underline-offset-4"
        >
          {project.cta}
          <span className="material-symbols-outlined text-sm ml-1">{project.ctaIcon}</span>
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    if (activeFilter === 'All Projects') return projects
    return projects.filter((p) => p.tags.includes(activeFilter))
  }, [activeFilter])

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-[1140px] mx-auto px-6">
        <section className="mb-16">
          <h1 className="font-headline-xl text-headline-xl text-on-background mb-4">Research Projects</h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Exploring the intersection of computational intelligence and biological systems through
            rigorous empirical analysis and architectural design.
          </p>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 items-center">
          <span className="font-label-caps text-label-caps text-secondary mr-2">FILTER BY:</span>
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-label-caps transition-colors ${
                activeFilter === f
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-secondary hover:bg-surface-container-high'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Collaboration CTA */}
        <section className="mt-24 py-16 px-8 border-t border-slate-200 text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4">Interested in collaboration?</h2>
          <p className="font-body-md text-on-surface-variant max-w-lg mx-auto mb-8">
            I am always open to discussing new research opportunities, grant applications, or
            technical consultations in computational biology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-caps hover:opacity-90 transition-opacity"
            >
              SEND AN INQUIRY
            </button>
            <a
              href="#"
              className="bg-transparent border border-secondary text-secondary px-8 py-3 rounded-lg font-label-caps hover:bg-surface-container transition-colors"
            >
              VIEW GITHUB
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
