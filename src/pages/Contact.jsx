import { useState } from 'react'

const profileLinks = [
  { icon: 'school', label: 'Google Scholar', href: '#' },
  { icon: 'id_card', label: 'ORCID Profile', href: '#' },
  { icon: 'groups', label: 'LinkedIn Research', href: '#' },
  { icon: 'code', label: 'GitHub Repository', href: '#' },
]

const subjects = [
  'Research Collaboration',
  'Speaking Invitation',
  'Publication Inquiry',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Inquiries
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">
            Contact &amp; Collaboration
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            I am open to academic collaborations, research inquiries, and discussions regarding
            ongoing projects in computational linguistics and human-computer interaction.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-gutter">
          {/* Contact form */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-xl shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container/10 rounded px-4 py-3 font-body-md text-body-md outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@institution.edu"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container/10 rounded px-4 py-3 font-body-md text-body-md outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container/10 rounded px-4 py-3 font-body-md text-body-md outline-none appearance-none transition-all"
                >
                  {subjects.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Please describe the nature of your inquiry..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container/10 rounded px-4 py-3 font-body-md text-body-md outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-on-primary px-8 py-4 rounded font-label-caps text-label-caps tracking-widest uppercase hover:bg-slate-800 transition-all flex items-center gap-2 group"
              >
                Send Message
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>
            </form>
          </div>

          {/* Info column */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* Location card */}
            <div className="bg-surface-container border border-outline-variant/30 rounded-xl overflow-hidden group">
              <div className="h-48 w-full bg-surface-dim relative overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE7HyTnUklSV57jJslUM8w7WPJGEzKR97HPdhZvC7qYEpdE-tzmeBvlbkN02TAat_vEs0Lt3IWfn1K4RAJl-_JzMXq3ipfvEHQgrbaaQIo_SQDQm0uH2sAc6bsYzpvrTPU7UX91N3YAJqk3FTw6Sgb6YOGcKuf5bXOpeKEumqODB1V8qMNa9ur68I3FkBtohgYVA45tyxm2yVB17U8wU2xa1d0hafb-vkrLFovk9KH4zen6llL5JRkMzDCrZ36syj50tWnH41Ww-w"
                  alt="University campus"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <span className="font-label-caps text-label-caps text-secondary uppercase">Institutional Office</span>
                <div className="space-y-1">
                  <p className="font-headline-md text-headline-md text-on-surface">Department of Informatics</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    The Alan Turing Building, Room 4.02<br />
                    University of St. Andrews<br />
                    North St, St Andrews KY16 9AJ, UK
                  </p>
                </div>
              </div>
            </div>

            {/* Profile links */}
            <div className="bg-white border border-outline-variant/30 rounded-xl p-8 space-y-6">
              <span className="font-label-caps text-label-caps text-secondary uppercase">Professional Profiles</span>
              <div className="grid grid-cols-1 gap-4">
                {profileLinks.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between p-4 bg-surface-container-low rounded group hover:bg-primary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary group-hover:text-on-primary">{icon}</span>
                      <span className="font-body-md text-body-md group-hover:text-on-primary">{label}</span>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-on-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_outward
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
