import mongoose, { Document, Schema } from 'mongoose';

interface QuizResult extends Document {
  quizId: string;
  quizTitle: string;
  answers: number;
  createdAt: string;
}

interface UserProfile extends Document {
  name: string;
  telegramId: string;
  completedQuizzes: QuizResult[];
  createdAt: string;
}

const answerSchema: Schema = new Schema({
  optionId: { type: String, required: true },
  questionText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  correctAnswer: { type: String, required: true },
  userAnswer: { type: String, required: true },
});

const quizResultSchema: Schema = new Schema(
  {
    quizId: { type: String, required: true, ref: 'Quiz' },
    quizTitle: { type: String, required: true },
    answers: { type: [answerSchema], required: true, default: [] },
  },
  { timestamps: true }
);

const userProfileSchema: Schema = new Schema(
  {
    telegramId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    completedQuizzes: { type: [quizResultSchema], required: true, default: [] },
  },
  { timestamps: true }
);

export const QuizResultModel = mongoose.model<QuizResult>('QuizResult', quizResultSchema);

export const UserModel = mongoose.model<UserProfile>('UserProfile', userProfileSchema);
