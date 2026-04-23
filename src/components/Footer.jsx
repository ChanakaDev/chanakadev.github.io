import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full border-t mt-20 bg-slate-50 border-slate-200">
      <div className="max-w-[1140px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-bold text-slate-900 font-headline-md">Chanaka Bandara</div>
          <div className="font-headline-md text-sm text-slate-500">© 2026 Chanaka Bandara. AI/ML Engineer & Researcher.</div>
        </div>
        <div className="flex gap-8">
          <a href="#" className="font-headline-md text-sm text-slate-500 hover:underline decoration-slate-400 underline-offset-4 transition-all duration-300">Google Scholar</a>
          <a href="#" className="font-headline-md text-sm text-slate-500 hover:underline decoration-slate-400 underline-offset-4 transition-all duration-300">ORCID</a>
          <a href="#" className="font-headline-md text-sm text-slate-500 hover:underline decoration-slate-400 underline-offset-4 transition-all duration-300">GitHub</a>
          <NavLink to="/contact" className="font-headline-md text-sm text-slate-500 hover:underline decoration-slate-400 underline-offset-4 transition-all duration-300">Contact</NavLink>
        </div>
      </div>
    </footer>
  )
}
