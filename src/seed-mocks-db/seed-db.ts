import mongoose from 'mongoose';

import { QuizModel } from '../models';
import { mockQuizzes } from './mocks/mock-quizzes';

// Adjust the path as needed

export async function seedDatabase() {
  const mongoUri = process.env.DB_URL as string;

  try {
    await mongoose.connect(mongoUri, {
      ssl: false,
    });
    await mongoose.connection.dropDatabase();
    console.log('Connected to MongoDB');

    // Clear the existing quizzes
    await QuizModel.deleteMany({});
    console.log('Cleared existing quizzes');

    // Insert the mock quizzes
    await QuizModel.insertMany(mockQuizzes);
    console.log('Inserted mock quizzes');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}
