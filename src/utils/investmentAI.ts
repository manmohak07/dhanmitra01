import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI with the provided API key
const API_KEY = import.meta.env.VITE_GOOGLE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Flag to use mock data if API fails
const USE_MOCK_DATA_ON_FAILURE = true;

// Define types for the investment form inputs
export interface InvestmentFormData {
  age: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  existingSavings: number;
  existingInvestments: number;
  riskTolerance: 'low' | 'medium' | 'high';
  investmentGoals: string[];
  investmentHorizon: number; // in years
  taxBracket: string;
  dependents: number;
  existingLoans: number;
  preferredInvestments?: string[];
}

// Define types for the AI response
export interface InvestmentRecommendation {
  assetAllocation: {
    equity: number;
    debt: number;
    gold: number;
    realEstate: number;
    alternativeInvestments: number;
  };
  monthlyInvestmentAmount: number;
  specificRecommendations: {
    category: string;
    percentage: number;
    instruments: string[];
    rationale: string;
  }[];
  taxSavingOptions: {
    instrument: string;
    maxAmount: number;
    expectedReturns: string;
    taxBenefit: string;
  }[];
  projectedReturns: {
    years: number[];
    conservative: number[];
    moderate: number[];
    aggressive: number[];
  };
  riskAssessment: string;
  nextSteps: string[];
}

/**
 * Generates a mock investment recommendation based on the form data
 * Used as a fallback when the API fails
 */
