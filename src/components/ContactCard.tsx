import { copyToClipboard } from '../utils/copyToClipboard'

type ContactItem = {
  label: string
  value: string
  href?: string
  copyable?: boolean
}

export default function ContactCard({ item }: { item: ContactItem }) {
  const content = (
    <div
      onClick={() => item.copyable && copyToClipboard(item.value)}
      className="flex justify-between items-center p-4 border border-gray-900 rounded-lg hover:border-gray-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-pointer"
    >
      <span className="text-gray-400 text-xs uppercase tracking-wider">
        {item.label}
      </span>

      <span className="text-white">{item.value}</span>
    </div>
  )

  if (item.href) {
    return (
      <a href={item.href} target="_blank">
        {content}
      </a>
    )
  }

  return content
}
