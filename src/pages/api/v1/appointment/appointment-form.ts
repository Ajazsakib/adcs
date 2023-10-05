import nextConnect from 'next-connect';

import { connect, errorMiddleware, verifyToken } from '@/backend';
import { appointmentRecord } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);

router.post(verifyToken, appointmentRecord);

export default router;
