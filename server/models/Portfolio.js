import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  investments: [
    {
      type: {
        type: String,
        required: [true, 'Please add investment type'],
        enum: ['Fixed Deposit', 'Recurring Deposit', 'Mutual Fund', 'Stock', 'Bond', 'Real Estate', 'Gold', 'Other']
      },
      name: {
        type: String,
        required: [true, 'Please add investment name']
      },
      amount: {
        type: Number,
        required: [true, 'Please add investment amount']
      },
      startDate: {
        type: Date,
        required: [true, 'Please add start date']
      },
      endDate: {
        type: Date
      },
      interestRate: {
        type: Number
      },
      bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank'
      },
      notes: String,
      status: {
        type: String,
        enum: ['Active', 'Matured', 'Withdrawn'],
        default: 'Active'
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field on save
PortfolioSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Portfolio', PortfolioSchema); 