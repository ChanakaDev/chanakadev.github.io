export const publications = [
  {
    id: 1,
    year: 2024,
    featured: true,
    type: 'Journal Article',
    title: 'PepperMate: Enhancing Ceylon Black Pepper Cultivation through Artificial Intelligence and Mobile Application Development Technologies',
    authors: [{ name: 'Bandara, C.', self: true }],
    venue: 'Annual Research Symposium, University of Colombo, Sri Lanka.',
    links: [
      { type: 'pdf', href: '#', icon: 'picture_as_pdf', label: 'PDF' },
    ],
  },
  {
    id: 2,
    year: 2024,
    featured: true,
    type: 'Journal Article',
    title: 'CardioAnalyzer: Artificial Intelligence–based Electrocardiogram Analyzer for Heart Disease Diagnosis',
    authors: [{ name: 'Bandara, C.', self: true }],
    venue: 'Annual Research Symposium, University of Colombo, Sri Lanka.',
    links: [
      { type: 'pdf', href: '#', icon: 'picture_as_pdf', label: 'PDF' },
    ],
  },
]

export const publicationFilters = ['All', 'Featured', 'Journal Articles', 'Conference Papers']

export const citationMetrics = {
  total: '0',
  hIndex: '0',
  i10Index: '0',
}
