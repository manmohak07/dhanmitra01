import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 40, 
  color = '#3B82F6' // Default blue color
}) => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="flex items-center justify-center"
        style={{
          width: size,
          height: size,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative" style={{ color }}>
          {/* Rupee Symbol */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="6" y1="5" x2="18" y2="5" />
            <line x1="6" y1="12" x2="18" y2="12" />
            <line x1="6" y1="5" x2="6" y2="19" />
            <path d="M14 16l-8 0" />
            <path d="M14 9l-8 8" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 