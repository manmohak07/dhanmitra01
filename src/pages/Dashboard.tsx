import React, { useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LineChart, BarChart, PieChart, ArrowRight, 
  TrendingUp, TrendingDown, Calendar, Target
} from 'lucide-react';

// Mock data for dashboard
const mockData = {
  totalInvested: 500000,
  currentValue: 536565.79,
  returns: 36565.79,
  returnsPercentage: 7.31,
  goalProgress: 53.66, // Percentage of 10 lakhs
  upcomingMaturity: {
    bank: 'State Bank of India',
    amount: 300000,
    maturityAmount: 320250,
    date: '2026-01-15'
  },
  recentActivity: [
    {
      id: 'act1',
      type: 'Investment',
      description: 'Added ₹2,00,000 to HDFC Mid-Cap Opportunities Fund',
      date: '2025-02-10'
    },
    {
      id: 'act2',
      type: 'Investment',
      description: 'Added ₹3,00,000 to SBI Fixed Deposit (12 months)',
      date: '2025-01-15'
    },
    {
      id: 'act3',
      type: 'Roadmap',
      description: 'Generated new investment roadmap',
      date: '2025-01-05'
    }
  ],
  monthlyReturns: [
    { month: 'Jan', returns: 1250 },
    { month: 'Feb', returns: 1350 },
    { month: 'Mar', returns: 1450 },
    { month: 'Apr', returns: 1550 },
    { month: 'May', returns: 1650 },
    { month: 'Jun', returns: 1750 }
  ],
  assetAllocation: [
    { type: 'Fixed Deposits', percentage: 60 },
    { type: 'Mutual Funds', percentage: 40 }
  ]
};

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: '/dashboard' } });
    }
  }, [user, navigate]);
  
  if (!user) {
    return null; // Will redirect to login
  }
  
  // Calculate days until maturity
  const today = new Date();
  const maturityDate = new Date(mockData.upcomingMaturity.date);
  const daysUntilMaturity = Math.ceil((maturityDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="flex space-x-3 mt-4 md:mt-0">
          <Link 
            to="/investment-roadmap" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            Update Roadmap
          </Link>
          <Link 
            to="/portfolio" 
            className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 flex items-center"
          >
            View Portfolio
          </Link>
        </div>
      </div>
      
      {/* Portfolio Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-1">Total Invested</div>
          <div className="text-2xl font-semibold">₹{mockData.totalInvested.toLocaleString('en-IN')}</div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-1">Current Value</div>
          <div className="text-2xl font-semibold">₹{mockData.currentValue.toLocaleString('en-IN')}</div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-1">Total Returns</div>
          <div className={`text-2xl font-semibold flex items-center ${mockData.returns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {mockData.returns >= 0 ? <TrendingUp className="h-5 w-5 mr-1" /> : <TrendingDown className="h-5 w-5 mr-1" />}
            ₹{Math.abs(mockData.returns).toLocaleString('en-IN')}
            <span className="text-sm ml-1">({mockData.returnsPercentage.toFixed(2)}%)</span>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-1">Goal Progress</div>
          <div className="text-2xl font-semibold flex items-center">
            <Target className="h-5 w-5 mr-1 text-blue-600" />
            {mockData.goalProgress.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${mockData.goalProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Charts and Upcoming Maturity */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Monthly Returns</h2>
          <div className="flex justify-center items-center h-64">
            <LineChart className="h-48 w-48 text-gray-300" />
            {/* In a real app, use a chart library like Chart.js or Recharts */}
          </div>
          <div className="grid grid-cols-6 gap-2 mt-4">
            {mockData.monthlyReturns.map((month, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-600">{month.month}</div>
                <div className="text-sm font-medium">₹{month.returns}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Maturity</h2>
          <div className="flex justify-center mb-6">
            <Calendar className="h-16 w-16 text-blue-600" />
          </div>
          <div className="text-center mb-4">
            <div className="text-sm text-gray-600 mb-1">
              {mockData.upcomingMaturity.bank}
            </div>
            <div className="text-xl font-semibold">
              ₹{mockData.upcomingMaturity.amount.toLocaleString('en-IN')}
            </div>
            <div className="text-sm text-green-600">
              Maturity Value: ₹{mockData.upcomingMaturity.maturityAmount.toLocaleString('en-IN')}
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Matures in {daysUntilMaturity} days
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full" 
              style={{ width: '75%' }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>Start Date</span>
            <span>Maturity Date</span>
          </div>
        </div>
      </div>
      
      {/* Asset Allocation and Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Asset Allocation</h2>
          <div className="flex justify-center items-center h-48">
            <PieChart className="h-32 w-32 text-gray-300" />
            {/* In a real app, use a chart library like Chart.js or Recharts */}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {mockData.assetAllocation.map((asset, index) => (
              <div key={index} className="flex items-center">
                <div className={`h-3 w-3 rounded-full mr-2 ${index === 0 ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                <div className="text-sm">
                  {asset.type}
                  <span className="text-gray-600 ml-1">
                    ({asset.percentage}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {mockData.recentActivity.map(activity => (
              <div key={activity.id} className="border-l-4 border-blue-500 pl-4 py-1">
                <div className="flex justify-between">
                  <div className="font-medium">{activity.type}</div>
                  <div className="text-sm text-gray-600">{activity.date}</div>
                </div>
                <div className="text-sm text-gray-700">{activity.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/portfolio" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center">
              View All Activity <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Investment Recommendations */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Recommended Next Steps</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-2">Increase SIP Contribution</h3>
            <p className="text-sm text-gray-600 mb-3">
              Based on your income, you can increase your monthly SIP by ₹5,000 to accelerate wealth creation.
            </p>
            <Link to="/portfolio" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              Take Action <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-2">Diversify Portfolio</h3>
            <p className="text-sm text-gray-600 mb-3">
              Consider adding debt funds to balance your portfolio and reduce overall risk.
            </p>
            <Link to="/compare-fd-rates" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              Explore Options <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-2">Tax Planning</h3>
            <p className="text-sm text-gray-600 mb-3">
              Invest in ELSS funds to save up to ₹46,800 in taxes under Section 80C.
            </p>
            <Link to="/investment-roadmap" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              Learn More <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 