import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-semibold text-center tracking-tight">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
