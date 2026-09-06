import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

import { techIcons } from '../data/techIcons'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        border border-line
        bg-white/[0.02] backdrop-blur-sm
        rounded-lg overflow-hidden
        flex flex-col

        hover:bg-white/[0.04]
        hover:border-accent/40
        hover:shadow-accent
        hover:-translate-y-1

        transition-all duration-300
      "
    >
      {/* Screenshot — the strongest signal on the card, so it leads. Clicking
          it goes where the primary button goes. */}
      {project.image && (
        <a
          href={project.live ?? project.github}
          target="_blank"
          rel="noreferrer"
          className="block border-b border-line bg-white"
        >
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            width={900}
            height={459}
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </a>
      )}

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          {project.live && (
            <span className="flex shrink-0 items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.06] px-2.5 py-1 text-[11px] uppercase tracking-wider text-accent">
              {/* The ping is decorative; motion-safe so it does not animate for
                  anyone who has asked the OS for reduced motion. */}
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Live demo
            </span>
          )}
        </div>

        {/* Problem */}
        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Problem
          </h4>

          <p className="text-gray-400 leading-relaxed">{project.problem}</p>
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
                  border border-line
                  rounded-full
                  text-gray-400
                  bg-white/[0.02]
                  backdrop-blur-sm
                  hover:border-accent/40
                  hover:text-white
                  hover:bg-white/[0.04]
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

      {/* Footer — the demo is the primary action; the repo is for the minority
          of visitors who want to read the code. */}
      <div className="mt-auto space-y-3 border-t border-line px-6 py-4 text-sm">
        <div className="flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                group flex items-center gap-2
                rounded-md bg-white px-4 py-2
                font-medium text-black
                hover:bg-gray-200 hover:scale-[1.02]
                transition-all duration-300
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
            >
              View live demo
              <FiExternalLink
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              group flex items-center gap-2
              rounded-md border border-line bg-white/[0.02] px-4 py-2
              text-gray-300 backdrop-blur-sm
              hover:border-accent/50 hover:bg-white/[0.05] hover:text-white hover:scale-[1.02]
              transition-all duration-300
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black
            "
          >
            <FaGithub
              size={16}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            Source
          </a>
        </div>

        {project.liveNote && (
          <p className="text-xs leading-relaxed text-gray-500">
            {project.liveNote}
          </p>
        )}
      </div>
    </div>
  )
}
