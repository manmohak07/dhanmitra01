import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  showBelow?: number;
  position?: 'bottom-right' | 'bottom-left';
  size?: 'sm' | 'md' | 'lg';
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  showBelow = 300,
  position = 'bottom-right',
  size = 'md'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Size classes
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14'
  };

  // Position classes
  const positionClasses = {
    'bottom-right': 'right-5 bottom-5',
    'bottom-left': 'left-5 bottom-5'
  };

  // Icon sizes
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  // Check scroll position and update visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showBelow) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showBelow]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed ${positionClasses[position]} ${sizeClasses[size]} rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-40 flex items-center justify-center transition-all duration-300 animate-fade-in`}
        >
          <ChevronUp size={iconSizes[size]} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 