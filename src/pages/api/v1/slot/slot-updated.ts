import nextConnect from 'next-connect';

import { connect, errorMiddleware, verifyToken } from '@/backend';
import { updateSlot } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);

router.put(verifyToken, updateSlot);

export default router;
