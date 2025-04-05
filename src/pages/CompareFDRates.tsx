import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Search, AlertCircle } from 'lucide-react';
import { allBanks } from '../data';
import { calculateBestRates, filterBanksByType, searchBanks } from '../data/bankUtils';
import { Bank } from '../data/types';

const CompareFDRates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customerType, setCustomerType] = useState('general');
  const [bankTypes, setBankTypes] = useState<string[]>([]);
  const [expandedBank, setExpandedBank] = useState<string | null>(null);
  const [amount, setAmount] = useState(100000);
  const [tenure, setTenure] = useState('1 year');
  const [selectedBanks, setSelectedBanks] = useState<Bank[]>([]);

  const filteredBanks = searchBanks(
    filterBanksByType(allBanks, bankTypes),
    searchTerm
  );

  const bestRates = calculateBestRates(filteredBanks, amount, tenure, customerType);

  const toggleBankDetails = (bankId: string) => {
    setExpandedBank(expandedBank === bankId ? null : bankId);
  };

  const toggleBankType = (type: string) => {
    setBankTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const toggleBankSelection = (bank: Bank) => {
    if (selectedBanks.some(b => b.id === bank.id)) {
      setSelectedBanks(prev => prev.filter(b => b.id !== bank.id));
    } else {
      if (selectedBanks.length < 5) {
        setSelectedBanks(prev => [...prev, bank]);
      }
    }
  };

  // Helper function to calculate maturity amount
  const calculateMaturityAmount = (principal: number, rate: number, years: number): number => {
    // Simple interest calculation for FD
    const interest = principal * (rate / 100) * years;
    return principal + interest;
  };

  // Helper function to parse tenure string to years
  const parseTenure = (tenureStr: string): number => {
    if (tenureStr.includes('year')) {
      return parseInt(tenureStr.split(' ')[0]);
    } else if (tenureStr.includes('month')) {
      return parseInt(tenureStr.split(' ')[0]) / 12;
    } else if (tenureStr.includes('day')) {
      return parseInt(tenureStr.split(' ')[0]) / 365;
    }
    return 1; // Default to 1 year
  };

  // Find best bank among selected
  const findBestBank = () => {
    if (selectedBanks.length === 0) return null;
    
    const tenureInYears = parseTenure(tenure);
    let bestBank = null;
    let bestRate = 0;
    
    for (const bank of selectedBanks) {
      const matchingRate = bank.rates.find(r => r.tenure === tenure) || bank.rates[0];
      const rate = matchingRate[customerType as 'general' | 'senior'];
      
      if (rate > bestRate) {
        bestRate = rate;
        bestBank = bank;
      }
    }
    
    return bestBank;
  };

  const bestBank = findBestBank();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link to="/" className="mr-4 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Compare FD Rates</h1>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search banks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Customer Type */}
            <select
              value={customerType}
              onChange={(e) => setCustomerType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="general">General</option>
              <option value="senior">Senior Citizen</option>
            </select>

            {/* Amount */}
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Amount"
            />

            {/* Tenure */}
            <select
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1 year">1 Year</option>
              <option value="2 years">2 Years</option>
              <option value="3 years">3 Years</option>
              <option value="5 years">5 Years</option>
            </select>
          </div>
        </div>

        {/* Bank Type Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => toggleBankType('private')}
            className={`px-3 py-1 rounded-full text-sm ${
              bankTypes.includes('private')
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Private Banks
          </button>
          <button
            onClick={() => toggleBankType('public')}
            className={`px-3 py-1 rounded-full text-sm ${
              bankTypes.includes('public')
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Public Banks
          </button>
          <button
            onClick={() => toggleBankType('small_finance')}
            className={`px-3 py-1 rounded-full text-sm ${
              bankTypes.includes('small_finance')
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Small Finance Banks
          </button>
          <button
            onClick={() => toggleBankType('nbfc')}
            className={`px-3 py-1 rounded-full text-sm ${
              bankTypes.includes('nbfc')
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            NBFCs
          </button>
        </div>
        
        {/* Selected Banks Comparison */}
        {selectedBanks.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Selected FD Options</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maturity Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Earned</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedBanks.map(bank => {
                    const matchingRate = bank.rates.find(r => r.tenure === tenure) || bank.rates[0];
                    const rate = matchingRate[customerType as 'general' | 'senior'];
                    const tenureInYears = parseTenure(tenure);
                    const maturityAmount = calculateMaturityAmount(amount, rate, tenureInYears);
                    const interestEarned = maturityAmount - amount;
                    
                    return (
                      <tr key={bank.id} className={bank.id === bestBank?.id ? 'bg-green-50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {bank.logo_url && (
                              <img src={bank.logo_url} alt={bank.name} className="h-10 w-10 mr-3" />
                            )}
                            <div>
                              <div className="font-medium text-gray-900">{bank.name}</div>
                              <div className="text-gray-500 text-sm">{bank.type}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`font-medium ${bank.id === bestBank?.id ? 'text-green-600' : 'text-blue-600'}`}>
                            {rate}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ₹{maturityAmount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ₹{interestEarned.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button 
                            onClick={() => toggleBankSelection(bank)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {bestBank && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="font-medium text-green-800">
                  Best Option: <span className="font-bold">{bestBank.name}</span> offers the highest interest rate of {bestBank.rates.find(r => r.tenure === tenure)?.[customerType as 'general' | 'senior']}%
                </p>
                <p className="mt-2 text-green-700">
                  For a deposit of ₹{amount} over {tenure}, you would earn approximately 
                  ₹{(calculateMaturityAmount(amount, bestBank.rates.find(r => r.tenure === tenure)?.[customerType as 'general' | 'senior'] || 0, parseTenure(tenure)) - amount).toFixed(2)} in interest.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Banks List */}
        <div className="space-y-4">
          {filteredBanks.map(bank => {
            // Find rate for selected tenure
            const matchingRate = bank.rates.find(r => r.tenure === tenure) || bank.rates[0];
            
            return (
              <div key={bank.id} className="bg-white rounded-lg shadow">
                <div 
                  className="p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleBankDetails(bank.id)}
                >
                  <div className="flex items-center">
                    {bank.logo_url && (
                      <img src={bank.logo_url} alt={bank.name} className="h-10 w-10 mr-3" />
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{bank.name}</h3>
                      <p className="text-sm text-gray-500">{bank.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 text-right">
                      <span className="block text-lg font-bold text-blue-600">
                        {matchingRate[customerType as 'general' | 'senior']}%
                      </span>
                      <span className="text-sm text-gray-500">for {tenure}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBankSelection(bank);
                      }}
                      className={`mr-3 px-3 py-1 rounded-md text-sm ${
                        selectedBanks.some(b => b.id === bank.id)
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}
                    >
                      {selectedBanks.some(b => b.id === bank.id) ? 'Remove' : 'Compare'}
                    </button>
                    {expandedBank === bank.id ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                  </div>
                </div>
                
                {expandedBank === bank.id && (
                  <div className="p-4 border-t border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tenure</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">General Rate</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Senior Citizen Rate</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Amount</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bank.rates.map((rate, index) => (
                          <tr key={index} className={rate.tenure === tenure ? 'bg-blue-50' : ''}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.tenure}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rate.general}%</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rate.senior}%</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{rate.minAmount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    
                    {bank.features && bank.features.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-700 mb-2">Features</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          {bank.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompareFDRates; 