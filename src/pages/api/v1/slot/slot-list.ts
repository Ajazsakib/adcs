import nextConnect from 'next-connect';

import { connect, errorMiddleware, verifyToken } from '@/backend';
import { slotList } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);

router.get(verifyToken, slotList);

export default router;
