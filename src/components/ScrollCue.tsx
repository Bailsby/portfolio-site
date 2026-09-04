import { motion, useReducedMotion } from 'framer-motion'

export default function ScrollCue() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="flex justify-center text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: reduceMotion ? 0 : 1.2, duration: 0.6 }}
    >
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M6 9l6 6 6-6" />
      </motion.svg>
    </motion.div>
  )
}
