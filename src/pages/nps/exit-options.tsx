import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info, AlertCircle } from 'lucide-react';

const NPSExitOptionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/nps"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to NPS Resources
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">NPS Exit and Annuity Options</h1>
          
          <div className="prose max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Normal Exit at 60 Years</h2>
              <p className="text-gray-600">
                When you reach 60 years of age, you can exit from NPS. At this stage, you have the following options:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Withdraw up to 60% of the corpus as lump sum (tax-free)</li>
                <li>Use remaining 40% to purchase an annuity plan</li>
                <li>Continue with NPS and defer withdrawal</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Premature Exit Options</h2>
              <p className="text-gray-600 mb-4">
                If you wish to exit before 60 years, the following conditions apply:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Minimum 10 years of contribution required</li>
                <li>80% of corpus must be used to purchase annuity</li>
                <li>Maximum 20% can be withdrawn as lump sum</li>
                <li>Exit is allowed only after 3 years from account opening</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Annuity Options</h2>
              <p className="text-gray-600 mb-4">
                When purchasing an annuity, you can choose from various options:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Life Annuity</li>
                <li>Joint Life Annuity</li>
                <li>Annuity with Return of Purchase Price</li>
                <li>Annuity with Increasing Pension</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <AlertCircle className="w-8 h-8 text-yellow-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Important Considerations</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annuity income is taxable as per your income tax slab</li>
                <li>Lump sum withdrawal is tax-free up to 60% of corpus</li>
                <li>Choose annuity provider carefully based on rates and terms</li>
                <li>Consider inflation while selecting annuity options</li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start">
              <Info className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-600">
                For detailed information about exit options and annuity plans, please visit the official PFRDA website 
                or consult with your financial advisor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPSExitOptionsPage; 