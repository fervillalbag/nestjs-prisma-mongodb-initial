import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
});
