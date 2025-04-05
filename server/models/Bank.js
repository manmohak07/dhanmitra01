import mongoose from 'mongoose';

const BankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a bank name'],
    trim: true,
    maxlength: [100, 'Bank name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  logo: {
    type: String,
    default: 'default-bank-logo.png'
  },
  interestRates: {
    savings: {
      type: Number,
      required: [true, 'Please add savings interest rate']
    },
    fixedDeposit: {
      type: Number,
      required: [true, 'Please add fixed deposit interest rate']
    },
    recurringDeposit: {
      type: Number,
      required: [true, 'Please add recurring deposit interest rate']
    }
  },
  minimumBalance: {
    type: Number,
    required: [true, 'Please add minimum balance requirement']
  },
  features: [String],
  pros: [String],
  cons: [String],
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Bank', BankSchema); 