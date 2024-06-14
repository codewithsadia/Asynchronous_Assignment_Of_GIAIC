//=======================Assignment of Asynhonous ==========================//
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
async function fetchGreeting(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, Sadia");
    }, 2000);
  });
}
fetchGreeting().then((greeting) => {
  console.log(greeting);
});
