import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart2, TrendingUp } from 'lucide-react';

const NPSPerformancePage: React.FC = () => {
  const schemeGData = {
    tier1: [
      { name: 'Aditya Birla Sun Life', returns: { '1Y': 8.40, '5Y': 8.00, '10Y': 9.37 } },
      { name: 'Axis Pension Fund', returns: { '1Y': 7.63, '5Y': 7.91, '10Y': 9.38 } },
      { name: 'HDFC Pension', returns: { '1Y': 8.03, '5Y': 7.71, '10Y': 9.42 } },
      { name: 'ICICI Pru', returns: { '1Y': 8.13, '5Y': 7.90, '10Y': 10.01 } },
      { name: 'Kotak Mahindra', returns: { '1Y': 8.36, '5Y': 8.17, '10Y': 9.45 } },
      { name: 'LIC Pension', returns: { '1Y': 8.05, '5Y': 7.77, '10Y': 9.15 } },
      { name: 'Max Life', returns: { '1Y': 8.11, '5Y': 7.74, '10Y': 8.83 } },
      { name: 'SBI Pension', returns: { '1Y': 8.32, '5Y': 7.42, '10Y': null } },
      { name: 'Tata Pension', returns: { '1Y': 8.01, '5Y': null, '10Y': null } },
      { name: 'UTI Retirement', returns: { '1Y': 8.30, '5Y': null, '10Y': null } },
      { name: 'DSP Pension', returns: { '1Y': 8.10, '5Y': null, '10Y': null } }
    ],
    tier2: [
      { name: 'Aditya Birla Sun Life', returns: { '1Y': 8.26, '5Y': 7.90, '10Y': 9.16 } },
      { name: 'Axis Pension Fund', returns: { '1Y': 7.27, '5Y': 7.73, '10Y': 9.37 } },
      { name: 'HDFC Pension', returns: { '1Y': 8.10, '5Y': 7.73, '10Y': 9.27 } },
      { name: 'ICICI Pru', returns: { '1Y': 8.07, '5Y': 7.70, '10Y': 10.01 } },
      { name: 'Kotak Mahindra', returns: { '1Y': 8.25, '5Y': 8.37, '10Y': 9.38 } },
      { name: 'LIC Pension', returns: { '1Y': 8.21, '5Y': 7.67, '10Y': 9.22 } },
      { name: 'Max Life', returns: { '1Y': 7.31, '5Y': 7.67, '10Y': 8.83 } },
      { name: 'SBI Pension', returns: { '1Y': 8.38, '5Y': 7.42, '10Y': null } },
      { name: 'Tata Pension', returns: { '1Y': 8.18, '5Y': null, '10Y': null } },
      { name: 'UTI Retirement', returns: { '1Y': 8.14, '5Y': null, '10Y': null } },
      { name: 'DSP Pension', returns: { '1Y': 8.10, '5Y': null, '10Y': null } }
    ]
  };

  const schemeCData = {
    tier1: [
      { name: 'Aditya Birla Sun Life', returns: { '1Y': 7.43, '5Y': 8.28, '10Y': 9.22 } },
      { name: 'Axis Pension Fund', returns: { '1Y': 7.51, '5Y': 8.52, '10Y': 9.16 } },
      { name: 'HDFC Pension', returns: { '1Y': 7.49, '5Y': 8.02, '10Y': 8.69 } },
      { name: 'ICICI Pru', returns: { '1Y': 7.50, '5Y': 7.52, '10Y': 8.92 } },
      { name: 'Kotak Mahindra', returns: { '1Y': 7.37, '5Y': 8.12, '10Y': 9.01 } },
      { name: 'LIC Pension', returns: { '1Y': 7.05, '5Y': 8.08, '10Y': 8.70 } },
      { name: 'Max Life', returns: { '1Y': 7.13, '5Y': 7.74, '10Y': 9.35 } },
      { name: 'SBI Pension', returns: { '1Y': 7.28, '5Y': 8.62, '10Y': null } },
      { name: 'Tata Pension', returns: { '1Y': 6.87, '5Y': null, '10Y': null } },
      { name: 'UTI Retirement', returns: { '1Y': 7.45, '5Y': null, '10Y': null } },
      { name: 'DSP Pension', returns: { '1Y': 7.27, '5Y': null, '10Y': null } }
    ],
    tier2: [
      { name: 'Aditya Birla Sun Life', returns: { '1Y': 7.24, '5Y': 8.10, '10Y': 8.51 } },
      { name: 'Axis Pension Fund', returns: { '1Y': 6.08, '5Y': 8.29, '10Y': 9.06 } },
      { name: 'HDFC Pension', returns: { '1Y': 7.49, '5Y': 7.92, '10Y': 8.72 } },
      { name: 'ICICI Pru', returns: { '1Y': 7.42, '5Y': 7.73, '10Y': 8.62 } },
      { name: 'Kotak Mahindra', returns: { '1Y': 7.23, '5Y': 8.44, '10Y': 8.71 } },
      { name: 'LIC Pension', returns: { '1Y': 7.10, '5Y': 7.60, '10Y': 8.69 } },
      { name: 'Max Life', returns: { '1Y': 6.87, '5Y': 7.71, '10Y': 9.35 } },
      { name: 'SBI Pension', returns: { '1Y': 7.08, '5Y': 8.62, '10Y': null } },
      { name: 'Tata Pension', returns: { '1Y': 6.89, '5Y': null, '10Y': null } },
      { name: 'UTI Retirement', returns: { '1Y': 7.27, '5Y': null, '10Y': null } },
      { name: 'DSP Pension', returns: { '1Y': 7.27, '5Y': null, '10Y': null } }
    ]
  };

  const schemeAData = {
    tier1: [
      { name: 'Aditya Birla Sun Life', returns: { '1Y': 4.36, '5Y': 5.73, '10Y': null } },
      { name: 'Axis Pension Fund', returns: { '1Y': 6.85, '5Y': 8.54, '10Y': null } },
      { name: 'HDFC Pension', returns: { '1Y': 6.00, '5Y': 6.21, '10Y': null } },
      { name: 'ICICI Pru', returns: { '1Y': 2.69, '5Y': 6.70, '10Y': null } },
      { name: 'Kotak Mahindra', returns: { '1Y': 3.87, '5Y': 7.34, '10Y': null } },
      { name: 'LIC Pension', returns: { '1Y': 4.40, '5Y': 8.76, '10Y': null } },
      { name: 'Max Life', returns: { '1Y': 6.75, '5Y': 5.16, '10Y': null } },
      { name: 'SBI Pension', returns: { '1Y': 4.99, '5Y': null, '10Y': null } },
      { name: 'Tata Pension', returns: { '1Y': 7.77, '5Y': null, '10Y': null } },
      { name: 'UTI Retirement', returns: { '1Y': 1.60, '5Y': null, '10Y': null } }
    ]
  };

  const renderTable = (data: any[], title: string) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pension Fund</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5 Years</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">10 Years</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((fund, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fund.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fund.returns['1Y']?.toFixed(2)}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fund.returns['5Y']?.toFixed(2)}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fund.returns['10Y']?.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          to="/nps"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to NPS Resources
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">NPS Performance Data</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Performance data for various NPS schemes as of 15th December 2023. The data includes returns for
              different time periods (1 year, 5 years, and 10 years) across different pension fund managers.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <BarChart2 className="w-6 h-6 mr-2" />
                Scheme G Performance
              </h2>
              {renderTable(schemeGData.tier1, "Tier-I Returns")}
              {renderTable(schemeGData.tier2, "Tier-II Returns")}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Scheme C Performance
              </h2>
              {renderTable(schemeCData.tier1, "Tier-I Returns")}
              {renderTable(schemeCData.tier2, "Tier-II Returns")}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <BarChart2 className="w-6 h-6 mr-2" />
                Scheme A Performance
              </h2>
              {renderTable(schemeAData.tier1, "Tier-I Returns")}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-600">
                Note: All returns are as of 15th December 2023. Past performance is not indicative of future results.
                Please consult with a financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPSPerformancePage; 