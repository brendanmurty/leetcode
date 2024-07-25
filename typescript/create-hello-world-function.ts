// Problem: https://leetcode.com/problems/create-hello-world-function/description/

function createHelloWorld() {
    return (...args): string => {
        return "Hello World";
    };
};