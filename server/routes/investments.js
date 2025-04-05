import express from 'express';
import {
  getInvestments,
  getInvestment,
  createInvestment,
  updateInvestment,
  deleteInvestment
} from '../controllers/investments.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getInvestments)
  .post(protect, createInvestment);

router.route('/:id')
  .get(getInvestment)
  .put(protect, updateInvestment)
  .delete(protect, deleteInvestment);

export default router; 