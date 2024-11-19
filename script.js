document.addEventListener("DOMContentLoaded", () => {
    const folders = document.querySelectorAll(".folder");
    const fileLinks = document.querySelectorAll(".explorer-files a");
    const editor = document.querySelector(".editor pre code");
    const codeViewer = document.querySelector(".code-viewer");

    const fileContents = {
      "index.html":"HERE"
    }

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
        e.preventDefault(); // Prevent default link behavior
  
        // Get file name from data attribute
        const fileName = link.getAttribute("data-file");
        
        if (fileContents[fileName]) {
          codeViewer.textContent = fileContents[fileName]
        }

        // Set editor content based on the file
        editor.textContent = `/* File: ${fileName} */\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".top-section");
  const resizeHandleSidebar = document.querySelector(".resize-handle-sidebar");
  let isResizingSidebar = false;

  // When mouse is down on the resize handle, start resizing
  resizeHandleSidebar.addEventListener("mousedown", (e) => {
      isResizingSidebar = true;
      document.body.style.userSelect = "none"; // Disable text selection while dragging
      e.preventDefault();
  });

  // Resize the sidebar as the mouse moves
  document.addEventListener("mousemove", (e) => {
      if (isResizingSidebar) {
          const containerHeight = document.querySelector(".vscode-container").offsetHeight;
          const minHeight = containerHeight * 0.25; // 25% of container height
          const maxHeight = containerHeight * 0.65; // 65% of container height
          let newHeight = e.clientY;

          // Limit the width between 25% and 65%
          if (newHeight < minHeight) newHeight = minHeight;
          if (newHeight > maxHeight) newHeight = maxHeight;

          sidebar.style.height = `${newHeight}px`; // Set sidebar height in pixels
      }
  });

  // When mouse is released, stop resizing
  document.addEventListener("mouseup", () => {
      isResizingSidebar = false;
      document.body.style.userSelect = "auto"; // Re-enable text selection
  });
});



  