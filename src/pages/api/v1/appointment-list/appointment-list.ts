import nextConnect from 'next-connect';

import { connect, errorMiddleware, verifyToken } from '@/backend';
import { fetchAppointmentDetails } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);

router.get(verifyToken, fetchAppointmentDetails);

export default router;
