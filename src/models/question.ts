import mongoose, { Document, Schema } from 'mongoose';

interface AnswerOption extends Document {
  text: string;
  isCorrect: boolean;
}

export interface Question extends Document {
  text: string;
  codeSnippet?: string;
  options: AnswerOption[];
  quizId: string;
}

const answerOptionSchema: Schema = new Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

export const questionSchema: Schema = new Schema({
  text: { type: String, required: true },
  codeSnippet: { type: String },
  options: { type: [answerOptionSchema], required: true },
});

export const questionModel = mongoose.model<Question>('Question', questionSchema);
