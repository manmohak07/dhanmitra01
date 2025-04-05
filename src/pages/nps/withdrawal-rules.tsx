import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info, AlertCircle } from 'lucide-react';

const NPSWithdrawalRulesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/nps" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to NPS Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">NPS Withdrawal Rules and Process</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The National Pension System has specific rules for withdrawals at retirement and before retirement. 
          Understanding these rules is essential for proper retirement planning and emergency fund management.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Withdrawal at Retirement (60 years)</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Lump Sum Withdrawal</h3>
              <p className="text-gray-700">
                Up to 60% of the accumulated pension corpus can be withdrawn as a lump sum. This withdrawal is tax-free.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Mandatory Annuity</h3>
              <p className="text-gray-700">
                At least 40% of the corpus must be used to purchase an annuity from a PFRDA-approved insurance company 
                to provide regular pension.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Premature Withdrawal Rules</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Partial Withdrawal</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Allowed after 3 years of joining NPS</li>
              <li>Maximum 25% of own contributions</li>
              <li>Limited to 3 times during entire tenure</li>
              <li>Specific reasons like children's education, home purchase, medical treatment, etc.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Exit Before 60 Years</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Minimum 80% must be used for annuity purchase</li>
              <li>Only 20% can be withdrawn as lump sum</li>
              <li>Early exit may have tax implications</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Special Cases</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Death of Subscriber</h3>
            <p className="text-gray-700">
              Entire corpus is paid to the nominee/legal heir. The nominee can choose between lump sum withdrawal 
              or purchase of annuity.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Disability Cases</h3>
            <p className="text-gray-700">
              Special provisions for premature withdrawal in case of disability or incapacitation of the subscriber.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-yellow-50 p-4 rounded-lg mb-8 flex items-start">
        <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-yellow-800 mb-2">Important Considerations</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Tax implications should be considered before making any withdrawal</li>
            <li>• Premature withdrawals may affect long-term retirement corpus</li>
            <li>• Choice of annuity provider and plan is crucial for regular pension</li>
            <li>• Keep nomination details updated for smooth processing</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-start">
          <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700">
            For detailed information about withdrawal process and documentation requirements, visit the official 
            PFRDA website or consult your NPS Point of Presence (PoP).
          </p>
        </div>
      </div>
    </div>
  );
};

export default NPSWithdrawalRulesPage; 