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
    <div className="border border-gray-900 p-6 rounded-lg hover:border-gray-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Problem
          </h4>
          <p className="text-gray-400 leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Architecture
          </h4>
          <p className="text-gray-400 leading-relaxed">
            {project.architecture}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => {
            const Icon = techIcons[tech]

            return (
              <span
                key={tech}
                className="flex items-center gap-2 text-xs px-2 py-1 border border-gray-800 rounded-full text-gray-400"
              >
                {Icon && <Icon size={14} />}
                {tech}
              </span>
            )
          })}
        </div>
      </div>

      <div className="mt-auto flex justify-between pt-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition group"
        >
          <FaGithub size={16} className="group-hover:scale-110 transition" />
          GitHub
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            Live
          </a>
        )}
      </div>
    </div>
  )
}
