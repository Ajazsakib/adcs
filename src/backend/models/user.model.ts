/* eslint-disable func-names */
import type { CallbackWithoutResultAndOptionalError } from 'mongoose';
import { model, models, Schema } from 'mongoose';

import { softDeletePlugin } from '@/backend/plugins';

import { bcryptService } from '../services';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is Required'],
      trim: true,
    },

    email: {
      type: String,
      required: [true, 'Email is Required'],
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      default: null,
    },
    password: {
      type: String,
      unique: true,
      default: null,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.plugin(softDeletePlugin);
// Encrypt password using bcrypt
userSchema.pre(
  'save',
  async function (next: CallbackWithoutResultAndOptionalError) {
    if (!this.isModified('password')) return next();
    this.password = await bcryptService.hashPassword(this.password);
    console.log(
      '🚀 ~ file: user.model.ts:48 ~ this.password :',
      this.isModified('password'),
      this.password
    );
    return next();
  }
);

// Compare password using bcrypt
userSchema.methods.matchPassword = async function (enteredPassword: string) {
  console.log('??????????????');

  const isMatch: boolean = await bcryptService.comparePassword(
    enteredPassword,
    this.password
  );
  return isMatch;
};
export default models?.User! || model('User', userSchema);
