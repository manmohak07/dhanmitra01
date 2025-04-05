import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google AI client
const googleAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

/**
 * Generate an investment roadmap based on user input
 * @param {Object} userInput - User's financial information and goals
 * @returns {Promise<Object>} - Generated investment roadmap
 */
export const generateInvestmentRoadmap = async (userInput) => {
  try {
    // Access the model (Gemini Pro is a good choice for this task)
    const model = googleAI.getGenerativeModel({ model: "gemini-pro" });

    // Construct the prompt
    const prompt = `
      Generate a personalized investment roadmap based on the following user information:
      
      Age: ${userInput.age}
      Monthly Income: ${userInput.monthlyIncome}
      Current Savings: ${userInput.currentSavings}
      Risk Tolerance (Low/Medium/High): ${userInput.riskTolerance}
      Financial Goals: ${userInput.financialGoals.join(', ')}
      Investment Timeframe: ${userInput.timeframe}
      
      Please provide a detailed investment roadmap with the following sections:
      1. Summary of financial situation
      2. Short-term investment recommendations (0-2 years)
      3. Medium-term investment recommendations (2-5 years)
      4. Long-term investment recommendations (5+ years)
      5. Asset allocation recommendation (percentages)
      6. Specific investment vehicles to consider
      7. Risk management strategies
      
      Format the response as a structured JSON object with these sections.
    `;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the JSON response
    // Note: We need to handle the case where the AI might not return valid JSON
    try {
      // Find JSON in the response (in case the AI adds extra text)
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      // If no JSON object is found, try to structure the response
      return {
        summary: "AI generated response could not be structured properly",
        rawResponse: text
      };
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      return {
        summary: "Error parsing AI response",
        rawResponse: text
      };
    }
  } catch (error) {
    console.error("Error generating investment roadmap:", error);
    throw new Error("Failed to generate investment roadmap");
  }
};

export default {
  generateInvestmentRoadmap
}; 