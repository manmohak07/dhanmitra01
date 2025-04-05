import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Info } from 'lucide-react';

const NPSCalculatorPage: React.FC = () => {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(10);

  const calculateCorpus = () => {
    const years = retirementAge - currentAge;
    const months = years * 12;
    const ratePerMonth = expectedReturn / (12 * 100);
    
    // Using FV formula: FV = PMT * (((1 + r)^n - 1) / r)
    const corpus = monthlyContribution * ((Math.pow(1 + ratePerMonth, months) - 1) / ratePerMonth);
    return Math.round(corpus);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/nps" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to NPS Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">NPS Calculator: Plan Your Retirement</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          Use this calculator to estimate your retirement corpus through NPS investments. Adjust the parameters 
          to see how different factors affect your final retirement savings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Calculator className="h-6 w-6 text-blue-600 mr-2" />
            Calculator Inputs
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Age
              </label>
              <input
                type="range"
                min="18"
                max="55"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{currentAge} years</span>
                <span>55 years</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Retirement Age
              </label>
              <input
                type="range"
                min="60"
                max="70"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>60 years</span>
                <span>{retirementAge} years</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Contribution
              </label>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹1,000</span>
                <span>{formatCurrency(monthlyContribution)}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Annual Return
              </label>
              <input
                type="range"
                min="8"
                max="12"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>8%</span>
                <span>{expectedReturn}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Estimated Results</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Investment Period</h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {retirementAge - currentAge} Years
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-600">Total Investment</h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatCurrency(monthlyContribution * 12 * (retirementAge - currentAge))}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-600">Estimated Corpus at Retirement</h3>
                <p className="text-2xl font-semibold text-blue-600">
                  {formatCurrency(calculateCorpus())}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-700">
                <p className="font-medium text-yellow-800 mb-1">Note:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>This is a simplified calculation for illustration purposes</li>
                  <li>Actual returns may vary based on market conditions and asset allocation</li>
                  <li>The calculator assumes constant monthly contribution and return rate</li>
                  <li>Consider consulting a financial advisor for personalized advice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPSCalculatorPage; 