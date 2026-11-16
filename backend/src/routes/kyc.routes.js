import { Router } from 'express';
import * as kycController from '../controllers/kyc.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.post('/access-token', authenticate, kycController.createAccessToken);
router.get('/status', authenticate, kycController.getStatus);
router.post('/dev-bypass', authenticate, kycController.devBypass);

export default router;
