import Bank from '../models/Bank.js';

// @desc    Get all banks
// @route   GET /api/banks
// @access  Public
export const getBanks = async (req, res) => {
  try {
    const banks = await Bank.find();

    res.status(200).json({
      success: true,
      count: banks.length,
      data: banks
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Get single bank
// @route   GET /api/banks/:id
// @access  Public
export const getBank = async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id);

    if (!bank) {
      return res.status(404).json({
        success: false,
        error: 'Bank not found'
      });
    }

    res.status(200).json({
      success: true,
      data: bank
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Create new bank
// @route   POST /api/banks
// @access  Private (Admin only in a real app)
export const createBank = async (req, res) => {
  try {
    const bank = await Bank.create(req.body);

    res.status(201).json({
      success: true,
      data: bank
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Update bank
// @route   PUT /api/banks/:id
// @access  Private (Admin only in a real app)
export const updateBank = async (req, res) => {
  try {
    const bank = await Bank.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bank) {
      return res.status(404).json({
        success: false,
        error: 'Bank not found'
      });
    }

    res.status(200).json({
      success: true,
      data: bank
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Delete bank
// @route   DELETE /api/banks/:id
// @access  Private (Admin only in a real app)
export const deleteBank = async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id);

    if (!bank) {
      return res.status(404).json({
        success: false,
        error: 'Bank not found'
      });
    }

    await bank.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}; 