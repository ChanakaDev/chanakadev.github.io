import { useNavigate } from 'react-router-dom'

const highlights = [
  {
    badge: 'RESEARCH',
    icon: 'monitor_heart',
    title: 'CardioAnalyzer',
    desc: 'AI-powered ECG analysis system for detecting heart disease, enabling accessible cardiac screening through deep learning.',
    tags: ['AI', 'HEALTHCARE'],
  },
  {
    badge: 'RESEARCH',
    icon: 'agriculture',
    title: 'PepperMate',
    desc: 'Mobile AI application enhancing Ceylon black pepper cultivation through intelligent disease detection and yield prediction.',
    tags: ['AI', 'MOBILE APP'],
  },
  {
    badge: 'CAREER',
    icon: 'work',
    title: 'Senior AI/ML Engineer at Cybergate',
    desc: 'Developing and deploying machine learning solutions for enterprise-level applications across diverse domains.',
    tags: ['AI', 'ML ENGINEERING'],
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
              AI / ML Engineer &amp; Researcher
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface">
              Grounding the power of{' '}
              <span className="italic">Machine Learning</span> in problems that matter.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              I apply machine learning and deep learning to real-world challenges, developing
              intelligent systems that bridge the gap between cutting-edge AI research and practical,
              deployable solutions. My focus is on building tools that are not just theoretically
              sound, but operationally impactful.
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
                My Projects
              </button>
            </div>
          </div>

          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-xl">
              <img
                alt="Portrait of Chanaka Bandara"
                className="w-full h-full object-cover grayscale contrast-110"
                src="/image.png"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg border border-outline-variant shadow-sm hidden lg:block">
              <div className="space-y-2">
                <p className="font-label-caps text-label-caps text-on-secondary-container">CURRENT POSITION</p>
                <p className="font-headline-md text-headline-md leading-tight">
                  Senior AI / ML Engineer<br />at Cybergate
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

      {/* Lab / Research section */}
      <section className="py-section-padding max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <img
              alt="AI research environment"
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
            <h2 className="font-headline-lg text-headline-lg">From Research to Real-World Impact</h2>
            <p className="text-on-surface-variant font-body-lg">
              Research holds its greatest value not in the pages of a journal, but in the lives it
              transforms. My work in applied artificial intelligence is driven by a single conviction
              — that machine learning models should not stop at accuracy metrics, but should go
              further, solving real problems for real people. From designing intelligent systems to
              deploying data-driven solutions, I am committed to ensuring that every line of research
              translates into meaningful, measurable impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-outline-variant rounded-lg">
                <div className="font-headline-md text-headline-md mb-1">2</div>
                <div className="font-label-caps text-[10px] text-secondary">PUBLICATIONS</div>
              </div>
              <div className="p-4 border border-outline-variant rounded-lg">
                <div className="font-headline-md text-headline-md mb-1">2</div>
                <div className="font-label-caps text-[10px] text-secondary">RESEARCH PROJECTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
