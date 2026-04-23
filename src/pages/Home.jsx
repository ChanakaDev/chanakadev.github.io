import { useNavigate } from 'react-router-dom'

const highlights = [
  {
    badge: 'NATURE 2024',
    icon: 'open_in_new',
    title: 'Synaptic Plasticity in Deep Learning Architectures',
    desc: 'An investigation into the integration of homeostatic scaling mechanisms within recurrent neural networks.',
    tags: ['NEURAL NETWORKS', 'BIOLOGY'],
  },
  {
    badge: 'LECTURE',
    icon: 'video_library',
    title: 'Ethics in Computational Genomics',
    desc: 'Keynote address at the 2023 International Bio-Engineering Symposium in Stockholm.',
    tags: ['ETHICS', 'GENOMICS'],
  },
  {
    badge: 'PROJECT',
    icon: 'terminal',
    title: 'NeuroFlow v2.0 Released',
    desc: 'An open-source library for simulating neural signal transduction in high-throughput datasets.',
    tags: ['PYTHON', 'OPEN SOURCE'],
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="max-w-[1140px] mx-auto px-6 mb-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 space-y-stack-md">
            <span className="font-label-caps text-label-caps text-on-secondary-container uppercase">
              Research Scientist
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface">
              Mapping the convergence of{' '}
              <span className="italic">Computational Biology</span> and Neural Networks.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              I specialize in developing bio-inspired algorithms to decode complex neural patterns.
              My work bridges the gap between synthetic intelligence and biological computation to
              unlock new frontiers in healthcare.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => navigate('/publications')}
                className="px-6 py-3 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps shadow-sm hover:opacity-90 transition-opacity"
              >
                View Publications
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="px-6 py-3 border border-secondary text-secondary rounded-lg font-label-caps text-label-caps hover:bg-surface-container transition-colors"
              >
                Lab Projects
              </button>
            </div>
          </div>

          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-xl">
              <img
                alt="Portrait of Dr. Julian Vane"
                className="w-full h-full object-cover grayscale contrast-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyEkk_iTFddknVoSOhUJEOU7ZfXVo-i_u1xhOE3buja5RZJp--V-LU-JW1neVIAWhYe1rscWiireGTmydCi5Xo8QUiJ6ZydUjzl7Ew19sRFdptLZMmSu9qQBzoLXm7QgIlINSTQLsCcfOMhni5U1pRDqV_sWunLo1y86BA3IvnUaS6bTq8sEXDLwC3VFoV2_W3vTVy60gHKEq3gok2Vf9QL84OM0tBHjlbugXX3NR_zKT6T9tZHi-gT6Zvq9CaY9-HFPq1uXhmBvw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg border border-outline-variant shadow-sm hidden lg:block">
              <div className="space-y-2">
                <p className="font-label-caps text-label-caps text-on-secondary-container">CURRENT POSITION</p>
                <p className="font-headline-md text-headline-md leading-tight">
                  Principal Investigator<br />at Vane Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="bg-surface-container-low py-section-padding">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-4">
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-2 block">Curation</span>
              <h2 className="font-headline-lg text-headline-lg">Recent Highlights</h2>
            </div>
            <button
              onClick={() => navigate('/publications')}
              className="text-primary font-label-caps text-label-caps flex items-center gap-2 hover:underline"
            >
              SEE FULL ARCHIVE{' '}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group bg-surface-container-lowest p-8 border border-outline-variant hover:border-primary transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-stack-md">
                  <span className="px-2 py-1 bg-surface-container-high font-label-caps text-[10px] rounded">
                    {h.badge}
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary">
                    {h.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                  {h.title}
                </h3>
                <p className="text-on-surface-variant mb-6 text-sm">{h.desc}</p>
                <div className="pt-6 border-t border-slate-100 flex gap-2 flex-wrap">
                  {h.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-50 text-[11px] font-medium border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab section */}
      <section className="py-section-padding max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <img
              alt="Lab environment"
              className="w-full h-full object-cover brightness-75"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH5q92e9fNFVqQ7FhyGckoGEOyK9S0LL1PTO3Cw4l1MD3bZFiU7Zv9jkAhhp26jiwi3FyCHAq9DTAlS0qQrnUO2ZZi_ZrrzSXRkj-eKHsfCMLnS0iajzdA7jv6MQg7vai_sNi7eNU4WUYnbH1ki-CSyKNI2irQjDFfUmQH305GRacVEE_SvMVvKsc0oTqc4fms-jPTruy5RwRofB2ydNtzytO3pP2eSWAm3o62C50a8wC2spajj07Lzd01RAS2jWP6uViLM8rTY0U"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 cursor-pointer hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
              </div>
            </div>
          </div>

          <div className="space-y-stack-md">
            <h2 className="font-headline-lg text-headline-lg">Bridging Theory &amp; Practice</h2>
            <p className="text-on-surface-variant font-body-lg">
              My laboratory explores the fundamental principles of neural computation to build
              systems that learn with the efficiency of biological brains. Through collaborative
              research, we aim to translate these findings into transformative neurological therapies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-outline-variant rounded-lg">
                <div className="font-headline-md text-headline-md mb-1">140+</div>
                <div className="font-label-caps text-[10px] text-secondary">CITATIONS</div>
              </div>
              <div className="p-4 border border-outline-variant rounded-lg">
                <div className="font-headline-md text-headline-md mb-1">12</div>
                <div className="font-label-caps text-[10px] text-secondary">PATENTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
