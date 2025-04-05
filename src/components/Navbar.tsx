import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { IndianRupee, LogOut, Menu, X, Search, User, BarChart2, PieChart, Briefcase, HelpCircle, MessageSquare } from 'lucide-react';

const Navbar = () => {
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
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <IndianRupee className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Dhanmitra</span>
          </Link>

          {/* Search bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search banks, investment options..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button type="submit" className="sr-only">Search</button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link 
                  to="/compare-fd-rates"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Compare FD Rates
                </Link>
                <Link 
                  to="/investment-roadmap"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Investment Roadmap
                </Link>
                <Link 
                  to="/portfolio"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Portfolio
                </Link>
                <Link 
                  to="/dashboard"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                    <User className="h-4 w-4" />
                    <span>Account</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        <span>FAQ</span>
                      </div>
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span>Contact Us</span>
                      </div>
                    </Link>
                    <button
                      onClick={signOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/faq"
                  className="text-gray-700 hover:text-gray-900 flex items-center"
                >
                  <HelpCircle className="h-4 w-4 mr-1" />
                  <span>FAQ</span>
                </Link>
                <Link 
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900 flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>Contact</span>
                </Link>
                <Link 
                  to="/login"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button type="submit" className="sr-only">Search</button>
            </form>
            
            {user ? (
              <>
                <Link 
                  to="/compare-fd-rates"
                  className="block py-2 text-gray-700 hover:text-gray-900"
                >
                  Compare FD Rates
                </Link>
                <Link 
                  to="/investment-roadmap"
                  className="block py-2 text-gray-700 hover:text-gray-900"
                >
                  Investment Roadmap
                </Link>
                <Link 
                  to="/portfolio"
                  className="block py-2 text-gray-700 hover:text-gray-900"
                >
                  Portfolio
                </Link>
                <Link 
                  to="/dashboard"
                  className="block py-2 text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile"
                  className="block py-2 text-gray-700 hover:text-gray-900"
                >
                  Profile
                </Link>
                <Link 
                  to="/faq"
                  className="block py-2 text-gray-700 hover:text-gray-900 flex items-center"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  <span>FAQ</span>
                </Link>
                <Link 
                  to="/contact"
                  className="block py-2 text-gray-700 hover:text-gray-900 flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Contact Us</span>
                </Link>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-1 py-2 text-gray-700 hover:text-gray-900"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/faq"
                  className="block py-2 text-gray-700 hover:text-gray-900 flex items-center"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  <span>FAQ</span>
                </Link>
                <Link 
                  to="/contact"
                  className="block py-2 text-gray-700 hover:text-gray-900 flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Contact Us</span>
                </Link>
                <Link 
                  to="/login"
                  className="block py-2 text-gray-700 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-2 bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700"
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

export default Navbar;