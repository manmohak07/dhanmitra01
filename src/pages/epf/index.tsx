import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Info, FileText } from 'lucide-react';

const EPFLandingPage: React.FC = () => {
  const epfTopics = [
    {
      id: 'form-13',
      title: 'EPF Transfer Form 13',
      description: 'Learn about EPF Transfer Form 13, its requirements, and how to submit it online.',
      link: '/epf/form-13'
    },
    {
      id: 'payment-online',
      title: 'How to Make EPF Payment Online',
      description: 'A step-by-step guide to making EPF payments online, penalties for late payments, and benefits of EPF.',
      link: '/epf/payment-online'
    },
    {
      id: 'name-change',
      title: 'How to Change Name in EPF Account',
      description: 'Learn the process to correct your name in EPF records both online and offline, with required documents.',
      link: '/epf/name-change'
    },
    {
      id: 'form-31',
      title: 'How to Withdraw Funds Using EPF Form 31',
      description: 'Guide to partial EPF withdrawal using Form 31, including eligible purposes, conditions, and submission process.',
      link: '/epf/form-31'
    },
    {
      id: 'login-portal',
      title: 'EPFO Login Portal: What You Need to Know',
      description: 'Complete guide to the EPFO login portal, including login steps for employees and employers, UAN activation, and password reset.',
      link: '/epf/login-portal'
    },
    {
      id: 'form-19',
      title: 'PF Form 19 Download: Final Settlement of PF Funds',
      description: 'Learn how to download and submit PF Form 19 for final settlement of your EPF account after retirement or resignation.',
      link: '/epf/form-19'
    },
    {
      id: 'form-11',
      title: 'What Is EPF Form 11: Meaning, Purpose & Steps to Fill It',
      description: 'Understand EPF Form 11, a self-declaration form for new employees to verify their EPF membership status when joining a company.',
      link: '/epf/form-11'
    },
    {
      id: 'tds-withdrawal',
      title: 'All About TDS on PF Withdrawal in 2025',
      description: 'Learn about TDS applicability on EPF withdrawals, eligibility criteria, tax rules, and how to avoid TDS deductions.',
      link: '/epf/tds-withdrawal'
    },
    {
      id: 'form-10c',
      title: 'EPF Form 10C for EPS Withdrawal',
      description: 'Learn about EPF Form 10C for claiming employer\'s contribution to EPS, eligibility criteria, and the procedure for withdrawal.',
      link: '/epf/form-10c'
    },
    {
      id: 'passbook-download',
      title: 'EPF Passbook Download: A Simple Guide on How to Access Your Account Details',
      description: 'Learn how to download your EPF passbook online through the EPFO portal and UMANG app to track your contributions and retirement savings.',
      link: '/epf/passbook-download'
    },
    {
      id: 'claim-status',
      title: 'How to Track Your EPF Claim Status?',
      description: 'Discover multiple ways to check your EPF claim status including through the EPFO portal, UMANG app, SMS, and toll-free number.',
      link: '/epf/claim-status'
    },
    {
      id: 'pf-calculation',
      title: 'PF Calculation Formula for Financial Planning',
      description: 'Learn about EPF calculation formulas and use our interactive calculator to estimate your retirement corpus based on salary and tenure.',
      link: '/epf/pf-calculation'
    },
    {
      id: 'documentation',
      title: 'Official Documentation',
      description: 'Access official EPF acts, schemes, manuals, and administrative guidelines.',
      link: '/epf/documentation'
    }
    // More EPF topics will be added here as they are created
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Employees' Provident Fund (EPF)</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              The Employees' Provident Fund (EPF) is a retirement benefits scheme for employees in India.
              It is managed by the Employees' Provident Fund Organisation (EPFO) under the Ministry of Labour and Employment.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <p className="text-gray-700">
                EPF is a mandatory savings scheme for employees in India, where both the employee and employer contribute
                a portion of the employee's salary. The accumulated amount can be withdrawn at retirement or under
                specific circumstances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {epfTopics.map((topic) => (
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

export default EPFLandingPage; 