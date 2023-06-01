/**
 * In TypeScript, the ReturnType<T> utility type is used to extract the return
 * type of a function type T.
 */

type CreateMathOperation = (operation: '-' | '*' | '/' | '+') => (x: number, y: number) => number;

const createMathOperation: CreateMathOperation = (operation) => {
  switch (operation) {
    case '+': {
      return (x, y) => x + y;
    }

    case '-': {
      return (x, y) => x - y;
    }

    case '*': {
      return (x, y) => x * y;
    }

    case '/': {
      return (x, y) => x / y;
    }
  }

  throw new Error('Invalid operation');
};

type MathOperationReturnType = ReturnType<CreateMathOperation>;
// type MathOperationReturnType = ReturnType<typeof createMathOperation>;

const add: MathOperationReturnType = createMathOperation('+');
const divide: MathOperationReturnType = createMathOperation('/');
