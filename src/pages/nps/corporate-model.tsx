import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, ArrowLeft, Info } from 'lucide-react';

const NPSCorporateModelPage: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">NPS Corporate Model</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              The NPS Corporate Model is designed for organizations to provide retirement benefits to their employees. It offers a structured and tax-efficient way for both employers and employees to contribute towards retirement savings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">For Employers</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Tax benefits under Section 36(1)(iv)(a) of Income Tax Act</li>
                  <li>No separate registration required</li>
                  <li>Flexible contribution options</li>
                  <li>Easy employee onboarding process</li>
                  <li>Dedicated corporate interface</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">For Employees</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Additional retirement savings option</li>
                  <li>Tax benefits under Section 80CCD(1) and 80CCD(2)</li>
                  <li>Portable account across jobs</li>
                  <li>Flexible investment choices</li>
                  <li>Regular pension after retirement</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Employer contribution up to 10% of basic salary + DA (tax-free for employee)</li>
                <li>Employee contribution up to 10% of basic salary + DA (tax benefits available)</li>
                <li>No minimum contribution requirement</li>
                <li>Flexible investment options</li>
                <li>Online account management</li>
                <li>Regular statements and updates</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Process</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Employer registration with CRA</li>
                <li>Employee enrollment</li>
                <li>Contribution setup</li>
                <li>Regular monitoring and reporting</li>
              </ol>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start">
              <Info className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-600">
                For detailed information about the NPS Corporate Model, including registration process and documentation requirements, please visit the official PFRDA website or contact your nearest Point of Presence (POP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPSCorporateModelPage; 