import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import LiveBadge from './LiveBadge'
import { projectSlug, type Project } from '../data/projects'

/**
 * The home page's version of a project: the screenshot, what it does in one
 * sentence, and the way in. The problem, architecture and stack live on the
 * Projects page, one "Details" click away.
 */
export default function CompactProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        border border-line
        bg-white/[0.02] backdrop-blur-sm
        rounded-lg overflow-hidden
        flex h-full flex-col

        hover:bg-white/[0.04]
        hover:border-accent/40
        hover:shadow-accent
        hover:-translate-y-1

        transition-all duration-300
      "
    >
      {project.image && (
        <a
          href={project.live ?? project.github}
          target="_blank"
          rel="noreferrer"
          className="relative block border-b border-line bg-white"
        >
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            width={1400}
            height={714}
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
          {project.live && (
            <span className="absolute right-3 top-3">
              <LiveBadge overlay />
            </span>
          )}
        </a>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                group flex items-center gap-2
                rounded-md bg-white px-3.5 py-2
                font-medium text-black
                hover:bg-gray-200
                transition-colors duration-300
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
            >
              View live demo
              <FiExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
          <Link
            to={`/projects#${projectSlug(project)}`}
            className="group flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
          >
            Details
            <FiArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
            <span className="sr-only"> about {project.title}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
