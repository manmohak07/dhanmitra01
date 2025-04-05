import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NPSEligibilityPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/nps" 
        className="text-blue-600 hover:underline flex items-center mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to NPS Resources
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">NPS Eligibility Criteria</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300">
          Detailed information about the eligibility criteria for opening an NPS account will be added here. This includes age limits, citizenship requirements, and specific conditions for different sectors (government, private, etc.).
        </p>
        {/* More content will be added later */}
      </div>
    </div>
  );
};

export default NPSEligibilityPage; 