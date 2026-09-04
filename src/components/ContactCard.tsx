import { useEffect, useState } from 'react'
import { FaRegCopy, FaCheck } from 'react-icons/fa'

import { copyToClipboard } from '../utils/copyToClipboard'

type ContactItem = {
  label: string
  value: string
  href?: string
  copyable?: boolean
}

export default function ContactCard({ item }: { item: ContactItem }) {
  const [copied, setCopied] = useState(false)

  // Reset the "Copied" state a couple of seconds after a successful copy.
  useEffect(() => {
    if (!copied) return

    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  async function handleCopy() {
    const ok = await copyToClipboard(item.value)
    if (ok) setCopied(true)
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-line bg-white/[0.02] p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.04]">
      <span className="text-xs uppercase tracking-wider text-gray-400">
        {item.label}
      </span>

      <div className="flex items-center gap-3">
        {item.href ? (
          <a
            href={item.href}
            className="rounded-sm text-white transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {item.value}
          </a>
        ) : (
          <span className="text-white">{item.value}</span>
        )}

        {item.copyable && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${item.label.toLowerCase()}`}
            className="flex items-center gap-1.5 rounded-sm p-1 text-xs text-gray-500 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {copied ? <FaCheck size={13} /> : <FaRegCopy size={13} />}
            <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        )}
      </div>

      {/* Announced to screen readers without changing the visual layout. */}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? `${item.label} copied to clipboard` : ''}
      </span>
    </div>
  )
}
