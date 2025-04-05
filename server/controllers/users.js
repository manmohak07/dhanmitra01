import User from '../models/User.js';
import Portfolio from '../models/Portfolio.js';

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = async (req, res) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      profileCompleted: true
    };

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Get user portfolio
// @route   GET /api/users/portfolio
// @access  Private
export const getUserPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id }).populate('investments.bank');

    if (!portfolio) {
      // Create empty portfolio if it doesn't exist
      const newPortfolio = await Portfolio.create({
        user: req.user.id,
        investments: []
      });

      return res.status(200).json({
        success: true,
        data: newPortfolio
      });
    }

    res.status(200).json({
      success: true,
      data: portfolio
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Add investment to portfolio
// @route   POST /api/users/portfolio
// @access  Private
export const addInvestmentToPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ user: req.user.id });

    if (!portfolio) {
      // Create new portfolio if it doesn't exist
      portfolio = await Portfolio.create({
        user: req.user.id,
        investments: [req.body]
      });
    } else {
      // Add to existing portfolio
      portfolio.investments.push(req.body);
      await portfolio.save();
    }

    res.status(201).json({
      success: true,
      data: portfolio
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Update investment in portfolio
// @route   PUT /api/users/portfolio/:investmentId
// @access  Private
export const updateInvestmentInPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        error: 'Portfolio not found'
      });
    }

    // Find the investment index
    const investmentIndex = portfolio.investments.findIndex(
      investment => investment._id.toString() === req.params.investmentId
    );

    if (investmentIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Investment not found in portfolio'
      });
    }

    // Update the investment
    portfolio.investments[investmentIndex] = {
      ...portfolio.investments[investmentIndex].toObject(),
      ...req.body
    };

    await portfolio.save();

    res.status(200).json({
      success: true,
      data: portfolio
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Delete investment from portfolio
// @route   DELETE /api/users/portfolio/:investmentId
// @access  Private
export const deleteInvestmentFromPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        error: 'Portfolio not found'
      });
    }

    // Filter out the investment to remove
    portfolio.investments = portfolio.investments.filter(
      investment => investment._id.toString() !== req.params.investmentId
    );

    await portfolio.save();

    res.status(200).json({
      success: true,
      data: portfolio
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}; 