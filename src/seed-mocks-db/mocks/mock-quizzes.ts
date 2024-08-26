export const mockQuizzes = [
  {
    title: 'JS code challenge',
    description: 'A collection of code questions for EVERY interview',
    logoUrl: '/quizzes/js-quiz-1.png',
    questions: [
      {
        text: 'What is the output of `1 + 1`?',
        codeSnippet: 'console.log(1 + 1);',
        options: [
          { text: '1', isCorrect: false },
          { text: '2', isCorrect: true },
          { text: '11', isCorrect: false },
        ],
        explanation: 'The `+` operator adds numbers.',
      },
      {
        text: 'Which of the following is a JavaScript data type?',
        codeSnippet: '',
        options: [
          { text: 'String', isCorrect: true },
          { text: 'Integer', isCorrect: false },
          { text: 'Character', isCorrect: false },
        ],
        explanation: 'JavaScript data types include String, Number, Boolean, Object, and more.',
      },
    ],
    isPaid: false,
  },
  {
    title: 'Advanced Node.js',
    description: 'Advanced topics in Node.js.',
    logoUrl: '/quizzes/js-quiz-2.jpeg',
    questions: [
      {
        text: 'What does `process.nextTick()` do?',
        codeSnippet: '',
        options: [
          { text: 'Executes code at the next event loop iteration.', isCorrect: true },
          { text: 'Blocks the event loop.', isCorrect: false },
          { text: 'Executes code immediately.', isCorrect: false },
        ],
        explanation:
          '`process.nextTick()` defers the execution of a callback function until the next event loop iteration.',
      },
    ],
    isPaid: true,
  },
];
