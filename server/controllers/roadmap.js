import { generateInvestmentRoadmap } from '../utils/googleAI.js';

// @desc    Generate investment roadmap
// @route   POST /api/roadmap/generate
// @access  Private
export const generateRoadmap = async (req, res) => {
  try {
    const {
      age,
      monthlyIncome,
      currentSavings,
      riskTolerance,
      financialGoals,
      timeframe
    } = req.body;

    // Validate input
    if (!age || !monthlyIncome || !currentSavings || !riskTolerance || !financialGoals || !timeframe) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields'
      });
    }

    // Generate roadmap using Google AI
    const roadmap = await generateInvestmentRoadmap({
      age,
      monthlyIncome,
      currentSavings,
      riskTolerance,
      financialGoals,
      timeframe
    });

    res.status(200).json({
      success: true,
      data: roadmap
    });
  } catch (err) {
    console.error('Error generating roadmap:', err);
    res.status(500).json({
      success: false,
      error: 'Error generating investment roadmap'
    });
  }
};

// @desc    Save user's roadmap
// @route   POST /api/roadmap/save
// @access  Private
export const saveRoadmap = async (req, res) => {
  try {
    // In a real implementation, you would save the roadmap to the user's profile
    // For now, we'll just return success
    res.status(200).json({
      success: true,
      message: 'Roadmap saved successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Error saving roadmap'
    });
  }
}; 