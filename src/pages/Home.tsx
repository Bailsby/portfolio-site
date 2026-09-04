import { motion } from 'framer-motion'

import Hero from '../components/Hero'
import Intro from '../components/Intro'
import TechStack from '../components/TechStack'
import FeaturedProjects from '../components/FeaturedProjects'
import Reveal from '../components/Reveal'
import SectionDivider from '../components/SectionDivider'
import ScrollCue from '../components/ScrollCue'

const techGroups = [
  {
    title: 'Languages',
    tech: ['TypeScript', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    title: 'Frontend',
    tech: ['React', 'Next.js', 'Tailwind', 'Bootstrap'],
  },
  {
    title: 'Backend',
    tech: ['Node.js', 'Laravel', 'Fastify', 'Auth.js', 'REST APIs'],
  },
  {
    title: 'Data',
    tech: ['PostgreSQL', 'MySQL', 'Prisma', 'Supabase'],
  },
  {
    title: 'Commerce & Content',
    tech: ['commercetools', 'Contentful', 'Algolia'],
  },
  {
    title: 'Testing',
    tech: ['Vitest', 'Jest', 'PHPUnit'],
  },
  {
    title: 'Cloud & Infrastructure',
    tech: ['AWS', 'Terraform', 'Docker', 'Vercel'],
  },
  {
    title: 'CI/CD & Tooling',
    tech: ['Git', 'GitHub Actions', 'Bitbucket Pipelines', 'Doppler'],
  },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Fold — name, title, CTAs and About Me share the first screen on desktop.
          On mobile it flows naturally rather than cramming into one viewport. */}
      <section className="flex min-h-[calc(100svh_-_5rem)] flex-col justify-center gap-12 py-12 md:min-h-[calc(100svh_-_8rem)] md:gap-16 md:py-0">
        <Hero />
        <Intro />
        <ScrollCue />
      </section>

      <SectionDivider />

      {/* Tech stack */}
      <section className="py-20 md:py-28">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-center">
            Tech Stack
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {techGroups.map((group) => (
            <Reveal key={group.title}>
              <TechStack title={group.title} tech={group.tech} />
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 md:py-28">
        <Reveal>
          <FeaturedProjects />
        </Reveal>
      </section>
    </motion.div>
  )
}
