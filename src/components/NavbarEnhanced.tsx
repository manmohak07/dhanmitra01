import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { 
  IndianRupee, 
  LogOut, 
  Menu, 
  X, 
  Search, 
  User, 
  BarChart2, 
  PieChart, 
  Briefcase,
  HelpCircle,
  MessageSquare,
  FileText,
  Building
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NavbarEnhanced = () => {
  const { user, signOut } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow dark:shadow-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <IndianRupee className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Dhanmitra</span>
          </Link>

          {/* Search bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search banks, investment options..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                aria-label="Search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <button type="submit" className="sr-only">Search</button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link 
                  to="/compare-fd-rates"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Compare FD Rates
                </Link>
                <Link 
                  to="/investment-roadmap"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Investment Roadmap
                </Link>
                <Link 
                  to="/epf"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  EPF Resources
                </Link>
                <Link 
                  to="/nps"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  NPS Resources
                </Link>
                <Link 
                  to="/saved-roadmaps"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Saved Roadmaps
                </Link>
                <Link 
                  to="/portfolio"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
                <Link 
                  to="/dashboard"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <ThemeToggle size="sm" />
                <div className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <User className="h-4 w-4" />
                    <span>Account</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">Profile</Link>
                    <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        <span>FAQ</span>
                      </div>
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span>Contact Us</span>
                      </div>
                    </Link>
                    <button
                      onClick={signOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/epf"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  EPF Resources
                </Link>
                <Link 
                  to="/nps"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  NPS Resources
                </Link>
                <Link 
                  to="/faq"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <HelpCircle className="h-4 w-4 mr-1" />
                  <span>FAQ</span>
                </Link>
                <Link 
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>Contact</span>
                </Link>
                <ThemeToggle size="sm" />
                <Link 
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle size="sm" className="mr-2" />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Search banks, investment options..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                aria-label="Search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <button type="submit" className="sr-only">Search</button>
            </form>
            
            {user ? (
              <>
                <Link 
                  to="/compare-fd-rates"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Compare FD Rates
                </Link>
                <Link 
                  to="/investment-roadmap"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Investment Roadmap
                </Link>
                <Link 
                  to="/epf"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <Building className="h-4 w-4 mr-2" />
                  <span>EPF Resources</span>
                </Link>
                <Link 
                  to="/nps"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <Building className="h-4 w-4 mr-2" />
                  <span>NPS Resources</span>
                </Link>
                <Link 
                  to="/saved-roadmaps"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Saved Roadmaps
                </Link>
                <Link 
                  to="/portfolio"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
                <Link 
                  to="/dashboard"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Profile
                </Link>
                <Link 
                  to="/faq"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  <span>FAQ</span>
                </Link>
                <Link 
                  to="/contact"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Contact Us</span>
                </Link>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-1 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors w-full"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/epf"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <Building className="h-4 w-4 mr-2" />
                  <span>EPF Resources</span>
                </Link>
                <Link 
                  to="/nps"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <Building className="h-4 w-4 mr-2" />
                  <span>NPS Resources</span>
                </Link>
                <Link 
                  to="/faq"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  <span>FAQ</span>
                </Link>
                <Link 
                  to="/contact"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Contact Us</span>
                </Link>
                <Link 
                  to="/login"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarEnhanced; 