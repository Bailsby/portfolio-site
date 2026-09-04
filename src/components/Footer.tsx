import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/Bailsby',
    icon: FaGithub,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jake-bailey-dev',
    icon: FaLinkedin,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:jake_bailey07@hotmail.co.uk',
    icon: FaEnvelope,
    external: false,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row">
        <p>© {year} Jake Bailey</p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: '_blank', rel: 'noreferrer' }
                : undefined)}
              className="flex items-center gap-2 rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