function generateMockRecommendation(formData: InvestmentFormData): InvestmentRecommendation {
  // Calculate disposable income
  const disposableIncome = formData.monthlyIncome - formData.monthlyExpenses;
  
  // Determine recommended monthly investment (30-50% of disposable income)
  const recommendedPercentage = formData.riskTolerance === 'high' ? 0.5 : 
                               formData.riskTolerance === 'medium' ? 0.4 : 0.3;
  const monthlyInvestmentAmount = Math.round(disposableIncome * recommendedPercentage);
  
  // Determine asset allocation based on age and risk tolerance
  let equityPercentage = 0;
  let debtPercentage = 0;
  let goldPercentage = 0;
  let realEstatePercentage = 0;
  let alternativePercentage = 0;
  
  // Basic formula: 100 - age = equity allocation for moderate risk
  if (formData.riskTolerance === 'high') {
    equityPercentage = Math.min(90, 110 - formData.age);
    debtPercentage = 100 - equityPercentage - 5 - 3 - 2;
    goldPercentage = 5;
    realEstatePercentage = 3;
    alternativePercentage = 2;
  } else if (formData.riskTolerance === 'medium') {
    equityPercentage = Math.min(70, 100 - formData.age);
    debtPercentage = 100 - equityPercentage - 10 - 5 - 5;
    goldPercentage = 10;
    realEstatePercentage = 5;
    alternativePercentage = 5;
  } else {
    equityPercentage = Math.min(50, 90 - formData.age);
    debtPercentage = 100 - equityPercentage - 15 - 5 - 0;
    goldPercentage = 15;
    realEstatePercentage = 5;
    alternativePercentage = 0;
  }
  
  // Ensure all percentages are positive
  equityPercentage = Math.max(0, equityPercentage);
  debtPercentage = Math.max(0, debtPercentage);
  goldPercentage = Math.max(0, goldPercentage);
  realEstatePercentage = Math.max(0, realEstatePercentage);
  alternativePercentage = Math.max(0, alternativePercentage);
  
  // Generate specific recommendations
  const specificRecommendations = [
    {
      category: "Large Cap Equity",
      percentage: Math.round(equityPercentage * 0.4),
      instruments: ["HDFC Top 100 Fund", "Axis Bluechip Fund", "Mirae Asset Large Cap Fund"],
      rationale: "Large cap funds provide stability and consistent returns over long term."
    },
    {
      category: "Mid & Small Cap Equity",
      percentage: Math.round(equityPercentage * 0.3),
      instruments: ["Kotak Emerging Equity Fund", "Axis Midcap Fund", "SBI Small Cap Fund"],
      rationale: "Mid and small cap funds offer higher growth potential with moderate risk."
    },
    {
      category: "Index Funds",
      percentage: Math.round(equityPercentage * 0.3),
      instruments: ["UTI Nifty Index Fund", "HDFC Sensex Index Fund", "SBI Nifty Index Fund"],
      rationale: "Index funds provide market returns at lower expense ratios."
    },
    {
      category: "Debt Funds",
      percentage: Math.round(debtPercentage * 0.7),
      instruments: ["ICICI Prudential Short Term Fund", "Kotak Corporate Bond Fund", "Aditya Birla Sun Life Corporate Bond Fund"],
      rationale: "Debt funds provide stable returns with lower risk compared to equity."
    },
    {
      category: "Fixed Deposits",
      percentage: Math.round(debtPercentage * 0.3),
      instruments: ["SBI Fixed Deposit", "HDFC Bank Fixed Deposit", "ICICI Bank Fixed Deposit"],
      rationale: "Fixed deposits offer guaranteed returns with very low risk."
    },
    {
      category: "Gold",
      percentage: goldPercentage,
      instruments: ["Sovereign Gold Bonds", "Gold ETFs", "Digital Gold"],
      rationale: "Gold acts as a hedge against inflation and market volatility."
    },
    {
      category: "Real Estate",
      percentage: realEstatePercentage,
      instruments: ["REITs", "Real Estate Mutual Funds"],
      rationale: "Real estate provides diversification and potential for capital appreciation."
    },
    {
      category: "Alternative Investments",
      percentage: alternativePercentage,
      instruments: ["P2P Lending", "Startup Investments", "Cryptocurrency (small allocation)"],
      rationale: "Alternative investments can provide higher returns but come with higher risk."
    }
  ];
  
  // Generate tax saving options
  const taxSavingOptions = [
    {
      instrument: "ELSS Mutual Funds",
      maxAmount: 150000,
      expectedReturns: "10-12% p.a.",
      taxBenefit: "Tax deduction under Section 80C"
    },
    {
      instrument: "Public Provident Fund (PPF)",
      maxAmount: 150000,
      expectedReturns: "7-8% p.a.",
      taxBenefit: "Tax deduction under Section 80C, tax-free interest"
    },
    {
      instrument: "National Pension System (NPS)",
      maxAmount: 150000,
      expectedReturns: "8-10% p.a.",
      taxBenefit: "Additional tax deduction of Rs. 50,000 under Section 80CCD(1B)"
    },
    {
      instrument: "Health Insurance Premium",
      maxAmount: 25000,
      expectedReturns: "N/A",
      taxBenefit: "Tax deduction under Section 80D"
    }
  ];
  
  // Generate projected returns
  const years = [1, 3, 5, 10, 15, 20];
  const initialInvestment = monthlyInvestmentAmount * 12;
  
  const conservativeRate = 0.08; // 8% annual return
  const moderateRate = 0.12; // 12% annual return
  const aggressiveRate = 0.15; // 15% annual return
  
  const conservative = years.map(year => {
    return Math.round(initialInvestment * Math.pow(1 + conservativeRate, year));
  });
  
  const moderate = years.map(year => {
    return Math.round(initialInvestment * Math.pow(1 + moderateRate, year));
  });
  
  const aggressive = years.map(year => {
    return Math.round(initialInvestment * Math.pow(1 + aggressiveRate, year));
  });
  
  // Generate risk assessment
  let riskAssessment = "";
  if (formData.riskTolerance === 'high') {
    riskAssessment = "Your risk profile indicates you can tolerate higher market volatility for potentially higher returns. The recommended portfolio has a significant allocation to equity, which may experience short-term fluctuations but historically provides better long-term returns.";
  } else if (formData.riskTolerance === 'medium') {
    riskAssessment = "Your risk profile indicates a balanced approach to risk and return. The recommended portfolio balances growth assets like equity with stability assets like debt and gold to provide moderate returns with manageable volatility.";
  } else {
    riskAssessment = "Your risk profile indicates a preference for capital preservation over high returns. The recommended portfolio focuses on stable income-generating assets with limited exposure to volatile assets, providing consistent but modest returns.";
  }
  
  // Generate next steps
  const nextSteps = [
    "Open a demat and trading account if you don't already have one",
    "Set up systematic investment plans (SIPs) for the recommended mutual funds",
    "Allocate funds to tax-saving instruments before the financial year end",
    "Review and rebalance your portfolio every 6 months",
    "Consider consulting a financial advisor for personalized guidance"
  ];
  
  return {
    assetAllocation: {
      equity: equityPercentage,
      debt: debtPercentage,
      gold: goldPercentage,
      realEstate: realEstatePercentage,
      alternativeInvestments: alternativePercentage
    },
    monthlyInvestmentAmount,
    specificRecommendations,
    taxSavingOptions,
    projectedReturns: {
      years,
      conservative,
      moderate,
      aggressive
    },
    riskAssessment,
    nextSteps
  };
}

