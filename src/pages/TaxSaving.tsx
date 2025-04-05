import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ChevronDown, ChevronUp, FileText, Shield, Briefcase, PiggyBank, Home, Heart, BookOpen, ArrowRight } from 'lucide-react';

interface TaxSavingOption {
  id: string;
  title: string;
  description: string;
  category: string;
  maxDeduction: string;
  applicableRegime: string;
  icon: React.ReactNode;
}

const TaxSavingPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  // Toggle item expansion
  const toggleItem = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const taxSavingOptions: TaxSavingOption[] = [
    {
      id: 'section80c',
      title: 'Section 80C - Investments & Expenses',
      description: 'Section 80C offers tax deductions on various investments and expenses up to ₹1.5 lakh per financial year. This includes investments in PPF, ELSS mutual funds, tax-saving FDs, NSC, and expenses like life insurance premiums, children\'s tuition fees, and home loan principal repayment.',
      category: 'investment',
      maxDeduction: '₹1,50,000',
      applicableRegime: 'Old Tax Regime Only',
      icon: <PiggyBank className="h-6 w-6 text-blue-600" />
    },
    {
      id: 'section80ccd1b',
      title: 'Section 80CCD(1B) - NPS Investment',
      description: 'This section provides an additional deduction of up to ₹50,000 for contributions to the National Pension System (NPS), over and above the ₹1.5 lakh limit under Section 80C. NPS offers market-linked returns and is a long-term retirement planning tool.',
      category: 'investment',
      maxDeduction: '₹50,000',
      applicableRegime: 'Old Tax Regime Only',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      id: 'section80ccd2',
      title: 'Section 80CCD(2) - Employer\'s NPS Contribution',
      description: 'Deduction for employer\'s contribution to employee\'s NPS account, up to 10% of basic salary plus dearness allowance. This is one of the few deductions available in both tax regimes.',
      category: 'investment',
      maxDeduction: '10% of Basic Salary + DA',
      applicableRegime: 'Both Old and New Tax Regimes',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      id: 'section80d',
      title: 'Section 80D - Health Insurance Premium',
      description: 'Deduction for health insurance premiums paid for self, family, and parents. For individuals below 60 years, the maximum deduction is ₹25,000 for self/family and another ₹25,000 for parents. If parents are senior citizens (60+ years), the limit increases to ₹50,000. If both self and parents are senior citizens, the total deduction can go up to ₹1 lakh.',
      category: 'insurance',
      maxDeduction: 'Up to ₹1,00,000',
      applicableRegime: 'Old Tax Regime Only',
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      id: 'section24',
      title: 'Section 24 - Home Loan Interest',
      description: 'Deduction for interest paid on home loans for self-occupied property up to ₹2 lakh per financial year. For let-out properties, the entire interest amount is deductible. This deduction is available only in the old tax regime, with limited exceptions in the new regime.',
      category: 'loan',
      maxDeduction: '₹2,00,000 for self-occupied property',
      applicableRegime: 'Old Tax Regime (Limited cases in New Regime)',
      icon: <Home className="h-6 w-6 text-green-600" />
    },
    {
      id: 'section80tta',
      title: 'Section 80TTA - Savings Account Interest',
      description: 'Deduction for interest earned on savings accounts with banks, post offices, or co-operative societies up to ₹10,000 per financial year. This is applicable for all individuals except senior citizens, who can claim under Section 80TTB instead.',
      category: 'interest',
      maxDeduction: '₹10,000',
      applicableRegime: 'Old Tax Regime Only',
      icon: <PiggyBank className="h-6 w-6 text-blue-600" />
    },
    {
      id: 'section80ttb',
      title: 'Section 80TTB - Interest Income for Senior Citizens',
      description: 'Deduction for interest income from deposits (including FDs, RDs, and savings accounts) for senior citizens up to ₹50,000 per financial year. This replaces Section 80TTA for senior citizens and offers a higher deduction limit.',
      category: 'interest',
      maxDeduction: '₹50,000',
      applicableRegime: 'Old Tax Regime Only',
      icon: <PiggyBank className="h-6 w-6 text-blue-600" />
    },
    {
      id: 'section80g',
      title: 'Section 80G - Donations to Charitable Organizations',
      description: 'Deduction for donations made to approved charitable organizations and funds. The deduction can be 50% or 100% of the donation amount, depending on the organization. The total deduction cannot exceed 10% of the adjusted gross total income.',
      category: 'donation',
      maxDeduction: 'Varies (up to 10% of adjusted gross total income)',
      applicableRegime: 'Old Tax Regime Only',
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      id: 'section80e',
      title: 'Section 80E - Education Loan Interest',
      description: 'Deduction for interest paid on education loans taken for higher education of self, spouse, or children. There is no upper limit on the deduction amount, but it is available only for a maximum of 8 years from the year you start repaying the loan.',
      category: 'loan',
      maxDeduction: 'No Limit (for 8 years)',
      applicableRegime: 'Old Tax Regime Only',
      icon: <BookOpen className="h-6 w-6 text-purple-600" />
    },
    {
      id: 'section80gg',
      title: 'Section 80GG - Rent Paid',
      description: 'Deduction for rent paid by individuals who don\'t receive HRA as part of their salary. The deduction is the least of: (1) Rent paid minus 10% of total income, (2) ₹5,000 per month, or (3) 25% of total income.',
      category: 'housing',
      maxDeduction: 'Least of the three conditions',
      applicableRegime: 'Old Tax Regime Only',
      icon: <Home className="h-6 w-6 text-green-600" />
    },
    {
      id: 'standardDeduction',
      title: 'Standard Deduction for Salaried Individuals',
      description: 'A flat deduction of ₹50,000 from salary income for salaried individuals and pensioners. This is available in both the old and new tax regimes and requires no investment or expense proof.',
      category: 'salary',
      maxDeduction: '₹50,000',
      applicableRegime: 'Both Old and New Tax Regimes',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      id: 'ltcg',
      title: 'Long Term Capital Gains Tax Exemption',
      description: 'Exemption of up to ₹1 lakh per financial year on long-term capital gains from equity shares and equity-oriented mutual funds. Additionally, you can save LTCG tax by investing in 54EC bonds within 6 months or reinvesting in residential property under Section 54.',
      category: 'investment',
      maxDeduction: '₹1,00,000 per year',
      applicableRegime: 'Both Old and New Tax Regimes',
      icon: <Calculator className="h-6 w-6 text-gray-600" />
    }
  ];
  
  // Filter options based on category
  const filteredOptions = activeCategory === 'all' 
    ? taxSavingOptions 
    : taxSavingOptions.filter(option => option.category === activeCategory);
  
  // Get unique categories
  const categories = ['all', ...new Set(taxSavingOptions.map(option => option.category))];
  
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Tax-Saving Investments & Smart Tax Strategies</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700 mb-4">
          Understanding tax-saving options can help you reduce your tax liability while building wealth for the future. 
          This guide covers various tax-saving investments, deductions, and exemptions available under different tax regimes.
        </p>
        <p className="text-gray-700">
          Remember that tax planning should be an integral part of your overall financial planning, not just a year-end activity.
        </p>
      </div>
      
      {/* Tax Regime Comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Old vs. New Tax Regime: Which Should You Choose?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-blue-700 mb-3">Old Tax Regime</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Higher tax rates but numerous deductions and exemptions</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Better for those who invest in tax-saving instruments</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Beneficial for home loan borrowers and those with high medical expenses</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Requires proper documentation and proof of investments/expenses</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-blue-700 mb-3">New Tax Regime</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span>Lower tax rates but minimal deductions</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span>Simpler tax calculation with fewer complexities</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span>Better for those who don't claim many deductions</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span>Minimal documentation required</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-lg font-medium mb-3">How to Decide?</h3>
          <p className="text-gray-700 mb-3">
            The choice between the old and new tax regimes depends on your individual circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>If you have significant investments in tax-saving instruments or claim large deductions (home loan interest, medical insurance, etc.), the old regime might be more beneficial.</li>
            <li>If you don't have many deductions to claim or prefer simplicity, the new regime might be better.</li>
            <li>Use a tax calculator to compare your tax liability under both regimes based on your specific situation.</li>
            <li>Salaried individuals can switch between regimes each year, while business owners can switch only once from old to new.</li>
          </ul>
        </div>
      </section>
      
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax-Saving Options</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Tax Saving Options List */}
        <div className="space-y-4">
          {filteredOptions.map(option => (
            <div 
              key={option.id} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(option.id)}
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 text-left"
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{option.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Max: {option.maxDeduction}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        option.applicableRegime.includes('Both') 
                          ? 'bg-green-100 text-green-800' 
                          : option.applicableRegime.includes('New') 
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-orange-100 text-orange-800'
                      }`}>
                        {option.applicableRegime}
                      </span>
                    </div>
                  </div>
                </div>
                {expandedItems.includes(option.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {expandedItems.includes(option.id) && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 mb-4">{option.description}</p>
                  {option.id === 'section80c' && (
                    <div className="mt-2">
                      <h4 className="font-medium text-gray-900 mb-2">Popular Section 80C Investment Options:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Public Provident Fund (PPF) - 7.1% interest rate, 15-year lock-in</li>
                        <li>Equity-Linked Saving Schemes (ELSS) - Market-linked returns, 3-year lock-in</li>
                        <li>National Savings Certificate (NSC) - 7.7% interest rate, 5-year lock-in</li>
                        <li>Tax-Saving Fixed Deposits - 5.5-7% interest rate, 5-year lock-in</li>
                        <li>Sukanya Samriddhi Yojana (for girl child) - 8.2% interest rate</li>
                        <li>Life Insurance Premiums</li>
                        <li>Employee Provident Fund (EPF) contributions</li>
                        <li>Home Loan Principal Repayment</li>
                        <li>Children's Tuition Fees</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Smart Tax Planning Strategies */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Smart Tax Planning Strategies</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-medium text-blue-700 mb-3">Start Early, Plan Wisely</h3>
          <p className="text-gray-700 mb-4">
            Don't wait until the end of the financial year to start tax planning. Here are some strategies to consider:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Spread your tax-saving investments throughout the year instead of making lump-sum investments in March.</li>
            <li>Align tax planning with your financial goals - don't invest just to save tax.</li>
            <li>Consider the lock-in period, returns, and liquidity before choosing tax-saving instruments.</li>
            <li>Maximize employer benefits like NPS contributions under Section 80CCD(2).</li>
            <li>If you have a home loan, consider making partial prepayments to increase your Section 80C and Section 24 benefits.</li>
            <li>For senior citizens, prioritize investments that offer tax benefits under Section 80TTB.</li>
            <li>Distribute investments among family members to maximize tax benefits.</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-blue-700 mb-3">For Salaried Individuals</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Opt for tax-friendly salary components like HRA, LTA, and meal coupons.</li>
              <li>Claim reimbursements for medical expenses, telephone/internet bills, and other eligible expenses.</li>
              <li>Contribute to EPF and VPF for long-term wealth creation with tax benefits.</li>
              <li>Consider NPS for additional tax benefits under Section 80CCD(1B).</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-blue-700 mb-3">For Business Owners & Professionals</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Maintain proper books of accounts and claim all eligible business expenses.</li>
              <li>Consider presumptive taxation under Section 44ADA (for professionals) or 44AD (for businesses) if applicable.</li>
              <li>Set up a HUF (Hindu Undivided Family) for additional tax benefits.</li>
              <li>Invest in business assets to claim depreciation benefits.</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Tax-Saving Calculator CTA */}
      <section className="bg-blue-50 p-6 rounded-lg mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h2 className="text-xl font-semibold mb-2">Calculate Your Tax Savings</h2>
            <p className="text-gray-700">
              Use our tax calculator to compare your tax liability under both the old and new tax regimes.
              Input your income, deductions, and investments to see which regime is more beneficial for you.
            </p>
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Try Tax Calculator
          </Link>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-700 mb-4">
          Have more questions about tax-saving investments and strategies? Check out our detailed FAQ section.
        </p>
        <Link 
          to="/faq" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          View all tax-related FAQs <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>
      
      {/* Disclaimer */}
      <section className="bg-gray-50 p-5 rounded-lg text-sm text-gray-600">
        <h3 className="font-medium text-gray-900 mb-2">Disclaimer</h3>
        <p>
          The information provided on this page is for general informational purposes only and should not be considered as 
          professional financial or tax advice. Tax laws and regulations are subject to change. We recommend consulting with 
          a qualified tax professional for advice specific to your situation.
        </p>
      </section>
    </div>
  );
};

export default TaxSavingPage; 