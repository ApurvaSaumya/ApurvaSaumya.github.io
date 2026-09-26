import SignalNode from './SignalNode.jsx'

const skillGroups = [
  {
    title: 'AI & Agentic Systems',
    skills: [
      'Agentic AI',
      'Multi-Agent Systems',
      'ReAct Agents',
      'LangChain',
      'LangGraph',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Retrieval & Evaluation',
    skills: [
      'Retrieval-Augmented Generation (RAG)',
      'LLM-as-Judge Evaluation',
      'AI Observability & Tracing',
    ],
  },
  {
    title: 'Cloud & AI Platforms',
    skills: [
      'Azure OpenAI',
      'Azure AI Search',
      'Azure Document Intelligence',
      'AWS Bedrock',
      'AWS Textract',
      'Microsoft 365 & Copilot Studio Agents',
    ],
  },
  {
    title: 'Engineering & DevOps',
    skills: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'CI/CD', 'DevOps'],
  },
]

function Skills() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
      <SignalNode>
        <section id="skills" aria-labelledby="skills-title" className="py-8">
          <h2
            id="skills-title"
            className="font-display text-4xl font-bold text-warm-white md:text-5xl"
          >
            Skills
          </h2>

          <div className="mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {skillGroups.map(({ title, skills }) => (
              <section key={title} aria-labelledby={`skills-${title}`}>
                <h3
                  id={`skills-${title}`}
                  className="font-display text-xl font-bold text-warm-white"
                >
                  {title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-b border-teal-trace/70 pb-1 font-mono text-sm text-warm-white/85"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </SignalNode>
    </div>
  )
}

export default Skills
