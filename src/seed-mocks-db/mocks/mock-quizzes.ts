export const mockQuizzes = [
  {
    id: 'quiz1',
    title: 'JS code challenge',
    description: 'A collection of code questions for EVERY interview',
    logoUrl: '/quizzes/js-quiz-1.png',
    totalQuestions: 2,
    questions: [
      {
        id: 'q1',
        questionText: 'What is the output of `1 + 1`?',
        codeSnippet: 'console.log(1 + 1);',
        options: [
          { id: 'opt1', text: '1' },
          { id: 'opt2', text: '2', isCorrect: true },
          { id: 'opt3', text: '11' },
        ],
        explanation: 'The `+` operator adds numbers.',
      },
      {
        id: 'q2',
        questionText: 'Which of the following is a JavaScript data type?',
        codeSnippet: '',
        options: [
          { id: 'opt1', text: 'String', isCorrect: true },
          { id: 'opt2', text: 'Integer' },
          { id: 'opt3', text: 'Character' },
        ],
        explanation: 'JavaScript data types include String, Number, Boolean, Object, and more.',
      },
    ],
    isPaid: false,
  },
  {
    id: 'quiz2',
    title: 'Advanced Node.js',
    description: 'Advanced topics in Node.js.',
    logoUrl: '/quizzes/js-quiz-2.jpeg',
    totalQuestions: 1,
    questions: [
      {
        id: 'q1',
        questionText: 'What does `process.nextTick()` do?',
        codeSnippet: '',
        options: [
          { id: 'opt1', text: 'Executes code at the next event loop iteration.', isCorrect: true },
          { id: 'opt2', text: 'Blocks the event loop.' },
          { id: 'opt3', text: 'Executes code immediately.' },
        ],
        explanation:
          '`process.nextTick()` defers the execution of a callback function until the next event loop iteration.',
      },
    ],
    isPaid: true,
  },
];
