import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const edgeDuration = 0.55
const edgeStagger = 0.15

const edges = [
  { d: 'M 89 150 H 261', delay: 0 },
  { d: 'M 278 146 C 336 146 386 82 451 82', delay: edgeStagger },
  { d: 'M 278 154 C 336 154 386 218 451 218', delay: edgeStagger * 2 },
  { d: 'M 469 82 C 534 82 574 142 637 148', delay: edgeStagger * 3 },
  { d: 'M 469 218 C 534 218 574 158 637 152', delay: edgeStagger * 4 },
  { d: 'M 655 150 H 831', delay: edgeStagger * 5 },
]

const nodes = [
  { id: 'request', cx: 80, cy: 150, label: 'Request', litAt: 0 },
  { id: 'router', cx: 270, cy: 150, label: 'Router', litAt: edgeDuration },
  {
    id: 'agent-a',
    cx: 460,
    cy: 82,
    label: 'Agent A',
    litAt: edgeStagger + edgeDuration,
  },
  {
    id: 'agent-b',
    cx: 460,
    cy: 218,
    label: 'Agent B',
    litAt: edgeStagger * 2 + edgeDuration,
  },
  {
    id: 'tools',
    cx: 646,
    cy: 150,
    label: 'Tools',
    litAt: edgeStagger * 4 + edgeDuration,
  },
  {
    id: 'response',
    cx: 840,
    cy: 150,
    label: 'Response',
    litAt: edgeStagger * 5 + edgeDuration,
  },
]

function OrchestrationDiagram() {
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(mediaQuery.matches)

    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return (
    <div
      className="mt-4 max-w-5xl overflow-x-auto pb-4"
      aria-label="Agent orchestration flow"
    >
      <svg
        className="h-auto min-w-[720px] w-full overflow-visible md:min-w-0"
        viewBox="0 0 920 300"
        role="img"
        aria-labelledby="orchestration-title orchestration-description"
      >
        <title id="orchestration-title">Agent orchestration flow</title>
        <desc id="orchestration-description">
          A request reaches a router, which branches to Agent A and Agent B.
          Both agents use tools before a response is returned.
        </desc>
        <defs>
          <marker
            id="flow-arrow"
            viewBox="0 0 6 6"
            refX="5"
            refY="3"
            markerWidth="6"
            markerHeight="6"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="#5FB3B3" />
          </marker>
        </defs>

        {edges.map((edge, index) => (
          <motion.path
            key={`edge-${index}`}
            d={edge.d}
            fill="none"
            stroke="#5FB3B3"
            strokeOpacity="0.8"
            strokeWidth="2"
            markerEnd="url(#flow-arrow)"
            initial={reduceMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: reduceMotion ? 0 : edgeDuration,
              delay: reduceMotion ? 0 : edge.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {nodes.map((node) => (
          <g key={node.id}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="9"
              initial={
                reduceMotion || node.id === 'request'
                  ? false
                  : { fill: '#1C2238', stroke: '#5FB3B3' }
              }
              animate={{ fill: '#E8A33D', stroke: '#E8A33D' }}
              transition={{
                duration: reduceMotion ? 0 : 0.2,
                delay: reduceMotion ? 0 : node.litAt,
              }}
            />
            <text
              x={node.cx}
              y={node.cy + (node.cy < 150 ? -20 : 34)}
              textAnchor="middle"
              className="fill-warm-white font-mono text-[14px]"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default OrchestrationDiagram
