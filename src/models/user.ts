import mongoose, { Document, Schema } from 'mongoose';

interface QuizResult {
  quizId: string;
  correctAnswersPercentage: number;
  totalQuestions: number;
}

interface UserProfile extends Document {
  id: string;
  name: string;
  completedQuizzes: QuizResult[];
}

const quizResultSchema: Schema = new Schema({
  quizId: { type: String, required: true, ref: 'Quiz' },
  correctAnswersPercentage: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
});

const userProfileSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  completedQuizzes: { type: [quizResultSchema], required: true },
});

export const userModel = mongoose.model<UserProfile>('UserProfile', userProfileSchema);
