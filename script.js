document.addEventListener("DOMContentLoaded", () => {
    const folders = document.querySelectorAll(".folder");
    const fileLinks = document.querySelectorAll(".explorer-files a");
    const sourceCodeContent = document.getElementById("source-code-content");
  
    // File contents for each file
    const fileContents = {
      "index.html": `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Project</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
  </html>`,
      "styles.css": `
  body {
    background-color: #1e1e1e;
    color: #d4d4d4;
    font-family: 'Segoe UI', sans-serif;
  }`,
      "script.js": `
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');
  });`
    };
  
    // Toggle folders open/close
    folders.forEach((folder) => {
      folder.addEventListener("click", (e) => {
        e.stopPropagation();
        folder.classList.toggle("open");
      });
    });
  
    // Handle file link clicks
    fileLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Get file name
        const fileName = link.getAttribute("data-file");
  
        // Update source code viewer with file content
        sourceCodeContent.textContent = fileContents[fileName] || "File not found.";
      });
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const folders = document.querySelectorAll(".folder");
//     const fileLinks = document.querySelectorAll(".explorer-files a");
//     const editor = document.querySelector(".editor pre code");
  
//     // Toggle folders open/close
//     folders.forEach((folder) => {
//       folder.addEventListener("click", (e) => {
//         e.stopPropagation();
//         folder.classList.toggle("open");
//       });
//     });
  
//     // Handle file link clicks
//     fileLinks.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault(); // Prevent default link behavior
  
//         // Get file name from data attribute
//         const fileName = link.getAttribute("data-file");
  
//         // Set editor content based on the file
//         editor.textContent = `/* File: ${fileName} */\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
//       });
//     });
// });
  