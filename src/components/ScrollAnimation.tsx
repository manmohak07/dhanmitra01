import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  type?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | 'rotate';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  type = 'fade',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: type === 'slide-up' ? 50 : type === 'slide-down' ? -50 : 0,
      x: type === 'slide-left' ? 50 : type === 'slide-right' ? -50 : 0,
      scale: type === 'zoom' ? 0.8 : 1,
      rotate: type === 'rotate' ? -10 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 