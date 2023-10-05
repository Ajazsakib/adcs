// middleware/verifyToken.js
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextHandler } from 'next-connect';

const secretKey = 'secretKey'; // Replace with your actual secret key

export const verifyToken = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    // You can now access the decoded token data (e.g., user information) in `decoded`

    // Pass the decoded data to the route handler
    (req as any).user = decoded;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
