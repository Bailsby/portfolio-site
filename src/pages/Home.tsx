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

      <Reveal>
        <TechStack />
      </Reveal>

      <Reveal>
        <FeaturedProjects />
      </Reveal>
    </motion.div>
  )
}
