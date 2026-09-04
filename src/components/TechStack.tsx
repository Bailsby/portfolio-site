import { techIcons } from '../data/techIcons'

type TechStackProps = {
  title: string
  tech: string[]
}

export default function TechStack({ title, tech }: TechStackProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2.5">
        {tech.map((name) => {
          const Icon = techIcons[name]

          return (
            <span
              key={name}
              className="
                flex items-center gap-2 px-3.5 py-1.5
                border border-line rounded-full
                text-sm text-gray-300
                bg-white/[0.02] backdrop-blur-sm
                hover:border-accent/40 hover:text-white
                hover:bg-white/[0.04]
                hover:shadow-accent
                hover:scale-[1.05]
                transition-all duration-300
              "
            >
              {Icon && <Icon size={15} />}
              {name}
            </span>
          )
        })}
      </div>
    </div>
  )
}
