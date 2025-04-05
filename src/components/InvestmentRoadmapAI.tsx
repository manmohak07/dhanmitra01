import React, { useState } from 'react';
import { 
  generateInvestmentRoadmap, 
  generateChartData, 
  generateRoadmapSummary,
  InvestmentFormData,
  InvestmentRecommendation
} from '../utils/investmentAI';
import { 
  PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from 'recharts';
import { ArrowRight, Download, Loader2 } from 'lucide-react';

// Investment goals options
const investmentGoalOptions = [
  "Retirement",
  "Home Purchase",
  "Children's Education",
  "Wealth Creation",
  "Tax Saving",
  "Emergency Fund",
  "Vacation",
  "Vehicle Purchase"
];

// Preferred investment options
const preferredInvestmentOptions = [
  "Mutual Funds",
  "Stocks",
  "Fixed Deposits",
  "PPF",
  "NPS",
  "ELSS",
  "Real Estate",
  "Gold",
  "Bonds",
  "Insurance"
];

const InvestmentRoadmapAI: React.FC = () => {
  const [formData, setFormData] = useState<InvestmentFormData>({
    age: 30,
    monthlyIncome: 80000,
    monthlyExpenses: 40000,
    existingSavings: 500000,
    existingInvestments: 300000,
    riskTolerance: 'medium',
    investmentGoals: ['Retirement', 'Home Purchase'],
    investmentHorizon: 10,
    taxBracket: '20-30%',
    dependents: 1,
    existingLoans: 200000,
    preferredInvestments: ['Mutual Funds', 'Stocks']
  });

  const [recommendation, setRecommendation] = useState<InvestmentRecommendation | null>(null);
  const [chartData, setChartData] = useState<any | null>(null);
  const [roadmapSummary, setRoadmapSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'monthlyIncome' || name === 'monthlyExpenses' || 
              name === 'existingSavings' || name === 'existingInvestments' || 
              name === 'investmentHorizon' || name === 'dependents' || name === 'existingLoans'
              ? Number(value) : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'investmentGoals' | 'preferredInvestments') => {
    const { value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          [category]: [...prev[category], value]
        };
      } else {
        return {
          ...prev,
          [category]: prev[category].filter(item => item !== value)
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDebugInfo(null);
    
    try {
      setDebugInfo("Calling Google AI API...");
      const result = await generateInvestmentRoadmap(formData);
      setDebugInfo("API call successful, processing results...");
      setRecommendation(result);
      setChartData(generateChartData(result));
      setRoadmapSummary(generateRoadmapSummary(result));
      setDebugInfo("Roadmap generated successfully!");
    } catch (err) {
      console.error("Error generating roadmap:", err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setDebugInfo(`Error details: ${JSON.stringify(err)}`);
    } finally {
      setLoading(false);
    }
  };

  const downloadRoadmap = () => {
    if (!roadmapSummary) return;
    
    const blob = new Blob([roadmapSummary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'investment-roadmap.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">AI-Powered Investment Roadmap</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Financial Profile</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income (₹)</label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Expenses (₹)</label>
                <input
                  type="number"
                  name="monthlyExpenses"
                  value={formData.monthlyExpenses}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Existing Savings (₹)</label>
                <input
                  type="number"
                  name="existingSavings"
                  value={formData.existingSavings}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Existing Investments (₹)</label>
                <input
                  type="number"
                  name="existingInvestments"
                  value={formData.existingInvestments}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Existing Loans (₹)</label>
                <input
                  type="number"
                  name="existingLoans"
                  value={formData.existingLoans}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Risk Tolerance</label>
                <select
                  name="riskTolerance"
                  value={formData.riskTolerance}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="low">Low - Safety First</option>
                  <option value="medium">Medium - Balanced Approach</option>
                  <option value="high">High - Growth Focused</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Investment Horizon (years)</label>
                <input
                  type="number"
                  name="investmentHorizon"
                  value={formData.investmentHorizon}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax Bracket</label>
                <select
                  name="taxBracket"
                  value={formData.taxBracket}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="0-5%">0-5%</option>
                  <option value="5-20%">5-20%</option>
                  <option value="20-30%">20-30%</option>
                  <option value="30%+">30%+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Dependents</label>
                <input
                  type="number"
                  name="dependents"
                  value={formData.dependents}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Investment Goals</label>
              <div className="grid grid-cols-2 gap-2">
                {investmentGoalOptions.map(goal => (
                  <div key={goal} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`goal-${goal}`}
                      value={goal}
                      checked={formData.investmentGoals.includes(goal)}
                      onChange={(e) => handleCheckboxChange(e, 'investmentGoals')}
                      className="mr-2"
                    />
                    <label htmlFor={`goal-${goal}`} className="text-sm text-gray-700">{goal}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Investments</label>
              <div className="grid grid-cols-2 gap-2">
                {preferredInvestmentOptions.map(investment => (
                  <div key={investment} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`investment-${investment}`}
                      value={investment}
                      checked={formData.preferredInvestments?.includes(investment) || false}
                      onChange={(e) => handleCheckboxChange(e, 'preferredInvestments')}
                      className="mr-2"
                    />
                    <label htmlFor={`investment-${investment}`} className="text-sm text-gray-700">{investment}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Generating Roadmap...
                </>
              ) : (
                <>
                  Generate Investment Roadmap
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
            
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded">
                <p className="font-medium">Error:</p>
                <p>{error}</p>
              </div>
            )}
            
            {debugInfo && (
              <div className="p-3 bg-blue-50 text-blue-700 rounded text-sm">
                <p className="font-medium">Debug Info:</p>
                <p>{debugInfo}</p>
              </div>
            )}
          </form>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-[800px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <Loader2 className="animate-spin h-12 w-12 text-blue-600 mb-4" />
              <p className="text-gray-600">Generating your personalized investment roadmap...</p>
              <p className="text-sm text-gray-500 mt-2">This may take up to 30 seconds</p>
            </div>
          ) : recommendation && chartData ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Your Investment Roadmap</h2>
                <button 
                  onClick={downloadRoadmap}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-medium">Recommended Monthly Investment:</p>
                <p className="text-2xl font-bold text-blue-700">₹{recommendation.monthlyInvestmentAmount.toLocaleString()}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Asset Allocation</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData.assetAllocationData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {chartData.assetAllocationData.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Projected Returns</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData.projectedReturnsData.labels.map((label: string, index: number) => ({
                        name: label,
                        conservative: recommendation.projectedReturns.conservative[index],
                        moderate: recommendation.projectedReturns.moderate[index],
                        aggressive: recommendation.projectedReturns.aggressive[index],
                      }))}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                      <Legend />
                      <Line type="monotone" dataKey="conservative" stroke="#4CAF50" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="moderate" stroke="#2196F3" />
                      <Line type="monotone" dataKey="aggressive" stroke="#F44336" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Investment Categories</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData.specificRecommendationsData.labels.map((label: string, index: number) => ({
                        name: label,
                        percentage: recommendation.specificRecommendations[index].percentage,
                        fill: chartData.specificRecommendationsData.datasets[0].backgroundColor[index]
                      }))}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Bar dataKey="percentage" name="Allocation %" fill="#8884d8">
                        {chartData.specificRecommendationsData.labels.map((_: any, index: number) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={chartData.specificRecommendationsData.datasets[0].backgroundColor[index]} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Risk Assessment</h3>
                <p className="text-gray-700">{recommendation.riskAssessment}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Next Steps</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {recommendation.nextSteps.map((step, index) => (
                    <li key={index} className="text-gray-700">{step}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">Investment Roadmap Summary</h3>
                <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-line text-gray-700 font-mono text-sm">
                  {roadmapSummary}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <img 
                src="https://img.freepik.com/free-vector/investment-data-concept-illustration_114360-5159.jpg" 
                alt="Investment Illustration" 
                className="w-64 h-64 object-contain mb-4"
              />
              <h3 className="text-lg font-medium mb-2">Get Your Personalized Investment Roadmap</h3>
              <p className="text-gray-600 max-w-md">
                Fill out your financial details on the left to receive AI-generated investment recommendations tailored to your goals and risk profile.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentRoadmapAI; 