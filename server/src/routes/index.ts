import { Router } from 'express';
import authRoutes from './auth-routes';
import apiRoutes from './api';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);

export default router;