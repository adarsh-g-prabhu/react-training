import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  task: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link todo to a user
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);
