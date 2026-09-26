import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import SectionDivider from '../components/SectionDivider'

export default function Projects() {
  return (
    <div>
      {/* Header */}
      <section className="py-12 md:py-20">
        <Reveal>
          <div className="space-y-4 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Projects
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A collection of systems and applications I've built to solve
              real-world problems using modern full-stack technologies.
            </p>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* Project grid */}
      <section className="py-16 md:py-24">
        {/* A single project spans the full width — at half width the screenshot
          is too small to read. Reverts to two columns once a second lands. */}
        <div
          className={
            projects.length === 1
              ? 'grid grid-cols-1 gap-6'
              : 'grid grid-cols-1 gap-6 lg:grid-cols-2'
          }
        >
          {projects.map((project) => (
            <Reveal key={project.title} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
