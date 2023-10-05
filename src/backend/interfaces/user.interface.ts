import type { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  isLoggedIn: boolean;
  createdAt: Date;
  updatedAt: Date;
}
