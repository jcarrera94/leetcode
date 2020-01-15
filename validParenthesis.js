/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false 
 */

const isValid = function(s) {
  const map = {
      ")": "(",
      "}": "{",
      "]": "["
  };
  let stack = [];
  for (item of s) {
      if (map.hasOwnProperty(item)) {
          topElement = stack.pop();
          if (map[item] !== topElement) {
              return false
          }
      } else {
          stack.push(item);
      }
  }
  if (stack.length === 0) return true;
  return false;
};

const test = "()()()";
const test2 = "[[()()]{()}]";
const test3 = "[[()()]{()))}]";

console.log(isValid(test));
console.log(isValid(test2));
console.log(isValid(test3));