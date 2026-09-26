import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById('hero')
      setIsVisible(hero ? hero.getBoundingClientRect().bottom <= 0 : window.scrollY > 0)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          title="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="group fixed bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-signal bg-amber-signal text-ink-navy shadow-lg shadow-ink-navy/40 transition-colors hover:bg-amber-signal/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-signal md:bottom-8 md:right-8"
        >
          <ArrowUp aria-hidden="true" size={19} strokeWidth={2.25} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm bg-slate-panel px-2 py-1 font-mono text-xs text-warm-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Back to top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
