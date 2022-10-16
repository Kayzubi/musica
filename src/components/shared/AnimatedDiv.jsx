import { motion } from 'framer-motion'

function AnimatedDiv({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 1 } }}
      className='content'>
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
