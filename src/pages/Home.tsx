import { motion } from 'framer-motion'

import Hero from '../components/Hero'
import Intro from '../components/Intro'
import TechStack from '../components/TechStack'
import FeaturedProjects from '../components/FeaturedProjects'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <motion.div
      className="space-y-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <Intro />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <TechStack
          title="Professional Tech Stack"
          tech={[
            'React',
            'TypeScript',
            'Node.js',
            'PHP',
            'Laravel',
            'AWS',
            'Terraform',
            'Docker',
            'SQL',
            'Git',
            'Tailwind',
            'Bootstrap',
          ]}
        />

        <TechStack
          title="Personal Tech Stack"
          tech={['Next.js', 'Fastify', 'PostgreSQL', 'Prisma', 'Vercel']}
        />
      </div>

      <Reveal>
        <FeaturedProjects />
      </Reveal>
    </motion.div>
  )
}
