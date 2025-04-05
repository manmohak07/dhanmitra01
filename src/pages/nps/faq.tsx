import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NPSFAQPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/nps" 
        className="text-blue-600 hover:underline flex items-center mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to NPS Resources
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">NPS Frequently Asked Questions (FAQs)</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300">
          A list of frequently asked questions about NPS, covering various topics like eligibility, contributions, investments, withdrawals, taxation, and account management will be added here.
        </p>
        {/* More content will be added later */}
      </div>
    </div>
  );
};

export default NPSFAQPage; 