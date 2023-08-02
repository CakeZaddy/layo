import { easeInOut } from 'framer-motion'

export const textVariant = (delay) => {
  return {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const fadeIn = (direction, type, delay, duration) => {
  return {
    initial: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const zoomIn = (delay, duration) => {
  return {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const slideIn = (direction, type, delay, duration) => {
  return {
    initial: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    animate: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
        delay: delay,
      },
    },
  }
}

export const pageVariant = () => {
  return {
    initial: { width: '50%' },
    animate: {
      width: '100%',
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
    exit: {
      x: window.innerWidth,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  }
}

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}

export const tiltOptions = () => {
  return {
    max: 25,
    perspective: 1000,
    scale: 1.01,
    speed: 300,
    transition: true,
  }
}
