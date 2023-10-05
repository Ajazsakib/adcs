import nextConnect from 'next-connect';

import { connect, errorMiddleware } from '@/backend';
import { logoutRecord } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);

router.post(logoutRecord);

export default router;
