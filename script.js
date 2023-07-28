// Array of five promises, each resolving with a random time between 1 and 5 seconds
const promises = Array.from({ length: 5 }, () => {
  const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => resolve(randomTime), randomTime);
  });
});

// Function to wait for the first promise to resolve using Promise.any
function waitForFirstPromise() {
  Promise.any(promises)
    .then((result) => {
      const outputElement = document.getElementById('output');
      outputElement.textContent = `The first promise resolved with a value of: ${result} milliseconds.`;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the function when the page finishes loading
window.onload = waitForFirstPromise;
