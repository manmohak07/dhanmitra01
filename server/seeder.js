import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: './server/.env' });

// Load models
import Bank from './models/Bank.js';
import Investment from './models/Investment.js';
import User from './models/User.js';
import Portfolio from './models/Portfolio.js';

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Read JSON files
const banks = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/banks.json'), 'utf-8')
).banks;

const investments = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/investment-suggestions.json'), 'utf-8')
).suggestions;

// Import into DB
const importData = async () => {
  try {
    await Bank.deleteMany();
    await Investment.deleteMany();
    
    // Transform bank data to match our schema
    const formattedBanks = banks.map(bank => ({
      name: bank.name,
      description: bank.description,
      logo: bank.logo,
      interestRates: {
        savings: bank.interestRates.savings,
        fixedDeposit: bank.interestRates.fixedDeposit,
        recurringDeposit: bank.interestRates.recurringDeposit
      },
      minimumBalance: bank.minimumBalance,
      features: bank.features,
      pros: bank.pros,
      cons: bank.cons,
      rating: bank.rating
    }));
    
    // Transform investment data to match our schema
    const formattedInvestments = investments.map(investment => ({
      title: investment.title,
      description: investment.description,
      category: investment.category,
      riskLevel: investment.riskLevel,
      expectedReturns: investment.expectedReturns,
      minimumInvestment: investment.minimumInvestment,
      duration: investment.duration,
      tips: investment.tips || []
    }));

    await Bank.insertMany(formattedBanks);
    await Investment.insertMany(formattedInvestments);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Bank.deleteMany();
    await Investment.deleteMany();
    await User.deleteMany();
    await Portfolio.deleteMany();

    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else {
  console.log('Please add proper flag: -i (import) or -d (delete)');
  process.exit();
} 