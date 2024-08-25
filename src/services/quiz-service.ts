import { Quiz, QuizModel } from '../models';

class QuizService {
  async getQuizzes() {
    try {
      return await QuizModel.find();
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching quizzes');
    }
  }

  async getQuizById(id: string) {
    try {
      const quiz = await QuizModel.findOne({ id });
      if (!quiz) {
        throw new Error('Quiz not found');
      }
      return quiz;
    } catch (error) {
      throw new Error(`Error fetching quiz: ${(error as Error).message}`);
    }
  }

  async createQuiz(quizData: Partial<Quiz>) {
    try {
      const quiz = new QuizModel(quizData);
      return await quiz.save();
    } catch (error) {
      throw new Error('Error creating quiz');
    }
  }

  async updateQuiz(id: string, quizData: Partial<Quiz>) {
    try {
      const quiz = await QuizModel.findOneAndUpdate({ id }, quizData, { new: true });
      if (!quiz) {
        throw new Error('Quiz not found');
      }
      return quiz;
    } catch (error) {
      throw new Error(`Error updating quiz: ${(error as Error).message}`);
    }
  }

  async deleteQuiz(id: string) {
    try {
      const quiz = await QuizModel.findOneAndDelete({ id });
      if (!quiz) {
        throw new Error('Quiz not found');
      }
      return { message: 'Quiz deleted successfully' };
    } catch (error) {
      throw new Error(`Error deleting quiz: ${(error as Error).message}`);
    }
  }
}

export const quizService = new QuizService();
