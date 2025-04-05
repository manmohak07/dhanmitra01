import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building, Calculator, FileText, ArrowLeft, 
  Info, HelpCircle, TrendingUp, TrendingDown, Star, ArrowRight
} from 'lucide-react';
import bankData from '../data/banks.json';

const BankDetail = () => {
  const { bankId } = useParams<{ bankId: string }>();
  const [bank, setBank] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // FD Calculator state
  const [calculatorValues, setCalculatorValues] = useState({
    principal: 100000,
    tenure: 12,
    interestRate: 7.0,
    taxRate: 20
  });
  const [calculatorResults, setCalculatorResults] = useState({
    maturityAmount: 0,
    totalInterest: 0,
    taxAmount: 0,
    netReturns: 0
  });
  
  // Reviews state
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Rahul Sharma', rating: 4, comment: 'Good interest rates and customer service.', date: '2025-01-15' },
    { id: 2, name: 'Priya Patel', rating: 5, comment: 'Best FD rates in the market. Highly recommended!', date: '2025-02-10' },
    { id: 3, name: 'Amit Kumar', rating: 3, comment: 'Decent rates but the online portal needs improvement.', date: '2025-02-25' }
  ]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  
  // Fetch bank details
  useEffect(() => {
    if (bankId) {
      try {
        // In a real app, this would be an API call
        const foundBank = bankData.banks.find(b => b.id === bankId);
        if (foundBank) {
          setBank(foundBank);
        } else {
          setError('Bank not found');
        }
      } catch (err) {
        setError('Failed to load bank details');
      } finally {
        setLoading(false);
      }
    }
  }, [bankId]);
  
  // Calculate FD returns
  useEffect(() => {
    const { principal, tenure, interestRate, taxRate } = calculatorValues;
    
    // Simple interest calculation
    const interest = (principal * interestRate * tenure) / (12 * 100);
    const maturityAmount = principal + interest;
    const taxAmount = (interest * taxRate) / 100;
    const netReturns = interest - taxAmount;
    
    setCalculatorResults({
      maturityAmount,
      totalInterest: interest,
      taxAmount,
      netReturns
    });
  }, [calculatorValues]);
  
  // Handle calculator input changes
  const handleCalculatorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCalculatorValues(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };
  
  // Handle review input changes
  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };
  
  // Handle review submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews(prev => [review, ...prev]);
    setNewReview({
      name: '',
      rating: 5,
      comment: ''
    });
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (error || !bank) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">{error || 'Bank not found'}</div>
        <Link to="/compare-fd-rates" className="text-blue-600 hover:text-blue-800">
          Back to FD Rate Comparison
        </Link>
      </div>
    );
  }
  
  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <Link to="/compare-fd-rates" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to FD Rate Comparison
        </Link>
      </div>
      
      {/* Bank Header */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex items-center mb-4 md:mb-0 md:mr-6">
            {bank.logo_url ? (
              <img 
                src={bank.logo_url} 
                alt={bank.name} 
                className="h-16 w-16 object-contain mr-4"
              />
            ) : (
              <Building className="h-16 w-16 text-gray-400 mr-4" />
            )}
            <h1 className="text-2xl font-bold">{bank.name}</h1>
          </div>
          
          <div className="flex items-center ml-0 md:ml-auto">
            <div className="flex items-center mr-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star 
                    key={star}
                    className={`h-5 w-5 ${star <= Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({reviews.length} reviews)</span>
            </div>
            
            <a 
              href="#reviews" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>
      
      {/* Bank Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <a href="#rates" className="border-b-2 border-blue-500 text-blue-600 px-4 py-2 font-medium">
              FD Rates
            </a>
            <a href="#calculator" className="text-gray-600 hover:text-gray-800 px-4 py-2 font-medium">
              FD Calculator
            </a>
            <a href="#tax" className="text-gray-600 hover:text-gray-800 px-4 py-2 font-medium">
              Tax Implications
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-gray-800 px-4 py-2 font-medium">
              Reviews
            </a>
          </nav>
        </div>
      </div>
      
      {/* FD Rates Section */}
      <div id="rates" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Fixed Deposit Rates</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Tenure</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Interest Rate</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Min Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Max Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Senior Citizen Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bank.rates
                .filter((rate: any) => rate.product_type === 'Fixed Deposit')
                .map((rate: any) => (
                  <tr key={rate.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      {rate.tenure_months >= 12 
                        ? `${rate.tenure_months / 12} Year${rate.tenure_months > 12 ? 's' : ''}`
                        : `${rate.tenure_months} Months`
                      }
                    </td>
                    <td className="py-3 px-4 font-medium text-blue-600">{rate.interest_rate}%</td>
                    <td className="py-3 px-4">₹{rate.min_amount.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-4">₹{rate.max_amount.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-4 font-medium text-green-600">{(rate.interest_rate + 0.5).toFixed(2)}%</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>* Senior Citizen rates are 0.50% higher than regular rates</p>
          <p>* Rates are subject to change without prior notice</p>
        </div>
      </div>
      
      {/* FD Calculator Section */}
      <div id="calculator" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-6">
          <Calculator className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Fixed Deposit Calculator</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="principal" className="block text-sm font-medium text-gray-700 mb-1">
                  Principal Amount (₹)
                </label>
                <input
                  id="principal"
                  name="principal"
                  type="number"
                  min="1000"
                  step="1000"
                  value={calculatorValues.principal}
                  onChange={handleCalculatorChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-1">
                  Tenure (Months)
                </label>
                <input
                  id="tenure"
                  name="tenure"
                  type="number"
                  min="1"
                  max="120"
                  value={calculatorValues.tenure}
                  onChange={handleCalculatorChange}
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
                  min="1"
                  max="15"
                  step="0.1"
                  value={calculatorValues.interestRate}
                  onChange={handleCalculatorChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700 mb-1">
                  Tax Rate (%)
                </label>
                <select
                  id="taxRate"
                  name="taxRate"
                  value={calculatorValues.taxRate}
                  onChange={handleCalculatorChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="0">0% (No Tax)</option>
                  <option value="5">5% (Income up to ₹5 Lakhs)</option>
                  <option value="20">20% (Income up to ₹10 Lakhs)</option>
                  <option value="30">30% (Income above ₹10 Lakhs)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Calculation Results</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Maturity Amount</div>
                <div className="text-2xl font-semibold">₹{calculatorResults.maturityAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 mb-1">Total Interest Earned</div>
                <div className="text-xl font-semibold text-green-600">₹{calculatorResults.totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 mb-1">Tax on Interest</div>
                <div className="text-xl font-semibold text-red-600">₹{calculatorResults.taxAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Net Returns After Tax</div>
                <div className="text-xl font-semibold">₹{calculatorResults.netReturns.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              <div className="flex items-start">
                <Info className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                <p>This is a simple interest calculation. Actual returns may vary based on compounding frequency and other factors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tax Implications Section */}
      <div id="tax" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-6">
          <FileText className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Tax Implications</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">TDS on Fixed Deposits</h3>
            <p className="text-gray-700 mb-2">
              If the interest earned on all FDs in a financial year exceeds ₹40,000 (₹50,000 for senior citizens), 
              the bank is required to deduct TDS at the rate of 10%.
            </p>
            <p className="text-gray-700">
              If you have not submitted your PAN card details to the bank, TDS will be deducted at a higher rate of 20%.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Income Tax on Interest</h3>
            <p className="text-gray-700 mb-2">
              Interest earned on Fixed Deposits is fully taxable and added to your total income. 
              It is taxed according to your income tax slab rate.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-600">Income Tax Slab</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-600">Tax Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 px-4">Up to ₹2.5 Lakhs</td>
                    <td className="py-2 px-4">Nil</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">₹2.5 Lakhs to ₹5 Lakhs</td>
                    <td className="py-2 px-4">5%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">₹5 Lakhs to ₹10 Lakhs</td>
                    <td className="py-2 px-4">20%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Above ₹10 Lakhs</td>
                    <td className="py-2 px-4">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Tax Saving Tips</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Consider investing in tax-saving FDs under Section 80C (lock-in period of 5 years) to get a deduction of up to ₹1.5 Lakhs.</li>
              <li>If you're in a lower tax bracket, submit Form 15G (for non-senior citizens) or Form 15H (for senior citizens) to avoid TDS deduction.</li>
              <li>Distribute FDs among family members to reduce the tax burden.</li>
              <li>Consider debt mutual funds for long-term investments (more than 3 years) to benefit from indexation.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      <div id="reviews" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-6">
          <Star className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Customer Reviews</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Write a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={newReview.name}
                  onChange={handleReviewChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                      className="focus:outline-none"
                    >
                      <Star 
                        className={`h-6 w-6 ${star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Review
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  required
                  value={newReview.comment}
                  onChange={handleReviewChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Submit Review
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Customer Feedback</h3>
            
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between mb-1">
                      <div className="font-medium">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.date}</div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star 
                          key={star}
                          className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No reviews yet. Be the first to write a review!
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-800">
          Want to see how {bank.name} compares to other banks?{' '}
          <Link to="/compare-fd-rates" className="text-blue-600 hover:text-blue-800">
            Compare FD rates
          </Link>
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
          Apply for an Account
        </button>
        <Link to="/compare-fd-rates" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowRight className="h-5 w-5 mr-2" /> Compare with Other Banks
        </Link>
      </div>
    </div>
  );
};

export default BankDetail; 