import React from 'react'
import { timeline } from '../data/timeline'

export default function Timeline() {
  return (
    <section id="timeline" className="container-page py-12 md:py-16">
      <div className="grid-12 mb-8">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-2">2019 to present</p>
          <h2 className="section-title">Timeline</h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-body text-sub max-w-prose">
            From graphic design in Kandy to AI/ML engineering at Cybergate, a steady pivot through software into machine learning.
          </p>
        </div>
      </div>

      <ol className="border-t border-hairline">
        {timeline.map((row, i) => (
          <li
            key={i}
            className="grid grid-cols-[2.75rem_0.75rem_2.5rem_1fr] md:grid-cols-12 gap-x-2 md:gap-x-5 gap-y-3 items-start py-5 md:py-6 border-b border-hairline"
          >
            <div className="md:col-span-2 md:text-right md:pr-2">
              <div className="text-caption md:text-small font-semibold text-gray-500 whitespace-pre-line tabular-nums leading-snug">
                {row.date}
              </div>
            </div>

            <div className="md:col-span-1 relative self-stretch flex justify-center items-start">
              <span
                aria-hidden
                className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-gray-300"
              />
              <span
                aria-hidden
                className="relative z-10 mt-1.5 w-2.5 h-2.5 rounded-full bg-gray-400 ring-4 ring-bg"
              />
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-2 md:flex-wrap">
                {row.logos.map((src, j) => (
                  <div
                    key={j}
                    className="shrink-0 w-9 h-9 md:w-20 md:h-20 rounded-md md:rounded-lg bg-white ring-1 ring-hairline flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-contain p-1 md:p-1.5"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 space-y-2.5">
              {row.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-body text-ink/85 leading-[1.7]"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
