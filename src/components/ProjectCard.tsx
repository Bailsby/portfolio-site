import { FaGithub } from 'react-icons/fa'
import { techIcons } from '../data/techIcons'

type Project = {
  title: string
  problem: string
  architecture: string
  techStack: string[]
  github: string
  live?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        border border-gray-900
        bg-black/50 backdrop-blur-sm
        p-6 rounded-lg
        flex flex-col space-y-4

        hover:bg-black/70
        hover:border-gray-500
        hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]
        hover:-translate-y-1

        transition-all duration-300
      "
    >
      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>

        {/* Problem */}
        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Problem
          </h4>

          <p className="text-gray-400 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Architecture */}
        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Architecture
          </h4>

          <p className="text-gray-400 leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {project.techStack.map((tech) => {
            const Icon = techIcons[tech]

            return (
              <span
                key={tech}
                className="
                  flex items-center gap-2
                  text-xs px-2 py-1
                  border border-gray-800
                  rounded-full
                  text-gray-400
                  bg-black/50 
                  backdrop-blur-sm
                  hover:border-gray-600
                  hover:text-white
                  hover:bg-black/70
                  hover:scale-[1.03]
                  transition-all duration-300
                "
              >
                {Icon && <Icon size={14} />}
                {tech}
              </span>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex justify-between items-center pt-4 text-sm border-t border-gray-900">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center gap-2
            text-gray-300
            hover:text-white
            transition
            group
          "
        >
          <FaGithub
            size={16}
            className="group-hover:scale-110 transition-transform duration-300"
          />

          GitHub
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              text-gray-300
              hover:text-white
              transition
            "
          >
            Live
          </a>
        )}
      </div>
    </div>
  )
}