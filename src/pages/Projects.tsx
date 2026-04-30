import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'

export default function Projects() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <Reveal>
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">Projects</h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of systems and applications I've built to solve
            real-world problems using modern full-stack technologies.
          </p>
        </div>
      </Reveal>

      {/* Project grid */}
      <Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Reveal>
    </div>
  )
}
