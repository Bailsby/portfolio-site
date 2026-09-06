import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center space-y-5 sm:space-y-6"
    >
      <motion.h1
        variants={item}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
      >
        Jake Bailey
      </motion.h1>

      <motion.p variants={item} className="text-xl sm:text-2xl text-gray-300">
        Software Engineer
      </motion.p>

      <motion.p
        variants={item}
        className="text-gray-500 max-w-xl mx-auto leading-relaxed"
      >
        Full-stack developer specialising in React, TypeScript, Node.js and
        cloud infrastructure.
      </motion.p>

      <motion.div
        variants={item}
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6"
      >
        <Link
          to="/projects"
          className="w-full sm:w-auto px-6 py-2 rounded-md bg-white text-black hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          View Projects
        </Link>

        <Link
          to="/contact"
          className="w-full sm:w-auto px-6 py-2 rounded-md border border-line bg-white/[0.02] backdrop-blur-sm hover:border-accent/50 hover:bg-white/[0.05] hover:shadow-accent hover:scale-[1.02] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Contact Me
        </Link>
      </motion.div>
    </motion.section>
  )
}
