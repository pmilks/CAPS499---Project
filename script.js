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
`,`<div><center>
<p>  ______      __  __          _____ _      
 |  ____|    |  \\/  |   /\\   |_   _| |     
 | |__ ______| \\  / |  /  \\    | | | |     
 |  __|______| |\\/| | / /\\ \\   | | | |     
 | |____     | |  | |/ ____ \\ _| |_| |____ 
 |______|    |_|  |_/_/    \\_\\_____|______|
</p><a href="mailto:patrick.milks@gmail.com">patrick.milks@gmail.com</a></span>

<hr>

<p>   _____ _____ _______ _    _ _    _ ____  
  / ____|_   _|__   __| |  | | |  | |  _ \\ 
 | |  __  | |    | |  | |__| | |  | | |_) |
 | | |_ | | |    | |  |  __  | |  | |  _ < 
 | |__| |_| |_   | |  | |  | | |__| | |_) |
  \\_____|_____|  |_|  |_|  |_|\\____/|____/ 
</p><a href="https://github.com/pmilks">https://github.com/pmilks</a>

<hr>

<p> _      _____ _   _ _  ________ _____ _____ _   _ 
| |    |_   _| \\ | | |/ /  ____|  __ \\_   _| \\ | |
| |      | | |  \\| | ' /| |__  | |  | || | |  \\| |
| |      | | | \.   |  < |  __| | |  | || | | \. \` |
| |____ _| |_| |\\  | \. \\| |____| |__| || |_| |\\  |
|______|_____|_| \\_|_|\\_\\______|_____/_____|_| \\_|
</p><a href="https://www.linkedin.com/in/patrick-milks/">https://www.linkedin.com/in/patrick-milks/</a>
</center>
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
<p> Outside of academics, I’ve always been active in my community. I’ve done much volunteer work ranging from making earthquakes preparedness kits for local schools and coaching at the hockey rink to electronics disassembly for greener recycling and helping those who have protected my community at Honour Homes. This volunteering helped me form my own personal values of giving back to my community and helping the less fortunate. Since I was able to walk, I’ve been athletically involved, having played almost every sport under the sun. My experience with team sports has helped me develop into a good team member, as well as a leader. It also put me out into BC's backyard where I enjoy spending much of my time. I always been concerned with climate change and hope to help lessen or prevent it in my professional future.</p>
<center><img src='images\\squam.jpg' width=300px;></center>
<p> At a young age I developed an interest in computer sciences, often wondering and figuring the logic in simple machinery and computers. I began to be curious how computers could complete what seemed like incredible tasks such as rendering video games or playing movies. During my late high school years, I began messing around with robotics and self-teaching myself rudimentary computer sciences, beginning with an introduction to java. My passion only grew so I eventually swapped my field of study at university to computer sciences and I’ve since only become more and more addicted to learning more about programming and software. I now hope to one day use my computer science and problem-solving skills to their fullest in team setting, goaled with improving the lives of others.</p>
<center><img src='images\\wind.jpg' width=180px;></center>
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

<center><img src="images\\old.jpg" width="250"></center>

<p> My message to those visiting this portfolio is that I am a person of growth and continued learning. I firmly believe that my strongest skill is my ability to learn from my mistakes and improve. I am a tireless worker, ensuring all my work is done at my highest capacity. I strive constantly for self-improvement and use my past lived experiences as stepping stools to rise to greater heights. Whether it is in the projects shown in this portfolio, during my academic career or any other facet of my life, I never steered away from my shortcomings or gaps in knowledge as I have learned they are but opportunities to improve one’s self.</p></div>`],
"journal.txt":[`def class_to_traj_csv(coord_int):
    for hur in hur_2021:
        temp_df = pd.DataFrame(columns=['ID','Lat','Lon','SST','SSTd','hurMaxWind','hurMinPressure','hurRadius',
                            'Next Lat','Next Lon','Next hurMaxWind','Next hurMinPressure','Next hurRadius']) # NO SEA WIND
        current_entry = False
        next_entry = False
        first_landfall = False
        for entry in hur.entries:
            if first_landfall == False:
                coords = entry.convert_coords()
                try:
                    entry.find_temps(coord_int)
                    if (entry.max_wind < 0 or entry.min_pressure < 0 or entry.radius < 0) == True:
                        print(entry.max_wind,entry.min_pressure,entry.radius)
                        current_entry = False
                    else:
                        if current_entry == False:
                            current_entry = [f"{hur.basin}{hur.atfc}{hur.year} - {entry.date.strftime('%m%d %H')}h",coords[0],coords[1],entry.sst,entry.sst_dev,entry.max_wind,entry.min_pressure,entry.radius]
                        else:
                            next_entry = [coords[0],coords[1],entry.max_wind,entry.min_pressure,entry.radius]
                except IndexError:
                    first_landfall = True
                    if current_entry != False:
                        next_entry = [coords[0],coords[1],entry.max_wind,entry.min_pressure,entry.radius]
                except Exception:
                    current_entry = False
                    continue
                finally:
                    if next_entry != False:
                        temp_df.loc[len(temp_df)] = current_entry + next_entry
                        current_entry = [f"{hur.basin}{hur.atfc}{hur.year} - {entry.date.strftime('%m%d %H')}h",coords[0],coords[1],entry.sst,entry.sst_dev,entry.max_wind,entry.min_pressure,entry.radius]
                        next_entry = False
        temp_df.to_csv('traj_input.csv',mode='a',index=False,header=False)

# class_to_traj_csv(COORD_INT)

def train_trajectory_trans(df,base_entry:list):
    continuous_features = ['Lat','Lon','SST','SSTd','hurMaxWind','hurMinPressure','hurRadius']
    target = ['Next Lat','Next Lon','Next hurMaxWind','Next hurMinPressure','Next hurRadius']

    X_cont = df[continuous_features].values
    y = df[target].values

    scaler_X = StandardScaler()
    X_cont = scaler_X.fit_transform(X_cont) # TEST DATA MUST BE SCALED X_test_scaled = scaler_X.transform(X_test) since both pre and post scaled

    scalers_y = [StandardScaler() for _ in range(y.shape[1])]
    y = np.hstack([scaler.fit_transform(y[:, i].reshape(-1, 1)) for i, scaler in enumerate(scalers_y)])

    if os.path.exists("trajectory_tf.pth") == False:
        X_cont = torch.tensor(X_cont, dtype=torch.float)
        y = torch.tensor(y, dtype=torch.float)

        model = TabTransformer(      
            categories=[],                               # No categorical features
            num_continuous=len(continuous_features),     # Number of continuous features
            dim=32,                                      # Embedding dimension (paper suggests 32)
            dim_out=y.shape[1],                          # Output dimension equals the number of target columns
            depth=6,                                     # Depth of the transformer (paper recommends 6)
            heads=8,                                     # Number of attention heads (paper suggests 8)
            attn_dropout=0.1,                            # Attention dropout rate
            ff_dropout=0.1,                              # Feed-forward dropout rate
        )

        class HurricaneDataset(Dataset):
            def __init__(self, X_cont, y):
                self.X_cont = X_cont
                self.y = y

            def __len__(self):
                return len(self.y)

            def __getitem__(self, idx):
                return self.X_cont[idx], self.y[idx]

        X_cont_train, X_cont_val, y_train, y_val = train_test_split(
            X_cont, y, test_size=0.2, random_state=42
        )

        train_dataset = HurricaneDataset(X_cont_train, y_train)
        val_dataset = HurricaneDataset(X_cont_val, y_val)

        train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)
        val_loader = DataLoader(val_dataset, batch_size=32, shuffle=False)

        criterion = nn.MSELoss()  # Use Mean Squared Error Loss for regression
        optimizer = optim.Adam(model.parameters(), lr=1e-3)

        epochs = 20
        # val_loss_dict = {}
        for epoch in range(epochs):
            model.train()
            for X_cont_batch, y_batch in train_loader:
                optimizer.zero_grad()
                dummy_cat = torch.empty((X_cont_batch.size(0), 0), dtype=torch.long)
                outputs = model(dummy_cat, X_cont_batch)
                loss = criterion(outputs, y_batch)
                loss.backward()
                optimizer.step()

            # Validation
            model.eval()
            val_loss = 0
            with torch.no_grad():
                for X_cont_batch, y_batch in val_loader:
                    dummy_cat = torch.empty((X_cont_batch.size(0), 0), dtype=torch.long)
                    outputs = model(dummy_cat, X_cont_batch)
                    val_loss += criterion(outputs, y_batch).item()

            print(f"Epoch {epoch+1}/{epochs}, Validation Loss: {val_loss/len(val_loader):.4f}")
            # val_loss_dict[epoch] = val_loss/len(val_loader)

        # plt.figure(figsize=(10, 6))
        # plt.plot(val_loss_dict.keys(), val_loss_dict.values(), label="Validation Loss", marker='o')
        # plt.title("Trajectory Transformer Validation Loss")
        # plt.xlabel("Epochs")
        # plt.ylabel("Loss")
        # plt.legend()
        # plt.grid(True)
        # plt.show()

        torch.save(model, "trajectory_tf.pth")
        print("Model saved successfully at trajectory_transf.pth!")

    if base_entry == None:
        return

    traj_model = torch.load("trajectory_tf.pth")

    # Example predictions with the trained model
    traj_model.eval()
    with torch.no_grad():
        sample_cont = torch.tensor(scaler_X.transform([base_entry]), dtype=torch.float)  # Example continuous feature values
        dummy_cat = torch.empty((sample_cont.size(0), 0), dtype=torch.long)  # Empty categorical input
        prediction = traj_model(dummy_cat, sample_cont)
        y_pred_original = np.hstack([scaler.inverse_transform(prediction[:, i].reshape(-1, 1)) for i, scaler in enumerate(scalers_y)])
        return y_pred_original[0]
`,`<p><center><strong><h1>CODING JOURNAL</h1></strong></center>

<h2>Project Title: </h2>Forecasting Hurricane Formation and Meteorological Behaviour Using Artifical Intelligence Model

<h2>Objective:</h2>Determine whether modern machine learning architecture accurately predict hurricane formation, trajectory and intensity using historical and real-time meteorological and hurricane data?

___________________________________________________________________________________________________

<b><u>September: Foundation and Research</u>

> Sept 1-7:</b>
    o	Set up the project structure and initial repository.
    o	Researched publicly available datasets (e.g., NOAA Pathfinder, HURDAT).

<b>> Sept 8-14:</b>
    o	Record and formatting literature sources

</b>> Sept 15-21:</b>
    o	Initial exploration of transformer application

<b>> Sept 22-30:</b>
    o	Slight adaptation of my existing HURDAT download and parsing script

___________________________________________________________________________________________________

<b><u>October: Data Collection and Parsingt</u>

> Oct 1-7:</b>
    o	Acquired historical hurricane track and intensity data spanning 30 years.
    o	Pathfinder AVHRR data was selected

<b>> Oct 8-14:</b>
    o	Determine historical precedents for understanding hurricane data and coordinate range

<b>> Oct 15-31:</b>
    o	Worked completed on literature review and media release


___________________________________________________________________________________________________

<b><u>November: Model Creation and Validation</u>

> Nov 1-7:</b>
    o	Completion of functionality to acquire temperature data by date and location
    o	Functionality to augment individual hurricane data with sea data

<b>> Nov 8-14:</b>
    o	Filtering of HURDAT data into initial hurricane entries to form the basis of a hurricane birth dataset
    o	Single day condition become measurable with hurricane birth indicated within coordinate grid

<b>> Nov 15-21:</b>
    o	Transformer models for forecasting hurricane births, full trajectories and landfall or death are completed
    o	Transformers are trained on data 65% train-test data split

<b>> Nov 22-30:</b>
    o	Error analysis on each training is performed
    o	Visualizations with matplotlib for presentation are conducted using an example hurricane and date
</p>`],"portfolio":[`    // Toggle folders open/close
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
    topSection.style.height = \${newTopHeight}px;
    bottomSection.style.height = \${newBottomHeight}px;
  });

  // Mouse up event to stop resizing
  document.addEventListener("mouseup", () => {
    if (isResizing) {
      isResizing = false;
      document.body.style.userSelect = "auto"; // Re-enable text selection
    }
  });
});`,`<p><center><h2>Capstone and Professional Portfolio Website</h2></center>

    A good portfolio is essential as it serves as a tangible showcase of your skills, experience, and achievements, providing concrete evidence of what you can do beyond just listing qualifications. It creates a strong first impression, demonstrating professionalism, attention to detail, and a commitment to quality. My portfolio reflects my unique style and personal brand and will help me stand out from others in my field. In an effort to demonstrate my unique approach to tasks, I have chosen to build a website from the ground up using a basic frontend framework. This website reflects my unique style, mixed with my capabilities. This portfolio looks to imitate the VSCode IDE and present my various projects through a dynamic file explorer.

<center>>> You are already visiting the project! Click the image for the associated repository! <<


<a href="https://github.com/pmilks/CAPS499---Project"><img src="images\\editor.png" width="300"></a></center>


 Reflection:

 Building my website was an incredibly rewarding journey that pushed me to grow in ways I didn’t expect. At the start, I had a clear vision of what I wanted, but as I worked through the design and functionality, I realized how much more there was to consider—like ensuring everything was intuitive and responsive. Debugging tricky issues taught me patience, and seeing my ideas come to life reinforced why I love creating. There were moments of frustration, but each challenge I overcame made the final product even more meaningful. 
 
 This experience not only improved my technical skills but also reminded me how fulfilling it is to create something from scratch that others can use and enjoy.

  

Completed: Winter 2024 - SCI400 - Capilano University</p>

`],"thanks":[`thank_you_code = {
  "Python": 'print("Thank you")',
  "JavaScript": 'console.log("Thank you");',
  "Java": 'System.out.println("Thank you");',
  "C++": 'std::cout << "Thank you" << std::endl;',
  "C#": 'Console.WriteLine("Thank you");',
  "Ruby": 'puts "Thank you"',
  "PHP": 'echo "Thank you";',
  "Swift": 'print("Thank you")',
  "Go": 'fmt.Println("Thank you")',
  "Kotlin": 'println("Thank you")',
  "R": 'print("Thank you")',
  "Bash": 'echo "Thank you"',
}

for language, code in thank_you_code.items():
  print(f"{language}: {code}")`,`<p><center><h1>Thanks to:</h1></center>

- Professors at Capilano Univeristy who aided in my academic journey

- My friends who supported me

- My family for upholding through challenging times

- And you for visiting!</p>`],"diet":[`class Person:
    def __init__(self, gender, age, height, weight, act_lvl):
        self.gender = gender
        self.age = age #y (18+)
        self.height = height #cm
        self.weight = weight #kg
        self.act_lvl = act_lvl #1-4

    def daily_macros(self):
        #EER https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/dietary-reference-intakes/tables/reference-values-macronutrients.html
        match self.gender:
            case 'M':
                match self.act_lvl:
                    case 1:
                        EER = 753.07 - (10.83*self.age) + (6.5*self.height) + (14.1*self.weight)
                    case 2:
                        EER = 581.47 - (10.83*self.age) + (8.3*self.height) + (14.94*self.weight)
                    case 3:
                        EER = 1004.82 - (10.83*self.age) + (6.52*self.height) + (15.91*self.weight)
                    case 4:
                        EER = -581.47 - (10.83*self.age) + (15.61*self.height) + (19.11*self.weight)
            case 'F':
                match self.act_lvl:
                    case 1:
                        EER = 584.9 - (7.01*self.age) + (5.72*self.height) + (11.7*self.weight)
                    case 2:
                        EER = 575.77 - (7.01*self.age) + (6.6*self.height) + (12.14*self.weight)
                    case 3:
                        EER = 710.25 - (7.01*self.age) + (6.54*self.height) + (12.34*self.weight)
                    case 4:
                        EER = 511.83 - (7.01*self.age) + (9.07*self.height) + (12.56*self.weight)
        #Protein (g) https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/dietary-reference-intakes/tables/reference-values-macronutrients.html
        protein = 0.8*self.weight
        #Fat (g) [35% of cal] [9 cal per g] https://newsnetwork.mayoclinic.org/discussion/fat-grams-how-to-track-fat-in-your-diet/#:~:text=So%20if%20you're%20following,no%20more%20than%2022%20grams.
        fat = (EER*0.35)/9
        #Carbohydrates (g) [55% of cal] [4 cal per g] https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/carbohydrates/art-20045705#:~:text=How%20many%20carbohydrates%20do%20you,grams%20of%20carbs%20a%20day.
        carbs = (EER*0.55)/4
        #Fiber (g)
        match self.gender:
            case 'M':
                if self.age<51:
                    fiber = 38
                else:
                    fiber = 30
            case 'F':
                if self.age<51:
                    fiber = 25
                else:
                    fiber = 21
        #Sugar (g) [10% of cal] [4 cal per g] https://www.hsph.harvard.edu/nutritionsource/carbohydrates/added-sugar-in-the-diet/#:~:text=The%20AHA%20suggests%20a%20stricter,of%20sugar)%20for%20most%20men.
        sugar = (EER*0.1)/4
        #Calcium (mg) https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/dietary-reference-intakes/tables/reference-values-elements.html#tbl3
        match self.gender:
            case 'M':
                if self.age<71:
                    calcium = 1000
                else:
                    calcium = 1200
            case 'F':
                if self.age<51:
                    calcium = 1000
                else:
                    calcium = 1200
        #Iron (mg) https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/dietary-reference-intakes/tables/reference-values-elements.html#tbl3
        match self.gender:
            case 'M':
                iron = 8
            case 'F':
                if self.age<51:
                    iron = 18
                else:
                    iron = 8
        #Sodium (mg) https://www.cdc.gov/salt/index.htm#:~:text=Most%20People%20Eat%20Too%20Much,of%20a%20healthy%20eating%20pattern.
        sodium = 2300
        #Vit A (ug)
        match self.gender:
            case 'M':
                vit_a = 900
            case 'F':
                vit_a = 700
        #Vit C (mg)
        match self.gender:
            case 'M':
                vit_c = 90
            case 'F':
                vit_c = 75
        #Cholesterol (mg)
        cholesterol = 300
        return {'EER':[EER*0.9,EER*1.1], #Objective
                'Protein': protein,
                'Fiber': fiber,
                'Calcium': calcium,
                'Iron': iron,
                'Vit-A': vit_a,
                'Vit-C': vit_c, #Maximize
                'Fat': fat,
                'Carbohydrates': carbs,
                'Sugar': sugar,
                'Sodium': sodium,
                'Cholesterol':cholesterol} #Minimize

class Food:
    def __init__(self, cost, brand_name, max_serv, calories, protein, fat, carbohydrates, fiber, sugar, calcium, iron, sodium, vit_a, vit_c, cholesterol):
        self.cost = cost
        self.brand_name = brand_name
        self.max_serv = max_serv
        self.calories = calories
        self.protein = protein
        self.fat = fat
        self.carbohydrates = carbohydrates
        self.fiber = fiber
        self.sugar = sugar
        self.calcium = calcium
        self.iron = iron
        self.sodium = sodium
        self.vit_a = vit_a
        self.vit_c = vit_c
        self.cholesterol = cholesterol

    @classmethod
    def from_api(cls, brand_name, id, cost, max_serv):
        api_key = '7UQMLps5fqTaZBDiUf1nIGSkqLqOzdpVmbsEqOza'
        api_url = f'https://api.nal.usda.gov/fdc/v1/food/{id}?api_key={api_key}'
        response = requests.get(api_url)
        usda_json = response.json()
        nutrient_id = {1003:'Protein',1004:'Fat',1005:'Carbohydrates',1079:'Fiber',2000:'Sugar',1087:'Calcium',1089:'Iron',1093:'Sodium',1162:'Vit-C',1104:'Vit-A',1253:'Cholesterol'}
        calories = usda_json['labelNutrients']['calories']['value']
        base_nuts = {'Calories':0,'Protein':0,'Fat':0,'Carbohydrates':0,'Fiber':0,'Sugar':0,'Calcium':0,'Iron':0,'Sodium':0,'Vit-A':0,'Vit-C':0,'Cholesterol':0}
        new_nuts = {nutrient_id[i['nutrient']['id']]:i['amount'] for i in usda_json['foodNutrients'] if i['nutrient']['id'] in nutrient_id.keys()}
        base_nuts.update(new_nuts)
        return cls(cost=cost, max_serv=max_serv, calories=calories, brand_name=brand_name,
                   protein=base_nuts['Protein'],
                   fat=base_nuts['Fat'],
                   carbohydrates=base_nuts['Carbohydrates'],
                   fiber=base_nuts['Fiber'],
                   sugar=base_nuts['Sugar'],
                   calcium=base_nuts['Calcium'],
                   iron=base_nuts['Iron'],
                   sodium=base_nuts['Sodium'],
                   vit_a=base_nuts['Vit-A'],
                   vit_c=base_nuts['Vit-C'],
                   cholesterol=base_nuts['Cholesterol'])`,`<div><center><h2><u>Diet Optimization using Linear Regression</u></h2></center>
<p> This project is linear regression program for diet formulation for common foods and their macronutrient profiles (protein, carbs, and fats) to calculate ideal quantities of each food that meet a user's specific nutritional needs. By modeling the relationship between macronutrient intake and desired outcomes (e.g., calorie targets or nutrient balance), the program suggests a personalized combination of foods. This approach ensures that dietary goals are met efficiently while providing flexibility in food choices. The program obtains foods’ nutrient profile by accessing a governmental food safety API with built-in flexibility for user prompting.</p>
<center><p>&gt;&gt; Click the graph to explore the diet optimization model! &lt;&lt;</p></center>
<center><a href='https://colab.research.google.com/drive/1fLdT6AxV2_4j5Ospij0AVDYUVyGhPPKV'><img src='images\\food.jpg' width=400'></a></center>
<br><p>Reflection:<br>
  Building this linear regression program for diet formulation enhanced my skills in both rudimentary machine learning and working with APIs. Integrating food databases taught me how to handle real-time data, manage authentication, and process responses. This experience reinforced the importance of data cleaning and demonstrated how APIs can provide dynamic, personalized results in applications.</p></div>`]
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