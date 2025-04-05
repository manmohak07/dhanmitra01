import express from 'express';
import { generateRoadmap, saveRoadmap } from '../controllers/roadmapController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Generate a new investment roadmap - temporarily removing auth for testing
router.post('/generate', generateRoadmap);

// Save a roadmap to user's profile
router.post('/save', protect, saveRoadmap);

export default router; 