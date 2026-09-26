import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  /** Classes for the animated wrapper, e.g. `h-full` so a grid item's child
      can stretch to its row's height. */
  className?: string
}

export default function Reveal({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
