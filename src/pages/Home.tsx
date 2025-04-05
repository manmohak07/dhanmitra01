import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, LineChart, PiggyBank, Calculator, 
  RefreshCcw, TrendingUp, Users, Newspaper,
  BarChart2, ArrowRight, Target, FileText, DollarSign, Landmark
} from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import newsData from '../data/news.json';
import suggestions from '../data/investment-suggestions.json';
import { privateBanks, publicBanks, smallFinanceBanks, corporateBanks, ruralBanks, nbfcBanks } from '../data';

const Home = () => {
  const { user } = useUser();
  const [newsIndex, setNewsIndex] = useState(0);
  const [currencyAmount, setCurrencyAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [income, setIncome] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [selectedBankType, setSelectedBankType] = useState('private');

  // News ticker effect
  useEffect(() => {
    const timer = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % newsData.news.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Currency conversion
  const handleCurrencyConversion = () => {
    const amount = parseFloat(currencyAmount);
    if (!isNaN(amount) && fromCurrency && toCurrency) {
      // Use a more direct approach to avoid TypeScript complexity
      let rate = 0;
      
      if (fromCurrency === 'INR' && toCurrency === 'USD') rate = 0.012;
      else if (fromCurrency === 'INR' && toCurrency === 'EUR') rate = 0.011;
      else if (fromCurrency === 'INR' && toCurrency === 'GBP') rate = 0.0095;
      else if (fromCurrency === 'USD' && toCurrency === 'INR') rate = 83.25;
      else if (fromCurrency === 'USD' && toCurrency === 'EUR') rate = 0.91;
      else if (fromCurrency === 'USD' && toCurrency === 'GBP') rate = 0.79;
      else if (fromCurrency === 'EUR' && toCurrency === 'INR') rate = 91.25;
      else if (fromCurrency === 'EUR' && toCurrency === 'USD') rate = 1.09;
      else if (fromCurrency === 'EUR' && toCurrency === 'GBP') rate = 0.86;
      else if (fromCurrency === 'GBP' && toCurrency === 'INR') rate = 105.29;
      else if (fromCurrency === 'GBP' && toCurrency === 'USD') rate = 1.26;
      else if (fromCurrency === 'GBP' && toCurrency === 'EUR') rate = 1.16;
      
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };

  // Simple tax calculation (for demonstration)
  const calculateTax = () => {
    const annualIncome = parseFloat(income);
    if (!isNaN(annualIncome)) {
      let tax = 0;
      if (annualIncome <= 250000) {
        tax = 0;
      } else if (annualIncome <= 500000) {
        tax = (annualIncome - 250000) * 0.05;
      } else if (annualIncome <= 1000000) {
        tax = 12500 + (annualIncome - 500000) * 0.2;
      } else {
        tax = 112500 + (annualIncome - 1000000) * 0.3;
      }
      setTaxAmount(tax.toFixed(2));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg mb-8 mt-4 p-8 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Financial Friend for Smart Investments</h1>
            <p className="text-lg mb-6">
              Dhanmitra helps you make informed investment decisions with personalized roadmaps, 
              bank comparisons, and simulated investment experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/investment-roadmap" 
                className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 flex items-center justify-center"
              >
                Create Investment Roadmap <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              {user ? (
                <Link 
                  to="/portfolio" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 flex items-center justify-center"
                >
                  View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              ) : (
                <Link 
                  to="/register" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 flex items-center justify-center"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img 
              src="https://img.freepik.com/free-vector/investment-data-concept-illustration_114360-5159.jpg" 
              alt="Investment Illustration" 
              className="max-h-64 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <div className="flex items-center">
          <Newspaper className="h-6 w-6 text-blue-600 mr-3" />
          <div className="overflow-hidden">
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-blue-800 font-medium">
                {newsData.news[newsIndex].title} - {newsData.news[newsIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="grid md:grid-cols-6 gap-6 mb-12">
        <Link to="/compare-fd-rates" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-4">
            <Building className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Compare FD Rates</h2>
          <p className="text-gray-600 text-center">
            Compare fixed deposit rates and features across multiple banks to find the best options.
          </p>
        </Link>

        <Link to="/investment-roadmap" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-4">
            <Target className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Investment Roadmap</h2>
          <p className="text-gray-600 text-center">
            Get a personalized investment plan based on your financial goals and risk tolerance.
          </p>
        </Link>

        <Link to="/tax-saving" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-4">
            <DollarSign className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Tax Saving</h2>
          <p className="text-gray-600 text-center">
            Discover strategies and investments to reduce your tax liability and maximize returns.
          </p>
        </Link>

        <Link to="/fixed-deposit" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-4">
            <Landmark className="h-12 w-12 text-orange-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Fixed Deposits</h2>
          <p className="text-gray-600 text-center">
            Learn about FD types, interest rates, and use our calculator to estimate your returns.
          </p>
        </Link>

        <Link to="/portfolio" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-4">
            <BarChart2 className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Portfolio Simulator</h2>
          <p className="text-gray-600 text-center">
            Simulate investments with a dummy portfolio and track performance over time.
          </p>
        </Link>

        <Link to="/dashboard" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-4">
            <LineChart className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Dashboard</h2>
          <p className="text-gray-600 text-center">
            Track your investments, monitor returns, and get personalized recommendations.
          </p>
        </Link>
      </div>

      {/* Tools Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Currency Converter */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <RefreshCcw className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Currency Converter</h3>
          </div>
          <div className="space-y-4">
            <input
              type="number"
              value={currencyAmount}
              onChange={(e) => setCurrencyAmount(e.target.value)}
              placeholder="Amount"
              className="w-full p-2 border rounded"
            />
            <div className="flex gap-4">
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="flex-1 p-2 border rounded"
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="flex-1 p-2 border rounded"
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <button
              onClick={handleCurrencyConversion}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Convert
            </button>
            {convertedAmount && (
              <p className="text-center font-semibold">
                Result: {convertedAmount} {toCurrency}
              </p>
            )}
          </div>
        </div>

        {/* Tax Calculator */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calculator className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Income Tax Calculator</h3>
          </div>
          <div className="space-y-4">
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Annual Income"
              className="w-full p-2 border rounded"
            />
            <button
              onClick={calculateTax}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Calculate Tax
            </button>
            {taxAmount && (
              <div className="text-center">
                <p className="font-semibold">Estimated Tax: ₹{taxAmount}</p>
                <p className="text-sm text-gray-600">
                  Based on Old Tax Regime
                </p>
                <Link to="/tax-saving" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center mt-2">
                  Learn about tax-saving investments <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FD Rates Comparison Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Landmark className="h-6 w-6 text-orange-600 mr-2" />
          <h2 className="text-2xl font-bold">Top Fixed Deposit Rates</h2>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Compare Bank FD Rates</h3>
            <Link 
              to="/compare-fd-rates" 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View All Rates <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="mb-4">
            <div className="inline-flex rounded-md shadow-sm mb-6" role="group">
              <button
                type="button"
                onClick={() => setSelectedBankType('private')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  selectedBankType === 'private' 
                    ? 'text-white bg-blue-700 border border-blue-700 hover:bg-blue-800' 
                    : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-50'
                } focus:z-10 focus:outline-none`}
              >
                Private Banks
              </button>
              <button
                type="button"
                onClick={() => setSelectedBankType('public')}
                className={`px-4 py-2 text-sm font-medium ${
                  selectedBankType === 'public' 
                    ? 'text-white bg-blue-700 border border-blue-700 hover:bg-blue-800' 
                    : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-50'
                } focus:z-10 focus:outline-none`}
              >
                Public Banks
              </button>
              <button
                type="button"
                onClick={() => setSelectedBankType('small_finance')}
                className={`px-4 py-2 text-sm font-medium ${
                  selectedBankType === 'small_finance' 
                    ? 'text-white bg-blue-700 border border-blue-700 hover:bg-blue-800' 
                    : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-50'
                } focus:z-10 focus:outline-none`}
              >
                Small Finance Banks
              </button>
              <button
                type="button"
                onClick={() => setSelectedBankType('corporate')}
                className={`px-4 py-2 text-sm font-medium ${
                  selectedBankType === 'corporate' 
                    ? 'text-white bg-blue-700 border border-blue-700 hover:bg-blue-800' 
                    : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-50'
                } focus:z-10 focus:outline-none`}
              >
                Corporate FDs
              </button>
              <button
                type="button"
                onClick={() => setSelectedBankType('rural')}
                className={`px-4 py-2 text-sm font-medium ${
                  selectedBankType === 'rural' 
                    ? 'text-white bg-blue-700 border border-blue-700 hover:bg-blue-800' 
                    : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-50'
                } focus:z-10 focus:outline-none`}
              >
                Rural Banks
              </button>
              <button
                type="button"
                onClick={() => setSelectedBankType('nbfc')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  selectedBankType === 'nbfc' 
                    ? 'text-white bg-blue-700 border border-blue-700 hover:bg-blue-800' 
                    : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-50'
                } focus:z-10 focus:outline-none`}
              >
                NBFCs
              </button>
            </div>
          </div>
          
          {/* Private Banks Table */}
          {selectedBankType === 'private' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {privateBanks.slice(0, 6).map((bank) => {
                    const oneYearRate = bank.rates.find(rate => rate.tenure === "1 year")?.general || 0;
                    const threeYearRate = bank.rates.find(rate => rate.tenure === "3 years")?.general || 0;
                    const fiveYearRate = bank.rates.find(rate => rate.tenure === "5 years")?.general || 0;
                    
                    // Find best rate
                    let bestRate = 0;
                    let bestTenure = "";
                    bank.rates.forEach(rate => {
                      if (rate.general > bestRate) {
                        bestRate = rate.general;
                        bestTenure = rate.tenure;
                      }
                    });
                    
                    return (
                      <tr key={bank.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={bank.logo_url} alt={bank.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{bank.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{oneYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{threeYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fiveYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bestRate.toFixed(2)}% ({bestTenure})</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Public Banks Table */}
          {selectedBankType === 'public' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {publicBanks.slice(0, 6).map((bank) => {
                    const oneYearRate = bank.rates.find(rate => rate.tenure === "1 year")?.general || 0;
                    const threeYearRate = bank.rates.find(rate => rate.tenure === "3 years")?.general || 0;
                    const fiveYearRate = bank.rates.find(rate => rate.tenure === "5 years")?.general || 0;
                    
                    // Find best rate
                    let bestRate = 0;
                    let bestTenure = "";
                    bank.rates.forEach(rate => {
                      if (rate.general > bestRate) {
                        bestRate = rate.general;
                        bestTenure = rate.tenure;
                      }
                    });
                    
                    return (
                      <tr key={bank.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={bank.logo_url} alt={bank.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{bank.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{oneYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{threeYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fiveYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bestRate.toFixed(2)}% ({bestTenure})</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          
          {/* NBFC Table */}
          {selectedBankType === 'nbfc' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {nbfcBanks.slice(0, 6).map((bank) => {
                    const oneYearRate = bank.rates.find(rate => rate.tenure === "1 year")?.general || 0;
                    const threeYearRate = bank.rates.find(rate => rate.tenure === "3 years")?.general || 0;
                    const fiveYearRate = bank.rates.find(rate => rate.tenure === "5 years")?.general || 0;
                    
                    // Find best rate
                    let bestRate = 0;
                    let bestTenure = "";
                    bank.rates.forEach(rate => {
                      if (rate.general > bestRate) {
                        bestRate = rate.general;
                        bestTenure = rate.tenure;
                      }
                    });
                    
                    return (
                      <tr key={bank.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={bank.logo_url} alt={bank.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{bank.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{oneYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{threeYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fiveYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bestRate.toFixed(2)}% ({bestTenure})</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Small Finance Banks Table */}
          {selectedBankType === 'small_finance' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {smallFinanceBanks.slice(0, 6).map((bank) => {
                    const oneYearRate = bank.rates.find(rate => rate.tenure === "1 year")?.general || 0;
                    const threeYearRate = bank.rates.find(rate => rate.tenure === "3 years")?.general || 0;
                    const fiveYearRate = bank.rates.find(rate => rate.tenure === "5 years")?.general || 0;
                    
                    // Find best rate
                    let bestRate = 0;
                    let bestTenure = "";
                    bank.rates.forEach(rate => {
                      if (rate.general > bestRate) {
                        bestRate = rate.general;
                        bestTenure = rate.tenure;
                      }
                    });
                    
                    return (
                      <tr key={bank.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={bank.logo_url} alt={bank.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{bank.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{oneYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{threeYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fiveYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bestRate.toFixed(2)}% ({bestTenure})</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Corporate FDs Table */}
          {selectedBankType === 'corporate' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {corporateBanks.slice(0, 10).map((bank) => {
                    const oneYearRate = bank.rates.find(rate => 
                      rate.tenure === "1 year" || 
                      rate.tenure === "1-2 years" || 
                      rate.tenure === "12 months"
                    )?.general || 0;
                    
                    const threeYearRate = bank.rates.find(rate => 
                      rate.tenure === "3 years" || 
                      rate.tenure === "3-5 years" || 
                      rate.tenure === "36 months"
                    )?.general || 0;
                    
                    const fiveYearRate = bank.rates.find(rate => 
                      rate.tenure === "5 years" || 
                      rate.tenure === "5-10 years" || 
                      rate.tenure === "60 months"
                    )?.general || 0;
                    
                    // Find best rate
                    let bestRate = 0;
                    let bestTenure = "";
                    bank.rates.forEach(rate => {
                      if (rate.general > bestRate) {
                        bestRate = rate.general;
                        bestTenure = rate.tenure;
                      }
                    });
                    
                    return (
                      <tr key={bank.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={bank.logo_url} alt={bank.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{bank.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{oneYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{threeYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fiveYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bestRate.toFixed(2)}% ({bestTenure})</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Rural Banks Table */}
          {selectedBankType === 'rural' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5 Years</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ruralBanks.slice(0, 10).map((bank) => {
                    const oneYearRate = bank.rates.find(rate => 
                      rate.tenure === "1 year" || 
                      rate.tenure === "1-2 years" ||
                      rate.tenure === "9-12 months"
                    )?.general || 0;
                    
                    const threeYearRate = bank.rates.find(rate => 
                      rate.tenure === "3 years" || 
                      rate.tenure === "3-5 years" ||
                      rate.tenure === "2-3 years"
                    )?.general || 0;
                    
                    const fiveYearRate = bank.rates.find(rate => 
                      rate.tenure === "5 years" || 
                      rate.tenure === "5-10 years"
                    )?.general || 0;
                    
                    // Find best rate
                    let bestRate = 0;
                    let bestTenure = "";
                    bank.rates.forEach(rate => {
                      if (rate.general > bestRate) {
                        bestRate = rate.general;
                        bestTenure = rate.tenure;
                      }
                    });
                    
                    return (
                      <tr key={bank.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={bank.logo_url} alt={bank.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{bank.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{oneYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{threeYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fiveYearRate.toFixed(2)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bestRate.toFixed(2)}% ({bestTenure})</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              * Rates shown are for general customers. Senior citizens get additional 0.25-0.50% on these rates.
              <br />* NBFCs typically offer higher rates but are not covered under the standard banking regulations.
              <br />* Rates are subject to change based on market conditions.
            </p>
            <Link 
              to="/compare-fd-rates" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
            >
              Compare All Banks <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Investment Suggestions */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold">Smart Investment Suggestions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {suggestions.suggestions.slice(0, 2).map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="space-y-4">
                {category.recommendations.slice(0, 2).map((rec, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-800">{rec.title}</h4>
                    <p className="text-gray-600 text-sm">{rec.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link to="/investment-roadmap" className="text-blue-600 hover:text-blue-800 flex items-center justify-center">
                  Get personalized recommendations <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Dhanmitra</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Personalized Roadmaps</h3>
            <p className="text-gray-600">
              Get investment plans tailored to your financial goals and risk tolerance.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Comprehensive Bank Comparison</h3>
            <p className="text-gray-600">
              Compare FD rates across multiple banks to find the best returns.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <PiggyBank className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Risk-Free Simulation</h3>
            <p className="text-gray-600">
              Test your investment strategies with a simulated portfolio before investing real money.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of users who are making smarter investment decisions with Dhanmitra.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          {user ? (
            <>
              <Link 
                to="/investment-roadmap" 
                className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50"
              >
                Create Investment Roadmap
              </Link>
              <Link 
                to="/tax-saving" 
                className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600"
              >
                Explore Tax Saving Strategies
              </Link>
              <Link 
                to="/fixed-deposit" 
                className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600"
              >
                Explore Fixed Deposits
              </Link>
              <Link 
                to="/portfolio" 
                className="bg-blue-500 text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
              >
                View Portfolio
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/register" 
                className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50"
              >
                Create Account
              </Link>
              <Link 
                to="/tax-saving" 
                className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600"
              >
                Explore Tax Saving Strategies
              </Link>
              <Link 
                to="/fixed-deposit" 
                className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600"
              >
                Explore Fixed Deposits
              </Link>
              <Link 
                to="/login" 
                className="bg-blue-500 text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;