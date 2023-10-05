import nextConnect from 'next-connect';

import { connect, errorMiddleware } from '@/backend';
import { loginRecord } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);
router.post(loginRecord);

export default router;
