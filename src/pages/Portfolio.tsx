import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { 
  PieChart, BarChart, TrendingUp, TrendingDown, 
  AlertCircle, Plus, ArrowRight, Info
} from 'lucide-react';

// Mock investment data
const initialInvestments = [
  {
    id: 'fd1',
    type: 'Fixed Deposit',
    bank: 'State Bank of India',
    amount: 300000,
    interestRate: 6.75,
    startDate: '2025-01-15',
    maturityDate: '2026-01-15',
    currentValue: 320250,
    returns: 20250,
    returnsPercentage: 6.75
  },
  {
    id: 'mf1',
    type: 'Mutual Fund',
    name: 'HDFC Mid-Cap Opportunities Fund',
    amount: 200000,
    units: 1052.63,
    navBought: 190,
    currentNav: 205.5,
    currentValue: 216315.79,
    returns: 16315.79,
    returnsPercentage: 8.16
  }
];

const Portfolio = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  
  const [investments, setInvestments] = useState(initialInvestments);
  const [showAddInvestment, setShowAddInvestment] = useState(false);
  const [newInvestment, setNewInvestment] = useState({
    type: 'Fixed Deposit',
    bank: '',
    name: '',
    amount: '',
    interestRate: '',
    startDate: new Date().toISOString().split('T')[0],
    maturityDate: '',
    navBought: ''
  });
  
  // Calculate portfolio summary
  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalCurrentValue = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalReturns = totalCurrentValue - totalInvested;
  const totalReturnsPercentage = (totalReturns / totalInvested) * 100;
  const remainingAmount = 1000000 - totalInvested; // Starting with 10 lakhs
  
  // Handle input changes for new investment
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewInvestment(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle adding a new investment
  const handleAddInvestment = () => {
    const amount = parseFloat(newInvestment.amount);
    
    if (amount > remainingAmount) {
      alert(`You only have ₹${remainingAmount.toLocaleString('en-IN')} available to invest.`);
      return;
    }
    
    let newInv: any = {
      id: `inv${Date.now()}`,
      amount,
      currentValue: amount,
      returns: 0,
      returnsPercentage: 0
    };
    
    if (newInvestment.type === 'Fixed Deposit') {
      const interestRate = parseFloat(newInvestment.interestRate);
      const startDate = new Date(newInvestment.startDate);
      const maturityDate = new Date(newInvestment.maturityDate);
      
      // Calculate months between dates
      const months = (maturityDate.getFullYear() - startDate.getFullYear()) * 12 + 
                    (maturityDate.getMonth() - startDate.getMonth());
      
      // Simple interest calculation (for simulation)
      const interest = (amount * interestRate * months) / (12 * 100);
      
      newInv = {
        ...newInv,
        type: 'Fixed Deposit',
        bank: newInvestment.bank,
        interestRate,
        startDate: newInvestment.startDate,
        maturityDate: newInvestment.maturityDate,
        currentValue: amount + interest,
        returns: interest,
        returnsPercentage: (interest / amount) * 100
      };
    } else if (newInvestment.type === 'Mutual Fund') {
      const navBought = parseFloat(newInvestment.navBought);
      const units = amount / navBought;
      
      // Simulate a random current NAV (slightly higher for demo)
      const currentNav = navBought * (1 + (Math.random() * 0.1 + 0.05));
      const currentValue = units * currentNav;
      
      newInv = {
        ...newInv,
        type: 'Mutual Fund',
        name: newInvestment.name,
        units,
        navBought,
        currentNav,
        currentValue,
        returns: currentValue - amount,
        returnsPercentage: ((currentValue - amount) / amount) * 100
      };
    }
    
    setInvestments(prev => [...prev, newInv]);
    setShowAddInvestment(false);
    setNewInvestment({
      type: 'Fixed Deposit',
      bank: '',
      name: '',
      amount: '',
      interestRate: '',
      startDate: new Date().toISOString().split('T')[0],
      maturityDate: '',
      navBought: ''
    });
  };
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: '/portfolio' } });
    }
  }, [user, navigate]);
  
  if (!user) {
    return null; // Will redirect to login
  }
  
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Investment Portfolio</h1>
      
      {/* Portfolio Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Portfolio Summary</h2>
            <div className="text-sm text-gray-600 mb-2">
              This is a simulated portfolio with a starting amount of ₹10,00,000
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setShowAddInvestment(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
              disabled={remainingAmount <= 0}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Investment
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Total Invested</div>
            <div className="text-xl font-semibold">₹{totalInvested.toLocaleString('en-IN')}</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Current Value</div>
            <div className="text-xl font-semibold">₹{totalCurrentValue.toLocaleString('en-IN')}</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Total Returns</div>
            <div className={`text-xl font-semibold flex items-center ${totalReturns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalReturns >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              ₹{Math.abs(totalReturns).toLocaleString('en-IN')}
              <span className="text-sm ml-1">({totalReturnsPercentage.toFixed(2)}%)</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Available to Invest</div>
            <div className="text-xl font-semibold">₹{remainingAmount.toLocaleString('en-IN')}</div>
          </div>
        </div>
      </div>
      
      {/* Investment Allocation Chart */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Investment Allocation</h2>
          <div className="flex justify-center items-center h-64">
            <PieChart className="h-48 w-48 text-gray-300" />
            {/* In a real app, use a chart library like Chart.js or Recharts */}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {investments.length > 0 ? (
              investments.map(inv => (
                <div key={inv.id} className="flex items-center">
                  <div className={`h-3 w-3 rounded-full mr-2 ${inv.type === 'Fixed Deposit' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                  <div className="text-sm">
                    {inv.type === 'Fixed Deposit' ? inv.bank : inv.name}
                    <span className="text-gray-600 ml-1">
                      ({Math.round((inv.amount / totalInvested) * 100)}%)
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center text-gray-500">
                No investments yet. Add your first investment to see allocation.
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Returns Comparison</h2>
          <div className="flex justify-center items-center h-64">
            <BarChart className="h-48 w-48 text-gray-300" />
            {/* In a real app, use a chart library like Chart.js or Recharts */}
          </div>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {investments.length > 0 ? (
              investments.map(inv => (
                <div key={inv.id} className="flex justify-between items-center">
                  <div className="text-sm">
                    {inv.type === 'Fixed Deposit' ? inv.bank : inv.name}
                  </div>
                  <div className={`text-sm font-medium flex items-center ${inv.returns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {inv.returns >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {inv.returnsPercentage.toFixed(2)}%
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                No investments yet. Add your first investment to see returns.
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Investments List */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Investments</h2>
        
        {investments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Name</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-600">Amount</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-600">Current Value</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-600">Returns</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-600">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {investments.map(inv => (
                  <tr key={inv.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{inv.type}</td>
                    <td className="py-3 px-4">{inv.type === 'Fixed Deposit' ? inv.bank : inv.name}</td>
                    <td className="py-3 px-4 text-right">₹{inv.amount.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-4 text-right">₹{inv.currentValue.toLocaleString('en-IN')}</td>
                    <td className={`py-3 px-4 text-right ${inv.returns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      <div className="flex items-center justify-end">
                        {inv.returns >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                        ₹{Math.abs(inv.returns).toLocaleString('en-IN')}
                        <span className="text-xs ml-1">({inv.returnsPercentage.toFixed(2)}%)</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-blue-600 hover:text-blue-800">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            You haven't made any investments yet. Click "Add Investment" to get started.
          </div>
        )}
      </div>
      
      {/* Add Investment Modal */}
      {showAddInvestment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add New Investment</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Investment Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={newInvestment.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Fixed Deposit">Fixed Deposit</option>
                  <option value="Mutual Fund">Mutual Fund</option>
                </select>
              </div>
              
              {newInvestment.type === 'Fixed Deposit' ? (
                <>
                  <div>
                    <label htmlFor="bank" className="block text-sm font-medium text-gray-700 mb-1">
                      Bank
                    </label>
                    <input
                      id="bank"
                      name="bank"
                      type="text"
                      required
                      value={newInvestment.bank}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                      Interest Rate (%)
                    </label>
                    <input
                      id="interestRate"
                      name="interestRate"
                      type="number"
                      step="0.01"
                      required
                      value={newInvestment.interestRate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      required
                      value={newInvestment.startDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="maturityDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Maturity Date
                    </label>
                    <input
                      id="maturityDate"
                      name="maturityDate"
                      type="date"
                      required
                      value={newInvestment.maturityDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Fund Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={newInvestment.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="navBought" className="block text-sm font-medium text-gray-700 mb-1">
                      NAV at Purchase
                    </label>
                    <input
                      id="navBought"
                      name="navBought"
                      type="number"
                      step="0.01"
                      required
                      value={newInvestment.navBought}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}
              
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Investment Amount (₹)
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  min="1000"
                  max={remainingAmount}
                  required
                  value={newInvestment.amount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Available: ₹{remainingAmount.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setShowAddInvestment(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddInvestment}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add Investment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio; 