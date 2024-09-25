import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { QuizModel } from '../../models';
import { quizzes } from './quiz-array';

dotenv.config({
  path: `.env.local`,
});

const fillQuizzes = async () => {
  const mongoUri = process.env.DB_URL as string;

  try {
    await mongoose.connect(mongoUri, {
      ssl: false,
    });

    console.log('Connected to MongoDB');

    // Insert the mock quizzes
    await QuizModel.insertMany(quizzes);
    console.log('Inserted quizzes');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

void fillQuizzes();
