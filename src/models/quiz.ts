import mongoose, { Document, Schema } from 'mongoose';

export interface Quiz extends Document {
  id: string;
  title: string;
  description: string;
  logoUrl?: string;
  isPaid: boolean;
  totalQuestions: number;
}

const quizSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  logoUrl: { type: String },
  isPaid: { type: Boolean, required: true },
  totalQuestions: { type: Number, required: true },
});

export const QuizModel = mongoose.model<Quiz>('Quiz', quizSchema);
