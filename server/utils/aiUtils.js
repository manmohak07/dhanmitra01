import dotenv from 'dotenv';
import { generateInvestmentRoadmap } from './googleAI.js';

dotenv.config();

/**
 * Generate an investment roadmap using Google AI or fallback to mock
 * @param {Object} userData - User data for roadmap generation
 * @returns {Object} Generated roadmap
 */
export const generateRoadmapWithAI = async (userData) => {
  // Use mock implementation if specified in environment variables
  if (process.env.USE_MOCK_AI === 'true') {
    return generateMockRoadmap(userData);
  }

  try {
    // Use Google AI to generate the roadmap
    return await generateInvestmentRoadmap(userData);
  } catch (error) {
    console.error("Error generating roadmap with Google AI:", error);
    
    // If Google AI fails, fall back to the mock implementation
    console.log('Falling back to mock implementation due to Google AI service error');
    return generateMockRoadmap(userData);
  }
};

/**
 * Generate a mock roadmap for testing
 * @param {Object} userData - User data for roadmap generation
 * @returns {Object} Generated mock roadmap
 */
const generateMockRoadmap = (userData) => {
  console.log('Using mock AI implementation for roadmap generation');
  return {
    financialSituation: `Based on your profile as a ${userData.age}-year-old with a monthly income of ₹${userData.monthlyIncome} and current savings of ₹${userData.currentSavings}, you have a ${userData.riskTolerance} risk tolerance. Your financial goals include ${userData.financialGoals.join(', ')} with a timeframe of ${userData.timeframe}.`,
    shortTermRecommendations: [
      "Build an emergency fund covering 6 months of expenses",
      "Clear any high-interest debt (credit cards, personal loans)",
      "Start a systematic investment plan (SIP) with 10-15% of your monthly income"
    ],
    mediumTermRecommendations: [
      "Increase SIP contributions to 20-25% of your income",
      "Diversify investments across equity, debt, and gold",
      "Consider tax-saving investments under Section 80C"
    ],
    longTermRecommendations: [
      "Review and rebalance your portfolio annually",
      "Increase exposure to equity for long-term wealth creation",
      "Plan for retirement through NPS or pension plans"
    ],
    assetAllocation: {
      description: "Based on your medium risk tolerance, here's a recommended asset allocation strategy:",
      allocation: [
        { name: "Equity", percentage: 50, rationale: "For long-term growth and inflation-beating returns" },
        { name: "Debt", percentage: 30, rationale: "For stability and regular income" },
        { name: "Gold", percentage: 10, rationale: "As a hedge against inflation and market volatility" },
        { name: "Cash", percentage: 10, rationale: "For emergency needs and short-term goals" }
      ]
    },
    investmentVehicles: {
      description: "Recommended investment vehicles based on your profile:",
      vehicles: [
        { name: "Mutual Funds", suitability: "High", description: "Diversified equity and debt funds for long-term goals" },
        { name: "Public Provident Fund (PPF)", suitability: "Medium", description: "Tax-efficient debt instrument with sovereign guarantee" },
        { name: "National Pension System (NPS)", suitability: "High", description: "For retirement planning with tax benefits" },
        { name: "Fixed Deposits", suitability: "Medium", description: "For capital preservation and regular income" }
      ]
    },
    riskManagement: {
      description: "Strategies to protect your financial well-being:",
      strategies: [
        "Maintain adequate health insurance coverage for you and your family",
        "Get term life insurance of at least 10 times your annual income",
        "Consider disability insurance to protect your income",
        "Maintain an emergency fund of 6 months' expenses",
        "Diversify investments across asset classes and within each asset class"
      ]
    }
  };
}; 