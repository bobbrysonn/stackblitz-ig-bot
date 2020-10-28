import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IFollower extends mongoose.Document {
  username: string;
  dateAdded: Date;
}

const UserSchema: mongoose.Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    required: true
  }
});

export default UserSchema;
