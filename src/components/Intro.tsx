import { motion, useReducedMotion } from 'framer-motion'

export default function Intro() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className="max-w-2xl mx-auto text-center space-y-4"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: reduceMotion ? 0 : 0.55,
        duration: reduceMotion ? 0 : 0.5,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>

      <p className="text-gray-400 leading-relaxed">
        I’m a software engineer, with over 5 years of experience, building
        full-stack systems with React, TypeScript, Node.js, and AWS. I enjoy
        designing scalable architectures and shipping production-ready
        applications.
      </p>
    </motion.section>
  )
}
