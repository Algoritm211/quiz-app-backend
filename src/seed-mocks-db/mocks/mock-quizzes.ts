export const mockQuizzes = [
  {
    id: 'quiz1',
    title: 'JavaScript Basics',
    description: 'Test your knowledge of JavaScript basics.',
    logoUrl: 'https://example.com/js-basics.png',
    totalQuestions: 2, // Add totalQuestions field
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
    logoUrl: 'https://example.com/nodejs.png',
    totalQuestions: 1, // Add totalQuestions field
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
