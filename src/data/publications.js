export const publications = [
  {
    id: 1,
    year: 2024,
    featured: true,
    type: 'Journal Article',
    title: 'Scalable Fault-Tolerant Quantum Error Correction via Topology Optimization',
    authors: [{ name: 'Vane, J.', self: true }, { name: 'Aris, L.' }, { name: 'Zheng, K.' }],
    venue: 'Nature Quantum Information, Vol. 12, Issue 4, pp. 450–468.',
    links: [
      { type: 'pdf', href: '#', icon: 'picture_as_pdf', label: 'PDF' },
      { type: 'doi', href: '#', icon: 'link', label: 'DOI' },
    ],
  },
  {
    id: 2,
    year: 2024,
    featured: false,
    type: 'Conference Paper',
    title: 'Decentralized Consensus in High-Latency Interplanetary Networks',
    authors: [{ name: 'Miller, S.' }, { name: 'Vane, J.', self: true }, { name: 'Tanaka, H.' }],
    venue: 'Proceedings of the 2024 IEEE International Conference on Distributed Computing.',
    links: [
      { type: 'pdf', href: '#', icon: 'picture_as_pdf', label: 'PDF' },
    ],
  },
  {
    id: 3,
    year: 2023,
    featured: true,
    type: 'Journal Article',
    title: 'Ethical Implications of Autonomous Decision-Making in Large Language Models',
    authors: [{ name: 'Vane, J.', self: true }],
    venue: 'Journal of Computational Ethics and Philosophy, Vol. 8, pp. 112–130.',
    links: [
      { type: 'pdf', href: '#', icon: 'picture_as_pdf', label: 'PDF' },
      { type: 'doi', href: '#', icon: 'link', label: 'DOI' },
    ],
  },
  {
    id: 4,
    year: 2023,
    featured: false,
    type: 'Conference Paper',
    title: 'A Novel Approach to Adaptive Load Balancing in Serverless Computing',
    authors: [{ name: 'Grant, F.' }, { name: 'Vane, J.', self: true }, { name: 'Wu, Y.' }],
    venue: '35th ACM Symposium on Parallelism in Algorithms and Architectures (SPAA).',
    links: [
      { type: 'pdf', href: '#', icon: 'picture_as_pdf', label: 'PDF' },
    ],
  },
  {
    id: 5,
    year: 2023,
    featured: false,
    type: 'Journal Article',
    title: 'Latency Optimization in Edge-to-Cloud Continuum: A Survey',
    authors: [{ name: 'Vane, J.', self: true }, { name: 'Aris, L.' }],
    venue: 'IEEE Communications Surveys & Tutorials, Vol. 25, Issue 1.',
    links: [
      { type: 'doi', href: '#', icon: 'link', label: 'DOI' },
    ],
  },
]

export const publicationFilters = ['All', 'Featured', 'Journal Articles', 'Conference Papers']

export const citationMetrics = {
  total: '1,248',
  hIndex: '22',
  i10Index: '45',
}