/**
 * Generates investment recommendations based on user's financial profile
 * @param formData User's financial and investment preferences
 * @returns Detailed investment recommendations with visualizations data
 */
export async function generateInvestmentRoadmap(formData: InvestmentFormData): Promise<InvestmentRecommendation> {
  // Calculate some derived values
  const disposableIncome = formData.monthlyIncome - formData.monthlyExpenses;
  const debtToIncomeRatio = formData.existingLoans / (formData.monthlyIncome * 12);
  const savingsRatio = formData.existingSavings / (formData.monthlyIncome * 12);
  
  // Create a detailed prompt for the AI
  const prompt = `
    Act as a professional financial advisor. Based on the following financial profile, create a detailed investment roadmap with asset allocation, specific investment recommendations, tax-saving options, and projected returns.
    
    Financial Profile:
    - Age: ${formData.age} years
    - Monthly Income: ₹${formData.monthlyIncome}
    - Monthly Expenses: ₹${formData.monthlyExpenses}
    - Disposable Income: ₹${disposableIncome} per month
    - Existing Savings: ₹${formData.existingSavings}
    - Existing Investments: ₹${formData.existingInvestments}
    - Existing Loans: ₹${formData.existingLoans}
    - Debt-to-Income Ratio: ${(debtToIncomeRatio * 100).toFixed(2)}%
    - Savings Ratio: ${(savingsRatio * 100).toFixed(2)}%
    - Risk Tolerance: ${formData.riskTolerance}
    - Investment Goals: ${formData.investmentGoals.join(', ')}
    - Investment Horizon: ${formData.investmentHorizon} years
    - Tax Bracket: ${formData.taxBracket}
    - Number of Dependents: ${formData.dependents}
    ${formData.preferredInvestments ? `- Preferred Investment Types: ${formData.preferredInvestments.join(', ')}` : ''}
    
    Provide a comprehensive investment roadmap in the following JSON format:
    {
      "assetAllocation": {
        "equity": percentage,
        "debt": percentage,
        "gold": percentage,
        "realEstate": percentage,
        "alternativeInvestments": percentage
      },
      "monthlyInvestmentAmount": recommended amount in INR,
      "specificRecommendations": [
        {
          "category": "category name",
          "percentage": allocation percentage,
          "instruments": ["specific investment instrument names"],
          "rationale": "brief explanation"
        }
      ],
      "taxSavingOptions": [
        {
          "instrument": "name",
          "maxAmount": amount in INR,
          "expectedReturns": "percentage range",
          "taxBenefit": "description"
        }
      ],
      "projectedReturns": {
        "years": [1, 3, 5, 10, 15, 20],
        "conservative": [amounts at each year],
        "moderate": [amounts at each year],
        "aggressive": [amounts at each year]
      },
      "riskAssessment": "detailed risk assessment",
      "nextSteps": ["actionable steps"]
    }
    
    Ensure the recommendations are tailored to the Indian market and consider the person's age, risk tolerance, and investment goals. The asset allocation should follow standard financial planning principles based on age and risk profile.
  `;

  try {
    console.log("Initializing Google Generative AI with API key:", API_KEY);
    
    // Use the Gemini Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("Model initialized, generating content...");
    
    const result = await model.generateContent(prompt);
    console.log("Content generated, processing response...");
    
    const response = await result.response;
    console.log("Response received");
    
    // Parse the JSON response
    const responseText = response.text();
    console.log("Response text:", responseText.substring(0, 100) + "...");
    
    const jsonStartIndex = responseText.indexOf('{');
    if (jsonStartIndex === -1) {
      throw new Error("No JSON found in the response");
    }
    
    const jsonEndIndex = responseText.lastIndexOf('}') + 1;
    const jsonString = responseText.substring(jsonStartIndex, jsonEndIndex);
    console.log("Extracted JSON string:", jsonString.substring(0, 100) + "...");
    
    try {
      const parsedData = JSON.parse(jsonString) as InvestmentRecommendation;
      console.log("JSON parsed successfully");
      return parsedData;
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      if (USE_MOCK_DATA_ON_FAILURE) {
        console.log("Using mock data as fallback");
        return generateMockRecommendation(formData);
      }
      throw new Error("Failed to parse the AI response. Please try again.");
    }
  } catch (error) {
    console.error("Error generating investment roadmap:", error);
    if (USE_MOCK_DATA_ON_FAILURE) {
      console.log("Using mock data as fallback due to API error");
      return generateMockRecommendation(formData);
    }
    if (error instanceof Error) {
      throw new Error(`Failed to generate investment recommendations: ${error.message}`);
    } else {
      throw new Error("Failed to generate investment recommendations. Please try again later.");
    }
  }
}

