export const quizzes = [
  {
    title: 'JS code challenge',
    description: 'A collection of code questions for EVERY interview',
    logoUrl: '/quizzes/js-quiz-1.png',
    isPaid: false,
    questions: [
      {
        text: 'What is the output of the following code?',
        codeSnippet: `
\`\`\`js   
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Alexey';
  let age = 22;
}
sayHi();
\`\`\`
`,
        options: [
          { text: 'Alexey and undefined', isCorrect: false },
          { text: 'Alexey and ReferenceError', isCorrect: false },
          { text: 'ReferenceError and 22', isCorrect: false },
          { text: 'undefined and ReferenceError', isCorrect: true },
        ],
        explanation: `
Within the function, we first declare the \`name\` variable with the \`var\` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of \`undefined\`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the \`name\` variable, so it still holds the value of \`undefined\`.


Variables with the \`let\` keyword (and \`const\`) are hoisted, but unlike \`var\`, don't get *initialized*. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a \`ReferenceError\`.
    `,
      },
      {
        text: "What's the output?",
        codeSnippet: `
\`\`\`js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
\`\`\`    
`,
        options: [
          { text: 'orange', isCorrect: false },
          { text: 'purple', isCorrect: false },
          { text: 'green', isCorrect: false },
          { text: 'TypeError', isCorrect: true },
        ],
        explanation: `The \`colorChange\` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since \`freddie\` is an instance of class Chameleon, the function cannot be called upon it. A \`TypeError\` is thrown.
    `,
      },
      {
        text: 'What`s the output?',
        codeSnippet: `
  \`\`\`js
  function sum(a, b) {
    return a + b;
  }

  sum(1, '2');
  \`\`\`
      `,
        options: [
          { text: 'NaN', isCorrect: false },
          { text: 'TypeError', isCorrect: false },
          { text: '"12"', isCorrect: false },
          { text: '3', isCorrect: true },
        ],
        explanation: `
  JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

  In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".
      `,
      },
    ],
  },
];
