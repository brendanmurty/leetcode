// Problem: https://leetcode.com/problems/counter/description/

export {};

function createCounter(n: number): () => number {
  return () => n++;
}