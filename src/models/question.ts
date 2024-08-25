import mongoose, { Document, Schema } from 'mongoose';

interface AnswerOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question extends Document {
  id: string;
  text: string;
  codeSnippet?: string;
  options: AnswerOption[];
  quizId: string;
}

const answerOptionSchema: Schema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const questionSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  codeSnippet: { type: String },
  options: { type: [answerOptionSchema], required: true },
  quizId: { type: String, required: true, ref: 'Quiz' },
});

export const questionModel = mongoose.model<Question>('Question', questionSchema);
