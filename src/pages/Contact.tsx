import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactCard from '../components/ContactCard'
import Reveal from '../components/Reveal'

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
    <div className="max-w-2xl mx-auto space-y-10">
      {/* Header */}
      <Reveal>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              Open to work
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight">Contact</h1>

          <p className="text-gray-400">
            Feel free to reach out — I’m open to new opportunities.
          </p>
        </div>
      </Reveal>

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
        <div className="text-center pt-6">
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
        <div className="flex justify-center gap-8 pt-6 text-gray-400">
          <a
            href="https://github.com/Bailsby"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition group"
          >
            <FaGithub size={18} />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jake-bailey-dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition group"
          >
            <FaLinkedin size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </Reveal>
    </div>
  )
}
