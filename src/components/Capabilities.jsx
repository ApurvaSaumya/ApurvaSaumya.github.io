import SignalNode from './SignalNode.jsx'

const capabilities = [
  {
    title: 'Multi-agent orchestration',
    description:
      'Routing layers that direct queries across specialized agents based on task complexity.',
  },
  {
    title: 'Document intelligence pipelines',
    description:
      'Structured extraction from unstructured documents at scale, with context carried across related extractions for consistency.',
  },
  {
    title: 'LLM-as-judge evaluation',
    description:
      'Evaluation harnesses that define what "correct" means for a task and measure against expert-verified ground truth.',
  },
  {
    title: 'Production reliability for agentic systems',
    description:
      'Separating deterministic logic from LLM reasoning to keep automated workflows auditable and predictable.',
  },
]

function Capabilities() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
      <SignalNode>
        <section
          id="capabilities"
          aria-labelledby="capabilities-title"
          className="py-8"
        >
          <h2
            id="capabilities-title"
            className="font-display text-4xl font-bold text-warm-white md:text-5xl"
          >
            What I Build
          </h2>

          <ul className="mt-8 max-w-4xl space-y-6">
            {capabilities.map(({ title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-trace"
                />
                <p className="text-lg leading-8 text-warm-white/80">
                  <span className="font-medium text-warm-white">{title}</span>
                  {' — '}
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </SignalNode>
    </div>
  )
}

export default Capabilities
