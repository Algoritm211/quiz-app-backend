import mongoose, { Document, Schema } from 'mongoose';

interface QuizResult {
  quizId: string;
  correctAnswersPercentage: number;
  totalQuestions: number;
}

interface UserProfile extends Document {
  name: string;
  telegramId: string;
  completedQuizzes: QuizResult[];
  createdAt: string;
}

const quizResultSchema: Schema = new Schema({
  quizId: { type: String, required: true, ref: 'Quiz' },
  correctAnswersPercentage: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
});

const userProfileSchema: Schema = new Schema(
  {
    telegramId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    completedQuizzes: { type: [quizResultSchema], required: true, default: [] },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<UserProfile>('UserProfile', userProfileSchema);
