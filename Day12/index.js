function greet(name, callback) {
  console.log("Preparing greeting...");
  setTimeout(() => {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
  }, 2000);
}

function sayGoodbye(message) {
  console.log(message);
  console.log("Goodbye!");
}

console.log("Start");
greet("Susan", sayGoodbye);
console.log("End");
