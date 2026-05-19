export const projectsIntro = `I enjoy building small, sharp tools, usually late at night, usually open-sourced on my <a href="#">GitHub</a>. A handful below:`

export const projects = [
  {
    icon: '📚',
    title: 'tiny-rag',
    image: '/projects/tiny-rag.jpg',
    body: `<strong>tiny-rag</strong> is a minimal Retrieval-Augmented Generation implementation in ~250 lines of Python, chunking, embeddings, FAISS index, cross-encoder reranking, and an LLM call. Built as a teaching companion to my <a href="#">RAG walkthroughs</a> on YouTube, it strips RAG down to its load-bearing parts so you can see exactly what each component does.`,
  },
  {
    icon: '📡',
    title: 'paper-radar',
    image: '/projects/paper-radar.jpg',
    body: `<strong>paper-radar</strong> is a personal arXiv tracker that pulls new papers in the areas I care about, embeds the abstracts, and surfaces "more like this" against my reading list. It also clusters the week's papers and writes a one-paragraph TL;DR for each, the workflow I use to keep up with the AI literature without drowning in it.`,
  },
  {
    icon: '🌾',
    title: 'agri-vision',
    image: '/projects/agri-vision.jpg',
    body: `<strong>agri-vision</strong> is a small computer-vision demo from my consulting work with <a href="#">Ceylon Agro Food Technologies</a>: a fine-tuned ResNet that classifies crop-leaf health from phone photos, plus a tiny Flask service to wrap it. The repo includes the data-collection notes, augmentation tricks, and what didn't work, which is most of what I learned.`,
  },
  {
    icon: '🧪',
    title: 'llm-lab',
    image: '/projects/llm-lab.jpg',
    body: `<strong>llm-lab</strong> is a growing collection of clean, educational notebooks for fine-tuning open-source LLMs on consumer GPUs, LoRA, QLoRA, instruction tuning, simple DPO. Each notebook is self-contained, runs on a single 24 GB card, and pairs with a short write-up explaining the choices.`,
  },
  {
    icon: '📊',
    title: 'eval-kit',
    image: '/projects/eval-kit.jpg',
    body: `<strong>eval-kit</strong> is a lightweight evaluation harness for RAG and LLM applications: ground-truth management, retrieval@k, faithfulness and answer-relevance scoring, and CSV-friendly reports. Born out of needing something simpler than the heavyweight frameworks when shipping LLM features at <a href="#">Cybergate</a>.`,
  },
  {
    icon: '🧰',
    title: 'random stuff',
    image: '/projects/random-stuff.jpg',
    body: `I also build a lot of smaller things, a <a href="#">prompt playground</a>, a <a href="#">Sinhala text utilities</a> package, a <a href="#">slide outline generator</a> I used while teaching at SLIIT, and the <a href="#">code companions</a> for my Medium posts and YouTube walkthroughs.`,
  },
]
