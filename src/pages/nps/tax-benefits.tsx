import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';

const NPSTaxBenefitsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/nps" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to NPS Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">Tax Benefits Under NPS</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The National Pension System offers significant tax advantages under various sections of the Income Tax Act. 
          Understanding these benefits can help you maximize your tax savings while building a retirement corpus.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Tax Benefits</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Section 80CCD(1)</h3>
            <p className="text-gray-700">
              Employee contributions up to 10% of salary (14% for central government employees) are tax-deductible 
              within the overall limit of ₹1.5 lakh under Section 80C.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Section 80CCD(1B)</h3>
            <p className="text-gray-700">
              Additional tax deduction of up to ₹50,000 exclusively for NPS contributions, over and above Section 80C limit.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Section 80CCD(2)</h3>
            <p className="text-gray-700">
              Employer contributions up to 10% of salary (14% for central government) are tax-deductible without any monetary limit.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-yellow-50 p-4 rounded-lg mb-8 flex items-start">
        <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-yellow-800 mb-2">Important Note</h3>
          <p className="text-gray-700">
            Tax benefits on withdrawal: Up to 60% of the corpus withdrawn at maturity is tax-free. The remaining 40% 
            used for annuity purchase is tax-free at the time of purchase, but the pension received is taxable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NPSTaxBenefitsPage; 