import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, Building, TrendingUp, FileText, Filter, X } from 'lucide-react';
import bankData from '../data/banks.json';
import suggestions from '../data/investment-suggestions.json';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  
  const [activeTab, setActiveTab] = useState('all');
  const [bankResults, setBankResults] = useState<any[]>([]);
  const [investmentResults, setInvestmentResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Search function
  useEffect(() => {
    if (query) {
      setLoading(true);
      
      // Search in banks
      const matchedBanks = bankData.banks.filter(bank => 
        bank.name.toLowerCase().includes(query.toLowerCase())
      );
      
      // Search in investment suggestions
      const matchedSuggestions: any[] = [];
      suggestions.suggestions.forEach(category => {
        if (category.title.toLowerCase().includes(query.toLowerCase()) || 
            category.description.toLowerCase().includes(query.toLowerCase())) {
          matchedSuggestions.push({
            id: category.id,
            title: category.title,
            description: category.description,
            type: 'category'
          });
        }
        
        category.recommendations.forEach(rec => {
          if (rec.title.toLowerCase().includes(query.toLowerCase()) || 
              rec.description.toLowerCase().includes(query.toLowerCase())) {
            matchedSuggestions.push({
              id: `${category.id}-${rec.title.replace(/\s+/g, '-').toLowerCase()}`,
              categoryId: category.id,
              categoryTitle: category.title,
              title: rec.title,
              description: rec.description,
              type: 'recommendation'
            });
          }
        });
      });
      
      setBankResults(matchedBanks);
      setInvestmentResults(matchedSuggestions);
      setLoading(false);
    }
  }, [query]);
  
  // Filter results based on active tab
  const filteredResults = activeTab === 'all' 
    ? [...bankResults, ...investmentResults]
    : activeTab === 'banks' 
      ? bankResults 
      : investmentResults;
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600">
          {filteredResults.length} results for "{query}"
        </p>
      </div>
      
      {/* Search Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form 
          action="/search" 
          method="get"
          className="flex items-center"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search banks, investment options..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'all' 
              ? 'text-blue-600 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          All Results ({bankResults.length + investmentResults.length})
        </button>
        <button
          onClick={() => setActiveTab('banks')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'banks' 
              ? 'text-blue-600 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Banks ({bankResults.length})
        </button>
        <button
          onClick={() => setActiveTab('investments')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'investments' 
              ? 'text-blue-600 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Investment Options ({investmentResults.length})
        </button>
      </div>
      
      {/* Results */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="space-y-6">
          {filteredResults.map(result => (
            <div key={result.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* Bank Result */}
              {result.rates && (
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {result.logo_url ? (
                      <img 
                        src={result.logo_url} 
                        alt={result.name} 
                        className="h-12 w-12 object-contain"
                      />
                    ) : (
                      <Building className="h-12 w-12 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <Link to={`/bank/${result.id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                      {result.name}
                    </Link>
                    <div className="mt-2 text-gray-700">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                        <span>
                          Best FD Rate: {Math.max(...result.rates.filter((r: any) => r.product_type === 'Fixed Deposit').map((r: any) => r.interest_rate))}%
                        </span>
                      </div>
                      <div className="mt-1">
                        {result.rates.filter((r: any) => r.product_type === 'Fixed Deposit').length} Fixed Deposit options available
                      </div>
                    </div>
                    <div className="mt-3">
                      <Link to={`/bank/${result.id}`} className="text-blue-600 hover:text-blue-800 text-sm">
                        View Bank Details
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Investment Category Result */}
              {result.type === 'category' && (
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FileText className="h-12 w-12 text-blue-500" />
                  </div>
                  <div>
                    <Link to={`/investment-roadmap`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                      {result.title}
                    </Link>
                    <p className="mt-2 text-gray-700">{result.description}</p>
                    <div className="mt-3">
                      <Link to={`/investment-roadmap`} className="text-blue-600 hover:text-blue-800 text-sm">
                        View Investment Roadmap
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Investment Recommendation Result */}
              {result.type === 'recommendation' && (
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Filter className="h-12 w-12 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">
                      {result.categoryTitle}
                    </div>
                    <Link to={`/investment-roadmap`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                      {result.title}
                    </Link>
                    <p className="mt-2 text-gray-700">{result.description}</p>
                    <div className="mt-3">
                      <Link to={`/investment-roadmap`} className="text-blue-600 hover:text-blue-800 text-sm">
                        View Investment Roadmap
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <X className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No results found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find any matches for "{query}". Please try a different search term.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/compare-fd-rates" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Compare FD Rates
            </Link>
            <Link 
              to="/investment-roadmap" 
              className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
            >
              Create Investment Roadmap
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults; 