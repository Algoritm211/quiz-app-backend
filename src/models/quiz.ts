import mongoose, { Document, Schema } from 'mongoose';

import { Question, questionSchema } from './question';

export interface Quiz extends Document {
  title: string;
  description: string;
  logoUrl?: string;
  isPaid: boolean;
  questions: Question[];
}

const quizSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  logoUrl: { type: String },
  isPaid: { type: Boolean, required: true },
  questions: { type: [questionSchema], required: true },
});

export const QuizModel = mongoose.model<Quiz>('Quiz', quizSchema);
