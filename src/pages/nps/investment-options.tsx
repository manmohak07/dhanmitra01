import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PieChart, BarChart2, Info } from 'lucide-react';

const NPSInvestmentOptionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/nps" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to NPS Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">NPS Investment Options and Asset Classes</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The National Pension System offers flexible investment options through different asset classes and 
          investment choices. Understanding these options is crucial for making informed decisions about your 
          retirement savings.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Investment Choices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <PieChart className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Auto Choice (Life Cycle Fund)</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Investment allocation automatically adjusted based on age. As you get older, the allocation 
              shifts from high-risk to conservative options.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Aggressive Life Cycle Fund (LC75)</li>
              <li>Moderate Life Cycle Fund (LC50)</li>
              <li>Conservative Life Cycle Fund (LC25)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <BarChart2 className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Active Choice</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Subscribers can actively decide their asset allocation within prescribed limits.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Maximum 75% in Equity (50% for govt employees)</li>
              <li>Flexible allocation in Corporate Bonds</li>
              <li>Minimum allocation in Government Securities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Asset Classes</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Equity (E)</h3>
            <p className="text-gray-700">
              Investments in stocks through index funds tracking Sensex, Nifty, or other approved indices. 
              Offers potential for high returns with higher risk.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Corporate Bonds (C)</h3>
            <p className="text-gray-700">
              Fixed income instruments issued by corporate entities. Provides moderate returns with moderate risk.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Government Securities (G)</h3>
            <p className="text-gray-700">
              Investment in central and state government securities. Offers stable returns with minimal risk.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Alternative Investment Funds (A)</h3>
            <p className="text-gray-700">
              Investments in REIT, INVIT, and alternative investment schemes. Limited to 5% of the portfolio.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-yellow-50 p-4 rounded-lg mb-8 flex items-start">
        <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-yellow-800 mb-2">Important Note</h3>
          <p className="text-gray-700">
            Your investment choice should align with your risk appetite and retirement goals. Consider factors 
            like age, income stability, and years to retirement when selecting investment options. You can 
            change your investment choice and allocation up to twice in a financial year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NPSInvestmentOptionsPage; 