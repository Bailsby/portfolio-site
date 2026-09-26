import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import CompactProjectCard from './CompactProjectCard'
import { projects } from '../data/projects'

// Three at most: the home page's job is to get someone into a demo quickly,
// and three compact cards fill one row. Everything is on the Projects page.
const HOME_PAGE_LIMIT = 3

export default function FeaturedProjects() {
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, HOME_PAGE_LIMIT)

  return (
    <section className="space-y-10">
      <h2 className="font-display text-2xl font-semibold text-center tracking-tight">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {featured.map((project) => (
          <CompactProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          See all projects, with how each one works
          <FiArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  )
}
