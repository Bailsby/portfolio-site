import { motion, useReducedMotion } from 'framer-motion'

export default function SectionDivider() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="h-px w-full origin-center bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      initial={{ scaleX: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: 'easeOut' }}
    />
  )
}
