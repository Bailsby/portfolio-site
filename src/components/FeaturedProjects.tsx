import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-semibold text-center tracking-tight">
        Featured Projects
      </h2>

      {/* A single project spans the full width — at half width the screenshot
          is too small to read. Reverts to two columns once a second lands. */}
      <div
        className={
          projects.length === 1
            ? 'grid grid-cols-1 gap-6'
            : 'grid grid-cols-1 gap-6 lg:grid-cols-2'
        }
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
