// Import the code you provided
import generateHTML from "./path/to/your/code";

// Define a p5.js sketch
function setup() {
  // Set up your p5.js canvas or other elements

  // Example payload and frameHTML
  const payload = {
    /* your payload data */
  };
  const frameHTML = "<h1>Hello, p5.js!</h1>";

  // Generate HTML using the provided function
  const htmlMarkup = generateHTML(payload, frameHTML);

  // Use the generated HTML markup
  document.body.innerHTML = htmlMarkup;

  // Additional p5.js setup if needed
}

function draw() {
  // Your p5.js drawing code
}
