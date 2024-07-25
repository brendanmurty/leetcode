export {};

type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): Counter {
  let current: number = init;

  return {
    increment: () => {
      current++;
      return current;
    },
    decrement: () => {
      current--;
      return current;
    },
    reset: () => {
      current = init;
      return current;
    },
  }
    
};