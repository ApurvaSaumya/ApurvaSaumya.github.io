import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import SignalNode from './SignalNode.jsx'

const contacts = [
  {
    label: 'Email',
    href: 'mailto:saumya.apurva@gmail.com',
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/apurva-saumya/',
    Icon: BriefcaseBusiness,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ApurvaSaumya',
    Icon: GitBranch,
    external: true,
  },
]

function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
      <SignalNode>
        <section id="contact" aria-labelledby="contact-title" className="py-8">
          <h2
            id="contact-title"
            className="font-display text-4xl font-bold text-warm-white md:text-5xl"
          >
            Get in touch
          </h2>

          <ul className="mt-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
            {contacts.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-3 text-teal-trace underline decoration-teal-trace/60 underline-offset-4 transition-colors hover:text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-trace"
                >
                  <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-lg text-warm-white/80">
            Open to opportunities across Europe.
          </p>
        </section>
      </SignalNode>
    </div>
  )
}

export default Contact
