// Problem: https://leetcode.com/problems/is-object-empty/description/

export {};

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0;
};