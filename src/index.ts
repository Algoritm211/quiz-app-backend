import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import { quizRouter } from './routes';
import { usersRouter } from './routes';
import { seedDatabase } from './seed-mocks-db/seed-db';

dotenv.config({
  path: `.env.local`,
});

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Use the quiz routes
app.use('/api/quizzes', quizRouter);
app.use('/api/users', usersRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Node.js + Express!');
});

const start = async () => {
  try {
    const dbURL = process.env.DB_URL as string;
    console.log('DB URL', dbURL);
    await seedDatabase();
    await mongoose.connect(dbURL, { ssl: false });
    console.log('Some');
    console.info('=> Database connected');
    app.listen(PORT, () => {
      console.info(`Server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

void start();
