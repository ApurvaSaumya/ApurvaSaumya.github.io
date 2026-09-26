import photo from '../assets/apurva_2.png'
import OrchestrationDiagram from './OrchestrationDiagram.jsx'
import SignalNode from './SignalNode.jsx'

function Hero() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24">
      <SignalNode>
        <section
          id="hero"
          aria-labelledby="hero-title"
          className="grid min-h-[34rem] items-center gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1fr)_20rem]"
        >
          <div className="max-w-3xl">
            <h1
              id="hero-title"
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-warm-white md:text-7xl"
            >
              Apurva Saumya
            </h1>
            <p className="mt-6 font-display text-xl text-amber-signal md:text-2xl">
              Applied AI Engineer — Agentic Systems &amp; GenAI
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-warm-white/80">
              I build production LLM and multi-agent systems — from architecture
              through evaluation to deployment — in regulated, high-stakes
              environments. Currently based in Hyderabad, India, and exploring
              opportunities across Europe.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#mosaic"
                className="rounded-sm bg-amber-signal px-6 py-3 font-medium text-ink-navy transition-colors hover:bg-amber-signal/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-signal"
              >
                View Mosaic
              </a>
              <a
                href="#capabilities"
                className="rounded-sm border border-teal-trace px-6 py-3 font-medium text-teal-trace transition-colors hover:bg-teal-trace/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-trace"
              >
                What I Build
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-teal-trace px-6 py-3 font-medium text-teal-trace transition-colors hover:bg-teal-trace/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-trace"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="h-64 w-64 overflow-hidden rounded-full border-2 border-warm-white bg-slate-panel md:h-72 md:w-72">
              <img
                src={photo}
                alt="Apurva Saumya"
                className="h-full w-full rounded-full object-cover object-[8%_75%]"
                width="288"
                height="288"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <OrchestrationDiagram />
          </div>
        </section>
      </SignalNode>
    </div>
  )
}

export default Hero
