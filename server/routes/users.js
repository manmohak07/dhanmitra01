import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  getUserPortfolio,
  addInvestmentToPortfolio,
  updateInvestmentInPortfolio,
  deleteInvestmentFromPortfolio
} from '../controllers/users.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Protect all routes in this router
router.use(protect);

router.route('/profile')
  .get(getUserProfile)
  .put(updateUserProfile);

router.route('/portfolio')
  .get(getUserPortfolio)
  .post(addInvestmentToPortfolio);

router.route('/portfolio/:investmentId')
  .put(updateInvestmentInPortfolio)
  .delete(deleteInvestmentFromPortfolio);

export default router; 