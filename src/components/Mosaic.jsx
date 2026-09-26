import SignalNode from './SignalNode.jsx'

const technologies = ['LangGraph', 'ChromaDB', 'RAG', 'Python', 'LLM-as-Judge']

function Mosaic() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
      <SignalNode>
        <section id="mosaic" aria-labelledby="mosaic-title" className="py-8">
          <div className="max-w-4xl">
            <h2
              id="mosaic-title"
              className="font-display text-4xl font-bold text-warm-white md:text-5xl"
            >
              Mosaic
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-warm-white/80">
              A multi-company earnings intelligence assistant built on LangGraph
              and ChromaDB, combining retrieval-augmented generation with an
              LLM-as-judge evaluation framework. Achieved a 96.4% evaluation
              score across test scenarios.
            </p>

            <div className="mt-8 aspect-video w-full overflow-hidden bg-slate-panel">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/61iw1A9e0wk"
                title="Mosaic demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <ul
              aria-label="Technologies used"
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-warm-white/80"
            >
              {technologies.map((technology, index) => (
                <li key={technology} className="flex items-center gap-3">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-teal-trace"
                    />
                  )}
                  {technology}
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/ApurvaSaumya/Mosaic"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-teal-trace underline decoration-teal-trace/60 underline-offset-4 transition-colors hover:text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-trace"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </SignalNode>
    </div>
  )
}

export default Mosaic
