document.addEventListener("DOMContentLoaded", () => {
    const folders = document.querySelectorAll(".folder");
    const fileLinks = document.querySelectorAll(".explorer-files a");
    const editor = document.querySelector(".editor pre code");
    const codeViewer = document.querySelector(".code-viewer");

    const fileContents = {
      "contact": [`<!DOCTYPE html>
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
`,`<div>
<p>  _____      __  __    _    ___ _     
 | ____|    |  \/  |  / \  |_ _| |    
 |  _| _____| |\/| | / _ \  | || |    
 | |__|_____| |  | |/ ___ \ | || |___ 
 |_____|    |_|  |_/_/   \_\___|_____|</p><a href="mailto:patrick.milks@gmail.com">patrick.milks@gmail.com</a></span></p>
</div>
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
`],'hurpredmodel':[`#HURDAT Parsing -> Hurricane Objects w/ list of Entry objects
from dataclasses import dataclass
from datetime import datetime
import wget
import os
import pandas as pd
import seaborn as sns
import numpy as np

@dataclass
class Hurricane():
    name: str
    entries: list
    year: str
    basin: str
    atfc: int

    def __str__(self):
        return f'Storm {self.name} in {self.year} with {len(self.entries)} entries.'

    @classmethod
    def from_splt_hur(cls,splt_hur):
        splt_hur_head=[i.strip(' ') for i in splt_hur[0].split(',')]
        new = Hurricane(name=splt_hur_head[1],
                        year=int(splt_hur_head[0][-4:]),
                        basin=splt_hur_head[0][:2],
                        atfc=splt_hur_head[0][-6:-4],
                        entries=[])
        new.entries=Entry.entries_factory(splt_hur[1:])
        return new

    def total_max_wind(self):
        max=0
        for entry in self.entries:
            if entry.max_wind > max:
                max = entry.max_wind
        return max
    
    def max_min_pressure(self):
        max=0
        for entry in self.entries:
            if entry.min_pressure > max:
                max = entry.min_pressure
        return max

    def max_radius(self):
        max=0
        for entry in self.entries:
            if entry.radius > max:
                max = entry.radius
        return max
    
    def make_lf(self):
        lfs = []
        for entry in self.entries:
            if entry.identifier == 'L':
                lfs.append(entry)
        if lfs:
            return lfs
        else:
            return False
    
    def lifespan(self):
        return (self.entries[0].date,self.entries[-1].date)

@dataclass
class Entry():
    date: datetime
    identifier: str
    status: str
    coordinates: tuple
    max_wind: int
    min_pressure: int
    radius: int

    def __str__(self):
        return f'{self.date} at {self.coordinates}\nID: {self.identifier}, Status: {self.status}\nMax Wind: {self.max_wind}, Min Pressure: {self.min_pressure}, Radius: {self.radius}'

    @classmethod
    def Factory(cls, entry):
        return Entry(date=datetime.strptime(f"{entry[0]}{entry[1]}",'%Y%m%d%H%M'),
                    identifier=entry[2],
                    status=entry[3],
                    coordinates=(entry[4], entry[5]),
                    max_wind=int(entry[6]),
                    min_pressure=int(entry[7]),
                    radius=int(entry[20]))

    @classmethod
    def entries_factory(cls,raw_entries):
        entries=[]
        for entry in raw_entries:
            entry_splt=[i.strip(' ') for i in entry.split(',')]
            entries.append(Entry.Factory(entry_splt))
        return entries

if os.path.exists("hurdat2-1851-2023-051124.txt") == False:
    wget.download("https://www.nhc.noaa.gov/data/hurdat/hurdat2-1851-2023-051124.txt")

if os.path.exists("hurdat2-1981-2023.txt") == False:
    with open("hurdat2-1851-2023-051124.txt", "r") as hurdat_1851:
        with open("hurdat2-1981-2023.txt", "w") as hurdat_1981:
            found_1981 = False
            for line in hurdat_1851:
                if line[0:8] == 'AL121981':
                    found_1981 = True
                if found_1981:
                    hurdat_1981.write(line)`,`<div><center><h2><u>Forecasting Hurricane Formation and Meteorological Behavior using Artificial Intelligence Models</u></h2></center><p>  Hurricanes represent one of the most destructive natural disasters, and accurate prediction is critical for minimizing their impact. In the past, traditional statistical and physical models were used to forecast and track hurricane behaviour. However, advances in artificial intelligence have led to the development of more sophisticated models. This project seeks the establish the efficacy of transformers, a neural network architecture, in forecasting hurricane behaviour such as their births, trajectories and intensification.</p>
<center>&gt;&gt; Click on the hurricane to see the model! &lt;&lt;</center>
                    <center><a href="#"><img src='images\\hurricane.jpg' width='300'></a></center>
                    <p> Reflection:<br>
  This was my most ambitious and challenging project I had ever attempted. It required I used all the skills I had learned previously as well as gaining new knowledge on modern machine learning, mainly artificial intelligence and neural networks. I learned how to engineer different neural networks architectures and became aware of their intricate differences. In this project, I was able to manipulate, filter and tabularize large datasets using powerful scripts. While working on this task, I familiarized myself with version control systems.

  I was proud that I was able to make a connection with real-world events and cutting-edge technology to try and aid in a field that is near to me. </p>
  <br><br><p><right>Completed: Winter 2024 - SCI400 - Capilano University</right></p>
</div>`],"hurvisual":[`df_hur_cat = pd.DataFrame(hur_cat,columns=['ID','Lat','Long','Landfall','Cat. 3','Cat. 4','Cat. 5'])
# 8 & 20 Lat
#True Lat/Long
df_hur_cat['Lat'] = df_hur_cat['Lat'].apply(lambda x:float(x[:-1]))
df_hur_cat['Long'] = df_hur_cat['Long'].apply(lambda x:float(x[:-1]))
x=np.asarray(df_hur_cat[['Lat','Long']])
x=preprocessing.StandardScaler().fit(x).transform(x)
y=np.asarray(df_hur_cat['Landfall'])

x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=0.2,random_state=42)

print ('Train set:', x_train.shape,  y_train.shape)
print ('Test set:', x_test.shape,  y_test.shape)

LR = LogisticRegression(C=0.01,solver='liblinear').fit(x_train,y_train)
yhat = LR.predict(x_test)
yhat_prob = LR.predict_proba(x_test)
print(metrics.accuracy_score(y_test,yhat))
cm=confusion_matrix(y_test,yhat)
print(cm)


df_hur_cat['Lat'] = df_hur_cat['Lat'].apply(lambda x:abs(float(x[:-1])-14))
df_hur_cat['Long'] = df_hur_cat['Long'].apply(lambda x:abs(float(x[:-1])-55.7))
x=np.asarray(df_hur_cat[['Lat','Long']])
x=preprocessing.StandardScaler().fit(x).transform(x)
y=np.asarray(df_hur_cat['Landfall'])

x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=0.2,random_state=42)

print ('Train set:', x_train.shape,  y_train.shape)
print ('Test set:', x_test.shape,  y_test.shape)

LR = LogisticRegression(C=0.01,solver='liblinear').fit(x_train,y_train)
yhat = LR.predict(x_test)
yhat_prob = LR.predict_proba(x_test)
print(metrics.accuracy_score(y_test,yhat))
cm=confusion_matrix(y_test,yhat)
print(cm)`,`<div><center><h2><u>Historical Atlantic Hurricanes Visualizations</u></h2></center>
<p> This project was the culmination of a semester long challenge to statistically analyze real-world datasets in order to reveal patterns and relationships. This was my first exploration in handling and parsing through a large dataset, the HURDAT Hurricane database. The final step in the project put many different statistical measurement skills to use and revealed intriguing correlations between hurricane characteristics, meteorological conditions and government disaster budgeting. In this project, I practiced my abilities with various python libraries like pandas, matplotlib, seaborn and numpy and how all can be used in collusion to create powerful mathematical visualizations. I understood how different software components interacting with each other can achieve larger goals.</p>
<center><p>&gt;&gt; Click the graph to explore other hurricane related visualizations! &lt;&lt;</p></center>
<center><a href='https://colab.research.google.com/drive/1j3ZZ2Gcb0p2KWH7xHmDSL9MIHMx1xlnC#scrollTo=ZlhLPqIHMGyM'><img src='images\\visualization.png' width=300'></a></center>
<br><p>Reflection:<br>
  This project was among my first large self-guided programming projects and forced me to practice organizational and time management skills just as much as any coding ability. I also learned how to properly analyze data as well as read documentation.</p></div>`],'intro':[`<body>
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
                <li class="folder">📁 Hurricane Prediction Model
                  <ul>
                    <li><a href="#" data-file="index.html">📄 journal.txt</a></li>
                    <li><a href="#" data-file="hurpredmodel">⚙️ model.py</a></li>
                  </ul>
                </li>
                <li><a href="#" data-file="hurvisual">⚙️ hurrianceVisualization.py</a></li>
                <li><a href="#" data-file="script.js">⚙️ forestFireSpread.py</a></li>
                <li><a href="#" data-file="script.js">🛜 portfolioWebsite.html</a></li>
                </ul>
              </li>
              <li class="folder">📁 About Me
                <ul>
                <li><a href="#" data-file="intro"></a>🧑 Introduction</li>
                <li>🧑 Personal Statement</li>
                </ul>
              <li>📄 Contact</li>
              <li>📄 Thanks</li>
            </ul>
          </div> 
        </div>
        <div class="code-viewer">
          <pre>
            <code> ____   _  _____ ____  ___ ____ _  __
|  _ \ / \|_   _|  _ \|_ _/ ___| |/ /
| |_&rpar; / _ \ | | | |_&rpar; || | |   | ' / 
|  __/ ___ \| | |  _ &lt; | | |___| . \ 
|_| /_/   \_\_| |_| \_\___\____|_|\_\
  __  __ ___ _     _  ______   
 |  \/  |_ _| |   | |/ / ___| 
 | |\/| || || |   | ' /\___ \ 
 | |  | || || |___| . \ ___&rpar; |
|_|  |_|___|_____|_|\_\____/

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ____   ___  ____ _____ _____ ___  _     ___ ___  
 |  _ \ / _ \|  _ \_   _|  ___/ _ \| |   |_ _/ _ \ 
 | |_&rpar; | | | | |_&rpar; || | | |_ | | | | |    | | | | |
 |  __/| |_| |  _ &lt; | | |  _|| |_| | |___ | | |_| |
|_|    \___/|_| \_\|_| |_|   \___/|_____|___\___/

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Welcome to my portfolio website, completed for CAPS499 at Capilano University!
☻  Please navigate through the explorer  ☻ 
</code>
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
</html>`,`<div><p><center><b><u><h1>My name is Patrick Milks.</u></b></h1></center></p>
<p> I am a graduate of Capilano University as a holder of the Bachelor of Science with concentration in computational science. Now I am either seeking work as a junior software developer and programmer or a second degree in a Bachelor of Computer Sciences. My professional journey up until this point has been a culmination of my growth as a coder and of my character, and my lived experiences have helped mold my core values.</p>
<center><img src='images\\young.jpg' width=300px;></center>
<p> I was born in Penticton, British Columbia in Canada but I spent most of my youth in Baton Rouge, Louisiana in the United States. I have lived in what may feel like polar opposite between big city and small town living but each unique environment and culture has given me a broader outlook on life and how others live. Having lived through many hurricanes, especially hurricane Katrina, and seeing how people can suffer and depend on the graces of their community and others, it became instilled in me to always try and help those around me. During easy and tough times, my family was always a source of stability and my parents passed down their core values of hard work, respect of others and an open mind to me.</p>
<p> Outside of academics, I’ve always been active in my community. I’ve done much volunteer work ranging from making earthquakes preparedness kits for local schools and coaching at the hockey rink to electronics disassembly for greener recycling and helping those who have protected my community at Honour Homes. This volunteering helped me form my own personal values of giving back to my community and helping the less fortunate. Since I was able to walk, I’ve been athletically involved, having played almost every sport under the sun. My experience with team sports has helped me develop into a good team member, as well as a leader.</p>
<p> At a young age I developed an interest in computer sciences, often wondering and figuring the logic in simple machinery and computers. I began to be curious how computers could complete what seemed like incredible tasks such as rendering video games or playing movies. During my late high school years, I began self-teaching myself rudimentary computer sciences, beginning with an introduction to java. My passion only grew so I eventually swapped my field of study at university to computer sciences and I’ve since only become more and more addicted to learning more about programming and software. I now hope to one day use my computer science and problem-solving skills to their fullest in team setting, goaled with improving the lives of others.</p>
<center><img src='images\\old.jpg' width=180px;></center>
</div>`],"personal":[`/* styles.css */
* {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

*::-webkit-scrollbar {
    display: none;
}


body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #d4d4d4;
    background-color: #1e1e1e;
    height: 100%;
    overflow: auto;
}

.vscode-container {
display: flex;
height: 100vh;
flex-direction: column;
}

.top-section{
display: flex;
flex: 0 1 auto;
height: 60%;
width: 100%;
}

.sidebar {
min-width: 130px;
height: 100%;
background-color: #252526;
border-right: 1px solid #3c3c3c;
display: flex;
flex-direction: column;
align-items: center;
color: #d4d4d4;
padding: 10px 0;
min-width: 130px;
overflow-x: auto;
white-space: nowrap;
}

.sidebar .logo {
margin-bottom: 20px;
font-size: 1.2em;
font-weight: bold;
}

.code-viewer{
    flex-grow: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #242424;
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: left;
    color: #ffffff;
    font-family: monospace;
    font-size: 13px;
    line-height: 1;
}

.code-viewer code {
    display: block;
    text-align: center;
}


.main-content {
flex-grow: 1;
display: flex;
flex-direction: column;
background-color: #1e1e1e;
height: 40%;
overflow: hidden;
}

.resize-handle-sidebar {
    width: 100%;
    background-color: #3c3c3c;
    cursor: ns-resize; /* Indicates the resizable handle */
    height: 5px;
    flex-shrink: 0;
}

.tab-bar {
display: flex;
background-color: #2d2d2d;
padding: 5px;
border-bottom: 1px solid #444;
}

.tab {
padding: 5px 10px;
margin-right: 5px;
background-color: #3c3c3c;
color: #d4d4d4;
border-radius: 3px;
cursor: pointer;
font-size: 0.55em;
}

.tab.active {
background-color: #007acc;
}

.editor {
flex-grow: 1;
padding: 10px;
background-color: #1e1e1e;
color: #d4d4d4;
overflow-y: auto;
text-align: left;
white-space: pre-wrap;
word-wrap: break-word;
flex-direction: column;
}

pre {
margin: 0;
word-wrap: break-word;
white-space: pre-wrap;
overflow-wrap: break-word;
}

.status-bar {
display: flex;
justify-content: space-between;
background-color: #007acc;
padding: 5px 10px;
font-size: 0.6em;
color: #ffffff;
}

/* File Explorer */
.file-explorer {
width: 100%;
background-color: #252526;
color: #d4d4d4;
display: flex;
flex-direction: column;
scrollbar-width: thin;
}

.explorer-header {
font-size: 0.9rem;
padding: 10px;
background-color: #2d2d2d;
border-bottom: 1px solid #3c3c3c;
text-align: left;
}

.explorer-files {
list-style: none;
padding: 5px 10px;
margin: 0;
font-size: 0.8em;
}

.explorer-files li {
padding: 5px 0;
cursor: pointer;
}

.explorer-files li:hover {
    background-color: #818080;
}

.explorer-files .folder ul {
list-style-type: '↪';
padding-left: 18px;
display: none;
}

.explorer-files .folder.open ul {
display: block;
}

a {
    text-decoration: none;
    color: inherit
}`,`<div><center><u><h2>Personal Message</u></h2></center>
<p>  Ideally for those visiting my portfolio, this serves as a reflection of my journey to complete my studies at Capilano University and should exhibit my growth, both personally and academically, through my projects, statements and site design choices. It should hopefully provide insight into my life’s goals and passions and how they tie into computer science and programming in a concise but thorough manner. The projects I’ve chosen to display on my portfolio can give those interested an encapsulation of my evolution as a student, a developed and as a person, showcasing not only my technical expertise but also the topics and issues that touch me. I hope that they demonstrate my interest in greater public causes and my will to help those around me while having a positive impact of the environment in an effort to be a global citizen.</p>
<p> My message to those visiting this portfolio is that I am a person of growth and continued learning. I firmly believe that my strongest skill is my ability to learn from my mistakes and improve. I am a tireless worker, ensuring all my work is done at my highest capacity. I strive constantly for self-improvement and use my past lived experiences as stepping stools to rise to greater heights. Whether it is in the projects shown in this portfolio, during my academic career or any other facet of my life, I never steered away from my shortcomings or gaps in knowledge as I have learned they are but opportunities to improve one’s self.</p></div>`]
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




  