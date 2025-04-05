import express from 'express';
import {
  getBanks,
  getBank,
  createBank,
  updateBank,
  deleteBank
} from '../controllers/banks.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getBanks)
  .post(protect, createBank);

router.route('/:id')
  .get(getBank)
  .put(protect, updateBank)
  .delete(protect, deleteBank);

export default router; 