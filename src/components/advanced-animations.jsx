import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Parallax scroll effect
export const ParallaxSection = ({ children, offset = 50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Floating animation for icons/elements
export const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  )
}

// Gradient animation
export const AnimatedGradient = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-[length:200%_auto] ${className}`}
      animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.div>
  )
}

// Staggered list animation
export const StaggerContainer = ({ children, delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {Array.isArray(children) ? (
        children.map((child, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  )
}

// Glowing text effect
export const GlowingText = ({ children, color = 'blue' }) => {
  const colorMap = {
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    pink: 'from-pink-400 to-pink-600',
    green: 'from-green-400 to-green-600'
  }

  return (
    <motion.span
      className={`bg-gradient-to-r ${colorMap[color]} bg-clip-text text-transparent`}
      animate={{
        textShadow: [
          '0 0 20px rgba(59, 130, 246, 0.5)',
          '0 0 30px rgba(59, 130, 246, 0.8)',
          '0 0 20px rgba(59, 130, 246, 0.5)'
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.span>
  )
}

// Counter animation
export const Counter = ({ from = 0, to = 100, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let start = from
    const increment = (to - from) / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [from, to, duration])

  return <span>{count}{suffix}</span>
}

// Scroll trigger animation
export const ScrollReveal = ({ children, direction = 'up' }) => {
  const directionVariants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } }
  }

  const variant = directionVariants[direction] || directionVariants.up

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}

// Pulse button animation
export const PulseButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 25px rgba(59, 130, 246, 0.6)'
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 0 10px rgba(59, 130, 246, 0.4)',
          '0 0 20px rgba(59, 130, 246, 0.6)',
          '0 0 10px rgba(59, 130, 246, 0.4)'
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity
        }
      }}
    >
      {children}
    </motion.button>
  )
}

// Rotating gradient background
export const RotatingGradientBg = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card flip animation
export const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative w-full h-full cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div style={{ backfaceVisibility: 'hidden' }}>
          {front}
        </div>
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {back}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Wave text animation
export const WaveText = ({ text }) => {
  return (
    <div className="flex gap-1">
      {text.split('').map((char, idx) => (
        <motion.span
          key={idx}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: idx * 0.05
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
