import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactCard from '../components/ContactCard'
import Reveal from '../components/Reveal'
import SectionDivider from '../components/SectionDivider'

export default function Contact() {
  const contacts = [
    {
      label: 'Phone',
      value: '+4477990938907',
      href: 'tel:+4477990938907',
      copyable: true,
    },
    {
      label: 'Email',
      value: 'jake_bailey07@hotmail.co.uk',
      href: 'mailto:jake_bailey07@hotmail.co.uk',
      copyable: true,
    },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <section className="py-12 md:py-20">
        <Reveal>
          <div className="text-center space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Contact
            </h1>

            <div className="flex justify-center">
              <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/25">
                Available for freelance
              </span>
            </div>

            <p className="text-gray-400">
              Feel free to reach out — open to the occasional freelance project
              alongside full-time work.
            </p>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* Details */}
      <section className="py-16 md:py-24 space-y-10">
        {/* Contact cards */}
        <Reveal>
          <div className="space-y-3">
            {contacts.map((c) => (
              <ContactCard key={c.label} item={c} />
            ))}
          </div>
        </Reveal>

        {/* CV */}
        <Reveal>
          <div className="text-center">
            <a
              href="/Jake-Bailey-CV.pdf"
              download
              className="inline-block px-6 py-3 bg-white text-black rounded-md hover:scale-[1.02] hover:bg-gray-200 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </Reveal>

        {/* Socials */}
        <Reveal>
          <div className="flex justify-center gap-8 text-gray-400">
            <a
              href="https://github.com/Bailsby"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-accent transition group"
            >
              <FaGithub size={18} />
              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jake-bailey-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-accent transition group"
            >
              <FaLinkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
