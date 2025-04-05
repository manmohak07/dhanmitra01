import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Info, FileText, BarChart2 } from 'lucide-react';

const NPSLandingPage: React.FC = () => {
  console.log('NPSLandingPage component rendering');

  const npsTopics = [
    {
      id: 'overview',
      title: 'National Pension Scheme (NPS): A Complete Guide',
      description: 'Learn about NPS, its objectives, features, and benefits for retirement planning.',
      link: '/nps/overview'
    },
    {
      id: 'account-types',
      title: 'Types of NPS Accounts: Tier I vs Tier II',
      description: 'Understand the differences between NPS Tier I and Tier II accounts, their features, and benefits.',
      link: '/nps/account-types'
    },
    {
      id: 'tax-benefits',
      title: 'Tax Benefits Under NPS',
      description: 'Explore the tax advantages available under NPS including deductions under Section 80CCD(1), 80CCD(1B), and 80CCD(2).',
      link: '/nps/tax-benefits'
    },
    {
      id: 'online-registration',
      title: 'How to Open NPS Account Online',
      description: 'Step-by-step guide to opening an NPS account online through eNPS portal or POPs.',
      link: '/nps/online-registration'
    },
    {
      id: 'investment-options',
      title: 'NPS Investment Options and Asset Classes',
      description: 'Learn about Auto Choice and Active Choice investment options, and different asset classes available under NPS.',
      link: '/nps/investment-options'
    },
    {
      id: 'withdrawal-rules',
      title: 'NPS Withdrawal Rules and Process',
      description: 'Understand the rules for partial and complete withdrawal from NPS, including retirement and premature withdrawal.',
      link: '/nps/withdrawal-rules'
    },
    {
      id: 'calculator',
      title: 'NPS Calculator: Plan Your Retirement',
      description: 'Calculate your estimated retirement corpus and pension using our NPS calculator.',
      link: '/nps/calculator'
    },
    {
      id: 'corporate-model',
      title: 'Corporate NPS: Benefits for Employers and Employees',
      description: 'Learn about the Corporate Model of NPS and its advantages for organizations and their employees.',
      link: '/nps/corporate-model'
    },
    {
      id: 'pran-card',
      title: 'PRAN Card: Everything You Need to Know',
      description: 'Understanding Permanent Retirement Account Number (PRAN), its importance, and how to get one.',
      link: '/nps/pran-card'
    },
    {
      id: 'exit-options',
      title: 'NPS Exit and Annuity Options',
      description: 'Explore different exit options from NPS and understand annuity choices available at retirement.',
      link: '/nps/exit-options'
    },
    {
      id: 'performance',
      title: 'Performance Data',
      description: 'View performance data for various NPS schemes and pension fund managers.',
      link: '/nps/performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">National Pension System (NPS)</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              The National Pension System (NPS) is a voluntary, long-term retirement savings scheme designed to enable systematic savings during the subscriber's working life. It is an attempt towards finding a sustainable solution to provide adequate retirement income to every citizen of India.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <p className="text-gray-700">
                The National Pension System (NPS) is a government-sponsored pension scheme launched by the Government of India. 
                It offers a unique opportunity for individuals to systematically plan for their retirement by investing in a 
                pension account at regular intervals during the course of their employment. Here you'll find comprehensive 
                resources about NPS, its benefits, and how to make the most of it.
              </p>
            </div>

            {/* Official Documentation Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Official Documentation</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Access the official NPS welcome kit and documentation for detailed information about the scheme:
              </p>
              <a
                href="https://npscra.nsdl.co.in/download/NEW_WELCOME_KIT396945283.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <FileText className="w-4 h-4 mr-2" />
                NPS Welcome Kit (PDF)
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {npsTopics.map((topic) => (
                <Link
                  key={topic.id}
                  to={topic.link}
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">{topic.title}</h2>
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  </div>
                  <p className="text-gray-600">{topic.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPSLandingPage; 