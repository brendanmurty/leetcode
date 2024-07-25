// Problem: https://leetcode.com/problems/calculator-with-method-chaining/description/

type CalculatorObject = {
  value: number;
}

class Calculator {
  value: number;

  constructor(value: number) {
    this.value = value;
  }
  
  add(value: number): CalculatorObject {
    this.value += value;
    return this;
  }
  
  subtract(value: number): CalculatorObject {
    this.value -= value;
    return this;
  }
  
  multiply(value: number): CalculatorObject {
    this.value *= value;
    return this;
  }
  
  divide(value: number): CalculatorObject {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    this.value /= value;
    return this;
  }
  
  power(value: number): CalculatorObject {
    this.value **= value;
    return this;
  }
  
  getResult(): number {
    return this.value;
  }
}