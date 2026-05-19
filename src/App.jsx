import React from 'react'
import Header from './components/Header'
import Timeline from './components/Timeline'
import Bio from './components/Bio'
import FeaturedTalks from './components/FeaturedTalks'
import Teaching from './components/Teaching'
import FeaturedWriting from './components/FeaturedWriting'
import PetProjects from './components/PetProjects'
import Publications from './components/Publications'
import Awards from './components/Awards'
import MiscUnsorted from './components/MiscUnsorted'

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Header />
      <main>
        <Bio />
        <Timeline />
        <FeaturedTalks />
        <Teaching />
        <FeaturedWriting />
        <PetProjects />
        <Publications />
        <Awards />
        <MiscUnsorted />
      </main>
      <footer className="bg-bg border-t border-hairline text-ink">
        <div className="container-page py-8">
          <div className="grid-12 items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="text-body font-semibold tracking-tight">Chanaka Bandara</div>
              <p className="text-caption text-sub mt-0.5">AI researcher · educator</p>
            </div>
            <div className="col-span-12 md:col-span-6 md:text-right">
              <p className="text-caption text-sub">© 2026 · built with care</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
