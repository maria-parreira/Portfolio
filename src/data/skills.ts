// Icons (substitui estes caminhos se tiveres os ícones certos!)
import javaIcon from "../assets/projects/javaIcon.png";
import javascriptIcon from "../assets/projects/js.png";
import reactIcon from "../assets/projects/react.png";
import tw from "../assets/projects/tw.png";
import jk from "../assets/projects/jk.png";
import kn from "../assets/projects/kn.png";
import sboot from "../assets/projects/sboot.png";
import docker from "../assets/projects/docker.png";
import godot from "../assets/projects/godot.png";
import agileIcon from "../assets/projects/AGILE.png"
import confluenceIcon from "../assets/projects/CONFLUENCE.png"
import figmaIcon from "../assets/projects/FIGMA.png"
import githubIcon from "../assets/projects/github.png"
import mySQLIcon from "../assets/projects/MYSQL.png"
import pythonIcon from "../assets/projects/PYTHON.png"
import htmlIcon from "../assets/projects/HTML.png"
import websocketIcon from "../assets/projects/WEBSOCKET.png"
import giteaIcon from "../assets/projects/GITEA.png"
import umlIcon from "../assets/projects/UML.png"
import mongoIcon from "../assets/projects/mongodb.png"
import shellIcon from "../assets/projects/SHELL.svg"
import typescript from "../assets/projects/TS.png"
import brunoIcon from "../assets/projects/bruno.png"
import postmanIcon from "../assets/projects/postman.png"
import junit5 from "../assets/projects/junit5.png"
import mock from "../assets/projects/mock2.png"
import tcpudp from "../assets/projects/images-3.png"


export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: javaIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescript }, // Ideal: tsIcon
      { name: "Python", icon: pythonIcon },      // Ideal: pythonIcon
      { name: "GDScript", icon: godot },
      { name: "Shell", icon: shellIcon },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "React", icon: reactIcon },
      { name: "Tailwind CSS", icon: tw },
      { name: "HTML", icon: htmlIcon },              
      { name: "Spring", icon: sboot } 
    ],
  },
  {
    category: "Operating Systems & Tools",
    items: [
      { name: "Git", icon: kn },               
      { name: "Scrum", icon: agileIcon },          
      { name: "Gitea", icon: giteaIcon },           
      { name: "GitHub", icon: githubIcon },         
      { name: "Jenkins", icon: jk },
      { name: "Godot Engine 3.6", icon: godot },
      { name: "Docker", icon: docker },
      { name: "WebSocket", icon: websocketIcon },
      { name: "TCP & UDP", icon: tcpudp },
      
    ],
  },
  {
    category: "Documentation & Design",
    items: [
      { name: "UML", icon: umlIcon },
      { name: "Confluence", icon: confluenceIcon },
      { name: "Figma", icon: figmaIcon }              // Ideal: figmaIcon
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: mySQLIcon },               // Ideal: mysqlIcon
      { name: "MongoDB", icon: mongoIcon }              // Ideal: mongodbIcon
    ],
  },
  {
    category: "Testing frameworks",
    items: [
      { name: "JUnit", icon: junit5 },               // Ideal: mysqlIcon
      { name: "Postman", icon: postmanIcon },
      { name: "Bruno", icon: brunoIcon },
      { name: "Mockito", icon: mock },            // Ideal: mongodbIcon
    ],
  },
];
