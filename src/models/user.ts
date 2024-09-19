import mongoose, { Document, Schema } from 'mongoose';

interface QuizAnswer {
  questionId: string;
  questionText: string;
  isCorrect: boolean;
  correctAnswer: string;
  userAnswer: string;
}

export interface QuizResult extends Document {
  quizId: string;
  quizTitle: string;
  answers: QuizAnswer[];
  createdAt: string;
  totalQuestions: number;
}

interface UserProfile extends Document {
  name: string;
  telegramId: string;
  completedQuizzes: QuizResult[];
  createdAt: string;
}

const answerSchema: Schema = new Schema({
  questionId: { type: String, required: true, ref: 'Question' },
  questionText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  correctAnswer: { type: String, required: true },
  userAnswer: { type: String, required: true },
  correctAnswerId: { type: String, required: true, ref: 'Answer' },
  userAnswerId: { type: String, required: true, ref: 'Answer' },
});

const quizResultSchema: Schema = new Schema(
  {
    quizId: { type: String, required: true, ref: 'Quiz' },
    quizTitle: { type: String, required: true },
    totalQuestions: { type: Number, required: true },
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

export const UserQuizAnswerModel = mongoose.model<QuizAnswer>('QuizAnswer', answerSchema);

export const QuizResultModel = mongoose.model<QuizResult>('QuizResult', quizResultSchema);

export const UserModel = mongoose.model<UserProfile>('UserProfile', userProfileSchema);
