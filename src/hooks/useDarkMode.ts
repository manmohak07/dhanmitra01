import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

function useDarkMode(): [Theme, () => void, (theme: Theme) => void] {
  // Check if user has a preference in localStorage
  const getUserPreference = (): Theme => {
    const storedPreference = localStorage.getItem('theme');
    if (storedPreference === 'dark' || storedPreference === 'light') {
      return storedPreference;
    }
    
    // Check if user has a system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Default to light theme
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>('light'); // Default to light to avoid hydration mismatch

  // Initialize theme on component mount
  useEffect(() => {
    const userPreference = getUserPreference();
    setTheme(userPreference);
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Set a specific theme
  const setSpecificTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return [theme, toggleTheme, setSpecificTheme];
}

export default useDarkMode; 