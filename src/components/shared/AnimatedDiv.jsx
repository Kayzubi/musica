import { motion } from 'framer-motion'

function AnimatedDiv({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ opacity: { duration: 0.5 } }}
      className='content'>
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
