import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';

const NPSOverviewPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/nps" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to NPS Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">National Pension Scheme (NPS): A Complete Guide</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The National Pension System (NPS) is a government-initiated pension and investment scheme aimed at providing 
          retirement income to citizens. Regulated by the PFRDA, it offers a unique opportunity to systematically 
          save for retirement while enjoying tax benefits. This guide covers everything you need to know about NPS.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is National Pension Scheme?</h2>
        <p className="text-gray-700 mb-4">
          The National Pension System (NPS) is a defined contribution pension scheme regulated and administered by 
          the Pension Fund Regulatory and Development Authority (PFRDA) under the PFRDA Act 2013. It's a market-linked, 
          voluntary scheme where individual savings are pooled into a pension fund and invested by professional fund 
          managers according to strict guidelines.
        </p>
        <p className="text-gray-700">
          Under NPS, subscribers contribute regularly to their pension account during their working years. These 
          contributions are invested in a mix of assets like government bonds, corporate debt, and equities, with 
          the returns being market-linked. Upon retirement, subscribers can withdraw a portion of the corpus as a 
          lump sum, while the remaining must be used to purchase an annuity for regular pension income.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Objectives of National Pension System</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Retirement Security</h3>
            <p className="text-gray-700">
              The primary objective is to provide a sustainable pension system for citizens in their post-retirement phase, 
              ensuring financial independence and security.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Systematic Savings</h3>
            <p className="text-gray-700">
              NPS encourages systematic and regular savings during working years, helping create a substantial retirement corpus.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Market-Linked Returns</h3>
            <p className="text-gray-700">
              By investing in various financial instruments, NPS aims to provide market-linked returns while maintaining 
              a balance between risk and security.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features of National Pension Scheme</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Two Types of Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Tier I Account</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Non-withdrawable pension account</li>
                  <li>Minimum contribution: ₹500</li>
                  <li>Tax benefits under Section 80CCD</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Tier II Account</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Voluntary savings account</li>
                  <li>Minimum contribution: ₹250</li>
                  <li>Flexible withdrawals allowed</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Investment Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Auto Choice</h4>
                <p className="text-gray-700">
                  Investments are automatically allocated based on age profile, with higher equity exposure in younger years.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Active Choice</h4>
                <p className="text-gray-700">
                  Subscribers can decide their asset allocation with up to 75% in equity (50% for government employees).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax Benefits Under NPS</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-blue-700 mb-2">Section 80CCD(1)</h3>
              <p className="text-gray-700">
                Employee contributions up to 10% of salary (14% for central government employees) are tax-deductible 
                within the overall limit of ₹1.5 lakh under Section 80C.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-blue-700 mb-2">Section 80CCD(1B)</h3>
              <p className="text-gray-700">
                Additional tax deduction of up to ₹50,000 exclusively for NPS contributions, over and above Section 80C limit.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Section 80CCD(2)</h3>
              <p className="text-gray-700">
                Employer contributions up to 10% of salary (14% for central government) are tax-deductible without any monetary limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Eligibility for NPS</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Who Can Join NPS?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Any Indian citizen between 18 and 65 years of age</li>
            <li>NRIs with valid documents</li>
            <li>Government employees (mandatory)</li>
            <li>Corporate sector employees (optional)</li>
            <li>Self-employed individuals</li>
          </ul>
        </div>
      </section>

      <div className="bg-yellow-50 p-4 rounded-lg mb-8 flex items-start">
        <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-yellow-800 mb-2">Important Note</h3>
          <p className="text-gray-700">
            While NPS offers attractive returns and tax benefits, it's important to note that it has a long lock-in 
            period until retirement. At least 40% of the corpus must be used to purchase an annuity at retirement, 
            ensuring regular pension income. Consider your long-term financial goals and retirement needs when 
            deciding to invest in NPS.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          The National Pension System is a well-structured retirement savings scheme that combines the benefits of 
          market-linked returns with tax advantages. Its flexible investment options, professional fund management, 
          and regulatory oversight make it an attractive choice for long-term retirement planning. However, like any 
          investment decision, it's important to understand its features, benefits, and limitations before committing 
          to the scheme.
        </p>
      </section>
    </div>
  );
};

export default NPSOverviewPage; 