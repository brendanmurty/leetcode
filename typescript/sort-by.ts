// Problem: https://leetcode.com/problems/sort-by/description/

export {};

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  let arrSorted: JSONValue[] = arr.sort((x, y) => fn(x) - fn(y));
  return arrSorted;
};