/**
 * Generates chart data for visualizing the investment roadmap
 * @param recommendation The investment recommendation data
 * @returns Formatted data for charts and visualizations
 */
export function generateChartData(recommendation: InvestmentRecommendation) {
  // Asset allocation pie chart data
  const assetAllocationData = Object.entries(recommendation.assetAllocation).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: value,
    color: getColorForAssetClass(key)
  }));
  
  // Projected returns line chart data
  const projectedReturnsData = {
    labels: recommendation.projectedReturns.years.map(year => `Year ${year}`),
    datasets: [
      {
        label: 'Conservative',
        data: recommendation.projectedReturns.conservative,
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)'
      },
      {
        label: 'Moderate',
        data: recommendation.projectedReturns.moderate,
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)'
      },
      {
        label: 'Aggressive',
        data: recommendation.projectedReturns.aggressive,
        borderColor: '#F44336',
        backgroundColor: 'rgba(244, 67, 54, 0.1)'
      }
    ]
  };
  
  // Specific recommendations bar chart data
  const specificRecommendationsData = {
    labels: recommendation.specificRecommendations.map(rec => rec.category),
    datasets: [{
      label: 'Allocation Percentage',
      data: recommendation.specificRecommendations.map(rec => rec.percentage),
      backgroundColor: recommendation.specificRecommendations.map((_, index) => 
        `hsl(${index * (360 / recommendation.specificRecommendations.length)}, 70%, 60%)`
      )
    }]
  };
  
  return {
    assetAllocationData,
    projectedReturnsData,
    specificRecommendationsData
  };
}

/**
 * Helper function to get colors for asset classes
 */
function getColorForAssetClass(assetClass: string): string {
  const colorMap: Record<string, string> = {
    equity: '#FF6384',
    debt: '#36A2EB',
    gold: '#FFCE56',
    realEstate: '#4BC0C0',
    alternativeInvestments: '#9966FF'
  };
  
  return colorMap[assetClass] || '#999999';
}

/**
 * Generates a summary of the investment roadmap in plain text
 * @param recommendation The investment recommendation data
 * @returns A formatted summary string
 */
export function generateRoadmapSummary(recommendation: InvestmentRecommendation): string {
  const assetAllocation = Object.entries(recommendation.assetAllocation)
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}%`)
    .join(', ');
  
  const specificRecommendations = recommendation.specificRecommendations
    .map(rec => `- ${rec.category} (${rec.percentage}%): ${rec.instruments.join(', ')}`)
    .join('\n');
  
  const taxSavingOptions = recommendation.taxSavingOptions
    .map(option => `- ${option.instrument}: Up to ₹${option.maxAmount.toLocaleString()} (${option.taxBenefit})`)
    .join('\n');
  
  const nextSteps = recommendation.nextSteps
    .map((step, index) => `${index + 1}. ${step}`)
    .join('\n');
  
  return `
    Investment Roadmap Summary
    --------------------------
    
    Recommended Monthly Investment: ₹${recommendation.monthlyInvestmentAmount.toLocaleString()}
    
    Asset Allocation:
    ${assetAllocation}
    
    Specific Recommendations:
    ${specificRecommendations}
    
    Tax Saving Options:
    ${taxSavingOptions}
    
    Risk Assessment:
    ${recommendation.riskAssessment}
    
    Next Steps:
    ${nextSteps}
    
    Note: This is a computer-generated recommendation. Please consult with a financial advisor before making investment decisions.
  `;
} 