import React from 'react'
import { publications } from '../data/publications'

export default function Bio() {
  return (
    <section id="bio" className="bg-surface border-y border-hairline">
      <div className="container-page py-10 md:py-14">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-2">About</p>
            <h2 className="section-title">Bio</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-ink/85 leading-[1.7]">
              Chanaka Bandara is an AI/ML engineer based in Sri Lanka. He is currently a
              Senior AI/ML Engineer at <a href="#">Cybergate Services</a>, where he leads
              machine-learning workstreams end-to-end, from data pipelines through model
              training to production. He holds a BICT (Hons) in Computer Science from the
              <a href="#"> University of Colombo</a>. On the side he teaches at SLIIT,
              consults for Ceylon Agro Food Technologies, and currently runs his
              <a href="#"> YouTube channel</a> with hands-on AI/ML walkthroughs.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4">
              <div>
                <div className="text-h3 font-semibold text-ink">7+</div>
                <div className="text-caption text-sub mt-0.5">Years in tech</div>
              </div>
              <div>
                <div className="text-h3 font-semibold text-ink">3</div>
                <div className="text-caption text-sub mt-0.5">Years in AI/ML</div>
              </div>
              <div>
                <div className="text-h3 font-semibold text-ink">{publications.length}</div>
                <div className="text-caption text-sub mt-0.5">Publications</div>
              </div>
              <div>
                <div className="text-h3 font-semibold text-ink">BICT</div>
                <div className="text-caption text-sub mt-0.5">Hons, University of Colombo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
