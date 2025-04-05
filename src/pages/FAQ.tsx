import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What is Dhanmitra?',
    answer: 'Dhanmitra is a web-based platform designed to assist users in making informed investment decisions. It provides personalized investment roadmaps, compares Fixed Deposit (FD) rates across various banks, and offers a simulated investment experience.',
    category: 'general'
  },
  {
    id: 'faq2',
    question: 'Is Dhanmitra a financial advisor?',
    answer: 'No, Dhanmitra is not a financial advisor. We provide information and tools to help you make informed decisions, but we do not offer personalized financial advice. For specific financial advice, please consult with a certified financial advisor.',
    category: 'general'
  },
  {
    id: 'faq3',
    question: 'How does the investment roadmap work?',
    answer: 'The investment roadmap is generated based on your responses to a questionnaire about your financial goals, risk tolerance, and investment preferences. Our system analyzes this information to create a personalized investment plan with short, medium, and long-term recommendations.',
    category: 'features'
  },
  {
    id: 'faq4',
    question: 'Is my data secure on Dhanmitra?',
    answer: 'Yes, we take data security very seriously. All your personal and financial information is encrypted and stored securely. We do not share your data with third parties without your explicit consent.',
    category: 'security'
  },
  {
    id: 'faq5',
    question: 'How accurate is the bank comparison data?',
    answer: 'We strive to keep our bank comparison data as accurate and up-to-date as possible. However, interest rates and terms can change frequently. We recommend verifying the information with the bank before making any investment decisions.',
    category: 'features'
  },
  {
    id: 'faq6',
    question: 'Can I make real investments through Dhanmitra?',
    answer: 'No, Dhanmitra does not facilitate real investments. We offer a simulated investment experience with a dummy portfolio to help you understand how different investment strategies might perform without risking real money.',
    category: 'features'
  },
  {
    id: 'faq7',
    question: 'How do I create an account?',
    answer: 'To create an account, click on the "Register" button in the top right corner of the homepage. Fill in your email address and create a password. You will receive a verification email to confirm your account.',
    category: 'account'
  },
  {
    id: 'faq8',
    question: 'Is Dhanmitra free to use?',
    answer: 'Yes, Dhanmitra is currently free to use. We may introduce premium features in the future, but our core services will remain free.',
    category: 'general'
  },
  {
    id: 'faq9',
    question: 'What is a Fixed Deposit (FD)?',
    answer: 'A Fixed Deposit (FD) is a financial instrument provided by banks where you deposit money for a fixed period at a predetermined interest rate. At the end of the period, you receive your principal amount along with the interest earned.',
    category: 'investment'
  },
  {
    id: 'faq10',
    question: 'How is tax calculated on Fixed Deposits?',
    answer: 'Interest earned on Fixed Deposits is taxable as per your income tax slab. If the interest earned in a financial year exceeds ₹40,000 (₹50,000 for senior citizens), the bank will deduct TDS at 10%. You need to declare this interest income in your annual tax return.',
    category: 'investment'
  },
  {
    id: 'faq11',
    question: 'What is the difference between a Mutual Fund and a Fixed Deposit?',
    answer: 'Fixed Deposits offer guaranteed returns at a fixed interest rate, while Mutual Funds invest in stocks, bonds, or other securities and offer potentially higher but non-guaranteed returns. FDs are generally considered safer, while Mutual Funds carry higher risk but also the potential for higher returns.',
    category: 'investment'
  },
  {
    id: 'faq12',
    question: 'How can I reset my password?',
    answer: 'If you forgot your password, click on the "Login" button, then select "Forgot Password". Enter your registered email address, and we will send you a password reset link.',
    category: 'account'
  },
  // Tax-related FAQs
  {
    id: 'tax1',
    question: 'What tax-saving options are available in the new tax regime?',
    answer: 'The new tax regime offers limited deductions compared to the old regime. Available exemptions include: Employer\'s Contribution to NPS (Section 80CCD(2)) up to 10% of basic salary, Standard Deduction for salaried individuals of ₹50,000, and Interest on Home Loan (Section 24) with limited applicability in select cases.',
    category: 'tax'
  },
  {
    id: 'tax2',
    question: 'Can we apply for 80C, 80CC, and 80CCD together?',
    answer: 'Yes, under the old regime, you can combine: 80C (up to ₹1.5 lakh for investments like PPF, ELSS, etc.), 80CCD(1B) (additional ₹50,000 for NPS investments), and 80CC (rarely used as it applies to LIC annuity plans, included under 80C). Note that these deductions are not applicable in the new tax regime.',
    category: 'tax'
  },
  {
    id: 'tax3',
    question: 'Can 80TTB be claimed in the new regime?',
    answer: 'No, 80TTB, which offers a deduction of ₹50,000 on interest income for senior citizens, is not available under the new tax regime.',
    category: 'tax'
  },
  {
    id: 'tax4',
    question: 'What tax regime should I choose if my income is ₹35 lakhs?',
    answer: 'The choice depends on your deductions. The new regime has lower tax rates but no deductions. If you utilize significant deductions (e.g., 80C, 80D, home loan interest), the old regime might be better. We recommend using a tax calculator to compare both regimes based on your specific situation.',
    category: 'tax'
  },
  {
    id: 'tax5',
    question: 'Is there a limit to how much I can donate to an NGO for tax benefits?',
    answer: 'Yes, under Section 80G, donations to approved NGOs are eligible for 50% or 100% deduction, with or without limits. However, deductions cannot exceed 10% of your gross total income. For example, if your income is ₹10 lakh and you donate ₹10 lakh, only ₹1 lakh (10% of ₹10 lakh) is eligible for deduction.',
    category: 'tax'
  },
  {
    id: 'tax6',
    question: 'How can I check if TDS is deducted or not?',
    answer: 'You can check TDS deductions by: 1) Logging in to the Income Tax Portal (https://incometax.gov.in), 2) Going to Form 26AS, which shows all TDS entries, and 3) Using your bank statement to cross-check for TDS deductions.',
    category: 'tax'
  },
  {
    id: 'tax7',
    question: 'I\'m a consultant with 30LPA income. Should I use 44ADA and the new tax regime?',
    answer: 'Under 44ADA, you can declare 50% of gross receipts as income. Consider shifting to the old regime if deductions like NPS (80CCD), health insurance (80D), or home loans can significantly reduce your taxable income. Compare both regimes using a tax calculator to determine which is more beneficial for your specific situation.',
    category: 'tax'
  },
  {
    id: 'tax8',
    question: 'Is the ₹1.5 lakh interest limit under Section 80C per year or total?',
    answer: 'The ₹1.5 lakh limit refers to the maximum deduction available per financial year under Section 80C for eligible investments like PPF, ELSS, life insurance premiums, etc.',
    category: 'tax'
  },
  {
    id: 'tax9',
    question: 'What deductions are possible in the new tax regime?',
    answer: 'The new tax regime offers limited deductions, including: Employer NPS contribution (80CCD(2)) and Standard deduction of ₹50,000 for salaried individuals.',
    category: 'tax'
  },
  {
    id: 'tax10',
    question: 'Can we move from old to new tax regime?',
    answer: 'Yes, salaried individuals can switch between the old and new tax regimes every financial year when filing returns. However, business owners can switch only once from the old to the new regime.',
    category: 'tax'
  },
  {
    id: 'tax11',
    question: 'What is the taxable amount for senior citizens in the new regime?',
    answer: 'Under the new regime, income up to ₹7 lakh is tax-free due to the rebate under Section 87A. Senior citizens don\'t receive additional exemptions under the new regime beyond this rebate.',
    category: 'tax'
  },
  {
    id: 'tax12',
    question: 'Is FD interest taxable for the general public?',
    answer: 'Yes, FD interest is fully taxable for the general public. TDS is applicable for interest exceeding ₹40,000 per bank per year. Senior citizens get an exemption of up to ₹50,000 on interest income under Section 80TTB in the old tax regime.',
    category: 'tax'
  },
  {
    id: 'tax13',
    question: 'What are the options to save LTCG taxes?',
    answer: 'To save on Long Term Capital Gains (LTCG) taxes, you can: 1) Invest in 54EC Bonds within 6 months, 2) Reinvest in Residential Property under Section 54, or 3) Utilize the ₹1 lakh LTCG exemption annually.',
    category: 'tax'
  },
  {
    id: 'tax14',
    question: 'What is meant by fixed deposit?',
    answer: 'A fixed deposit (FD) is a financial instrument provided by banks that offers a higher rate of interest than a regular savings account, until the given maturity date. It is a safer investment option compared to stocks or mutual funds. Once the investment is made, the money is deposited for a specific period (ranging from weeks to years), during which the depositor receives interest. At the end of the term, the original amount deposited is returned along with the accumulated interest.',
    category: 'investment'
  },
  {
    id: 'tax15',
    question: 'How much interest would I earn on a 10 lakh FD for 1 year?',
    answer: 'If you invest 10 lakh in a fixed deposit (FD) with an interest rate of 7.85% for investors below 60 years, the interest earned for one year would be ₹78,500. The total amount at the end of the year would be ₹10,78,500. For senior citizens receiving an interest rate of 8.35%, the interest for one year on 10 lakh would be ₹83,500, making the total amount ₹10,83,500.',
    category: 'investment'
  },
  {
    id: 'tax16',
    question: 'Which bank has the highest FD interest rate?',
    answer: 'Unity Small Finance Bank currently offers the highest fixed deposit interest rate at 9.5% for a specific tenure. This rate is exceptional compared to industry standards and reflects the competitive offerings by small finance banks aimed at attracting depositors seeking higher returns.',
    category: 'investment'
  },
  {
    id: 'tax17',
    question: 'Can I withdraw FD anytime?',
    answer: 'You can withdraw a fixed deposit before its maturity date, but this may involve penalties such as a reduced interest rate and/or penalty fees. Each bank has its own specific terms for early withdrawal, so it\'s important to check the terms and conditions before making an early withdrawal.',
    category: 'investment'
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  // Filter FAQs based on category and search query
  const filteredFAQs = faqData.filter(faq => 
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (searchQuery === '' || 
     faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  // Toggle FAQ item expansion
  const toggleItem = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  // Get unique categories
  const categories = ['all', ...new Set(faqData.map(faq => faq.category))];
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about Dhanmitra, investments, and how to make the most of our platform.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
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
      </div>
      
      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map(faq => (
            <div 
              key={faq.id} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedItems.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {expandedItems.includes(faq.id) && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No matching questions found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
      
      {/* Still Have Questions */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">Still Have Questions?</h2>
        <p className="text-gray-700 mb-4">
          If you couldn't find the answer you were looking for, our support team is here to help.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FAQ; 