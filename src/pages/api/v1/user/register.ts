import nextConnect from 'next-connect';

import { connect, errorMiddleware } from '@/backend';
import { registerRecord } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);

router.post(registerRecord);

export default router;
