import mongoose from 'mongoose';

const InvestmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Fixed Deposit', 'Recurring Deposit', 'Mutual Fund', 'Stock', 'Bond', 'Real Estate', 'Gold', 'Other']
  },
  riskLevel: {
    type: String,
    required: [true, 'Please add a risk level'],
    enum: ['Low', 'Medium', 'High']
  },
  expectedReturns: {
    type: Number,
    required: [true, 'Please add expected returns percentage']
  },
  minimumInvestment: {
    type: Number,
    required: [true, 'Please add minimum investment amount']
  },
  duration: {
    type: String,
    required: [true, 'Please add investment duration']
  },
  tips: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Investment', InvestmentSchema); 