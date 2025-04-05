import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';

const NPSAccountTypesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/nps" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to NPS Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">Types of NPS Accounts: Tier I vs Tier II</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The National Pension System offers two types of accounts: Tier I and Tier II. While Tier I is mandatory 
          and focused on retirement savings, Tier II provides additional investment flexibility. Understanding the 
          differences between these accounts is crucial for making informed investment decisions.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Comparison of NPS Account Types</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Features</th>
                <th className="py-3 px-4 border-b text-left">Tier I Account</th>
                <th className="py-3 px-4 border-b text-left">Tier II Account</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Account Type</td>
                <td className="py-3 px-4 border-b">Default pension account</td>
                <td className="py-3 px-4 border-b">Voluntary savings account</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b font-medium">Minimum Contribution</td>
                <td className="py-3 px-4 border-b">₹500 per contribution or ₹1,000 per annum</td>
                <td className="py-3 px-4 border-b">₹250 per contribution</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Maximum Contribution</td>
                <td className="py-3 px-4 border-b">No upper limit</td>
                <td className="py-3 px-4 border-b">No upper limit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b font-medium">Withdrawal Rules</td>
                <td className="py-3 px-4 border-b">Restricted until retirement (partial withdrawal allowed in specific cases)</td>
                <td className="py-3 px-4 border-b">Flexible withdrawals allowed anytime</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Tax Benefits</td>
                <td className="py-3 px-4 border-b">Up to ₹2 lakhs per annum under various sections</td>
                <td className="py-3 px-4 border-b">₹1.5 lakh for government employees, none for others</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b font-medium">Purpose</td>
                <td className="py-3 px-4 border-b">Long-term retirement savings</td>
                <td className="py-3 px-4 border-b">Additional investment flexibility</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tier I Account: Primary Pension Account</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Mandatory account for NPS subscription</li>
              <li>Designed for long-term retirement savings</li>
              <li>Contributions eligible for tax benefits under Section 80CCD</li>
              <li>Partial withdrawals allowed after 3 years for specific purposes</li>
              <li>At retirement, minimum 40% must be used for annuity purchase</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Tax Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Employee contributions deductible under Section 80CCD(1) up to ₹1.5 lakh</li>
              <li>Additional deduction of ₹50,000 under Section 80CCD(1B)</li>
              <li>Employer contributions deductible under Section 80CCD(2)</li>
              <li>40% of corpus tax-free on maturity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tier II Account: Voluntary Savings Account</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Optional account that can be opened along with Tier I</li>
              <li>No restrictions on withdrawals</li>
              <li>Lower minimum contribution requirement</li>
              <li>No mandatory annuitization</li>
              <li>Suitable for short to medium-term investment goals</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Higher liquidity compared to Tier I account</li>
              <li>Professional fund management at low cost</li>
              <li>Same investment choices as Tier I account</li>
              <li>No lock-in period</li>
              <li>Tax benefits for government employees under Section 80C</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-yellow-50 p-4 rounded-lg mb-8 flex items-start">
        <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-yellow-800 mb-2">Important Note</h3>
          <p className="text-gray-700">
            Opening a Tier II account requires an active Tier I account. While Tier II offers greater flexibility, 
            it's important to maintain adequate savings in your Tier I account for retirement. Consider your 
            long-term financial goals when deciding how to allocate your contributions between the two accounts.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Making the Right Choice</h2>
        <p className="text-gray-700 mb-4">
          While Tier I account is mandatory and focuses on retirement planning, a Tier II account can complement 
          your investment strategy by providing flexibility for shorter-term goals. Consider factors like your 
          age, income, retirement goals, and need for liquidity when deciding how to utilize both account types.
        </p>
        <p className="text-gray-700">
          Remember that the primary purpose of NPS is retirement planning, so ensure your Tier I contributions 
          align with your long-term retirement goals before considering additional investments in Tier II account.
        </p>
      </section>
    </div>
  );
};

export default NPSAccountTypesPage; 