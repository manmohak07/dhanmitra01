import User from '../models/User.js';
import { generateRoadmapWithAI } from '../utils/aiUtils.js';
import asyncHandler from 'express-async-handler';

// @desc    Generate investment roadmap
// @route   POST /api/roadmap/generate
// @access  Public (temporarily for testing)
export const generateRoadmap = asyncHandler(async (req, res) => {
  console.log('Received roadmap generation request:', req.body);
  
  const { 
    age, 
    monthlyIncome, 
    currentSavings, 
    riskTolerance, 
    financialGoals, 
    timeframe 
  } = req.body;

  // Validate input
  if (!age || !monthlyIncome || !riskTolerance || !financialGoals || !timeframe) {
    console.error('Missing required fields:', { age, monthlyIncome, riskTolerance, financialGoals, timeframe });
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  // Validate data types
  if (typeof age !== 'number' || typeof monthlyIncome !== 'number' || typeof currentSavings !== 'number') {
    console.error('Invalid data types:', { 
      age: typeof age, 
      monthlyIncome: typeof monthlyIncome, 
      currentSavings: typeof currentSavings 
    });
    res.status(400);
    throw new Error('Age, monthly income, and current savings must be numbers');
  }

  // Validate risk tolerance
  if (!['Low', 'Medium', 'High'].includes(riskTolerance)) {
    console.error('Invalid risk tolerance:', riskTolerance);
    res.status(400);
    throw new Error('Risk tolerance must be Low, Medium, or High');
  }

  // Validate financial goals
  if (!Array.isArray(financialGoals) || financialGoals.length === 0) {
    console.error('Invalid financial goals:', financialGoals);
    res.status(400);
    throw new Error('Financial goals must be a non-empty array');
  }

  try {
    console.log('Generating roadmap with AI...');
    const roadmap = await generateRoadmapWithAI({
      age,
      monthlyIncome,
      currentSavings: currentSavings || 0,
      riskTolerance,
      financialGoals,
      timeframe,
      userId: req.user?._id || 'guest'
    });

    if (!roadmap) {
      console.error('No roadmap generated');
      res.status(500);
      throw new Error('Failed to generate roadmap: No response from AI service');
    }

    if (roadmap.error) {
      console.error('Error in roadmap generation:', roadmap.error);
      res.status(500);
      throw new Error(`Failed to generate roadmap: ${roadmap.error}`);
    }

    console.log('Roadmap generated successfully');
    res.status(200).json(roadmap);
  } catch (error) {
    console.error('Failed to generate roadmap:', error);
    res.status(500);
    throw new Error(`Failed to generate roadmap: ${error.message}`);
  }
});

// @desc    Save roadmap to user profile
// @route   POST /api/roadmap/save
// @access  Private
export const saveRoadmap = asyncHandler(async (req, res) => {
  console.log('Received roadmap save request:', req.body);
  
  const { roadmap } = req.body;

  if (!roadmap) {
    console.error('No roadmap data provided');
    res.status(400);
    throw new Error('No roadmap data provided');
  }

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      console.error('User not found:', req.user._id);
      res.status(404);
      throw new Error('User not found');
    }

    // Add the roadmap to the user's saved roadmaps
    user.roadmaps = user.roadmaps || [];
    user.roadmaps.push({
      ...roadmap,
      createdAt: new Date()
    });

    await user.save();
    console.log('Roadmap saved successfully');
    res.status(200).json({ message: 'Roadmap saved successfully' });
  } catch (error) {
    console.error('Failed to save roadmap:', error);
    res.status(500);
    throw new Error(`Failed to save roadmap: ${error.message}`);
  }
}); 