import { techIcons } from '../data/techIcons'

type TechStackProps = {
  title: string
  tech: string[]
}

export default function TechStack({ title, tech }: TechStackProps) {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {tech.map((name) => {
          const Icon = techIcons[name]

          return (
            <span
              key={name}
              className="
                flex items-center gap-2 px-4 py-1.5 
                border border-gray-800 rounded-full 
                text-sm text-gray-300 
                bg-black/50 backdrop-blur-sm
                hover:border-gray-500 hover:text-white 
                hover:bg-black/70
                hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] 
                hover:scale-[1.05] 
                transition-all duration-300
              "
            >
              {Icon && <Icon size={16} />}
              {name}
            </span>
          )
        })}
      </div>
    </section>
  )
}
