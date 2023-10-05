import nextConnect from 'next-connect';

import { connect, errorMiddleware, verifyToken } from '@/backend';
import { createSlot } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);

router.post(verifyToken, createSlot);

export default router;
