document.addEventListener("DOMContentLoaded", () => {
    const folders = document.querySelectorAll(".folder");
    const fileLinks = document.querySelectorAll(".explorer-files a");
    const editor = document.querySelector(".editor pre code");
    const codeViewer = document.querySelector(".code-viewer");

    const fileContents = {
      "index.html": [`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VSCode Themed Website</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</head>
<body>
    <div class="vscode-container">
      <!--Top Section: Sidebar + Code Viewer -->
      <div class="top-section">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="logo">VSCode</div>
        
        <!-- File Explorer -->
        <div class="file-explorer">
            <div class="explorer-header">EXPLORER</div>
            <ul class="explorer-files">
              <li class="folder">📁 Projects
                <ul>
                  <li><a href="#" data-file="index.html">📄 index.html</a></li>
                  <li><a href="#" data-file="styles.css">📄 styles.css</a></li>
                  <li><a href="#" data-file="script.js">📄 script.js</a></li>
                </ul>
              </li>
              <li>🧑 About Me</li>
              <li>🧑 Personal Statement</li>
              <li class="folder">📁 Contact</li>
            </ul>
          </div> 
        </div>
        <div class="code-viewer">
          <pre>
            <code>
 ____   _  _____ ____  ___ ____ _  __
|  _ \ / \|_   _|  _ \|_ _/ ___| |/ /
| |_&rpar; / _ \ | | | |_&rpar; || | |   | ' / 
|  __/ ___ \| | |  _ &lt; | | |___| . \ 
|_| /_/   \_\_| |_| \_\___\____|_|\_\
  __  __ ___ _     _  ______   
 |  \/  |_ _| |   | |/ / ___| 
 | |\/| || || |   | ' /\___ \ 
 | |  | || || |___| . \ ___&rpar; |
|_|  |_|___|_____|_|\_\____/

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ____   ___  ____ _____ _____ ___  _     ___ ___  
 |  _ \ / _ \|  _ \_   _|  ___/ _ \| |   |_ _/ _ \ 
 | |_&rpar; | | | | |_&rpar; || | | |_ | | | | |    | | | | |
 |  __/| |_| |  _ &lt; | | |  _|| |_| | |___ | | |_| |
|_|    \___/|_| \_\|_| |_|   \___/|_____|___\___/</code>
          </pre>
        </div> 
      </div>     

        <!-- Main Content -->
        <div class="main-content">
          <!-- Resizable Handle for Sidebar -->
          <div class="resize-handle-sidebar"></div>
          <!-- Tab Bar -->
          <div class="tab-bar">
          <span class="tab active">index.html</span>
          <span class="tab">styles.css</span>
          <span class="tab">script.js</span>
          </div>
      
          <!-- Editor Area -->
          <div class="editor">
          <pre>
        <code>&lt;!-- This is your code editor --&gt;
        &lt;div class="vscode-style"&gt;Hello World&lt;/div&gt;
            </code>
            </pre>
            </div>
        </div>
        
        <!-- Status Bar -->
        <div class="status-bar">
            <span>Line 1, Col 1</span>
            <span>UTF-8</span>
            <span>Spaces: 2</span>
            <span>JavaScript</span>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>   
`,`<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Aptos;}
@font-face
	{font-family:"Cascadia Code";
	panose-1:2 11 6 9 2 0 0 2 0 4;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
a:link, span.MsoHyperlink
	{color:#467886;
	text-decoration:underline;}
.MsoChpDefault
	{font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:107%;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:1.0in 1.0in 1.0in 1.0in;}
div.WordSection1
	{page:WordSection1;}
-->
</style>

</head>

<body lang=EN-CA link="#467886" vlink="#96607D" style='word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal style='margin-left:1.0in;text-indent:.5in;text-align:center;'><span lang=EN-US
style='font-size:12.0pt;line-height:107%;font-family:"Segoe UI Emoji",sans-serif'>&#128232;</span><span
lang=EN-US style='font-size:18.0pt;line-height:107%;font-family:"Cascadia Code"'>
:<a href="mailto:patrick.milks@gmail.com">patrick.milks@gmail.com</a></span></p>

<p class=MsoNormal style='margin-left:1.0in;text-indent:.5in;text-align:center;'><span lang=EN-US
style='font-size:12.0pt;line-height:107%;font-family:"Segoe UI Emoji",sans-serif'>&#128187;</span><span
lang=EN-US style='font-size:18.0pt;line-height:107%;font-family:"Cascadia Code"'>
:<a href="https://github.com/pmilks">https://github.com/pmilks</a></span></p>

<p class=MsoNormal style='margin-left:1.0in;text-indent:.5in;text-align:center;'><span lang=EN-US
style='font-size:12.0pt;line-height:107%;font-family:"Segoe UI Emoji",sans-serif'>&#128188;</span><span
lang=EN-US style='font-size:18.0pt;line-height:107%;font-family:"Cascadia Code"'>
:<a href="https://www.linkedin.com/in/patrick-milks/">https://www.linkedin.com/in/patrick-milks/</a></span></p>

</div>

</body>

</html>
`]
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
          editor.textContent = fileContents[fileName][0]
        }

        // Set editor content based on the file
        codeViewer.innerHTML = fileContents[fileName][1];
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const topSection = document.querySelector(".top-section");
  const bottomSection = document.querySelector(".main-content");
  const resizeHandle = document.querySelector(".resize-handle-sidebar");
  const vscodeContainer = document.querySelector(".vscode-container");

  let isResizing = false;
  let startY = 0;
  let startTopHeight = 0;

  // Mouse down event to start resizing
  resizeHandle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startY = e.clientY;
    startTopHeight = topSection.offsetHeight;

    // Disable text selection while resizing
    document.body.style.userSelect = "none";
  });

  // Mouse move event to resize
  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const deltaY = e.clientY - startY;
    const containerHeight = vscodeContainer.offsetHeight;

    // Calculate new heights
    let newTopHeight = startTopHeight + deltaY;
    let newBottomHeight = containerHeight - newTopHeight - resizeHandle.offsetHeight;

    // Enforce minimum heights
    const minHeight = 175; // Minimum height for both sections
    if (newTopHeight < minHeight) newTopHeight = minHeight;
    if (newBottomHeight < minHeight) newTopHeight = containerHeight - minHeight - resizeHandle.offsetHeight;

    // Apply new heights
    topSection.style.height = `${newTopHeight}px`;
    bottomSection.style.height = `${newBottomHeight}px`;
  });

  // Mouse up event to stop resizing
  document.addEventListener("mouseup", () => {
    if (isResizing) {
      isResizing = false;
      document.body.style.userSelect = "auto"; // Re-enable text selection
    }
  });
});




  